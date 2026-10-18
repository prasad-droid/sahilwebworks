// ==========================================================================
// SUGI ADMIN API — JSON file database
// --------------------------------------------------------------------------
// Run with:   npm run server          (API on http://localhost:4000)
// Data file:  server/db.json         (created automatically, human-editable)
// Uploads:    server/uploads/        (images uploaded from the admin panel)
//
// Public endpoints
//   GET  /api/content          site content (safe subset, no private records)
//   POST /api/enquiries        submit the website enquiry form
//
// Auth endpoints
//   POST /api/auth/login       { password } -> { token }
//   POST /api/auth/password    Bearer token, { currentPassword, newPassword }
//
// Admin endpoints (Bearer token required)
//   GET  /api/admin/data               full database
//   PUT  /api/admin/data/:collection   replace a collection (array or object)
//   POST /api/admin/upload             { name, dataUrl } -> { url }
// ==========================================================================

import express from "express";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 4000;
const DB_FILE = path.join(__dirname, "db.json");
const UPLOAD_DIR = path.join(__dirname, "uploads");
const TOKEN_TTL_MS = 12 * 60 * 60 * 1000; // 12 hours

// --------------------------------------------------------------------------
// Database helpers
// --------------------------------------------------------------------------

const SEED = {
  settings: {
    siteName: "SUGI INTERNATIONAL PVT. LTD.",
    siteSub: "",
    tagline: "Your Trusted & Reliable Agro Commodity Supply Chain Partner",
    contact: {
      phone: "+91 9405000111",
      whatsapp: "919405000111",
      email: "rohanparicharak111@gmail.com",
      address: "",
      city: "",
      country: "India",
      hours: "Monday - Saturday · 9:00 AM - 6:00 PM (IST)",
    },
    social: {
      facebook: "",
      instagram: "",
      linkedin: "",
      youtube: "",
      twitter: "",
    },
    whatsappIntro:
      "Hello SUGI INTERNATIONAL PVT. LTD., I would like to discuss an agro commodity requirement.",
    seo: {
      title: "SUGI INTERNATIONAL PVT. LTD. — Agro Commodity Exporter & Importer from India",
      description:
        "Indian agro-commodity export company connecting quality products with international B2B markets.",
    },
    features: {
      enableReviews: true,
      enableGallery: true,
      enableOffers: true,
      enableBlog: true,
      enableOrders: false,
    },
    footerNote: "An Indian agro-commodity export company focused on connecting agricultural products with international B2B markets.",
  },
  content: {
    homeIntro: {
      title: "Connecting Indian & Globally Sourced Agro Commodities",
      titleAccent: "with Global Markets",
      text: "Delivering farm-fresh fruits, vegetables, spices, dry fruits and other agricultural products from India to customers worldwide. We provide premium quality produce sourced directly from certified farms with international export standards, competitive pricing, and timely global delivery.",
    },
    about: {
      eyebrow: "About Us",
      title: "Welcome to Sugi International",
      paragraphs: [],
      image: "",
      badgeTop: "GLOBAL",
      badgeBottom: "WORLD",
    },
    quoteCta: {
      eyebrow: "Get a Quote",
      title: "Looking for a reliable fruit and vegetable exporter from India?",
      text: "Tell us what you need, in which quantity and for which destination market, and our export team will come back to you with pricing, packing options and shipping schedules.",
    },
    sections: [
      { id: "heroSlider", label: "Hero Slider", visible: true },
      { id: "homeIntro", label: "Home Intro (headline)", visible: true },
      { id: "about", label: "About Us (homepage)", visible: true },
      { id: "productsIndian", label: "Products — Indian Origin", visible: true },
      { id: "productsImported", label: "Products — Imported", visible: true },
      { id: "gallery", label: "Gallery", visible: true },
      { id: "whyChooseUs", label: "Why Choose Us", visible: true },
      { id: "exportProcess", label: "Export Process", visible: true },
      { id: "exportMap", label: "Export Map", visible: true },
      { id: "commitment", label: "Our Commitment", visible: true },
      { id: "testimonials", label: "Customer Reviews", visible: true },
      { id: "offers", label: "Offers & Promotions", visible: true },
      { id: "quoteCta", label: "Get a Quote CTA", visible: true },
      { id: "blog", label: "Blog & News", visible: true },
      { id: "certifications", label: "Certifications", visible: true },
    ],
  },
  categories: [],
  services: [],
  products: [],
  reviews: [],
  media: [],
  offers: [],
  blog: [],
  enquiries: [],
  orders: [],
};

const ARRAY_COLLECTIONS = ["products", "categories", "services", "reviews", "media", "offers", "blog", "enquiries", "orders"];

let db = null;

function loadDb() {
  if (fs.existsSync(DB_FILE)) {
    try {
      db = { ...structuredClone(SEED), ...JSON.parse(fs.readFileSync(DB_FILE, "utf8")) };
    } catch {
      db = structuredClone(SEED);
    }
  } else {
    db = structuredClone(SEED);
  }
  if (!db.auth) {
    // First run: create the admin password (change it from Settings after login).
    const salt = crypto.randomBytes(16).toString("hex");
    const password = process.env.ADMIN_PASSWORD || "sugi@2026";
    db.auth = { salt, hash: hashPassword(password, salt) };
    saveDb();
    console.log(`[sugi-admin] First run — admin password set to: ${password}`);
    console.log("[sugi-admin] Change it from Admin Panel > Settings > Security after logging in.");
  }
  saveDb();
}

function saveDb() {
  fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2), "utf8");
}

function hashPassword(password, salt) {
  return crypto.scryptSync(password, salt, 64).toString("hex");
}

function verifyPassword(password) {
  if (!db.auth) return false;
  const hash = hashPassword(password, db.auth.salt);
  return crypto.timingSafeEqual(Buffer.from(hash), Buffer.from(db.auth.hash));
}

// --------------------------------------------------------------------------
// Tokens — HMAC signed, embed a password-version so password change logs
// every existing session out.
// --------------------------------------------------------------------------

function tokenSecret() {
  return crypto.createHash("sha256").update(db.auth.hash).digest();
}

function signToken() {
  const payload = Buffer.from(JSON.stringify({ exp: Date.now() + TOKEN_TTL_MS })).toString("base64url");
  const sig = crypto.createHmac("sha256", tokenSecret()).update(payload).digest("base64url");
  return `${payload}.${sig}`;
}

function verifyToken(token) {
  if (!token || !token.includes(".")) return false;
  const [payload, sig] = token.split(".");
  const expected = crypto.createHmac("sha256", tokenSecret()).update(payload).digest("base64url");
  if (sig.length !== expected.length || !crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected)))
    return false;
  try {
    return JSON.parse(Buffer.from(payload, "base64url").toString()) .exp > Date.now();
  } catch {
    return false;
  }
}

// --------------------------------------------------------------------------
// App
// --------------------------------------------------------------------------

const app = express();
app.use(express.json({ limit: "12mb" }));

// naive per-IP rate limit for login attempts
const loginAttempts = new Map();
function rateLimited(ip) {
  const now = Date.now();
  const list = (loginAttempts.get(ip) || []).filter((t) => now - t < 60_000);
  list.push(now);
  loginAttempts.set(ip, list);
  return list.length > 8;
}

function requireAuth(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!verifyToken(token)) return res.status(401).json({ error: "Not authenticated" });
  next();
}

// --- public ---------------------------------------------------------------

app.get("/api/content", (req, res) => {
  const approvedReviews = (db.reviews || []).filter((r) => r.approved);
  const activeOffers = (db.offers || []).filter((o) => {
    if (!o.active) return false;
    const now = Date.now();
    const start = o.startsAt ? Date.parse(o.startsAt) : -Infinity;
    const end = o.endsAt ? Date.parse(o.endsAt) + 86_399_000 : Infinity;
    return now >= start && now <= end;
  });
  const publishedPosts = (db.blog || []).filter((p) => p.published);
  res.json({
    settings: db.settings,
    content: db.content,
    categories: db.categories || [],
    services: db.services || [],
    products: db.products || [],
    reviews: approvedReviews,
    media: db.media || [],
    offers: activeOffers,
    blog: publishedPosts,
  });
});

app.post("/api/enquiries", (req, res) => {
  const b = req.body || {};
  if (!b.fullName || !b.email || !b.phone)
    return res.status(400).json({ error: "Name, email and phone are required" });
  const enquiry = {
    id: crypto.randomUUID(),
    fullName: String(b.fullName).slice(0, 200),
    company: String(b.company || "").slice(0, 200),
    email: String(b.email).slice(0, 200),
    phone: String(b.phone).slice(0, 60),
    country: String(b.country || "").slice(0, 120),
    commodity: String(b.commodity || "").slice(0, 200),
    quantity: String(b.quantity || "").slice(0, 120),
    packaging: String(b.packaging || "").slice(0, 200),
    message: String(b.message || "").slice(0, 4000),
    status: "new",
    date: new Date().toISOString(),
  };
  db.enquiries.unshift(enquiry);
  saveDb();
  res.json({ ok: true });
});

// --- auth -----------------------------------------------------------------

app.post("/api/auth/login", (req, res) => {
  if (rateLimited(req.ip)) return res.status(429).json({ error: "Too many attempts. Try again in a minute." });
  const { password } = req.body || {};
  if (!verifyPassword(String(password || "")))
    return res.status(401).json({ error: "Incorrect password" });
  res.json({ token: signToken() });
});

app.post("/api/auth/password", requireAuth, (req, res) => {
  const { currentPassword, newPassword } = req.body || {};
  if (!verifyPassword(String(currentPassword || "")))
    return res.status(401).json({ error: "Current password is incorrect" });
  if (!newPassword || String(newPassword).length < 6)
    return res.status(400).json({ error: "New password must be at least 6 characters" });
  const salt = crypto.randomBytes(16).toString("hex");
  db.auth = { salt, hash: hashPassword(String(newPassword), salt) };
  saveDb();
  res.json({ ok: true });
});

// --- admin ----------------------------------------------------------------

app.get("/api/admin/data", requireAuth, (req, res) => res.json(db));

app.put("/api/admin/data/:collection", requireAuth, (req, res) => {
  const { collection } = req.params;
  const allowed = [...ARRAY_COLLECTIONS, "settings", "content"];
  if (!allowed.includes(collection))
    return res.status(404).json({ error: "Unknown collection" });
  const value = req.body;
  if (ARRAY_COLLECTIONS.includes(collection)) {
    if (!Array.isArray(value)) return res.status(400).json({ error: "Expected an array" });
    db[collection] = value;
  } else {
    if (typeof value !== "object" || value === null || Array.isArray(value))
      return res.status(400).json({ error: "Expected an object" });
    // preserve the sections list shape for content
    db[collection] = value;
  }
  saveDb();
  res.json({ ok: true });
});

app.post("/api/admin/upload", requireAuth, (req, res) => {
  const { name, dataUrl } = req.body || {};
  const match = /^data:image\/(png|jpe?g|webp|gif|svg\+xml);base64,(.+)$/.exec(String(dataUrl || ""));
  if (!match) return res.status(400).json({ error: "Only PNG, JPG, WEBP, GIF or SVG images are supported" });
  const ext = match[1] === "svg+xml" ? "svg" : match[1];
  const buffer = Buffer.from(match[2], "base64");
  if (buffer.length > 10 * 1024 * 1024)
    return res.status(400).json({ error: "Image too large (max 10 MB)" });
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
  const base = String(name || "image").replace(/[^a-z0-9-_]+/gi, "-").replace(/^-+|-+$/g, "").slice(0, 60) || "image";
  const filename = `${base}-${Date.now()}.${ext}`;
  fs.writeFileSync(path.join(UPLOAD_DIR, filename), buffer);
  res.json({ url: `/uploads/${filename}` });
});

app.use("/uploads", express.static(UPLOAD_DIR, { maxAge: "30d", immutable: true }));

// --- production: serve the built website ----------------------------------

const distDir = path.join(__dirname, "..", "dist");
if (fs.existsSync(distDir)) {
  app.use(express.static(distDir));
  app.get(/^\/(?!api|uploads).*/, (req, res) => res.sendFile(path.join(distDir, "index.html")));
}

app.use((err, req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: "Server error" });
});

loadDb();
app.listen(PORT, () => {
  console.log(`[sugi-admin] API running at http://localhost:${PORT}`);
  console.log(`[sugi-admin] Database file: ${DB_FILE}`);
});
