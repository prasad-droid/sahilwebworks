/**
 * Small, polite, cached client for the Wikimedia Commons API.
 * Handles the "too many requests" throttle with backoff.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CACHE_DIR = path.join(__dirname, '..', 'node_modules', '.commons-cache');

const UA =
  'AarambhWorldtradeSiteBuilder/1.0 (static website image sourcing; contact: aarambhworldtrade@gmail.com)';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let lastCall = 0;
const MIN_GAP_MS = 1100;

function cacheKey(url) {
  let h = 5381;
  for (let i = 0; i < url.length; i++) h = ((h << 5) + h + url.charCodeAt(i)) | 0;
  return path.join(CACHE_DIR, `q${(h >>> 0).toString(36)}.json`);
}

export async function commonsApi(params, { label = '' } = {}) {
  const url = new URL('https://commons.wikimedia.org/w/api.php');
  for (const [k, v] of Object.entries({ format: 'json', formatversion: '2', ...params })) {
    url.searchParams.set(k, v);
  }
  const key = url.toString();
  const cacheFile = cacheKey(key);

  if (fs.existsSync(cacheFile)) {
    try {
      return JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
    } catch {
      /* refetch */
    }
  }

  fs.mkdirSync(CACHE_DIR, { recursive: true });

  for (let attempt = 0; attempt < 6; attempt++) {
    const wait = MIN_GAP_MS - (Date.now() - lastCall);
    if (wait > 0) await sleep(wait);
    lastCall = Date.now();

    let res;
    let text;
    try {
      res = await fetch(key, { headers: { 'User-Agent': UA, 'Accept-Encoding': 'gzip' } });
      text = await res.text();
    } catch (err) {
      await sleep(1500 * (attempt + 1));
      continue;
    }

    if (res.status === 429 || /too many requests/i.test(text)) {
      await sleep(2500 * (attempt + 1));
      continue;
    }
    if (!res.ok) {
      await sleep(1200 * (attempt + 1));
      continue;
    }

    let json;
    try {
      json = JSON.parse(text);
    } catch {
      await sleep(1200 * (attempt + 1));
      continue;
    }

    fs.writeFileSync(cacheFile, JSON.stringify(json), 'utf8');
    return json;
  }

  if (label) console.log(`   (api gave up on ${label})`);
  return null;
}

/**
 * Search Commons for files. Returns an array of
 * { title, thumbUrl, fullUrl, width, height, mime, categories, artist, license, licenseUrl, description }
 */
export async function searchFiles(search, { limit = 30, thumbWidth = 1600 } = {}) {
  const json = await commonsApi(
    {
      action: 'query',
      generator: 'search',
      gsrsearch: search,
      gsrnamespace: '6',
      gsrlimit: String(limit),
      prop: 'imageinfo',
      iiprop: 'url|size|mime|extmetadata',
      iiurlwidth: String(thumbWidth),
    },
    { label: search }
  );
  if (!json?.query?.pages) return [];
  return json.query.pages.map(normalisePage).filter(Boolean);
}

/** List files inside a category. */
export async function categoryFiles(category, { limit = 40, thumbWidth = 1600, depth = 0 } = {}) {
  const json = await commonsApi(
    {
      action: 'query',
      generator: 'categorymembers',
      gcmtitle: category,
      gcmnamespace: '6',
      gcmlimit: String(limit),
      prop: 'imageinfo',
      iiprop: 'url|size|mime|extmetadata',
      iiurlwidth: String(thumbWidth),
    },
    { label: category }
  );
  if (!json?.query?.pages) return [];

  let files = json.query.pages.map(normalisePage).filter(Boolean);
  if (files.length === 0 && depth === 0) {
    // empty category -> try the same name as a search
    files = await searchFiles(`incategory:"${category.replace(/^Category:/, '')}"`, {
      limit,
      thumbWidth,
    });
  }
  return files;
}

function stripHtml(html) {
  return String(html || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#\d+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalisePage(page) {
  const ii = page?.imageinfo?.[0];
  if (!ii) return null;
  const meta = ii.extmetadata || {};
  return {
    title: page.title,
    thumbUrl: ii.thumburl || ii.url,
    fullUrl: ii.descriptionurl,
    width: ii.width,
    height: ii.height,
    mime: ii.mime,
    categories: stripHtml(meta.Categories?.value).split('|').map((s) => s.trim()).filter(Boolean),
    artist: stripHtml(meta.Artist?.value) || 'Unknown',
    credit: stripHtml(meta.Credit?.value),
    license: stripHtml(meta.LicenseShortName?.value) || 'See file page',
    licenseUrl: meta.LicenseUrl?.value || '',
    description: stripHtml(meta.ImageDescription?.value),
  };
}
