/**
 * Downloads openly-licensed stock photography for the AARAMBH WORLDTRADE site
 * from the Openverse API (aggregates Flickr / Wikimedia / etc.) and processes
 * everything to web-friendly JPEGs with sharp.
 *
 *   node scripts/fetch-stock-images.mjs            # fill any missing slots
 *   node scripts/fetch-stock-images.mjs --force    # re-fetch everything
 *   node scripts/fetch-stock-images.mjs --force --only=products/
 *
 * --only=<substring> restricts the run to slots whose file path contains the
 * given substring, so a single section can be refreshed without churning the
 * rest of the site.
 *
 * Attribution for every chosen file is written to src/data/imageCredits.js.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const IMG_DIR = path.join(ROOT, 'public', 'images');

const UA = { 'User-Agent': 'AarambhWorldtradeSiteBuilder/1.0 (image sourcing)' };
const FORCE = process.argv.includes('--force');
const ONLY = (process.argv.find((a) => a.startsWith('--only=')) || '').slice('--only='.length) || null;

/* ------------------------------------------------------------------ */
/* Slots                                                               */
/* ------------------------------------------------------------------ */
const SLOTS = [
  // ---- Products -----------------------------------------------------
  // NOTE: onion-powder.jpg and moringa-powder.jpg are deliberately absent.
  // Those are real photographs supplied by the business (imageKind:
  // 'company' in src/data/products.js), not stock, and must not be
  // overwritten by an automated fetch. Backups of the originals are kept
  // outside public/ in _archive/product-originals/ so they are never deployed.
  {
    file: 'products/garlic-powder.jpg',
    width: 1200,
    queries: ['garlic powder', 'ground garlic powder', 'dried garlic powder spice'],
    keywords: ['garlic', 'garlic powder', 'powder'],
  },
  {
    file: 'products/coriander-powder.jpg',
    width: 1200,
    queries: ['coriander powder', 'ground coriander', 'dried coriander seeds powder'],
    keywords: ['coriander', 'powder', 'ground'],
  },
  {
    file: 'products/tomato-powder.jpg',
    width: 1200,
    queries: ['tomato powder', 'dried tomato powder', 'tomato powder spice bowl'],
    keywords: ['tomato'],
  },
  {
    file: 'products/ginger-powder.jpg',
    width: 1200,
    queries: ['ginger powder', 'ground ginger powder', 'dried ginger spice'],
    keywords: ['ginger'],
  },
  {
    file: 'products/beetroot-powder.jpg',
    width: 1200,
    queries: ['beetroot powder', 'beetroot juice powder', 'dried beetroot'],
    keywords: ['beet', 'beetroot'],
  },
  {
    file: 'products/banana-powder.jpg',
    width: 1200,
    queries: ['banana powder', 'banana flour powder', 'dried banana powder'],
    keywords: ['banana'],
  },
  {
    file: 'products/spices.jpg',
    width: 1400,
    queries: ['indian spices', 'spices market india', 'indian spices bowls'],
    keywords: ['spice', 'masala', 'india'],
  },
  {
    file: 'products/rice.jpg',
    width: 1400,
    queries: ['basmati rice', 'basmati rice grains', 'raw rice grains'],
    keywords: ['rice', 'basmati'],
  },
  {
    file: 'products/raisins.jpg',
    width: 1200,
    queries: ['raisins', 'sultana raisins', 'dried grapes'],
    keywords: ['raisin', 'sultana', 'grape'],
  },
  {
    file: 'products/other-agro.jpg',
    width: 1400,
    queries: ['lentils assortment', 'pulses beans grains', 'lentils bowls'],
    keywords: ['lentil', 'pulse', 'bean', 'grain', 'dal'],
  },

  // ---- Hero ---------------------------------------------------------
  {
    file: 'stock/hero-spices.jpg',
    width: 2000,
    queries: ['indian spices', 'spice market india colourful', 'indian spices bowls'],
    keywords: ['spice', 'masala', 'india'],
    min: { w: 1400, h: 800 },
  },
  {
    file: 'stock/hero-trade.jpg',
    width: 2000,
    queries: ['container ship port', 'shipping containers port', 'container terminal'],
    keywords: ['container', 'port', 'ship', 'terminal', 'crane'],
    min: { w: 1400, h: 800 },
  },

  // ---- Business sections -------------------------------------------
  {
    file: 'business/about-agriculture.jpg',
    width: 1400,
    queries: ['rice paddy field', 'paddy field india', 'india agriculture field'],
    keywords: ['paddy', 'rice', 'field', 'agricultur', 'india'],
  },
  {
    file: 'business/about-sourcing.jpg',
    width: 1200,
    queries: ['spice market india', 'grain market sacks', 'market sacks vendor'],
    keywords: ['spice', 'market', 'sack', 'grain', 'vendor'],
  },
  {
    file: 'business/quality-inspection.jpg',
    width: 1400,
    queries: ['food laboratory testing', 'laboratory analysis', 'quality control laboratory'],
    keywords: ['laborator', 'lab', 'analysis', 'quality', 'test'],
  },
  {
    file: 'business/packaging.jpg',
    width: 1200,
    queries: ['food packaging bags', 'bulk sacks packaging', 'packaging bags'],
    keywords: ['packaging', 'bag', 'sack', 'bulk'],
  },
  {
    file: 'business/warehouse-bulk.jpg',
    width: 1600,
    queries: ['warehouse pallets', 'grain warehouse storage', 'warehouse storage goods'],
    keywords: ['warehouse', 'pallet', 'storage', 'sack', 'depot'],
  },
  {
    file: 'business/loading.jpg',
    width: 1600,
    queries: ['cargo containers loading', 'forklift warehouse loading', 'freight loading'],
    keywords: ['cargo', 'loading', 'forklift', 'truck', 'container', 'freight'],
  },

  // ---- Global markets ----------------------------------------------
  {
    file: 'stock/global-shipping.jpg',
    width: 2000,
    queries: ['container ship sea', 'cargo ship ocean', 'container vessel'],
    keywords: ['container', 'ship', 'cargo', 'vessel', 'sea'],
    min: { w: 1400, h: 800 },
  },

  // ---- Gallery ------------------------------------------------------
  { file: 'gallery/g1.jpg', width: 1200, queries: ['red chillies', 'dried chilli peppers', 'chilli powder'], keywords: ['chilli', 'chili', 'chilli'] },
  { file: 'gallery/g2.jpg', width: 1200, queries: ['turmeric powder', 'turmeric root', 'turmeric'], keywords: ['turmeric', 'haldi'] },
  { file: 'gallery/g3.jpg', width: 1200, queries: ['mustard seeds', 'coriander seeds', 'spice seeds'], keywords: ['seed', 'mustard', 'coriander'] },
  { file: 'gallery/g4.jpg', width: 1600, queries: ['wheat field harvest', 'wheat grains', 'grain field'], keywords: ['wheat', 'grain', 'harvest', 'field'] },
  { file: 'gallery/g5.jpg', width: 1200, queries: ['cardamom pods', 'green cardamom', 'cardamom'], keywords: ['cardamom'] },
  { file: 'gallery/g6.jpg', width: 1200, queries: ['black pepper', 'peppercorns', 'pepper spice'], keywords: ['pepper'] },
  { file: 'gallery/g7.jpg', width: 1600, queries: ['bananas bunch', 'banana plantation', 'banana harvest'], keywords: ['banana'] },
  { file: 'gallery/g8.jpg', width: 1200, queries: ['dried curry leaves', 'dried herbs', 'dried coriander'], keywords: ['herb', 'leaves', 'coriander', 'curry'] },
  { file: 'gallery/g9.jpg', width: 1600, queries: ['indian vegetables market', 'vegetable farm india', 'farmers market vegetables'], keywords: ['vegetable', 'farm', 'market', 'india'] },
  { file: 'gallery/g10.jpg', width: 1200, queries: ['garlic bulbs', 'garlic cloves', 'dried garlic'], keywords: ['garlic'] },
  { file: 'gallery/g11.jpg', width: 1600, queries: ['rice sacks', 'sacks of rice', 'grain sacks storage'], keywords: ['rice', 'sack', 'bag', 'grain'] },
  { file: 'gallery/g12.jpg', width: 1200, queries: ['cashew nuts', 'mixed nuts bowl', 'nuts raw'], keywords: ['nut', 'cashew', 'almond'] },
];

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function searchOpenverse(query) {
  const url = new URL('https://api.openverse.org/v1/images/');
  url.searchParams.set('q', query);
  url.searchParams.set('license_type', 'commercial');
  url.searchParams.set('category', 'photograph');
  url.searchParams.set('page_size', '25');

  const res = await fetch(url, { headers: UA });
  if (!res.ok) return [];
  const json = await res.json();
  return json.results || [];
}

function scoreResult(result, keywords) {
  const haystack = [result.title || '', ...(result.tags || []).map((t) => t.name || '')]
    .join(' ')
    .toLowerCase();
  let score = 0;
  for (const kw of keywords) if (haystack.includes(kw.toLowerCase())) score += 1;
  return score;
}

/** Flickr serves larger renditions via a size suffix on the secret. */
function flickrCandidates(url) {
  const base = url.replace(/_[a-z]\.(jpg|png)$/i, '');
  const candidates = [base + '_k.jpg', base + '_h.jpg', base + '_b.jpg', url];
  return [...new Set(candidates)];
}

async function fetchImageBuffer(result) {
  const urls = /live\.staticflickr\.com/.test(result.url || '')
    ? flickrCandidates(result.url)
    : [result.url];

  for (const u of urls) {
    if (!u) continue;
    try {
      const res = await fetch(u, { headers: UA, redirect: 'follow' });
      if (!res.ok) continue;
      const type = (res.headers.get('content-type') || '').toLowerCase();
      if (!type.startsWith('image/')) continue;
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 15_000) continue;
      return { buf, from: u };
    } catch {
      /* try the next rendition */
    }
  }
  return null;
}

async function processToJpeg(buf, dest, maxWidth) {
  const img = sharp(buf, { failOn: 'none' });
  const meta = await img.metadata();
  if (!meta.width || !meta.height) throw new Error('unreadable image');
  if (meta.width < 560 || meta.height < 400) {
    throw new Error(`too small: ${meta.width}x${meta.height}`);
  }

  fs.mkdirSync(path.dirname(dest), { recursive: true });
  await img
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .jpeg({ quality: 84, mozjpeg: true, progressive: true })
    .toFile(dest);

  const out = await sharp(dest).metadata();
  return { w: out.width, h: out.height, srcW: meta.width, srcH: meta.height };
}

/* ------------------------------------------------------------------ */
/* Main                                                                */
/* ------------------------------------------------------------------ */
const creditsPath = path.join(ROOT, 'src', 'data', 'imageCredits.js');
let credits = [];
// Always load the existing records. --force means "re-download the images",
// NOT "forget where they came from": attribution is provenance that cannot be
// re-derived from a file, so dropping it here would destroy it permanently.
if (fs.existsSync(creditsPath)) {
  const txt = fs.readFileSync(creditsPath, 'utf8');
  const m = txt.match(/export const imageCredits = (\[[\s\S]*?\]);\n/);
  if (m) credits = JSON.parse(m[1]);
}
const creditIndex = new Map(credits.map((c) => [c.file, c]));
console.log(`Loaded ${creditIndex.size} existing attribution record(s).`);
const before = creditIndex.size;

const failures = [];

// Never let a fetch clobber a real business photograph, whatever flags are
// passed. This is the last line of defence before any write.
const COMPANY_PHOTOS = new Set([
  '/images/products/onion-powder.jpg',
  '/images/products/moringa-powder.jpg',
]);

for (const slot of SLOTS) {
  if (ONLY && !slot.file.includes(ONLY)) continue;
  const webPath = `/images/${slot.file.replace(/\\/g, '/')}`;
  const dest = path.join(IMG_DIR, slot.file);

  if (COMPANY_PHOTOS.has(webPath)) {
    console.log(`= ${slot.file} (protected business photo - left untouched)`);
    continue;
  }

  if (!FORCE && fs.existsSync(dest) && fs.statSync(dest).size > 20_000 && creditIndex.has(webPath)) {
    console.log(`- ${slot.file} (already present)`);
    continue;
  }

  let saved = false;

  for (const query of slot.queries) {
    if (saved) break;
    let results = [];
    try {
      results = await searchOpenverse(query);
    } catch (err) {
      console.log(`  ! search error "${query}": ${err.message}`);
      await sleep(1200);
      continue;
    }
    await sleep(300);

    const scored = results.map((r) => ({ r, s: scoreResult(r, slot.keywords) }));
    const ordered = [
      ...scored.filter((x) => x.s > 0).sort((a, b) => b.s - a.s),
      ...scored.filter((x) => x.s === 0),
    ];

    for (const { r, s } of ordered) {
      if (saved) break;
      if (!r.url) continue;
      let got;
      try {
        got = await fetchImageBuffer(r);
      } catch {
        continue;
      }
      if (!got) continue;

      try {
        const dims = await processToJpeg(got.buf, dest, slot.width);
        if (slot.min && (dims.w < slot.min.w || dims.h < slot.min.h)) {
          throw new Error(`below minimum ${slot.min.w}x${slot.min.h}: got ${dims.w}x${dims.h}`);
        }

        const entry = {
          file: webPath,
          title: r.title || slot.file,
          creator: r.creator || 'Unknown',
          creatorUrl: r.creator_url || '',
          license: `${(r.license || '').toUpperCase()} ${r.license_version || ''}`.trim(),
          licenseUrl: r.license_url || '',
          sourceUrl: r.foreign_landing_url || got.from,
        };
        creditIndex.set(webPath, entry);
        console.log(
          `+ ${slot.file}  "${query}" [${dims.w}x${dims.h} from ${dims.srcW}x${dims.srcH}] score=${s} by ${entry.creator}`
        );
        saved = true;
      } catch (err) {
        console.log(`    - skip "${(r.title || '').slice(0, 40)}": ${err.message}`);
      }
    }
  }

  if (!saved) {
    failures.push(slot.file);
    console.log(`X ${slot.file}  -- no usable result`);
  }
}

credits = [...creditIndex.values()].sort((a, b) => a.file.localeCompare(b.file));

// Attribution is one-way data: a record can be replaced but never re-derived.
// Refuse to write a file that would drop records we already had, rather than
// silently losing licence provenance because a fetch failed or was filtered.
if (credits.length < before) {
  console.error(
    `\nABORTED: would drop ${before - credits.length} attribution record(s) ` +
      `(${before} -> ${credits.length}). Not writing ${creditsPath}.`
  );
  console.error('Re-run without --only, or restore the file from version control.');
  process.exit(1);
}

fs.mkdirSync(path.join(ROOT, 'src', 'data'), { recursive: true });
fs.writeFileSync(
  creditsPath,
  `/**
 * GENERATED FILE - do not edit by hand.
 * Rebuild with: node scripts/fetch-stock-images.mjs
 *
 * Attribution for the openly-licensed stock photography used on this site.
 * Photographs supplied by AARAMBH WORLDTRADE are credited separately in the
 * product / gallery data and are deliberately NOT listed here.
 */
export const imageCredits = ${JSON.stringify(credits, null, 2)};

export default imageCredits;
`,
  'utf8'
);

console.log(`\nDone. ${credits.length} credited image(s), ${failures.length} failure(s).`);
if (failures.length) console.log('Failed:\n  ' + failures.join('\n  '));
