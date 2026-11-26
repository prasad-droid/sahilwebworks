/**
 * Strips the opaque white background out of the logo and writes a transparent
 * PNG.
 *
 *   node scripts/make-logo-transparent.mjs
 *
 * Two things make this less trivial than a flat "white -> transparent" key:
 *
 *  1. The logo has ~991 near-white pixels INSIDE the artwork (white text inside
 *     the mark). A flat key deletes them and punches holes in the logo, so the
 *     background is found with a flood fill from the image border instead. Only
 *     pixels connected to the edge are treated as background.
 *
 *  2. Anti-aliased edge pixels are a blend of the white backdrop and the ink,
 *     e.g. (240,240,240). Simply dropping their alpha leaves a pale halo that
 *     shows up against the dark header. The alpha is therefore derived from how
 *     far each pixel is from white, and the colour is un-matted back to the
 *     original ink so the edge blends into any backdrop.
 *
 * The original file is left untouched; the result goes to logo-transparent.png.
 */
import sharp from 'sharp';
import { existsSync, copyFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const SRC = fileURLToPath(new URL('../public/images/business/logo.png', import.meta.url));
const OUT = fileURLToPath(new URL('../public/images/business/logo-transparent.png', import.meta.url));

// Pixels at least this white are candidates for background.
const WHITE_CUTOFF = 225;
// How far below the cutoff still counts as background, to catch soft edges.
const SOFT_CUTOFF = 250;

if (!existsSync(SRC)) {
  console.error(`Source logo not found: ${SRC}`);
  process.exit(1);
}

const { data, info } = await sharp(SRC).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width: W, height: H, channels: C } = info;

const px = (x, y) => {
  const i = (y * W + x) * C;
  return [data[i], data[i + 1], data[i + 2], data[i + 3]];
};
const isWhite = (p) => p[0] >= WHITE_CUTOFF && p[1] >= WHITE_CUTOFF && p[2] >= WHITE_CUTOFF;

// --- 1. Flood fill the background from the border ---------------------------
const background = new Uint8Array(W * H);
const stack = [];
for (let x = 0; x < W; x += 1) stack.push([x, 0], [x, H - 1]);
for (let y = 0; y < H; y += 1) stack.push([0, y], [W - 1, y]);

while (stack.length > 0) {
  const [x, y] = stack.pop();
  const k = y * W + x;
  if (background[k] || !isWhite(px(x, y))) continue;
  background[k] = 1;
  if (x > 0) stack.push([x - 1, y]);
  if (x < W - 1) stack.push([x + 1, y]);
  if (y > 0) stack.push([x, y - 1]);
  if (y < H - 1) stack.push([x, y + 1]);
}

let backgroundCount = 0;
for (let i = 0; i < background.length; i += 1) backgroundCount += background[i];

// --- 2. Un-matte the background, keep the artwork untouched ----------------
const out = Buffer.from(data);
let cleared = 0;

for (let y = 0; y < H; y += 1) {
  for (let x = 0; x < W; x += 1) {
    const k = y * W + x;
    if (!background[k]) continue;
    const i = k * C;
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    // Coverage of ink: distance from pure white, taken from the darkest channel
    // because that is where ink registers first. Anything at or above the soft
    // cutoff is treated as pure backdrop.
    const minChannel = Math.min(r, g, b);
    const alpha = minChannel >= SOFT_CUTOFF ? 0 : 255 - minChannel;
    if (alpha <= 0) {
      out[i] = 0;
      out[i + 1] = 0;
      out[i + 2] = 0;
      out[i + 3] = 0;
      cleared += 1;
      continue;
    }

    // Un-matte: observed = ink * a + 255 * (1 - a)  =>  ink = (observed - 255*(1-a)) / a
    const a = alpha / 255;
    out[i] = Math.max(0, Math.min(255, Math.round((r - 255 * (1 - a)) / a)));
    out[i + 1] = Math.max(0, Math.min(255, Math.round((g - 255 * (1 - a)) / a)));
    out[i + 2] = Math.max(0, Math.min(255, Math.round((b - 255 * (1 - a)) / a)));
    out[i + 3] = alpha;
  }
}

await sharp(out, { raw: { width: W, height: H, channels: 4 } })
  .png({ compressionLevel: 9 })
  .toFile(OUT);

// Keep a pristine copy of the original in case the matte needs re-processing.
const BACKUP = fileURLToPath(new URL('../public/images/business/logo-original.png', import.meta.url));
if (!existsSync(BACKUP)) copyFileSync(SRC, BACKUP);

const total = W * H;
const keptWhite = [];
for (let i = 0; i < out.length; i += C) {
  if (out[i + 3] > 250 && out[i] > 250 && out[i + 1] > 250 && out[i + 2] > 250) keptWhite.push(1);
}

console.log(`source        ${SRC}`);
console.log(`output        ${OUT}`);
console.log(`size          ${W}x${H}`);
console.log(`background    ${backgroundCount} px (${(backgroundCount / total * 100).toFixed(1)}%)`);
console.log(`fully clear   ${cleared} px (${(cleared / total * 100).toFixed(1)}%)`);
console.log(`kept white    ${keptWhite.length} px (interior white, preserved)`);
