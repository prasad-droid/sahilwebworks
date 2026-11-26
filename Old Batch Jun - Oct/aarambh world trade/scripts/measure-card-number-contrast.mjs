/**
 * Checks that the product-card index number stays legible.
 *
 *   node scripts/measure-card-number-contrast.mjs
 *
 * The number is white text drawn straight onto a product photo, and these
 * photos are pale, so the text colour alone cannot carry the contrast: at
 * 24% white it measured 1.60:1 on beetroot, and raising the alpha made it
 * worse because the photos are lighter than the text. Legibility therefore
 * comes from the .product-card__media::after scrim, so this script parses both
 * the gradient and the text colour out of the stylesheet and composites them
 * over every real product image.
 */
import sharp from 'sharp';
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { luminance, contrast } from './map-style.mjs';

const root = fileURLToPath(new URL('..', import.meta.url));
const CSS_PATH = new URL('../src/styles/products.css', import.meta.url);

/** Pulls one declaration out of a rule body. */
function decl(body, prop) {
  const m = body.match(new RegExp(`(?:^|;)\\s*${prop}\\s*:\\s*([^;]+)`, 'i'));
  if (!m) throw new Error(`products.css is missing "${prop}"`);
  return m[1].trim();
}

/** Parses "46%" or "0.46" into a plain fraction. */
function parseFraction(value) {
  const n = Number.parseFloat(value);
  if (!Number.isFinite(n)) throw new Error(`Cannot read a length from "${value}"`);
  return value.includes('%') ? n / 100 : n;
}

/** Splits "rgba(r,g,b,a)" into channels plus alpha. */
function parseColor(value) {
  const parts = value.match(/[\d.]+/g).map(Number);
  return { rgb: parts.slice(0, 3), alpha: parts.length > 3 ? parts[3] : 1 };
}

const css = readFileSync(CSS_PATH, 'utf8');

const mediaRule = css.match(/\.product-card__media::after\s*\{([^}]*)\}/);
const numRule = css.match(/\.product-card__num\s*\{([^}]*)\}/);
if (!numRule) throw new Error('No .product-card__num rule found in products.css');

if (!mediaRule) {
  // The number is pale white on a pale photo, so without the scrim there is no
  // way for it to pass. Say so plainly instead of failing on a missing rule.
  console.error(
    'No .product-card__media::after scrim in products.css.\n' +
      'The card number is white text on a pale product photo, so it needs the ' +
      'scrim to be legible.\nSee the comment above .product-card__media::after.'
  );
  process.exit(1);
}

const scrim = {
  height: parseFraction(decl(mediaRule[1], 'height')),
  gradient: decl(mediaRule[1], 'background'),
};

const text = parseColor(decl(numRule[1], 'color'));

/*
 * Parse the gradient's stops WITH their positions. Interpolating by stop index
 * instead of by the declared percentage silently misreads any gradient whose
 * stops are not evenly spaced, which is exactly the case here.
 */
const stops = [...scrim.gradient.matchAll(
  /(rgba?\([^)]+\))\s*(-?[\d.]+)%?/gi
)].map(([, color, pos]) => ({ ...parseColor(color), pos: Number.parseFloat(pos) / 100 }));
if (stops.length < 2) throw new Error('Scrim gradient needs at least two colour stops');
// The gradient runs "to top", so the first listed colour sits at the bottom.
stops.sort((a, b) => a.pos - b.pos);

/** Alpha at t in [0,1] across the scrim, where 0 is the bottom of the box. */
function alphaAt(t) {
  if (t <= stops[0].pos) return stops[0].alpha;
  const last = stops[stops.length - 1];
  if (t >= last.pos) return last.alpha;
  for (let i = 0; i < stops.length - 1; i += 1) {
    const a = stops[i];
    const b = stops[i + 1];
    if (t <= b.pos) {
      const k = (t - a.pos) / (b.pos - a.pos);
      return a.alpha + (b.alpha - a.alpha) * k;
    }
  }
  return last.alpha;
}

/*
 * Digit band geometry, in em of the card's own box.
 * .product-card__num: bottom 0.5rem, font-size 2.4rem, line-height 1.
 * The glyphs therefore run from 0.5rem up to 2.9rem, and that whole band must
 * stay legible, so the top of the band is the worst case.
 */
const GLYPH_BOTTOM_REM = 0.5;
const GLYPH_FONT_REM = 2.4;
const CARD_WIDTH_REM = 18; // 288px reference column
const MEDIA_HEIGHT_REM = (CARD_WIDTH_REM * 3) / 4; // aspect-ratio 4 / 3
const scrimPx = scrim.height * MEDIA_HEIGHT_REM;
const worstT = Math.min(0.999, (GLYPH_BOTTOM_REM + GLYPH_FONT_REM) / scrimPx);

const scrimAlpha = alphaAt(worstT);
const scrimRgb = stops[0].rgb;
if (!scrimRgb.every(Number.isFinite)) throw new Error(`Could not read scrim colour from "${scrim.gradient}"`);

const dir = fileURLToPath(new URL('../public/images/products/', import.meta.url));
const files = readdirSync(dir).filter((f) => /\.(jpe?g|png)$/i.test(f));
if (files.length === 0) throw new Error('No product images found');

// WCAG large-text minimum. The number is 2.4rem in the display face.
const MIN = 3;

console.log(
  `scrim ${(scrim.height * 100).toFixed(0)}% of media, alpha ${scrimAlpha.toFixed(2)} at t=${worstT.toFixed(2)} (top of the digit band)`
);
console.log(`text rgba(${text.rgb.join(', ')}, ${text.alpha})\n`);
console.log('image'.padEnd(24), 'brightest pixel under scrim', 'contrast', '  AA-large 3:1');
console.log('-'.repeat(70));

let worstRatio = Infinity;
let worstFile = '';

for (const f of files) {
  const { data, info } = await sharp(`${dir}${f}`).raw().toBuffer({ resolveWithObject: true });
  // Sample the strip the digits occupy, then find its brightest pixel, which is
  // the hardest case for white text.
  const top = Math.floor(info.height * 0.78);
  let brightest = null;
  for (let y = top; y < info.height; y += 1) {
    for (let x = 0; x < info.width; x += 1) {
      const i = (y * info.width + x) * info.channels;
      const composited = [0, 1, 2].map(
        (c) => data[i + c] * (1 - scrimAlpha) + scrimRgb[c] * scrimAlpha
      );
      if (!brightest || luminance(composited) > luminance(brightest)) brightest = composited;
    }
  }
  // Text colour composited the same way the browser antialiases it.
  const glyph = text.rgb.map((c, k) => c * text.alpha + brightest[k] * (1 - text.alpha));
  const ratio = contrast(glyph, brightest);
  if (ratio < worstRatio) {
    worstRatio = ratio;
    worstFile = f;
  }
  console.log(
    f.padEnd(24),
    `rgb(${String(brightest.map((c) => Math.round(c))).padEnd(11)})`,
    `${ratio.toFixed(2)}:1`.padStart(9),
    `  ${ratio >= MIN ? 'PASS' : 'FAIL'}`
  );
}

console.log(`\nWorst case ${worstRatio.toFixed(2)}:1 on ${worstFile}.`);
if (worstRatio < MIN) {
  console.error(`Card number is too faint. Raise the scrim plateau or the text alpha in products.css.`);
  process.exit(1);
}
console.log(`Card number is legible on all ${files.length} product photos.`);
