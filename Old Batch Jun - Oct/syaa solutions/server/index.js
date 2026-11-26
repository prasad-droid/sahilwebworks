/**
 * SYAA SOLUTION inquiry API.
 *
 * This is a real, working backend: it validates inquiries and stores them in
 * server/data/inquiries.json. It deliberately does not claim to send email.
 * To send email notifications, add a provider (for example nodemailer or a
 * transactional email API) in `saveInquiry` and set the required credentials.
 */
import express from 'express';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { randomUUID } from 'node:crypto';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const dataDir = path.join(__dirname, 'data');
const dataFile = path.join(dataDir, 'inquiries.json');
const port = Number(process.env.PORT) || 3001;

const app = express();
app.disable('x-powered-by');
app.use(express.json({ limit: '32kb' }));

const productOptions = new Set([
  'Corrugated Boxes',
  'Honeycomb Paper',
  'Printed Gift Boxes',
  'Fresh Banana Leaves',
  'Other',
]);

const businessTypeOptions = new Set([
  'E-Commerce',
  'Bakery',
  'Industrial Manufacturer',
  'Hotel',
  'Restaurant',
  'Retail & Distribution',
  'Other',
]);

const requiredFields = [
  'fullName',
  'companyName',
  'email',
  'contactNumber',
  'businessType',
  'productInterestedIn',
  'message',
];

const optionalFields = ['requiredQuantity', 'productSpecifications', 'additionalRequirements'];

function validateInquiry(body = {}) {
  const errors = {};

  requiredFields.forEach((field) => {
    if (typeof body[field] !== 'string' || !body[field].trim()) {
      errors[field] = `${field} is required.`;
    }
  });

  if (body.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(body.email).trim())) {
    errors.email = 'A valid email address is required.';
  }

  if (body.contactNumber && !/^[0-9+()\- ]{7,20}$/.test(String(body.contactNumber).trim())) {
    errors.contactNumber = 'A valid contact number is required.';
  }

  if (body.businessType && !businessTypeOptions.has(body.businessType)) {
    errors.businessType = 'Select a valid business type.';
  }

  if (body.productInterestedIn && !productOptions.has(body.productInterestedIn)) {
    errors.productInterestedIn = 'Select a valid product.';
  }

  if (body.message && String(body.message).trim().length < 10) {
    errors.message = 'Please provide at least 10 characters.';
  }

  return errors;
}

// Serialise writes so two simultaneous inquiries cannot overwrite each other.
let writeQueue = Promise.resolve();
function saveInquiry(record) {
  writeQueue = writeQueue
    .catch(() => {})
    .then(async () => {
      let inquiries = [];
      try {
        inquiries = JSON.parse(await fs.readFile(dataFile, 'utf8'));
        if (!Array.isArray(inquiries)) inquiries = [];
      } catch (error) {
        if (error.code !== 'ENOENT') throw error;
      }

      inquiries.push(record);
      await fs.mkdir(dataDir, { recursive: true });
      await fs.writeFile(dataFile, `${JSON.stringify(inquiries, null, 2)}\n`, 'utf8');
    });
  return writeQueue;
}

// Lightweight abuse protection: 6 submissions per IP per 10 minutes.
const recentSubmissions = new Map();
const WINDOW_MS = 10 * 60 * 1000;
function isRateLimited(ip) {
  const now = Date.now();
  const times = (recentSubmissions.get(ip) || []).filter((time) => now - time < WINDOW_MS);
  recentSubmissions.set(ip, times);
  if (times.length >= 6) return true;
  times.push(now);
  return false;
}

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.post('/api/inquiries', async (req, res) => {
  if (isRateLimited(req.ip || 'unknown')) {
    return res.status(429).json({
      ok: false,
      message: 'Too many inquiries submitted recently. Please try again later or contact us directly.',
    });
  }

  const errors = validateInquiry(req.body);
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ ok: false, message: 'Please check the submitted details.', errors });
  }

  const clean = {};
  [...requiredFields, ...optionalFields].forEach((field) => {
    clean[field] = typeof req.body[field] === 'string' ? req.body[field].trim().slice(0, 2000) : '';
  });

  const record = {
    id: randomUUID(),
    receivedAt: new Date().toISOString(),
    ...clean,
  };

  try {
    await saveInquiry(record);
    return res.status(201).json({
      ok: true,
      id: record.id,
      message: 'Thank you. Your inquiry has been received and our team will review it.',
    });
  } catch (error) {
    console.error('[SYAA] Failed to store inquiry:', error);
    return res.status(500).json({
      ok: false,
      message: 'The inquiry could not be saved right now. Please call or email us instead.',
    });
  }
});

app.use('/api', (_req, res) => res.status(404).json({ ok: false, message: 'Endpoint not found.' }));

// When built, the same Node server can host the static React site.
app.use(express.static(path.join(projectRoot, 'dist')));
app.get('*', (_req, res) => {
  res.sendFile(path.join(projectRoot, 'dist', 'index.html'), (error) => {
    if (error) res.status(404).send('Build the website first with `npm run build`.');
  });
});

app.listen(port, () => {
  console.log(`[SYAA] Inquiry API running at http://localhost:${port}`);
  console.log(
    '[SYAA] Inquiries are stored in server/data/inquiries.json. Email notifications are NOT configured — add an email provider before production deployment.',
  );
});
