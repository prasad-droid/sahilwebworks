/**
 * Downloads the hand-curated set of openly-licensed photographs for the
 * AARAMBH WORLDTRADE site from Wikimedia Commons, then normalises each one to
 * a web-friendly progressive JPEG with sharp.
 *
 *   node scripts/fetch-commons-images.mjs
 *
 * Every pick below was chosen by reviewing candidate titles / categories /
 * dimensions via scripts/probe-images.mjs. Products photographed by the
 * business itself (dehydrated onion powder, moringa powder, logo) are NOT in
 * this list - they are processed by scripts/prepare-business-images.mjs.
 *
 * Attribution for each file is written to src/data/imageCredits.js.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { commonsApi } from './commons-client.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const IMG_DIR = path.join(ROOT, 'public', 'images');

/* ------------------------------------------------------------------ */
/* Curated manifest                                                    */
/* ------------------------------------------------------------------ */
/**
 * visualKind:
 *   'category' - representative stock image of the product CATEGORY.
 *                Never presented as a photograph of an actual AWT product.
 *   'industry' - stock image illustrating an industry / activity.
 *   'company'  - photograph supplied by AARAMBH WORLDTRADE.
 */
const MANIFEST = [
  /* ---- Product category visuals ------------------------------------ */
  { file: 'products/tomato-powder.jpg', title: 'Dried tomato slices.jpg', width: 1200, visual: 'category' },
  { file: 'products/ginger-powder.jpg', title: 'Ginger powder (1).jpg', width: 1200, visual: 'category' },
  { file: 'products/beetroot-powder.jpg', title: 'A Beetroots in Yuen Long.jpg', width: 1200, visual: 'category' },
  { file: 'products/banana-powder.jpg', title: 'Kerala banana chips Upperi varuthath.jpg', width: 1200, visual: 'category' },
  { file: 'products/spices.jpg', title: 'Colourful spices in Bangalore.jpg', width: 1400, visual: 'category' },
  { file: 'products/rice.jpg', title: 'Basmati Rice (49683600583).jpg', width: 1400, visual: 'category' },
  { file: 'products/raisins.jpg', title: 'Raisins 01.jpg', width: 1200, visual: 'category' },
  { file: 'products/other-agro.jpg', title: 'Red lentils (1).jpg', width: 1400, visual: 'category' },

  /* ---- Hero -------------------------------------------------------- */
  { file: 'stock/hero-spices.jpg', title: 'Shop selling spices, at Khari Baoli, Old Delhi.jpg', width: 2000, visual: 'industry' },
  { file: 'stock/hero-trade.jpg', title: 'Container Ship.jpg', width: 2000, visual: 'industry' },

  /* ---- Business sections ------------------------------------------- */
  { file: 'business/about-agriculture.jpg', title: 'Green Paddy Field everywhere in the month of October - panoramio.jpg', width: 1400, visual: 'industry' },
  { file: 'business/about-sourcing.jpg', title: 'Spice market-India.jpg', width: 1200, visual: 'industry' },
  { file: 'business/quality-texture.jpg', title: 'Cúrcuma (Curcuma longa) molida, 2020-06-23, DD 16-24 FS.jpg', width: 1400, visual: 'category' },
  { file: 'business/packaging.jpg', title: 'Stack of sacks Hatfield Broad Oak Essex England 01.jpg', width: 1200, visual: 'industry' },
  { file: 'business/warehouse-bulk.jpg', title: "Antic molí d'arròs d'Alginet (País Valencià) - 18.jpg", width: 1600, visual: 'industry' },
  { file: 'business/loading.jpg', title: 'Durres harbor container ship.jpg', width: 1600, visual: 'industry' },

  /* ---- Global markets ---------------------------------------------- */
  { file: 'stock/global-shipping.jpg', title: 'Container ship from Hamburg passing the Golden Gate.jpg', width: 2000, visual: 'industry' },

  /* ---- Gallery ----------------------------------------------------- */
  { file: 'gallery/g1.jpg', title: 'Dried paprika sale.jpg', width: 1200, visual: 'category', label: 'Dried chilli and paprika — product category visual' },
  { file: 'gallery/g2.jpg', title: 'Curcuma longa roots.jpg', width: 1200, visual: 'category', label: 'Turmeric root — product category visual' },
  { file: 'gallery/g3.jpg', title: 'Mustard Oil & Seeds - Kolkata 2003-10-31 00537.JPG', width: 1200, visual: 'category', label: 'Mustard seeds — product category visual' },
  { file: 'gallery/g4.jpg', title: 'Field of Wheat, Trent Park - geograph.org.uk - 6819490.jpg', width: 1600, visual: 'industry', label: 'Wheat growing — agricultural reference' },
  { file: 'gallery/g5.jpg', title: 'Ela (Bengali- এলা) (14393555700).jpg', width: 1200, visual: 'category', label: 'Cardamom — product category visual' },
  { file: 'gallery/g6.jpg', title: '2017-01-05-Pfeffer-9451.jpg', width: 1200, visual: 'category', label: 'Black pepper — product category visual' },
  { file: 'gallery/g7.jpg', title: 'Bhim Banana, ভীম কল.jpg', width: 1400, visual: 'category', label: 'Banana — product category visual' },
  { file: 'gallery/g8.jpg', title: 'Brick factory, mustard seed (2291213662).jpg', width: 1400, visual: 'industry', label: 'Mustard cultivation in India — agricultural reference' },
  { file: 'gallery/g9.jpg', title: 'APMC.JPG', width: 1600, visual: 'industry', label: 'Indian vegetable market — agricultural reference' },
  { file: 'gallery/g10.jpg', title: 'Cashew Nut Unripened.jpg', width: 1200, visual: 'category', label: 'Cashew and other agro products — product category visual' },
  { file: 'gallery/g11.jpg', title: "Antic molí d'arròs d'Alginet (País Valencià) - 12.jpg", width: 1400, visual: 'industry', label: 'Bulk grain sacks — packaging reference' },
  { file: 'gallery/g12.jpg', title: 'Full Of Grass Paddy Plantation.jpg', width: 1600, visual: 'industry', label: 'Paddy plantation — agricultural reference' },
];

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const stripHtml = (html) =>
  String(html || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#\d+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

async function fetchMeta(title, thumbWidth) {
  const json = await commonsApi(
    {
      action: 'query',
      titles: `File:${title}`,
      prop: 'imageinfo',
      iiprop: 'url|size|mime|extmetadata',
      iiurlwidth: String(thumbWidth),
    },
    { label: title }
  );
  const page = json?.query?.pages?.[0];
  if (!page || page.missing) return null;
  const ii = page.imageinfo?.[0];
  if (!ii) return null;
  const m = ii.extmetadata || {};
  return {
    thumbUrl: (ii.thumburl || ii.url || '').split('?')[0],
    pageUrl: ii.descriptionurl,
    width: ii.width,
    height: ii.height,
    mime: ii.mime,
    artist: stripHtml(m.Artist?.value) || 'Wikimedia Commons contributor',
    license: stripHtml(m.LicenseShortName?.value) || 'See file page',
    licenseUrl: m.LicenseUrl?.value || '',
  };
}

async function download(url, tries = 3) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, {
        headers: { 'User-Agent': 'AarambhWorldtradeSiteBuilder/1.0 (static site build)' },
        redirect: 'follow',
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const type = (res.headers.get('content-type') || '').toLowerCase();
      if (!type.startsWith('image/')) throw new Error(`content-type ${type}`);
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 10_000) throw new Error(`only ${buf.length} bytes`);
      return buf;
    } catch (err) {
      if (i === tries - 1) throw err;
      await sleep(1200 * (i + 1));
    }
  }
  return null;
}

/* ------------------------------------------------------------------ */
/* Main                                                                */
/* ------------------------------------------------------------------ */
const credits = [];
const failed = [];

for (const item of MANIFEST) {
  const dest = path.join(IMG_DIR, item.file);
  const webPath = `/images/${item.file.replace(/\\/g, '/')}`;
  const alreadyThere = fs.existsSync(dest) && fs.statSync(dest).size > 20_000;

  const meta = await fetchMeta(item.title, Math.min(item.width, 1800));
  if (!meta) {
    console.log(`X ${item.file}  file not found on Commons: ${item.title}`);
    failed.push(item.file);
    continue;
  }

  if (alreadyThere) {
    const out = await sharp(dest).metadata();
    credits.push({
      file: webPath,
      visual: item.visual,
      label: item.label || '',
      title: item.title.replace(/\.[a-z]+$/i, ''),
      creator: meta.artist,
      license: meta.license,
      licenseUrl: meta.licenseUrl,
      sourceUrl: meta.pageUrl,
    });
    console.log(
      `- ${item.file.padEnd(36)} ${String(out.width).padStart(4)}x${String(out.height).padEnd(4)} ${String(
        Math.round(fs.statSync(dest).size / 1024)
      ).padStart(4)} KB   (present, credited)`
    );
    continue;
  }

  try {
    const buf = await download(meta.thumbUrl);
    const img = sharp(buf, { failOn: 'none' });
    const src = await img.metadata();
    if (!src.width || src.width < 700) throw new Error(`source too small: ${src.width}px`);

    fs.mkdirSync(path.dirname(dest), { recursive: true });
    await img
      .rotate()
      .resize({ width: item.width, withoutEnlargement: true })
      .jpeg({ quality: 84, mozjpeg: true, progressive: true })
      .toFile(dest);

    const out = await sharp(dest).metadata();
    const bytes = fs.statSync(dest).size;

    credits.push({
      file: webPath,
      visual: item.visual,
      label: item.label || '',
      title: item.title.replace(/\.[a-z]+$/i, ''),
      creator: meta.artist,
      license: meta.license,
      licenseUrl: meta.licenseUrl,
      sourceUrl: meta.pageUrl,
    });

    console.log(
      `+ ${item.file.padEnd(36)} ${String(out.width).padStart(4)}x${String(out.height).padEnd(4)} ${String(
        Math.round(bytes / 1024)
      ).padStart(4)} KB   ${meta.license}  ${item.title.slice(0, 44)}`
    );
  } catch (err) {
    console.log(`X ${item.file}  ${err.message}`);
    failed.push(item.file);
  }
  await sleep(150);
}

fs.mkdirSync(path.join(ROOT, 'src', 'data'), { recursive: true });
fs.writeFileSync(
  path.join(ROOT, 'src', 'data', 'imageCredits.js'),
  `/**
 * GENERATED FILE - do not edit by hand.
 * Rebuild with: node scripts/fetch-commons-images.mjs
 *
 * Attribution for the openly-licensed photography used on this website.
 *
 * visual: 'category' = representative stock image of a product CATEGORY.
 *                     Rendered with a "Product category visual" caption and
 *                     never presented as a photograph of an AARAMBH WORLDTRADE
 *                     product.
 *         'industry' = stock image illustrating farming, processing, packaging
 *                     or international logistics.
 *
 * Photographs supplied by AARAMBH WORLDTRADE (the logo, dehydrated onion
 * powder, moringa powder) are credited in src/data/business.js and are
 * deliberately not listed here.
 */
export const imageCredits = ${JSON.stringify(credits, null, 2)};

export default imageCredits;
`,
  'utf8'
);

console.log(`\n${credits.length} image(s) ready, ${failed.length} failure(s).`);
if (failed.length) console.log('Failed:\n  ' + failed.join('\n  '));
