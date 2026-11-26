/**
 * Minimal zero-dependency Node server for Syndicate Global EXIM.
 *
 * - POST /api/inquiries  -> validates and stores a B2B inquiry
 * - GET  /*               -> serves the built site from dist/ (SPA fallback)
 *
 * The inquiry store is a local JSON file so the flow works out of the box.
 * For production, point VITE_INQUIRY_ENDPOINT at a hosted form service or
 * replace persistInquiry() with your CRM/email integration.
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, 'dist');
const PORT = Number(process.env.PORT || 3001);
const STORE = path.resolve(ROOT, process.env.INQUIRY_STORE || 'data/inquiries.json');
const MAX_BODY_BYTES = 32 * 1024;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.pdf': 'application/pdf',
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const allowed = {
  productCategory: ['Agricultural Produce', 'Technical Textiles', 'Both / Not sure yet'],
  product: [
    'G4 Green Chillies',
    'Red Onions',
    'Pink Onions',
    'White Onions',
    'Narrow Fabric Woven Tapes',
    'Other',
  ],
};

const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000);
  if (recent.length >= 6) return true;
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

function clean(value, max = 500) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function validate(payload) {
  const errors = {};
  const required = ['fullName', 'companyName', 'email', 'country', 'productCategory', 'product', 'destination'];
  for (const key of required) {
    if (!clean(payload[key])) errors[key] = 'This field is required.';
  }
  if (clean(payload.email) && !EMAIL_RE.test(clean(payload.email))) errors.email = 'Enter a valid business email address.';
  if (clean(payload.phone) && !/^[+()\d\s-]{7,25}$/.test(clean(payload.phone))) {
    errors.phone = 'Enter a valid contact number.';
  }
  if (clean(payload.productCategory) && !allowed.productCategory.includes(clean(payload.productCategory))) {
    errors.productCategory = 'Select a valid product category.';
  }
  if (clean(payload.product) && !allowed.product.includes(clean(payload.product))) {
    errors.product = 'Select a valid product.';
  }
  return errors;
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on('data', (chunk) => {
      size += chunk.length;
      if (size > MAX_BODY_BYTES) {
        reject(new Error('Payload too large'));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

function sendJson(res, status, body) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
  });
  res.end(JSON.stringify(body));
}

async function persistInquiry(record) {
  await fs.promises.mkdir(path.dirname(STORE), { recursive: true });
  let existing = [];
  try {
    const raw = await fs.promises.readFile(STORE, 'utf8');
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) existing = parsed;
  } catch (error) {
    if (error.code !== 'ENOENT' && !(error instanceof SyntaxError)) throw error;
  }
  existing.push(record);
  await fs.promises.writeFile(STORE, `${JSON.stringify(existing, null, 2)}\n`, 'utf8');
}

async function handleInquiry(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    sendJson(res, 405, { message: 'Method not allowed.' });
    return;
  }

  const ip = req.socket.remoteAddress || 'unknown';
  if (rateLimited(ip)) {
    sendJson(res, 429, { message: 'Too many inquiries. Please try again later or email us directly.' });
    return;
  }

  let payload;
  try {
    payload = JSON.parse(await readBody(req));
  } catch {
    sendJson(res, 400, { message: 'Invalid request body.' });
    return;
  }

  const errors = validate(payload || {});
  if (Object.keys(errors).length) {
    sendJson(res, 422, { message: 'Please correct the highlighted fields.', errors });
    return;
  }

  const record = {
    id: `INQ-${Date.now()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`,
    receivedAt: new Date().toISOString(),
    fullName: clean(payload.fullName, 120),
    companyName: clean(payload.companyName, 160),
    email: clean(payload.email, 160),
    phone: clean(payload.phone, 40),
    country: clean(payload.country, 100),
    productCategory: clean(payload.productCategory),
    product: clean(payload.product),
    quantity: clean(payload.quantity, 200),
    specifications: clean(payload.specifications, 2000),
    destination: clean(payload.destination, 200),
    timeline: clean(payload.timeline, 120),
    additionalRequirements: clean(payload.additionalRequirements, 2000),
    source: clean(payload.source, 60),
  };

  try {
    await persistInquiry(record);
    sendJson(res, 201, { success: true, reference: record.id });
  } catch (error) {
    console.error('Inquiry storage failed:', error);
    sendJson(res, 500, { message: 'We could not save your inquiry. Please email us directly.' });
  }
}

function serveStatic(req, res) {
  if (!fs.existsSync(DIST)) {
    sendJson(res, 404, { message: 'Built site not found. Run `npm run build` first, or use `npm run dev`.' });
    return;
  }
  const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
  const requested = path.join(DIST, path.normalize(urlPath).replace(/^([/\\])+/, ''));
  const safePath = requested.startsWith(DIST) ? requested : DIST;
  const hasExtension = Boolean(path.extname(urlPath));
  if (hasExtension && (!fs.existsSync(safePath) || !fs.statSync(safePath).isFile())) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not found');
    return;
  }
  const target = fs.existsSync(safePath) && fs.statSync(safePath).isFile() ? safePath : path.join(DIST, 'index.html');
  fs.readFile(target, (error, data) => {
    if (error) {
      sendJson(res, 500, { message: 'Unable to serve the requested file.' });
      return;
    }
    res.writeHead(200, {
      'Content-Type': MIME[path.extname(target).toLowerCase()] || 'application/octet-stream',
      'Cache-Control': target.includes(`${path.sep}assets${path.sep}`) ? 'public, max-age=31536000, immutable' : 'no-cache',
    });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  if ((req.url || '').split('?')[0] === '/api/inquiries') {
    handleInquiry(req, res).catch((error) => {
      console.error(error);
      sendJson(res, 500, { message: 'Unexpected server error.' });
    });
    return;
  }
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    sendJson(res, 405, { message: 'Method not allowed.' });
    return;
  }
  serveStatic(req, res);
});

server.listen(PORT, () => {
  console.log(`Syndicate Global EXIM server listening on http://localhost:${PORT}`);
  console.log(`Inquiry store: ${STORE}`);
});
