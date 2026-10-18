/**
 * Verifies the logo really has a transparent background.
 *
 *   node scripts/verify-logo.mjs
 *
 * The supplied logo.png has an opaque white matte baked in (89% of its pixels),
 * and the header additionally painted a white panel behind it. Either one on its
 * own puts a white box around the mark, so both are checked here: the PNG must
 * actually be transparent, and no stylesheet may put a background behind it.
 */
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const TRANSPARENT = fileURLToPath(new URL('../public/images/business/logo-transparent.png', import.meta.url));

let failures = 0;
const check = (label, pass, detail = '') => {
  if (!pass) failures += 1;
  console.log(`${pass ? 'PASS' : 'FAIL'}  ${label}${detail ? ` -> ${detail}` : ''}`);
};

// --- the PNG itself --------------------------------------------------------
const { data, info } = await sharp(TRANSPARENT).raw().toBuffer({ resolveWithObject: true });
const C = info.channels;
const total = data.length / C;

let clear = 0;
let solid = 0;
let paleOpaque = 0;
for (let i = 0; i < data.length; i += C) {
  const a = data[i + 3];
  if (a === 0) clear += 1;
  else if (a === 255) {
    solid += 1;
    if (data[i] >= 225 && data[i + 1] >= 225 && data[i + 2] >= 225) paleOpaque += 1;
  }
}

check('logo is 512x512', info.width === 512 && info.height === 512, `${info.width}x${info.height}`);
check(
  'background is transparent',
  clear / total > 0.7,
  `${((clear / total) * 100).toFixed(1)}% fully clear`
);
check('artwork is still opaque', solid / total > 0.02, `${((solid / total) * 100).toFixed(1)}% solid`);
// Interior white (e.g. text inside the mark) must survive, but a solid white
// slab would mean the matte was never removed.
check(
  'no solid white slab left behind',
  paleOpaque / solid < 0.2,
  `${paleOpaque} opaque near-white px of ${solid}`
);

// No pale halo on the soft edge, which would show against the dark header.
let partial = 0;
let halo = 0;
for (let i = 0; i < data.length; i += C) {
  const a = data[i + 3];
  if (a > 0 && a < 255) {
    partial += 1;
    if (Math.min(data[i], data[i + 1], data[i + 2]) > 235) halo += 1;
  }
}
check('no white halo on the antialiased edge', halo === 0, `${halo} of ${partial} partial px`);

// --- the stylesheet must not repaint a box behind it -----------------------
const navCss = readFileSync(new URL('../src/styles/navbar.css', import.meta.url), 'utf8');
const markRules = [...navCss.matchAll(/\.nav__brand-mark\s*\{([^}]*)\}/g)].map((m) => m[1]);
check('.nav__brand-mark still exists', markRules.length > 0, `${markRules.length} rule(s)`);
for (const body of markRules) {
  check(
    'no background painted behind the header logo',
    !/background\s*:/.test(body),
    (body.match(/background\s*:\s*([^;]+)/) || [])[1] || 'clean'
  );
  check('no border-radius panel behind the header logo', !/border-radius\s*:/.test(body));
}
check(
  'transparent nav rule no longer paints a panel',
  !/\.nav--transparent\s+\.nav__brand-mark\s*\{[^}]*background/.test(navCss)
);

// The site must reference the transparent file, not the matted original.
const business = readFileSync(new URL('../src/data/business.js', import.meta.url), 'utf8');
check('LOGO points at the transparent file', /logo-transparent\.png/.test(business));
check('LOGO does not point at the matted original', !/src:\s*'\/images\/business\/logo\.png'/.test(business));

// The opaque original is intentionally kept for the favicon.
const indexHtml = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
check('favicon still uses the opaque original', /rel="icon"[^>]*logo\.png/.test(indexHtml));

console.log(failures === 0 ? '\nAll logo checks passed.' : `\n${failures} check(s) failed.`);
process.exit(failures === 0 ? 0 : 1);
