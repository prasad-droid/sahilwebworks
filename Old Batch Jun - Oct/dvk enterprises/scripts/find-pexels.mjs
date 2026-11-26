import { writeFileSync } from "node:fs";

const queries = process.argv.slice(2);
if (queries.length === 0) {
  console.error("Usage: node scripts/find-pexels.mjs \"query\" [query...]");
  process.exit(1);
}

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36";

for (const query of queries) {
  const url = `https://www.pexels.com/search/${encodeURIComponent(query)}/`;
  try {
    const response = await fetch(url, {
      headers: { "User-Agent": UA, Accept: "text/html" },
    });
    const html = await response.text();
    const match = html.match(
      /<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/,
    );
    if (!match) {
      console.log(`\n### ${query} — no __NEXT_DATA__ (status ${response.status})`);
      continue;
    }
    const data = JSON.parse(match[1]);
    const page = data?.props?.pageProps;
    const photos =
      page?.initialData?.data ??
      page?.photos ??
      page?.searchResult?.photos ??
      [];
    console.log(`\n### ${query} — ${photos.length} results`);
    for (const photo of photos.slice(0, 18)) {
      const a = photo.attributes ?? photo;
      console.log(
        [
          a.id,
          `${a.width}x${a.height}`,
          a.user?.first_name ?? a.photographer ?? "",
          (a.alt ?? a.alt_description ?? a.title ?? "").slice(0, 120),
          a.image?.large ?? a.src?.large ?? "",
        ].join(" | "),
      );
    }
    writeFileSync(
      `assets-raw/pexels-${query.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}.json`,
      JSON.stringify(photos, null, 2),
    );
  } catch (error) {
    console.error(`\n### ${query} — failed: ${error.message}`);
  }
}
