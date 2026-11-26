/**
 * Reports which SVG path commands appear in the generated world-map data.
 *   node scripts/map-path-commands.mjs
 */
import { readFileSync } from 'node:fs';

const text = readFileSync(new URL('../src/assets/worldMap.js', import.meta.url), 'utf8');

const dValues = [...text.matchAll(/"d":"([^"]+)"/g)].map((m) => m[1]);
console.log('paths:', dValues.length);

const letters = new Set();
for (const d of dValues) {
  for (const c of d.match(/[A-Za-z]/g) || []) letters.add(c);
}
console.log('command letters used:', [...letters].sort().join(' '));

const odd = dValues.filter((d) => /[^MlL0-9.,\s-]/.test(d));
console.log('paths containing other commands:', odd.length);
if (odd.length) console.log('example:', odd[0].slice(0, 220));
