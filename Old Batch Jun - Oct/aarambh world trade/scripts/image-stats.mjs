/**
 * Reports basic image statistics for the supplied stock files.
 *
 * Used to catch degenerate assets (blank / near-uniform / all-black images)
 * that would otherwise look like a missing image on the page. sharp cannot
 * tell us whether a photo is the *right* photo, but it can prove a file is
 * not blank and is not a solid colour.
 *
 *   node scripts/image-stats.mjs [subdir]
 */
import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';

const subdir = process.argv[2] ?? 'images';
const dir = join(process.cwd(), 'public', subdir);

function walk(d, out = []) {
  for (const entry of readdirSync(d, { withFileTypes: true })) {
    const full = join(d, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (/\.(jpe?g|png|webp)$/i.test(entry.name)) out.push(full);
  }
  return out;
}

const files = walk(dir).sort();
const problems = [];

console.log(
  'file'.padEnd(46),
  'size'.padStart(11),
  'mean'.padStart(7),
  'stdev'.padStart(7),
  'status'
);

for (const file of files) {
  const rel = file.replace(join(process.cwd(), 'public') + '\\', '');
  const { width, height } = await sharp(file).metadata();
  const { channels, isOpaque } = await sharp(file).stats();

  const mean = channels.reduce((s, c) => s + c.mean, 0) / channels.length;
  const stdev = channels.reduce((s, c) => s + c.stdev, 0) / channels.length;

  let status = 'ok';
  if (!width || !height) status = 'NO DIMENSIONS';
  else if (width < 200 || height < 200) status = 'TOO SMALL';
  else if (stdev < 8) status = 'NEARLY BLANK';

  if (status !== 'ok') problems.push(`${rel} -> ${status}`);
  if (!isOpaque && /\.png$/i.test(file)) {
    // transparent PNG: report but do not fail (logos are legitimately alpha)
    status += ' (alpha)';
  }

  console.log(
    rel.padEnd(46),
    `${width}x${height}`.padStart(11),
    mean.toFixed(1).padStart(7),
    stdev.toFixed(1).padStart(7),
    status
  );
}

console.log(`\n${files.length} images, ${problems.length} problem(s)`);
problems.forEach((p) => console.log('  -', p));
process.exit(problems.length ? 1 : 0);
