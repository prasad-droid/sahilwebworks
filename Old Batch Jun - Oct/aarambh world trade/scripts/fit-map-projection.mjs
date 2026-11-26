/**
 * Fits the true lat/lon -> SVG coordinate mapping of the generated world map.
 *
 * The map is an equirectangular projection, but not necessarily a full
 * -90..90 / -180..180 crop, so assuming the textbook formula puts route
 * endpoints in the wrong place. This measures the actual mapping by comparing
 * known country bounding boxes with the real geometry, then reports the
 * transform to use.
 *
 *   node scripts/fit-map-projection.mjs
 */
import { WORLD_MAP_PATHS, WORLD_MAP_VIEWBOX } from '../src/assets/worldMap.js';
import { pathBBox } from './map-path-bounds.mjs';

const [, , W, H] = WORLD_MAP_VIEWBOX.split(/\s+/).map(Number);

const byId = new Map(WORLD_MAP_PATHS.map((p) => [p.id, p]));

/** Real-world extents used to fit the transform. */
const SAMPLES = [
  { id: 'india', lat: [8, 37], lon: [68, 97] },
  { id: 'norway', lat: [58, 71], lon: [5, 31] },
  { id: 'australia', lat: [-39, -10], lon: [113, 154] },
  { id: 'iceland', lat: [63, 67], lon: [-24, -13] },
  { id: 'brazil', lat: [-34, 5], lon: [-74, -34] },
  { id: 'south africa', lat: [-35, -22], lon: [16, 33] },
  { id: 'canada', lat: [42, 70], lon: [-141, -52] },
  { id: 'argentina', lat: [-55, -22], lon: [-73, -54] },
  { id: 'greenland', lat: [60, 84], lon: [-73, -12] },
  { id: 'russia', lat: [41, 82], lon: [19, 180] },
  { id: 'united states', lat: [25, 49], lon: [-125, -67] },
  { id: 'egypt', lat: [22, 31], lon: [25, 35] },
];

console.log(
  'country'.padEnd(16),
  'svg w x h'.padStart(16),
  'real dLon x dLat'.padStart(18),
  'units/deg'.padStart(18)
);

const fitsX = [];
const fitsY = [];

for (const s of SAMPLES) {
  const p = byId.get(s.id);
  if (!p) {
    console.log(s.id.padEnd(16), 'NOT FOUND in map data');
    continue;
  }
  const b = pathBBox(p.d);
  const dLon = s.lon[1] - s.lon[0];
  const dLat = s.lat[1] - s.lat[0];
  const ux = b.width / dLon;
  const uy = b.height / dLat;
  console.log(
    s.id.padEnd(16),
    `${b.width.toFixed(0)} x ${b.height.toFixed(0)}`.padStart(16),
    `${dLon} x ${dLat}`.padStart(18),
    `${ux.toFixed(3)} / ${uy.toFixed(3)}`.padStart(18)
  );
  fitsX.push([(s.lon[0] + s.lon[1]) / 2, (b.minX + b.maxX) / 2]);
  fitsY.push([(s.lat[0] + s.lat[1]) / 2, (b.minY + b.maxY) / 2]);
}

function linfit(pairs) {
  const n = pairs.length;
  const sx = pairs.reduce((s, p) => s + p[0], 0);
  const sy = pairs.reduce((s, p) => s + p[1], 0);
  const sxx = pairs.reduce((s, p) => s + p[0] * p[0], 0);
  const sxy = pairs.reduce((s, p) => s + p[0] * p[1], 0);
  const slope = (n * sxy - sx * sy) / (n * sxx - sx * sx);
  return { slope, intercept: (sy - slope * sx) / n };
}

const fx = linfit(fitsX);
const fy = linfit(fitsY);

console.log('\nFitted transform');
console.log('  x = %s * lon + %s', fx.slope.toFixed(6), fx.intercept.toFixed(3));
console.log('  y = %s * lat + %s', fy.slope.toFixed(6), fy.intercept.toFixed(3));
console.log('\nTextbook full-range equirectangular for %dx%d', W, H);
console.log('  x slope %s, intercept %s', (W / 360).toFixed(6), (W / 2).toFixed(3));
console.log('  y slope %s, intercept %s', (-H / 180).toFixed(6), (H / 2).toFixed(3));

console.log('\nMap extent implied by the fit');
console.log(
  '  lon %s .. %s',
  (-fx.intercept / fx.slope).toFixed(2),
  ((W - fx.intercept) / fx.slope).toFixed(2)
);
console.log(
  '  lat %s .. %s',
  ((H - fy.intercept) / fy.slope).toFixed(2),
  (-fy.intercept / fy.slope).toFixed(2)
);

const ib = pathBBox(byId.get('india').d);
console.log(
  '\nIndia box: x %s..%s  y %s..%s',
  ib.minX.toFixed(2),
  ib.maxX.toFixed(2),
  ib.minY.toFixed(2),
  ib.maxY.toFixed(2)
);
console.log(
  '  centre (%s, %s)',
  ((ib.minX + ib.maxX) / 2).toFixed(2),
  ((ib.minY + ib.maxY) / 2).toFixed(2)
);
