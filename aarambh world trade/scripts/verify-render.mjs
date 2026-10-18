/**
 * Renders the app to static HTML and asserts the things that are easy to break
 * silently: invalid SVG viewBox numbers, removed sections and copy, the
 * #bulk-order scroll target, and route markers landing inside the map.
 *
 *   node scripts/verify-render.mjs
 */
import { build } from 'esbuild';
import { writeFileSync, rmSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { renderToStaticMarkup } from 'react-dom/server';
import { MIN_MAP_CONTRAST, worstMapContrast } from './map-style.mjs';

// fileURLToPath decodes percent-encoding, which matters because the project
// path contains a space.
const root = fileURLToPath(new URL('..', import.meta.url));

// The entry and bundle live inside the project so esbuild and Node can
// resolve react from ./node_modules.
const entry = join(root, 'scripts', '.verify-entry.jsx');
const out = join(root, 'scripts', '.verify-bundle.mjs');
let failed = 1;

writeFileSync(
  entry,
  `import { createElement } from 'react';
   import { renderToStaticMarkup } from 'react-dom/server';
   import { App } from '../src/App.jsx';
   export const html = renderToStaticMarkup(createElement(App));`
);

try {
  await build({
    entryPoints: [entry],
    bundle: true,
    outfile: out,
    format: 'esm',
    platform: 'node',
    jsx: 'automatic',
    loader: { '.js': 'jsx' },
    // react-dom/server is CJS and does dynamic requires, so it must not be
    // inlined into the ESM bundle.
    external: ['react', 'react-dom', 'react-dom/server', 'react/jsx-runtime', 'react/jsx-dev-runtime'],
    define: { 'process.env.NODE_ENV': '"production"' },
    logLevel: 'error',
    absWorkingDir: root,
  });

  const { html } = await import(pathToFileURL(out).href);
  // Must not call process.exit() here, or the finally block never runs and the
  // temporary files are left behind.
  failed = verify(html);
} finally {
  rmSync(entry, { force: true });
  rmSync(out, { force: true });
}

process.exit(failed === 0 ? 0 : 1);

function verify(html) {
let failures = 0;
const check = (label, pass, detail = '') => {
  if (!pass) failures += 1;
  console.log(`${pass ? 'PASS' : 'FAIL'}  ${label}${detail ? ` -> ${detail}` : ''}`);
};

console.log(`rendered ${html.length} bytes\n`);

// --- map ------------------------------------------------------------------
const viewBoxes = [...html.matchAll(/viewBox="([^"]*)"/g)].map((m) => m[1]);
check('every viewBox is numeric', viewBoxes.every((v) => !/NaN|undefined/.test(v)), viewBoxes.join(' | '));

const mapVb = viewBoxes.find((v) => v.includes('966') || v.includes('620')) ?? viewBoxes[0];
if (mapVb) {
  const [, , w, h] = mapVb.split(/\s+/).map(Number);
  check('map viewBox has positive size', w > 0 && h > 0, `${w}x${h}`);
}

// Route marker coordinates must sit inside the padded viewBox.
const dots = [...html.matchAll(/class="[^"]*markets__route-dot[^"]*"[^>]*cx="([\d.-]+)" cy="([\d.-]+)"/g)].map(
  (m) => ({ x: Number(m[1]), y: Number(m[2]) })
);
if (!dots.length) {
  const anyDots = [...html.matchAll(/cx="([\d.-]+)"\s+cy="([\d.-]+)"/g)].map((m) => ({
    x: Number(m[1]),
    y: Number(m[2]),
  }));
  check('route markers parsed', anyDots.length > 0, `${anyDots.length} circles`);
  if (mapVb) {
    const [, , w, h] = mapVb.split(/\s+/).map(Number);
    const outside = anyDots.filter((p) => !(p.x >= 0 && p.x <= w && p.y >= 0 && p.y <= h));
    check('all route markers inside viewBox', outside.length === 0, `${outside.length} outside`);
  }
} else {
  check('route markers parsed', true, `${dots.length} dots`);
}

// --- removed content ------------------------------------------------------
const removed = {
  'certifications/accreditations note': 'not certifications or accreditations',
  'products imagery disclaimer': 'representative stock photography',
  'end-to-end support block': 'End-to-end support',
  'gallery stock note': 'openly-licensed photographs',
  'footer disclaimer': 'are not guaranteed on this page',
  'quality approach section': 'Quality approach',
  'testimonials section': 'Testimonial',
};
for (const [label, needle] of Object.entries(removed)) {
  check(`removed: ${label}`, !html.includes(needle), needle);
}

// --- added / preserved ----------------------------------------------------
check('footer credit present', html.includes('Designed By SahilWebWorks'));
check('footer credit links to sahilwebworks', /Designed By SahilWebWorks/.test(html) && html.includes('https://www.sahilwebworks.com/'));
check('#bulk-order scroll target kept', html.includes('id="bulk-order"'));
check('quote form is inside the contact section', /id="contact"[\s\S]*id="bulk-order"/.test(html));
check('About uses supplied product photos', html.includes('/images/products/onion-powder.jpg') && html.includes('/images/products/moringa-powder.jpg'));
check('whatsapp form present', html.includes('Send Enquiry via WhatsApp'));
check('contact channels present', html.includes('WhatsApp') && html.includes('aarambhworldtrade@gmail.com'));

// --- structure ------------------------------------------------------------
const h1 = (html.match(/<h1[\s>]/g) || []).length;
check('exactly one h1', h1 === 1, `${h1}`);

// Every in-page link target must resolve to a real element, or scrolling and
// the skip link silently do nothing.
const linkTargets = [...new Set([...html.matchAll(/href="#([a-z0-9-]+)"/g)].map((m) => m[1]))];
const dangling = linkTargets.filter((id) => !html.includes(`id="${id}"`));
check('every #anchor link resolves', dangling.length === 0, dangling.join(', ') || `${linkTargets.length} targets ok`);
check('no duplicate id="bulk-order"', (html.match(/id="bulk-order"/g) || []).length === 1);

// --- reveal variants -------------------------------------------------------
// Only .reveal--up and .reveal--scale used to have an .is-visible rule, so
// left / right / fade stayed at opacity 0 forever and silently blanked the
// About image column, the trust strip and the contact map. The visible state
// must be variant independent.
const globalCss = readFileSync(join(root, 'src', 'styles', 'global.css'), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
check(
  'a single variant-independent .reveal.is-visible rule exists',
  /\.reveal\.is-visible\s*\{[^}]*opacity:\s*1[^}]*\}/.test(globalCss)
);
const variantVisible = [...globalCss.matchAll(/\.reveal--[a-z]+\.is-visible/g)].map((m) => m[0]);
check(
  'no variant-specific .reveal--x.is-visible rules (would drift again)',
  variantVisible.length === 0,
  variantVisible.join(', ') || 'none'
);

const revealVariants = new Set(
  [...html.matchAll(/class="[^"]*\breveal--(up|down|left|right|scale|fade)\b/g)].map((m) => m[1])
);
check('reveal variants render in the markup', revealVariants.size > 0, [...revealVariants].join(', '));

// Without JS the .is-visible class is never added, so the failsafe must exist
// or whole sections stay invisible on script failure.
const indexHtml = readFileSync(join(root, 'index.html'), 'utf8');
check('html starts with the no-js class', /<html[^>]*\bclass="no-js"/.test(indexHtml));
check('no-js class is removed by an inline script', /classList\.remove\(['"]no-js['"]\)/.test(indexHtml));
check('no-js forces reveal content visible', /\.no-js \.reveal[\s\S]{0,200}?opacity:\s*1\s*!important/.test(globalCss));

// --- map legibility --------------------------------------------------------
// The map shipped at 1.33:1 against the section background, which is why it
// looked like it had not loaded. Assert the fill clears the WCAG AA 3:1
// non-text minimum on the lightest backdrop too.
const mapContrast = worstMapContrast();
check(
  `map fill clears ${MIN_MAP_CONTRAST}:1 against the lightest backdrop`,
  mapContrast >= MIN_MAP_CONTRAST,
  `${mapContrast.toFixed(2)}:1`
);

console.log(failures === 0 ? '\nAll checks passed.' : `\n${failures} check(s) failed.`);
return failures;
}
