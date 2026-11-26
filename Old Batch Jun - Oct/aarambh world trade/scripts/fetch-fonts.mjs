/**
 * Self-hosts the two webfonts used by the site so there is no third-party
 * runtime request (and no layout shift from a late font swap).
 *
 *   node scripts/fetch-fonts.mjs
 *
 * Produces src/fonts/fonts.css + src/fonts/*.woff2
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const FONT_DIR = path.join(ROOT, 'src', 'fonts');

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

const FAMILIES = [
  {
    css: 'Fraunces:opsz,wght@9..144,400..700',
    file: 'fraunces',
    keep: ['latin', 'latin-ext'],
  },
  {
    css: 'Manrope:wght@400..800',
    file: 'manrope',
    keep: ['latin', 'latin-ext'],
  },
];

// Google Fonts CSS annotates each block with a subset comment, e.g. "latin".
const BLOCK_RE = /\/\*\s*([a-z0-9-]+)\s*\*\/\s*@font-face\s*\{([\s\S]*?)\}/g;

async function grab(cssQuery, file) {
  const url = `https://fonts.googleapis.com/css2?family=${cssQuery}&display=swap`;
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`css2 ${res.status} for ${cssQuery}`);
  const css = await res.text();

  const wanted = new Set(FAMILIES.find((f) => f.file === file).keep);
  const out = [];
  let m;
  BLOCK_RE.lastIndex = 0;
  while ((m = BLOCK_RE.exec(css)) !== null) {
    const subset = m[1];
    if (!wanted.has(subset)) continue;
    const body = m[2];
    const src = body.match(/url\((https:[^)]+)\)/);
    if (!src) continue;
    const weight = (body.match(/font-weight:\s*([^;]+);/) || [, '400'])[1].trim();
    const style = (body.match(/font-style:\s*([^;]+);/) || [, 'normal'])[1].trim();
    const unicodeRange = (body.match(/unicode-range:\s*([^;]+);/) || [, ''])[1].trim();
    const family = (body.match(/font-family:\s*'([^']+)'/) || [, ''])[1].trim();

    const name = `${file}-${subset}-${weight.replace(/\s+/g, '_')}.woff2`;
    const dest = path.join(FONT_DIR, name);

    if (!fs.existsSync(dest)) {
      const fr = await fetch(src[1], { headers: { 'User-Agent': UA } });
      if (!fr.ok) throw new Error(`font ${fr.status} ${name}`);
      fs.mkdirSync(FONT_DIR, { recursive: true });
      fs.writeFileSync(dest, Buffer.from(await fr.arrayBuffer()));
    }

    out.push(
      [
        '@font-face {',
        `  font-family: '${family}';`,
        `  font-style: ${style};`,
        `  font-weight: ${weight};`,
        '  font-display: swap;',
        `  src: url('./${name}') format('woff2');`,
        `  unicode-range: ${unicodeRange};`,
        '}',
      ].join('\n')
    );
    console.log(`  ${name.padEnd(34)} ${(fs.statSync(dest).size / 1024).toFixed(1)} KB`);
  }
  return out;
}

const blocks = [];
for (const fam of FAMILIES) {
  console.log(`\n${fam.file}:`);
  blocks.push(...(await grab(fam.css, fam.file)));
}

fs.writeFileSync(
  path.join(FONT_DIR, 'fonts.css'),
  `/* GENERATED FILE - rebuild with: node scripts/fetch-fonts.mjs
   Self-hosted webfonts: no third-party requests, no FOUT layout shift. */\n\n${blocks.join('\n\n')}\n`,
  'utf8'
);

const total = fs
  .readdirSync(FONT_DIR)
  .filter((f) => f.endsWith('.woff2'))
  .reduce((sum, f) => sum + fs.statSync(path.join(FONT_DIR, f)).size, 0);
console.log(`\n${blocks.length} @font-face block(s), ${(total / 1024).toFixed(1)} KB total.`);
