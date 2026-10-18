/**
 * Prepare the world map asset for the Global Markets section.
 *
 * Source : "World map - low resolution" by Al MacDonald, CC BY-SA 3.0,
 *          via Wikimedia Commons (an accurate, professionally drawn
 *          equirectangular world map with national borders).
 * Output : src/assets/worldMap.js  -> { viewBox, paths[], indiaBBox, credit }
 *
 * Run with: node scripts/build-world-map.mjs <path-to-svg>
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const inputArg = process.argv[2];
if (!inputArg) {
  console.error('Usage: node scripts/build-world-map.mjs <source.svg>');
  process.exit(1);
}

const svgRaw = fs.readFileSync(path.resolve(inputArg), 'utf8');

/* ------------------------------------------------------------------ */
/* 1. viewBox                                                          */
/* ------------------------------------------------------------------ */
const viewBoxMatch = svgRaw.match(/viewBox="([^"]+)"/);
if (!viewBoxMatch) throw new Error('No viewBox found on the source SVG.');
const viewBox = viewBoxMatch[1].split(/\s+/).map(Number);

/* ------------------------------------------------------------------ */
/* 2. Collect every <path id="..." d="..."> and drop the rest          */
/* ------------------------------------------------------------------ */
const PATH_RE = /<path\b([^>]*?)\/?>/g;
const ATTR_RE = /([\w:-]+)\s*=\s*"([^"]*)"/g;

const paths = [];
let match;
while ((match = PATH_RE.exec(svgRaw)) !== null) {
  const attrs = {};
  let a;
  ATTR_RE.lastIndex = 0;
  while ((a = ATTR_RE.exec(match[1])) !== null) attrs[a[1]] = a[2];
  if (!attrs.d) continue;
  paths.push({ id: (attrs.id || '').trim(), d: attrs.d.trim() });
}

if (paths.length === 0) throw new Error('No <path> elements parsed from the source SVG.');

/* ------------------------------------------------------------------ */
/* 3. Bounding box of a path (endpoint-tracking walker)                */
/* ------------------------------------------------------------------ */
function pathBBox(d) {
  const tokens = d.match(/[MmLlHhVvCcSsQqTtAaZz]|-?\d*\.?\d+(?:e[-+]?\d+)?/gi) || [];
  let x = 0;
  let y = 0;
  let startX = 0;
  let startY = 0;
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  let i = 0;
  let cmd = null;
  const seen = (px, py) => {
    if (px < minX) minX = px;
    if (px > maxX) maxX = px;
    if (py < minY) minY = py;
    if (py > maxY) maxY = py;
  };
  const num = () => Number(tokens[i++]);

  while (i < tokens.length) {
    const t = tokens[i];
    if (/[A-Za-z]/.test(t)) {
      cmd = t;
      i++;
    }
    if (cmd === null) break;
    const rel = cmd === cmd.toLowerCase();
    const C = cmd.toUpperCase();

    if (C === 'Z') {
      x = startX;
      y = startY;
      seen(x, y);
      continue;
    }
    if (C === 'M') {
      const nx = num();
      const ny = num();
      x = rel ? x + nx : nx;
      y = rel ? y + ny : ny;
      startX = x;
      startY = y;
      seen(x, y);
      cmd = rel ? 'l' : 'L';
      continue;
    }
    if (C === 'L') {
      const nx = num();
      const ny = num();
      x = rel ? x + nx : nx;
      y = rel ? y + ny : ny;
      seen(x, y);
      continue;
    }
    if (C === 'H') {
      const nx = num();
      x = rel ? x + nx : nx;
      seen(x, y);
      continue;
    }
    if (C === 'V') {
      const ny = num();
      y = rel ? y + ny : ny;
      seen(x, y);
      continue;
    }
    if (C === 'C') {
      const a = num(), b = num(), c = num(), e = num(), f = num(), g = num();
      seen(rel ? x + a : x, rel ? y + b : y);
      seen(rel ? x + c : x, rel ? y + e : y);
      x = rel ? x + f : f;
      y = rel ? y + g : g;
      seen(x, y);
      continue;
    }
    if (C === 'S' || C === 'Q') {
      const a = num(), b = num(), c = num(), e = num();
      seen(rel ? x + a : x, rel ? y + b : y);
      x = rel ? x + c : c;
      y = rel ? y + e : e;
      seen(x, y);
      continue;
    }
    if (C === 'T') {
      const a = num(), b = num();
      x = rel ? x + a : a;
      y = rel ? y + b : b;
      seen(x, y);
      continue;
    }
    if (C === 'A') {
      const a = num(), b = num(), c = num(), d = num(), e = num();
      x = rel ? x + e : e;
      y = rel ? y + a : a;
      seen(x, y);
      continue;
    }
    i++; // safety valve
  }
  return { minX, minY, maxX, maxY, width: maxX - minX, height: maxY - minY };
}

const indiaPaths = paths.filter((p) => p.id === 'india');
if (indiaPaths.length === 0) throw new Error('Could not find a path with id="india".');

let indiaBBox = { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity };
for (const p of indiaPaths) {
  const b = pathBBox(p.d);
  indiaBBox = {
    minX: Math.min(indiaBBox.minX, b.minX),
    minY: Math.min(indiaBBox.minY, b.minY),
    maxX: Math.max(indiaBBox.maxX, b.maxX),
    maxY: Math.max(indiaBBox.maxY, b.maxY),
  };
}
indiaBBox.width = indiaBBox.maxX - indiaBBox.minX;
indiaBBox.height = indiaBBox.maxY - indiaBBox.minY;

/* ------------------------------------------------------------------ */
/* 4. Emit module                                                      */
/* ------------------------------------------------------------------ */
const r = (n) => Math.round(n * 100) / 100;

const banner = `/**
 * GENERATED FILE - do not edit by hand.
 * Rebuild with: node scripts/build-world-map.mjs <source.svg>
 *
 * Accurate equirectangular world map (national borders).
 *   "World map - low resolution" by Al MacDonald, CC BY-SA 3.0,
 *   obtained from Wikimedia Commons.
 *   https://commons.wikimedia.org/wiki/File:World_map_-_low_resolution.svg
 *
 * Path ids are country names, so a single country can be highlighted
 * from CSS (see src/styles/markets.css -> #india).
 */
`;

const out = `${banner}
export const WORLD_MAP_VIEWBOX = '${viewBox.join(' ')}';

export const WORLD_MAP_PATHS = ${JSON.stringify(
  paths.map((p) => ({ id: p.id, d: p.d })),
  null,
  0
)};

export const INDIA_ORIGIN = { x: ${r(indiaBBox.minX + indiaBBox.width / 2)}, y: ${r(
  indiaBBox.minY + indiaBBox.height / 2
)} };

export const WORLD_MAP_CREDIT = {
  author: 'Al MacDonald',
  license: 'CC BY-SA 3.0',
  source: 'https://commons.wikimedia.org/wiki/File:World_map_-_low_resolution.svg',
};
`;

const destDir = path.join(ROOT, 'src', 'assets');
fs.mkdirSync(destDir, { recursive: true });
fs.writeFileSync(path.join(destDir, 'worldMap.js'), out, 'utf8');

console.log(`World map module written.`);
console.log(`  viewBox      : ${viewBox.join(' ')}`);
console.log(`  paths        : ${paths.length}`);
console.log(`  india paths  : ${indiaPaths.length}`);
console.log(
  `  india bbox   : x ${r(indiaBBox.minX)}..${r(indiaBBox.maxX)}  y ${r(
    indiaBBox.minY
  )}..${r(indiaBBox.maxY)}`
);
console.log(
  `  india origin : ${r(indiaBBox.minX + indiaBBox.width / 2)}, ${r(
    indiaBBox.minY + indiaBBox.height / 2
  )}`
);
console.log(`  output size  : ${(out.length / 1024).toFixed(1)} KB`);
