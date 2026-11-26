/**
 * Lists openly-licensed Commons candidates for the product photos.
 *
 *   node scripts/list-product-image-candidates.mjs
 *
 * Prints candidates only - it downloads and writes nothing. Wikimedia Commons
 * is used rather than the Openverse API because Openverse sits behind a
 * Cloudflare challenge that now blocks this environment, whereas the Commons
 * API is open and returns full licence/author metadata inline.
 */
const UA = { 'User-Agent': 'AarambhWorldtradeSiteBuilder/1.0 (image sourcing)' };

const TARGETS = [
  { slot: 'products/onion-powder.jpg', queries: ['onion powder', 'dehydrated onion', 'dried onion flakes'] },
  { slot: 'products/garlic-powder.jpg', queries: ['garlic powder', 'ground garlic'] },
  { slot: 'products/tomato-powder.jpg', queries: ['tomato powder', 'dried tomato'] },
  { slot: 'products/coriander-powder.jpg', queries: ['coriander powder', 'ground coriander', 'coriander seeds'] },
  { slot: 'products/beetroot-powder.jpg', queries: ['beetroot powder', 'beetroot dried', 'beetroot'] },
  { slot: 'products/banana-powder.jpg', queries: ['banana powder', 'banana flour'] },
  { slot: 'products/moringa-powder.jpg', queries: ['moringa powder', 'moringa leaves dried'] },
  { slot: 'products/spices.jpg', queries: ['indian spices', 'spice bowls', 'masala'] },
];

// Photos of a finished dish are useless as a product shot.
const REJECT = /recipe|soup|curry|dish|meal|omelette|omelet|pasta|pizza|sandwich|bread|roast|cooked|with |and |salad|rice |potato|chicken|fish|egg|cookie|cake|sauce|dip|steak|sauce|grill|pickle|chutney|masala chai/i;

async function search(query) {
  const u = new URL('https://commons.wikimedia.org/w/api.php');
  u.searchParams.set('action', 'query');
  u.searchParams.set('format', 'json');
  u.searchParams.set('generator', 'search');
  u.searchParams.set('gsrsearch', `filetype:bitmap ${query}`);
  u.searchParams.set('gsrnamespace', '6');
  u.searchParams.set('gsrlimit', '30');
  u.searchParams.set('prop', 'imageinfo');
  u.searchParams.set('iiprop', 'url|extmetadata|size|mime');
  u.searchParams.set('iiurlwidth', '1600');

  const res = await fetch(u, { headers: UA });
  if (!res.ok) return [];
  const json = await res.json();
  return Object.values(json.query?.pages || {});
}

const strip = (s = '') => s.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

for (const t of TARGETS) {
  console.log(`\n=== ${t.slot}`);
  const seen = new Set();
  let shown = 0;
  for (const q of t.queries) {
    if (shown >= 5) break;
    let pages = [];
    try {
      pages = await search(q);
    } catch (e) {
      console.log(`  ! ${q}: ${e.message}`);
      continue;
    }
    for (const p of pages) {
      if (shown >= 5) break;
      const title = p.title.replace(/^File:/, '').replace(/\.(jpe?g|png)$/i, '');
      if (seen.has(title)) continue;
      const ii = p.imageinfo?.[0] || {};
      if (!/jpeg|png/.test(ii.mime || '')) continue;
      if ((ii.width || 0) < 900 || (ii.height || 0) < 600) continue;
      if (REJECT.test(title)) continue;
      seen.add(title);
      shown += 1;
      const em = ii.extmetadata || {};
      console.log(`  [${shown}] ${title}`);
      console.log(`      ${ii.width}x${ii.height}  ${strip(em.LicenseShortName?.value)}  by ${strip(em.Artist?.value).slice(0, 45)}`);
      console.log(`      ${(ii.descriptionurl || '').slice(0, 100)}`);
    }
  }
  if (!shown) console.log('  (no usable candidates)');
}
