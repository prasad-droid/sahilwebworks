// Generates premium brand-styled SVG placeholder images for the VINEXA site.
// Run:  node scripts/generate-assets.mjs
//
// These placeholders follow the green & gold brand system and are intended to
// be replaced with authentic company photography later. They are generated as
// static files so the site never depends on a runtime generator.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const G = "#1F5D42"; // primary green
const D = "#123D2C"; // dark green
const GA = "#C9A227"; // gold
const LG = "#EAF3ED"; // light green
const CR = "#F8F6EF"; // cream
const W = "#FFFFFF";

// ---------- icon building blocks ----------

const bowl = (rimY = 286) =>
  `<path d="M305 ${rimY} Q400 ${rimY + 110} 495 ${rimY}" fill="none" stroke="${G}" stroke-width="13" stroke-linecap="round"/>` +
  `<path d="M300 ${rimY - 14} Q400 ${rimY + 12} 500 ${rimY - 14}" fill="none" stroke="${GA}" stroke-width="7" stroke-linecap="round"/>`;

const grains = (color = G, w = 27, h = 10, spread = 58, yBase = 226, rot = 16) =>
  [-spread, 0, spread]
    .map((x, i) => {
      const y = yBase + i * 5;
      const cx = 400 + x;
      return `<ellipse cx="${cx}" cy="${y}" rx="${w}" ry="${h}" fill="${color}" transform="rotate(${(i - 1) * rot} ${cx} ${y})"/>`;
    })
    .join("");

const grainRow = (color = G, count = 7, y = 260, w = 24, h = 9) => {
  const start = 400 - ((count - 1) * 34) / 2;
  return Array.from({ length: count }, (_, i) => {
    const cx = start + i * 34;
    return `<ellipse cx="${cx}" cy="${y + (i % 2) * 6}" rx="${w}" ry="${h}" fill="${color}" transform="rotate(${(i % 3) * 14 - 14} ${cx} ${y})"/>`;
  }).join("");
};

const circles = (color, r, count, ringR, cx = 400, cy = 250) =>
  Array.from({ length: count }, (_, i) => {
    const a = (i / count) * Math.PI * 2;
    const x = cx + Math.cos(a) * ringR;
    const y = cy + Math.sin(a) * ringR;
    return `<circle cx="${x}" cy="${y}" r="${r}" fill="${color}"/>`;
  }).join("");

const gear = (cx = 400, cy = 250, r = 58, color = G) => {
  const teeth = Array.from({ length: 8 }, (_, i) => {
    const a = (i * 45 * Math.PI) / 180;
    const x1 = cx + Math.cos(a) * (r + 14);
    const y1 = cy + Math.sin(a) * (r + 14);
    const x2 = cx + Math.cos(a) * (r + 30);
    const y2 = cy + Math.sin(a) * (r + 30);
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="16" stroke-linecap="round"/>`;
  }).join("");
  return (
    teeth +
    `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-width="16"/>` +
    `<circle cx="${cx}" cy="${cy}" r="${r - 16}" fill="none" stroke="${GA}" stroke-width="3" stroke-dasharray="8 8"/>` +
    `<circle cx="${cx}" cy="${cy}" r="10" fill="${GA}"/>`
  );
};

const sack = (w = 120, h = 170, cx = 400, topY = 170) => {
  const x = cx - w / 2;
  return (
    `<path d="M${x} ${topY} h${w} l-12 ${h} a12 12 0 0 1 -12 12 h-${w - 24} a12 12 0 0 1 -12 -12 z" fill="none" stroke="${G}" stroke-width="13" stroke-linejoin="round"/>` +
    `<path d="M${x} ${topY} q${w / 2} 22 ${w} 0" fill="none" stroke="${G}" stroke-width="13"/>` +
    `<circle cx="${cx}" cy="${topY - 12}" r="10" fill="${GA}"/>`
  );
};

const wrench = (cx = 400, cy = 250, len = 118, color = G) => {
  // open-end head
  const headR = 26;
  const gap = 12;
  const head =
    `<circle cx="${cx}" cy="${cy - len / 2}" r="${headR}" fill="none" stroke="${color}" stroke-width="14"/>` +
    `<path d="M${cx - gap} ${cy - len / 2 - headR + 4} v-${gap}" stroke="${W}" stroke-width="10" stroke-linecap="round"/>`;
  const handle = `<line x1="${cx}" y1="${cy - len / 2 + headR}" x2="${cx}" y2="${cy + len / 2}" stroke="${color}" stroke-width="16" stroke-linecap="round"/>`;
  return head + handle;
};

const car = (cx = 400, cy = 250) =>
  `<path d="M${cx - 115} ${cy + 18} q-18-8-18-30 l22-34 a12 12 0 0 1 10-6 h92 a12 12 0 0 1 10 6 l22 34 q0 22-18 30 z" fill="none" stroke="${G}" stroke-width="12" stroke-linejoin="round"/>` +
  `<circle cx="${cx - 62}" cy="${cy + 24}" r="15" fill="none" stroke="${G}" stroke-width="10"/>` +
  `<circle cx="${cx + 62}" cy="${cy + 24}" r="15" fill="none" stroke="${G}" stroke-width="10"/>` +
  `<circle cx="${cx + 100}" cy="${cy - 4}" r="8" fill="${GA}"/>` +
  `<line x1="${cx - 30}" y1="${cy - 22}" x2="${cx + 26}" y2="${cy - 22}" stroke="${G}" stroke-width="8"/>`;

const bolt = (cx = 400, cy = 250) =>
  `<line x1="${cx - 40}" y1="${cy - 110}" x2="${cx + 40}" y2="${cy + 110}" stroke="${G}" stroke-width="16" stroke-linecap="round"/>` +
  `<line x1="${cx - 30}" y1="${cy - 100}" x2="${cx - 14}" y2="${cy - 62}" stroke="${W}" stroke-width="5"/>` +
  `<line x1="${cx - 20}" y1="${cy - 98}" x2="${cx - 4}" y2="${cy - 60}" stroke="${W}" stroke-width="5"/>` +
  `<line x1="${cx - 10}" y1="${cy - 98}" x2="${cx + 6}" y2="${cy - 60}" stroke="${W}" stroke-width="5"/>` +
  `<line x1="${cx}" y1="${cy - 98}" x2="${cx + 16}" y2="${cy - 60}" stroke="${W}" stroke-width="5"/>` +
  `<polygon points="${cx},${cy - 92} ${cx + 79},${cy - 46} ${cx + 79},${cy + 46} ${cx},${cy + 92} ${cx - 79},${cy + 46} ${cx - 79},${cy - 46}" fill="none" stroke="${G}" stroke-width="12" stroke-linejoin="round"/>` +
  `<circle cx="${cx}" cy="${cy}" r="10" fill="${GA}"/>`;

const bluePrint = (cx = 400, cy = 250) => {
  const grid = Array.from({ length: 5 }, (_, i) => {
    const x = cx - 80 + i * 40;
    const y = cy - 80 + i * 40;
    return (
      `<line x1="${x}" y1="${cy - 90}" x2="${x}" y2="${cy + 90}" stroke="${G}" stroke-width="2" opacity="0.5"/>` +
      `<line x1="${cx - 90}" y1="${y}" x2="${cx + 90}" y2="${y}" stroke="${G}" stroke-width="2" opacity="0.5"/>`
    );
  }).join("");
  return (
    `<rect x="${cx - 92}" y="${cy - 92}" width="184" height="184" rx="10" fill="none" stroke="${G}" stroke-width="6"/>` +
    grid +
    `<path d="M${cx - 55} ${cy + 30} l20-55 34 70 18-30 30 15" fill="none" stroke="${GA}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>`
  );
};

const feedScoop = (cx = 400, cy = 250) => {
  const pellets = circles(G, 12, 6, 34, cx, cy + 30);
  return (
    `<path d="M${cx - 92} ${cy - 70} a92 92 0 0 0 184 0 z" fill="none" stroke="${G}" stroke-width="12" stroke-linejoin="round"/>` +
    pellets +
    `<line x1="${cx}" y1="${cy - 70}" x2="${cx}" y2="${cy - 40}" stroke="${W}" stroke-width="6"/>`
  );
};

const nutritionBowl = (cx = 400, cy = 250) =>
  bowl(270) +
  `<line x1="${cx}" y1="${cy - 40}" x2="${cx}" y2="${cy + 24}" stroke="${G}" stroke-width="10" stroke-linecap="round"/>` +
  `<line x1="${cx - 26}" y1="${cy - 8}" x2="${cx + 26}" y2="${cy - 8}" stroke="${G}" stroke-width="10" stroke-linecap="round"/>`;

const chili = (cx = 400, cy = 250) =>
  `<path d="M${cx - 60} ${cy + 62} q-34-40-26-84 q8-44 46-58 q38 14 46 58 q8 44-26 84 z" fill="none" stroke="${G}" stroke-width="11" stroke-linejoin="round"/>` +
  `<path d="M${cx - 40} ${cy + 40} q-18-30-14-62 q4-30 30-42" fill="none" stroke="${G}" stroke-width="9" stroke-linecap="round"/>` +
  `<circle cx="${cx - 16}" cy="${cy + 24}" r="7" fill="${GA}"/>` +
  `<circle cx="${cx + 34}" cy="${cy + 8}" r="7" fill="${GA}"/>` +
  `<circle cx="${cx - 34}" cy="${cy - 40}" r="7" fill="${GA}"/>`;

const wheat = (cx = 400, cy = 250) => {
  const stem = (x, y, a) =>
    `<line x1="${cx}" y1="${cy + 70}" x2="${cx + x}" y2="${cy + y}" stroke="${GA}" stroke-width="7" stroke-linecap="round" transform="rotate(${a} ${cx} ${cy + 70})"/>`;
  const head = (x, y, a) =>
    `<ellipse cx="${cx + x}" cy="${cy + y}" rx="9" ry="30" fill="none" stroke="${G}" stroke-width="6" transform="rotate(${a} ${cx + x} ${cy + y})"/>`;
  return (
    stem(-34, -64, -16) +
    stem(34, -64, 16) +
    stem(0, -78, 0) +
    head(-34, -96, -16) +
    head(34, -96, 16) +
    head(0, -112, 0)
  );
};

const containers = (cx = 400, cy = 250, color = G) => {
  const box = (x, y, w, h) =>
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="none" stroke="${color}" stroke-width="9"/>`;
  return (
    box(cx - 100, cy - 110, 200, 62) +
    box(cx - 100, cy - 44, 200, 62) +
    box(cx - 100, cy + 22, 200, 62) +
    `<line x1="${cx - 100}" y1="${cy - 78}" x2="${cx + 100}" y2="${cy - 78}" stroke="${color}" stroke-width="9"/>` +
    `<line x1="${cx - 100}" y1="${cy - 13}" x2="${cx + 100}" y2="${cy - 13}" stroke="${color}" stroke-width="9"/>` +
    `<circle cx="${cx + 60}" cy="${cy - 79}" r="7" fill="${GA}"/>` +
    `<circle cx="${cx - 60}" cy="${cy - 14}" r="7" fill="${GA}"/>` +
    `<circle cx="${cx + 70}" cy="${cy + 52}" r="7" fill="${GA}"/>`
  );
};

const globeArcs = (cx = 400, cy = 250, color = G) =>
  `<circle cx="${cx}" cy="${cy}" r="88" fill="none" stroke="${color}" stroke-width="12"/>` +
  `<ellipse cx="${cx}" cy="${cy}" rx="40" ry="88" fill="none" stroke="${color}" stroke-width="8"/>` +
  `<path d="M${cx - 88} ${cy} q44-30 88 0 M${cx - 88} ${cy + 14} q44 30 88 0" fill="none" stroke="${GA}" stroke-width="7"/>`;

const shield = (cx = 400, cy = 250) =>
  `<path d="M${cx - 60} ${cy - 62} h120 l-14 ${cy > 200 ? 120 : 112} l-46 24 l-46 -24 z" fill="none" stroke="${G}" stroke-width="11" stroke-linejoin="round"/>` +
  `<path d="M${cx - 34} ${cy - 14} l24 28 40-44" fill="none" stroke="${GA}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>`;

const stack = (cx = 400, cy = 250, color = G) =>
  `<ellipse cx="${cx}" cy="${cy + 58}" rx="88" ry="30" fill="none" stroke="${color}" stroke-width="9"/>` +
  `<ellipse cx="${cx}" cy="${cy - 6}" rx="88" ry="30" fill="none" stroke="${color}" stroke-width="9"/>` +
  `<ellipse cx="${cx}" cy="${cy - 66}" rx="60" ry="24" fill="none" stroke="${GA}" stroke-width="9"/>` +
  `<line x1="${cx - 88}" y1="${cy - 6}" x2="${cx - 88}" y2="${cy + 58}" stroke="${color}" stroke-width="9"/>` +
  `<line x1="${cx + 88}" y1="${cy - 6}" x2="${cx + 88}" y2="${cy + 58}" stroke="${color}" stroke-width="9"/>`;

const documents = (cx = 400, cy = 250) =>
  `<rect x="${cx - 86}" y="${cy - 110}" width="76" height="110" rx="8" fill="none" stroke="${G}" stroke-width="10"/>` +
  `<rect x="${cx - 62}" y="${cy - 110}" width="76" height="110" rx="8" fill="none" stroke="${G}" stroke-width="10"/>` +
  `<rect x="${cx - 38}" y="${cy - 116}" width="76" height="110" rx="8" fill="none" stroke="${GA}" stroke-width="10"/>` +
  `<line x1="${cx - 14}" y1="${cy - 80}" x2="${cx + 12}" y2="${cy - 80}" stroke="${G}" stroke-width="7"/>` +
  `<line x1="${cx - 14}" y1="${cy - 58}" x2="${cx + 12}" y2="${cy - 58}" stroke="${G}" stroke-width="7"/>` +
  `<line x1="${cx - 14}" y1="${cy - 36}" x2="${cx + 4}" y2="${cy - 36}" stroke="${G}" stroke-width="7"/>`;

const book = (cx = 400, cy = 250) =>
  `<path d="M${cx - 88} ${cy - 88} q30 16 58 0 v170 q-28-16-58 0 z" fill="none" stroke="${G}" stroke-width="10" stroke-linejoin="round"/>` +
  `<path d="M${cx + 88} ${cy - 88} q-30 16-58 0 v170 q28-16 58 0 z" fill="none" stroke="${G}" stroke-width="10" stroke-linejoin="round"/>` +
  `<path d="M${cx} ${cy - 84} q30-16 58 0 M${cx} ${cy + 82} q-28 16-58 0" fill="none" stroke="${GA}" stroke-width="8"/>`;

const plants = (cx = 400, cy = 250) =>
  `<line x1="${cx - 70}" y1="${cy + 70}" x2="${cx - 70}" y2="${cy - 20}" stroke="${G}" stroke-width="9" stroke-linecap="round"/>` +
  `<line x1="${cx}" y1="${cy + 70}" x2="${cx}" y2="${cy - 40}" stroke="${G}" stroke-width="9" stroke-linecap="round"/>` +
  `<line x1="${cx + 70}" y1="${cy + 70}" x2="${cx + 70}" y2="${cy - 20}" stroke="${G}" stroke-width="9" stroke-linecap="round"/>` +
  `<ellipse cx="${cx - 70}" cy="${cy - 50}" rx="12" ry="34" fill="none" stroke="${GA}" stroke-width="8"/>` +
  `<ellipse cx="${cx}" cy="${cy - 70}" rx="12" ry="38" fill="none" stroke="${GA}" stroke-width="8"/>` +
  `<ellipse cx="${cx + 70}" cy="${cy - 50}" rx="12" ry="34" fill="none" stroke="${GA}" stroke-width="8"/>`;

const sailShip = (cx = 400, cy = 250) =>
  `<path d="M${cx - 100} ${cy + 66} h200 l-16-44 h-168 z" fill="none" stroke="${G}" stroke-width="11" stroke-linejoin="round"/>` +
  `<line x1="${cx}" y1="${cy - 82}" x2="${cx}" y2="${cy + 22}" stroke="${G}" stroke-width="9"/>` +
  `<path d="M${cx + 2} ${cy - 78} q58 6 58 58 l-58 14 z" fill="none" stroke="${G}" stroke-width="9" stroke-linejoin="round"/>` +
  `<path d="M${cx - 2} ${cy - 78} q-46 10-46 52 l46 16 z" fill="none" stroke="${GA}" stroke-width="9" stroke-linejoin="round"/>` +
  `<path d="M${cx - 120} ${cy + 66} q30-10 60 0 t60 0 t60 0" fill="none" stroke="${G}" stroke-width="7"/>`;

const handshake = (cx = 400, cy = 250) =>
  `<path d="M${cx - 96} ${cy + 6} l40-44 q8-9 19-4 l18 12 22-34 q7-10 19-5 l26 16 q10 6 6 17 l-30 52 q-4 7-12 7 h-62 l-34 8 q-11 2-13-9 z" fill="none" stroke="${G}" stroke-width="9" stroke-linejoin="round"/>` +
  `<path d="M${cx - 40} ${cy + 34} l-14 22 M${cx - 8} ${cy + 34} l-14 22" stroke="${GA}" stroke-width="8" stroke-linecap="round"/>`;

const paperPlane = (cx = 400, cy = 250) =>
  `<path d="M${cx - 96} ${cy + 56} l176-80 -96 6-30 46z" fill="none" stroke="${G}" stroke-width="10" stroke-linejoin="round"/>` +
  `<path d="M${cx + 10} ${cy - 16} l-40 46 6-52" fill="none" stroke="${GA}" stroke-width="9" stroke-linejoin="round"/>`;

// ---------- icon registry ----------

const icons = {
  "hero-bg": {
    dark: true,
    art: `
      ${globeArcs(400, 210, GA)}
      ${wheat(400, 250)}
      ${containers(400, 250, LG)}
      <circle cx="120" cy="120" r="60" fill="${GA}" opacity="0.25"/>
      <circle cx="680" cy="120" r="40" fill="${GA}" opacity="0.2"/>`,
  },
  about: { art: containers(400, 250) },
  agriculture: { art: wheat(400, 250) },
  "animal-feed": { art: sack() },
  engineering: { art: gear() },
  services: {
    art:
      gear(345, 250, 46) +
      bluePrint(455, 250) +
      `<circle cx="345" cy="250" r="24" fill="none" stroke="${GA}" stroke-width="4"/>`,
  },
  "cta-bg": {
    dark: true,
    art:
      containers(400, 240, LG) +
      sailShip(400, 252) +
      `<circle cx="680" cy="110" r="46" fill="${GA}" opacity="0.3"/>`,
  },
  "og-cover": {
    dark: true,
    art:
      `<circle cx="400" cy="250" r="150" fill="none" stroke="${GA}" stroke-width="3"/>` +
      `<circle cx="400" cy="250" r="138" fill="none" stroke="${W}" stroke-width="2" opacity="0.4"/>` +
      `<path d="M310 250 a90 90 0 0 1 180 0" fill="none" stroke="${W}" stroke-width="3"/>` +
      `<path d="M400 160 a90 90 0 0 1 0 180" fill="none" stroke="${W}" stroke-width="3"/>` +
      wheat(400, 250),
  },
  "non-basmati-rice": { art: grains() + bowl() },
  "ir64-rice": { art: grains(G, 31, 11, 62, 224) + bowl() },
  "sona-masoori": { art: grains(G, 23, 9, 52, 228) + bowl() },
  chinnor: { art: grainRow(G, 7, 242, 28, 10) + bowl(272) },
  parboiled: { art: grains(GA, 28, 11, 58, 225) + bowl() },
  "broken-rice": {
    art:
      `<ellipse cx="355" cy="238" rx="20" ry="9" fill="${G}" transform="rotate(-24 355 238)"/>` +
      `<ellipse cx="420" cy="230" rx="17" ry="9" fill="${G}" transform="rotate(18 420 230)"/>` +
      `<ellipse cx="452" cy="252" rx="19" ry="9" fill="${G}" transform="rotate(-14 452 252)"/>` +
      `<ellipse cx="382" cy="256" rx="16" ry="8" fill="${G}" transform="rotate(28 382 256)"/>` +
      `<ellipse cx="330" cy="262" rx="18" ry="9" fill="${GA}"/>` +
      bowl(292),
  },
  "tur-dal": {
    art:
      `<path d="M364 226 a44 44 0 0 1 88 0 z" fill="none" stroke="${G}" stroke-width="11"/>` +
      `<path d="M364 226 a44 44 0 0 1 88 0 z" transform="translate(6 34)" fill="none" stroke="${G}" stroke-width="11"/>` +
      `<path d="M412 196 h20 a44 44 0 0 1 44 44 h-20 a44 44 0 0 0-44-44 z" fill="${GA}" opacity="0.9"/>`,
  },
  pulses: { art: circles(G, 22, 6, 62) + circles(GA, 18, 3, 88, 400, 250) },
  millets: { art: circles(G, 14, 12, 62) + `<circle cx="400" cy="250" r="16" fill="${GA}"/>` },
  spices: { art: chili(400, 250) },
  "cattle-feed": {
    art:
      sack() +
      `<circle cx="356" cy="222" r="9" fill="${GA}"/>` +
      `<circle cx="402" cy="206" r="9" fill="${GA}"/>` +
      `<circle cx="448" cy="222" r="9" fill="${GA}"/>`,
  },
  "oil-cakes": {
    art:
      `<ellipse cx="400" cy="232" rx="120" ry="34" fill="none" stroke="${G}" stroke-width="11"/>` +
      `<ellipse cx="400" cy="196" rx="96" ry="27" fill="none" stroke="${G}" stroke-width="11"/>` +
      `<ellipse cx="400" cy="164" rx="64" ry="19" fill="none" stroke="${GA}" stroke-width="10"/>` +
      `<circle cx="400" cy="232" r="16" fill="${GA}"/>`,
  },
  "feed-ingredients": { art: feedScoop() },
  "animal-nutrition": { art: nutritionBowl() },
  "industrial-components": { art: gear() },
  "fabricated-products": {
    art:
      `<rect x="312" y="172" width="176" height="120" rx="8" fill="none" stroke="${G}" stroke-width="10" transform="rotate(-12 400 250)"/>` +
      `<rect x="312" y="196" width="176" height="120" rx="8" fill="none" stroke="${GA}" stroke-width="10" transform="rotate(14 400 250)"/>` +
      `<path d="M348 168 l30 22 26-16 24 24" fill="none" stroke="${G}" stroke-width="8" stroke-linejoin="round"/>`,
  },
  "automobile-components": { art: car() },
  fasteners: { art: bolt() },
  "engineering-consumables": {
    art: wrench(370, 250, 100) + wrench(430, 250, 100),
  },
  "custom-industrial": { art: bluePrint() },
};

// ---------- svg template ----------

const escapeXml = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function buildSvg(name, cfg) {
  const { dark, art } = cfg;
  const gid = name.replace(/[^a-zA-Z0-9]/g, "");
  const bgTop = dark ? D : CR;
  const bgMid = dark ? G : "#E7F0EA";
  const dot = dark ? "opacity=\"0.18\"" : "opacity=\"0.3\"";
  const medStroke = dark ? W : W;
  const medInner = dark ? "#EAF3ED" : LG;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" role="img" aria-label="${escapeXml(name)} placeholder">
  <defs>
    <linearGradient id="bg${gid}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${bgTop}"/>
      <stop offset="1" stop-color="${bgMid}"/>
    </linearGradient>
    <pattern id="dots${gid}" width="26" height="26" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.5" fill="#C9A227" ${dot}/>
    </pattern>
    <pattern id="lines${gid}" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="60" stroke="#1F5D42" stroke-width="1" opacity="0.08"/>
    </pattern>
  </defs>
  <rect width="800" height="500" fill="url(#bg${gid})"/>
  <rect width="800" height="500" fill="url(#lines${gid})"/>
  <rect width="800" height="500" fill="url(#dots${gid})"/>
  <circle cx="400" cy="250" r="196" fill="none" stroke="#C9A227" stroke-width="1.5" opacity="0.5"/>
  <circle cx="400" cy="250" r="182" fill="none" stroke="#1F5D42" stroke-width="1" opacity="0.25"/>
  <circle cx="400" cy="250" r="142" fill="${medInner}" stroke="${medStroke}" stroke-width="3"/>
  <circle cx="400" cy="250" r="142" fill="none" stroke="#C9A227" stroke-width="2" opacity="0.55" stroke-dasharray="3 10"/>
  <circle cx="400" cy="250" r="122" fill="none" stroke="#C9A227" stroke-width="1.5" opacity="0.5"/>
  <g>${art}</g>
</svg>
`;
}

// ---------- write files ----------
//
// Routing of generated assets:
//  - ES-imported images (components)   -> src/assets/images/   (bundled by Vite)
//  - string-referenced images (data)   -> public/assets/images/  (served at /assets/images/…)
//  - string-referenced products (data) -> public/assets/products/ (served at /assets/products/…)
//  - social share cover                -> public/og-cover.svg
//
// Data files reference assets by public URL (e.g. "/assets/products/rice.svg"),
// so they MUST live under public/ to be served. Component imports use ES
// imports, which Vite bundles from src/.

const srcImagesDir = join(root, "src", "assets", "images");
const publicImagesDir = join(root, "public", "assets", "images");
const publicProductsDir = join(root, "public", "assets", "products");
const publicDir = join(root, "public");
mkdirSync(srcImagesDir, { recursive: true });
mkdirSync(publicImagesDir, { recursive: true });
mkdirSync(publicProductsDir, { recursive: true });
mkdirSync(publicDir, { recursive: true });

// Images imported via ES `import` in components (bundled from src/).
const importedImages = ["hero-bg", "about", "cta-bg"];

// Images referenced by string path in data files (served from public/).
const publicImages = ["agriculture", "animal-feed", "engineering", "services"];

let count = 0;
for (const [name, cfg] of Object.entries(icons)) {
  if (name === "og-cover") continue; // written to public root below
  if (importedImages.includes(name)) {
    writeFileSync(join(srcImagesDir, `${name}.svg`), buildSvg(name, cfg));
  } else if (publicImages.includes(name)) {
    writeFileSync(join(publicImagesDir, `${name}.svg`), buildSvg(name, cfg));
  } else {
    writeFileSync(join(publicProductsDir, `${name}.svg`), buildSvg(name, cfg));
  }
  count += 1;
}

// OG cover also needs to be publicly addressable (index.html references it).
writeFileSync(join(publicDir, "og-cover.svg"), buildSvg("og-cover", icons["og-cover"]));

console.log(`Generated ${count} SVG placeholders.`);
console.log(`  src imports:   ${srcImagesDir}`);
console.log(`  public images: ${publicImagesDir}`);
console.log(`  public products: ${publicProductsDir}`);
console.log(`  public:        ${publicDir}/og-cover.svg`);

