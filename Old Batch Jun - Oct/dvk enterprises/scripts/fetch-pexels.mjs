import { writeFileSync } from "node:fs";

const queries = process.argv.slice(2);
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

const out = {};

for (const query of queries) {
  const url = `https://www.pexels.com/search/${encodeURIComponent(query)}/`;
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": UA,
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
      },
    });
    const html = await res.text();
    const urls = [
      ...new Set(
        (
          html.match(
            /https:\/\/images\.pexels\.com\/photos\/\d+\/[^"?\\\s]+?\.(?:jpeg|jpg|png|webp)/g,
          ) ?? []
        ).filter((u) => u.includes("/free-photo-of-")),
      ),
    ];
    out[query] = urls.slice(0, 25);
    console.log(`${query} [${res.status}]: ${urls.length} candidates`);
    for (const u of urls.slice(0, 25)) console.log("  " + u);
  } catch (err) {
    console.error(`${query}: FAILED ${err.message}`);
    out[query] = [];
  }
}

writeFileSync("assets-raw/pexels-candidates.json", JSON.stringify(out, null, 2));
