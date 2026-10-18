/**
 * Installs the curated Wikimedia Commons product photos.
 *
 *   node scripts/install-commons-product-images.mjs --dry-run   # preview only
 *   node scripts/install-commons-product-images.mjs
 *
 * Commons is used instead of the Openverse API because Openverse now sits
 * behind a Cloudflare challenge that blocks this environment. The Commons API
 * is open and returns creator/licence metadata inline, which is written to
 * src/data/imageCredits.js so the photos stay properly attributed.
 *
 * Every file is centre-cropped to 4:3 to match .product-card__media, so the
 * CSS cover-crop, the dark number scrim and the contrast measurement in
 * scripts/measure-card-number-contrast.mjs all agree on the same geometry.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const CREDITS = path.join(ROOT, 'src', 'data', 'imageCredits.js');
const DRY = process.argv.includes('--dry-run');
const UA = { 'User-Agent': 'AarambhWorldtradeSiteBuilder/1.0 (image sourcing)' };

/**
 * Curated by hand after reviewing search results, so nothing is auto-accepted.
 * `note` records what the photo actually shows, which is not always a powder -
 * the card is labelled 'category', never presented as an actual product shot.
 */
const PICKS = [
  {
    slot: 'garlic-powder.jpg',
    title: 'Garlic Powder, Penzeys Spices, Arlington Heights MA.jpg',
    shows: 'a bowl of garlic powder',
  },
  {
    slot: 'coriander-powder.jpg',
    title: 'Koriander-spice.jpg',
    shows: 'ground coriander spice',
  },
  {
    slot: 'spices.jpg',
    title: 'Spices in an Indian kitchen.JPG',
    shows: 'an array of Indian spices',
  },
  {
    slot: 'tomato-powder.jpg',
    title: 'Dried tomatoes (8406228879).jpg',
    shows: 'dried tomato, the dehydrated source of tomato powder',
  },
  {
    slot: 'beetroot-powder.jpg',
    title: 'Beet root vegetable.jpg',
    shows: 'fresh beetroot, the source of beetroot powder',
  },
  {
    slot: 'banana-powder.jpg',
    title: 'Plantain banana powder.jpg',
    shows: 'banana powder',
    position: 'centre',
  },
];

// Real business photographs. Never overwrite these. Their originals are backed
// up outside public/ in _archive/product-originals/.
const PROTECTED = new Set(['onion-powder.jpg', 'moringa-powder.jpg']);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const strip = (s = '') => s.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

async function imageInfo(title) {
  const u = new URL('https://commons.wikimedia.org/w/api.php');
  u.searchParams.set('action', 'query');
  u.searchParams.set('format', 'json');
  u.searchParams.set('titles', `File:${title}`);
  u.searchParams.set('prop', 'imageinfo');
  u.searchParams.set('iiprop', 'url|extmetadata|size|mime');
  u.searchParams.set('iiurlwidth', '2400');

  for (let attempt = 0; attempt < 5; attempt += 1) {
    const res = await fetch(u, { headers: UA });
    const text = await res.text();
    if (text.trimStart().startsWith('{')) {
      const page = Object.values(JSON.parse(text).query?.pages || {})[0];
      if (page?.imageinfo?.[0]) return page.imageinfo[0];
      throw new Error(`no imageinfo for ${title}`);
    }
    const wait = 20000 * (attempt + 1);
    console.log(`    rate limited - waiting ${wait / 1000}s`);
    await sleep(wait);
  }
  throw new Error('rate limited repeatedly');
}

async function download(url) {
  for (let attempt = 0; attempt < 4; attempt += 1) {
    const res = await fetch(url, { headers: UA, redirect: 'follow' });
    if (res.ok) {
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length > 20_000) return buf;
    }
    await sleep(5000 * (attempt + 1));
  }
  throw new Error('download failed');
}

// Preserve the existing file's leading comment block, including the warning
// about the records that are still missing.
function readCredits() {
  if (!fs.existsSync(CREDITS)) return { header: '', entries: [] };
  const txt = fs.readFileSync(CREDITS, 'utf8');
  const m = txt.match(/^([\s\S]*?)export const imageCredits = (\[[\s\S]*?\]);/);
  if (!m) return { header: '', entries: [] };
  return { header: m[1], entries: JSON.parse(m[2]) };
}

const { header, entries } = readCredits();
const index = new Map(entries.map((e) => [e.file, e]));
const results = [];
const failures = [];

for (const pick of PICKS) {
  if (PROTECTED.has(pick.slot)) {
    console.log(`= ${pick.slot} (protected business photo)`);
    continue;
  }

  try {
    const ii = await imageInfo(pick.title);
    const em = ii.extmetadata || {};
    const src = ii.thumburl || ii.url;
    const dest = path.join(ROOT, 'public', 'images', 'products', pick.slot);
    const webPath = `/images/products/${pick.slot}`;
    const ratio = (ii.width || 0) / (ii.height || 1);
    const portrait = ratio < 1;

    console.log(`\n${pick.slot}`);
    console.log(`  source : ${pick.title}`);
    console.log(`  shows  : ${pick.shows}`);
    console.log(`  size   : ${ii.width}x${ii.height} ${portrait ? '(portrait - will centre-crop)' : ''}`);
    console.log(`  licence: ${strip(em.LicenseShortName?.value)} by ${strip(em.Artist?.value)}`);

    if (!DRY) {
      const buf = await download(src);
      const tmp = `${dest}.tmp`;
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      await sharp(buf, { failOn: 'none' })
        .rotate()
        .resize({ width: 1400, height: 1050, fit: 'cover', position: pick.position || 'centre' })
        .jpeg({ quality: 84, mozjpeg: true, progressive: true })
        .toFile(tmp);
      fs.renameSync(tmp, dest);
    }

    index.set(webPath, {
      file: webPath,
      title: pick.title.replace(/\.(jpe?g|png)$/i, ''),
      creator: strip(em.Artist?.value) || 'Unknown',
      creatorUrl: em.Artist?.url || '',
      license: strip(em.LicenseShortName?.value),
      licenseUrl: em.LicenseUrl?.value || '',
      sourceUrl: ii.descriptionurl,
      shows: pick.shows,
    });
    results.push(pick.slot);
  } catch (err) {
    console.log(`  FAILED: ${err.message}`);
    failures.push(pick.slot);
  }
  await sleep(4000);
}

if (!DRY) {
  const merged = [...index.values()].sort((a, b) => a.file.localeCompare(b.file));
  fs.writeFileSync(
    CREDITS,
    `${header}export const imageCredits = ${JSON.stringify(merged, null, 2)};\n\nexport default imageCredits;\n`,
    'utf8'
  );
}

console.log(`\n${DRY ? 'DRY RUN - nothing written.' : 'Done.'}`);
console.log(`  installed/updated: ${results.length}  (${results.join(', ') || 'none'})`);
console.log(`  credits entries  : ${index.size}`);
if (failures.length) console.log(`  failed           : ${failures.join(', ')}`);
