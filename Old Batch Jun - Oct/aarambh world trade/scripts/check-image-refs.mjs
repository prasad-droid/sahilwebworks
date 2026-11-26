/**
 * Verifies that every /images/... path referenced in the source actually
 * exists in public/. Catches typos and stale filenames before they reach the
 * browser as broken images.
 *
 *   node scripts/check-image-refs.mjs
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const dirs = ['src'];

/** Only match paths that end in a real image extension, so prose in comments
 *  (e.g. "images in /public/images/products/.") is not treated as a reference. */
const REF = /\/images\/[A-Za-z0-9._/-]+\.(?:jpe?g|png|webp|avif|svg)/g;

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (/\.(jsx?|css)$/.test(entry.name)) out.push(full);
  }
  return out;
}

const files = dirs.flatMap((d) => walk(join(root, d)));
const refs = new Map();

for (const file of files) {
  const text = readFileSync(file, 'utf8');
  for (const m of text.matchAll(REF)) {
    const ref = m[0];
    if (!refs.has(ref)) refs.set(ref, new Set());
    refs.get(ref).add(file.replace(root + '\\', '').replace(/\\/g, '/'));
  }
}

let missing = 0;
for (const [ref, where] of [...refs].sort()) {
  const abs = join(root, 'public', ref.replace(/^\//, ''));
  let ok = false;
  try {
    ok = statSync(abs).isFile();
  } catch {
    ok = false;
  }
  if (!ok) {
    missing += 1;
    console.log('MISSING', ref, '<-', [...where].join(', '));
  }
}

console.log(`\n${refs.size} unique image references, ${missing} missing`);
process.exit(missing ? 1 : 0);
