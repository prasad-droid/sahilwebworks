/**
 * Renders the world map the way GlobalMarkets.jsx does, into a standalone SVG
 * and a rasterised PNG, so the geometry and styling can be inspected visually.
 *
 *   node scripts/render-map-preview.mjs
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { WORLD_MAP_PATHS, WORLD_MAP_VIEWBOX, INDIA_ORIGIN } from '../src/assets/worldMap.js';
import { pathBBox } from './map-path-bounds.mjs';
import { readCountryStyle } from './map-style.mjs';

const [, , W, H] = WORLD_MAP_VIEWBOX.split(/\s+/).map(Number);
const TINY = 8;

// --- 1. Does the geometry fill the viewBox the component actually renders? --
// GlobalMarkets pads the declared viewBox out by TINY on every side, so the fit
// check has to use that padded box. Comparing against the raw 0 0 W H reported
// a false "y NO" for geometry that is in fact fully on screen.
let minX = Infinity;
let maxX = -Infinity;
let minY = Infinity;
let maxY = -Infinity;
for (const p of WORLD_MAP_PATHS) {
  const b = pathBBox(p.d);
  if (!Number.isFinite(b.minX)) continue;
  minX = Math.min(minX, b.minX);
  maxX = Math.max(maxX, b.maxX);
  minY = Math.min(minY, b.minY);
  maxY = Math.max(maxY, b.maxY);
}
console.log(`viewBox      : ${-TINY} ${-TINY} ${W + TINY * 2} ${H + TINY * 2}  (declared 0 0 ${W} ${H}, padded ${TINY})`);
console.log(`paths        : ${WORLD_MAP_PATHS.length}`);
console.log(
  `geometry bbox: x ${minX.toFixed(1)} .. ${maxX.toFixed(1)}  y ${minY.toFixed(1)} .. ${maxY.toFixed(1)}`
);
const fitsX = minX >= -TINY && maxX <= W + TINY;
const fitsY = minY >= -TINY && maxY <= H + TINY;
const fits = fitsX && fitsY;
console.log(`fits viewBox : ${fits ? 'yes' : `NO (x ${fitsX ? 'ok' : 'clipped'}, y ${fitsY ? 'ok' : 'clipped'})`}`);
console.log(`India origin : ${INDIA_ORIGIN.x}, ${INDIA_ORIGIN.y}`);
console.log(
  `India label  : left ${(((TINY + INDIA_ORIGIN.x + TINY) / (W + TINY * 2)) * 100).toFixed(1)}%  ` +
    `top ${(((TINY + INDIA_ORIGIN.y + TINY) / (H + TINY * 2)) * 100).toFixed(1)}%`
);
if (!fits) {
  console.error('\nMap geometry is clipped by the padded viewBox.');
  process.exit(1);
}

// --- 2. Build a standalone SVG that mirrors the component's styling ---------
// Country colours are read from markets.css, not hardcoded, so this preview
// cannot show a different map from the one the site ships.
const style = readCountryStyle();
console.log(`country style: fill ${style.fill}, stroke ${style.stroke}, width ${style.strokeWidth}`);

const countryPaths = WORLD_MAP_PATHS.map(
  (p) => `<path d="${p.d}"/>`
).join('');
const indiaPaths = WORLD_MAP_PATHS.filter((p) => p.id === 'india')
  .map((p) => `<path d="${p.d}"/>`)
  .join('');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${-TINY} ${-TINY} ${W + TINY * 2} ${H + TINY * 2}" width="${W + TINY * 2}" height="${H + TINY * 2}">
  <defs>
    <radialGradient id="indiaFill" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#e8c479"/>
      <stop offset="55%" stop-color="#c99a42"/>
      <stop offset="100%" stop-color="#8d6a20"/>
    </radialGradient>
  </defs>
  <rect x="${-TINY}" y="${-TINY}" width="${W + TINY * 2}" height="${H + TINY * 2}" fill="#0d2419"/>
  <g fill="${style.fill}" stroke="${style.stroke}" stroke-width="${style.strokeWidth}" stroke-linejoin="round" vector-effect="non-scaling-stroke" transform="translate(${TINY} ${TINY})">
    ${countryPaths}
  </g>
  <g fill="url(#indiaFill)" stroke="rgba(255,232,189,0.85)" stroke-width="0.8" transform="translate(${TINY} ${TINY})">
    ${indiaPaths}
  </g>
  <circle cx="${TINY + INDIA_ORIGIN.x}" cy="${TINY + INDIA_ORIGIN.y}" r="4" fill="#fff4dc"/>
</svg>`;

const svgPath = fileURLToPath(new URL('../.map-preview/map-preview.svg', import.meta.url));
const pngPath = fileURLToPath(new URL('../.map-preview/map-preview.png', import.meta.url));
mkdirSync(dirname(svgPath), { recursive: true });
writeFileSync(svgPath, svg);

await sharp(Buffer.from(svg), { density: 200 })
  .resize({ width: 1400 })
  .png()
  .toFile(pngPath);

console.log(`\nwrote ${svgPath}`);
console.log(`wrote ${pngPath}`);
