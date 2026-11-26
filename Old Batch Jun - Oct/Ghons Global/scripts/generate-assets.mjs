import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "public", "images");

mkdirSync(join(out, "categories"), { recursive: true });
mkdirSync(join(out, "logo"), { recursive: true });

const esc = (s) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const jewelMark = (cx, cy, scale = 1) => `
  <g transform="translate(${cx} ${cy}) scale(${scale})">
    <circle cx="0" cy="0" r="58" fill="url(#goldGlow)"/>
    <path d="M0 -44 L26 -14 L0 40 L-26 -14 Z" fill="url(#goldGrad)" stroke="#b8952a" stroke-width="2"/>
    <path d="M-26 -14 L26 -14 L0 -44 Z" fill="#fff6d8"/>
    <path d="M-14 -10 L0 -30 L14 -10 L0 8 Z" fill="#ffe9a8"/>
    <circle cx="-34" cy="8" r="12" fill="url(#roseGrad)"/>
    <circle cx="34" cy="8" r="12" fill="url(#roseGrad)"/>
    <circle cx="0" cy="52" r="12" fill="url(#roseGrad)"/>
    <circle cx="-34" cy="8" r="4" fill="#fff"/>
    <circle cx="34" cy="8" r="4" fill="#fff"/>
    <circle cx="0" cy="52" r="4" fill="#fff"/>
  </g>`;

const defs = `
  <defs>
    <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f0d78c"/>
      <stop offset="50%" stop-color="#d4af37"/>
      <stop offset="100%" stop-color="#b8952a"/>
    </linearGradient>
    <radialGradient id="goldGlow">
      <stop offset="0%" stop-color="#f0d78c" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="#f0d78c" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="roseGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#c98a94"/>
      <stop offset="100%" stop-color="#b76e79"/>
    </linearGradient>
    <linearGradient id="plumGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#4d1236"/>
      <stop offset="50%" stop-color="#6a1b4d"/>
      <stop offset="100%" stop-color="#8a2f64"/>
    </linearGradient>
    <pattern id="dots" width="26" height="26" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.4" fill="#d4af37" fill-opacity="0.28"/>
    </pattern>
  </defs>`;

function bannerSvg(name) {
  const label = esc(name);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600" viewBox="0 0 1200 600">
  ${defs}
  <rect width="1200" height="600" fill="url(#plumGrad)"/>
  <rect width="1200" height="600" fill="url(#dots)"/>
  <circle cx="1020" cy="80" r="160" fill="none" stroke="#d4af37" stroke-opacity="0.4" stroke-width="1.5"/>
  <circle cx="1020" cy="80" r="110" fill="none" stroke="#d4af37" stroke-opacity="0.3" stroke-width="1.5"/>
  <circle cx="120" cy="520" r="120" fill="none" stroke="#b76e79" stroke-opacity="0.5" stroke-width="2"/>
  <path d="M0 430 C 300 520, 620 340, 1200 470 L1200 600 L0 600 Z" fill="#2a0a1e" fill-opacity="0.35"/>
  <g transform="translate(150 200) scale(1.3)">${jewelMark(0, 0)}</g>
  <text x="360" y="240" font-family="Playfair Display, Georgia, serif" font-size="54" font-weight="700" fill="#ffffff">${label}</text>
  <rect x="366" y="276" width="120" height="3" fill="#d4af37"/>
  <text x="362" y="320" font-family="Poppins, sans-serif" font-size="22" fill="#f0d78c" letter-spacing="3">GHONS GLOBAL IMPEX</text>
</svg>`;
}

const categoryFiles = [
  ["jewellery", "Imitation Jewellery"],
  ["spices", "Spices"],
  ["dry-fruits", "Dry Fruits"],
  ["home-decor", "Home D\u00e9cor"],
  ["kitchenware", "Kitchenware"],
  ["lifestyle", "Lifestyle Products"],
];

const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
  ${defs}
  <circle cx="64" cy="64" r="62" fill="url(#plumGrad)"/>
  <circle cx="64" cy="64" r="54" fill="none" stroke="#d4af37" stroke-width="2"/>
  <circle cx="64" cy="64" r="46" fill="none" stroke="#d4af37" stroke-opacity="0.4" stroke-width="1"/>
  <text x="64" y="84" font-family="Playfair Display, Georgia, serif" font-size="58" font-weight="800" fill="#f0d78c" text-anchor="middle">G</text>
</svg>`;

const heroSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="1150" viewBox="0 0 900 1150">
  ${defs}
  <rect width="900" height="1150" fill="url(#plumGrad)"/>
  <rect width="900" height="1150" fill="url(#dots)"/>
  <circle cx="760" cy="140" r="180" fill="none" stroke="#d4af37" stroke-opacity="0.35" stroke-width="1.5"/>
  <circle cx="760" cy="140" r="120" fill="none" stroke="#d4af37" stroke-opacity="0.25" stroke-width="1"/>
  <circle cx="90" cy="1020" r="150" fill="none" stroke="#b76e79" stroke-opacity="0.5" stroke-width="2"/>
  <path d="M0 560 C 260 420, 560 780, 900 480 L900 1150 L0 1150 Z" fill="#2a0a1e" fill-opacity="0.5"/>
  <g transform="translate(450 420) scale(1.55)">${jewelMark(0, 0)}</g>
  <g transform="translate(150 300) scale(0.6)">${jewelMark(0, 0)}</g>
  <g transform="translate(720 640) scale(0.7)">${jewelMark(0, 0)}</g>
  <text x="450" y="880" font-family="Poppins, sans-serif" font-size="24" letter-spacing="8" fill="#f0d78c" text-anchor="middle">GHONS GLOBAL IMPEX</text>
  <text x="450" y="940" font-family="Playfair Display, Georgia, serif" font-size="44" font-weight="700" fill="#ffffff" text-anchor="middle" font-style="italic">Smart Supply for Modern Markets</text>
</svg>`;

const aboutSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="620" viewBox="0 0 800 620">
  ${defs}
  <rect width="800" height="620" fill="#fdf3ef"/>
  <rect width="800" height="620" fill="url(#dots)"/>
  <circle cx="640" cy="90" r="150" fill="none" stroke="#d4af37" stroke-opacity="0.4" stroke-width="1.5"/>
  <g transform="translate(400 250) scale(1.35)">${jewelMark(0, 0)}</g>
  <text x="400" y="470" font-family="Playfair Display, Georgia, serif" font-size="38" font-weight="700" fill="#4d1236" text-anchor="middle">India-Based Exporter</text>
  <text x="400" y="512" font-family="Playfair Display, Georgia, serif" font-size="38" font-weight="700" fill="#b76e79" text-anchor="middle">&amp; Wholesaler</text>
  <rect x="340" y="545" width="120" height="3" fill="#d4af37"/>
</svg>`;

const files = [
  ["hero.svg", heroSvg],
  ["about.svg", aboutSvg],
  ...categoryFiles.map(([f, n]) => [`categories/${f}.svg`, bannerSvg(n)]),
];

for (const [rel, svg] of files) {
  const file = join(out, rel);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, svg, "utf8");
}

writeFileSync(join(out, "logo", "favicon.svg"), logoSvg, "utf8");

console.log(`Generated ${files.length} placeholder images in public/images/`);
