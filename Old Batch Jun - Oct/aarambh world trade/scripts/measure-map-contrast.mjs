/**
 * Measures how visible the world map actually is on the dark section
 * background, by rasterising the map the way the component styles it and
 * comparing country pixels against the background.
 *
 *   node scripts/measure-map-contrast.mjs
 *
 * Values come from src/styles/markets.css, so editing the stylesheet can never
 * leave this check reporting stale numbers.
 */
import sharp from 'sharp';
import { WORLD_MAP_PATHS, WORLD_MAP_VIEWBOX } from '../src/assets/worldMap.js';
import { readCountryStyle, contrast, flatten, BACKDROPS, MIN_MAP_CONTRAST } from './map-style.mjs';

const [, , W, H] = WORLD_MAP_VIEWBOX.split(/\s+/).map(Number);
const TINY = 8;

function buildSvg({ fill, stroke, strokeWidth, bg }) {
  const countries = WORLD_MAP_PATHS.map((p) => `<path d="${p.d}"/>`).join('');
  const india = WORLD_MAP_PATHS.filter((p) => p.id === 'india')
    .map((p) => `<path d="${p.d}"/>`)
    .join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${-TINY} ${-TINY} ${W + TINY * 2} ${H + TINY * 2}" width="${W + TINY * 2}" height="${H + TINY * 2}">
  <rect x="${-TINY}" y="${-TINY}" width="${W + TINY * 2}" height="${H + TINY * 2}" fill="${bg}"/>
  <g fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linejoin="round" transform="translate(${TINY} ${TINY})">${countries}</g>
  <g fill="#c99a42" stroke="#ffe8bd" stroke-width="${strokeWidth}" transform="translate(${TINY} ${TINY})">${india}</g>
</svg>`;
}

// Two real backdrops behind the map, worst case first:
//  - darkest: the section background at the map's edges
//  - lightest: section background + .markets::before radial tint + the
//    .markets__stage white gradient, i.e. the map's centre
const MIN_CONTRAST = MIN_MAP_CONTRAST;
const applied = readCountryStyle();

console.log(`applied fill ${applied.fill}, stroke ${applied.stroke}, width ${applied.strokeWidth}`);
console.log('\nbackdrop    land colour  | rasterised | composited');
console.log('-'.repeat(64));

let worstRatio = Infinity;

for (const bd of BACKDROPS) {
  const svg = buildSvg({ ...applied, bg: `rgb(${bd.rgb.join(',')})` });
  const { data, info } = await sharp(Buffer.from(svg), { density: 300 })
    .resize({ width: 966 })
    .raw()
    .toBuffer({ resolveWithObject: true });

  // The land colour is the most common pixel that is not the backdrop.
  const seen = new Map();
  for (let i = 0; i < data.length; i += info.channels) {
    const key = `${data[i]},${data[i + 1]},${data[i + 2]}`;
    seen.set(key, (seen.get(key) || 0) + 1);
  }
  let fill = null;
  let best = 0;
  for (const [key, count] of seen) {
    const rgb = key.split(',').map(Number);
    if (count <= best) continue;
    if (rgb.every((c, k) => Math.abs(c - bd.rgb[k]) < 4)) continue;
    best = count;
    fill = rgb;
  }

  // Rasterised sampling catches antialiasing that flattens thin shapes, so the
  // analytic composite is what decides PASS/FAIL. The two should agree.
  const raster = contrast(fill, bd.rgb);
  const exact = contrast(flatten(applied.fill, bd.rgb), bd.rgb);
  const ratio = Math.min(raster, exact);
  worstRatio = Math.min(worstRatio, ratio);
  console.log(
    `${bd.label}    rgb(${String(fill).padEnd(11)}) |` +
      `${`${raster.toFixed(2)}:1`.padStart(9)}   |${`${exact.toFixed(2)}:1`.padStart(9)}` +
      `  ${ratio >= MIN_CONTRAST ? 'PASS' : 'FAIL'}`
  );
}

console.log(`\nWCAG AA non-text UI: ${MIN_CONTRAST}:1, measured against both backdrops.`);
if (worstRatio < MIN_CONTRAST) {
  console.error(`\nMap fill is too faint (${worstRatio.toFixed(2)}:1). Raise the alpha in markets.css.`);
  process.exit(1);
}
console.log(`Map is legible: worst case ${worstRatio.toFixed(2)}:1.`);
