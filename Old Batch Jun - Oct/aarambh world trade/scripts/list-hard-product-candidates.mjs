/**
 * Broad relevance search for the products where Commons has no obvious
 * "X powder" shot. Lists candidates only; downloads nothing.
 *
 *   node scripts/list-hard-product-candidates.mjs
 */
const UA = { 'User-Agent': 'AarambhWorldtradeSiteBuilder/1.0 (image sourcing)' };

const PROBES = {
  'tomato-powder': ['tomato powder spice', 'tomato powder bowl', 'dried tomato powder', 'tomato flakes', 'sun dried tomato', 'red powder spice'],
  'beetroot-powder': ['beetroot powder', 'beetroot juice', 'beetroot root', 'beetroot raw', 'red beetroot', 'beetroot vegetable'],
  'banana-powder': ['banana powder', 'banana flour', 'dried banana', 'banana chips', 'banana slices dried', 'banana tree fruit'],
};

const strip = (s = '') => s.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

async function search(query) {
  const u = new URL('https://commons.wikimedia.org/w/api.php');
  u.searchParams.set('action', 'query');
  u.searchParams.set('format', 'json');
  u.searchParams.set('generator', 'search');
  u.searchParams.set('gsrsearch', `filetype:bitmap ${query}`);
  u.searchParams.set('gsrnamespace', '6');
  u.searchParams.set('gsrlimit', '20');
  u.searchParams.set('prop', 'imageinfo');
  u.searchParams.set('iiprop', 'url|extmetadata|size|mime');
  u.searchParams.set('iiurlwidth', '1600');
  const res = await fetch(u, { headers: UA });
  if (!res.ok) return [];
  const json = await res.json();
  return Object.values(json.query?.pages || {});
}

for (const [slot, queries] of Object.entries(PROBES)) {
  console.log(`\n########## ${slot}`);
  for (const q of queries) {
    let pages = [];
    try {
      pages = await search(q);
    } catch (e) {
      console.log(`  ! ${q}: ${e.message}`);
      continue;
    }
    const keep = pages.filter((p) => {
      const ii = p.imageinfo?.[0] || {};
      return /jpeg|png/.test(ii.mime || '') && (ii.width || 0) >= 800 && (ii.height || 0) >= 600;
    });
    if (!keep.length) {
      console.log(`  -- "${q}": nothing usable`);
      continue;
    }
    console.log(`  == "${q}" (${keep.length})`);
    for (const p of keep.slice(0, 6)) {
      const ii = p.imageinfo[0];
      const em = ii.extmetadata || {};
      const title = p.title.replace(/^File:/, '').replace(/\.(jpe?g|png)$/i, '');
      console.log(`     ${title}`);
      console.log(`       ${ii.width}x${ii.height}  ${strip(em.LicenseShortName?.value)}  by ${strip(em.Artist?.value).slice(0, 40)}`);
    }
  }
}
