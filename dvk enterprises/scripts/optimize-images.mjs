/**
 * Converts the curated source photos in assets-raw/final into optimized WebP
 * files under src/assets/images, and builds the Open Graph image.
 * Run with: npm run optimize:images
 */
import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC_DIR = path.resolve("assets-raw/final");
const OUT_DIR = path.resolve("src/assets/images");
const MAX_WIDTH = 1400;

await mkdir(OUT_DIR, { recursive: true });

const files = (await readdir(SRC_DIR)).filter((f) => /\.(jpe?g|png)$/i.test(f));

for (const file of files) {
  const name = path.basename(file).replace(/\.(jpe?g|png)$/i, "");
  const out = path.join(OUT_DIR, `${name}.webp`);
  const info = await sharp(path.join(SRC_DIR, file))
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: 72, effort: 5 })
    .toFile(out);
  console.log(`${name}.webp ${info.width}x${info.height} ${info.size} bytes`);
}

// Open Graph share image (1200x630) — three product categories side by side.
const ogWidth = 1200;
const ogHeight = 630;
const tileWidth = Math.floor(ogWidth / 3);
const ogSources = ["moringa-powder-main.jpg", "carpets-stack.jpg", "hairclips-pink.jpg"];

const tiles = await Promise.all(
  ogSources.map((src, i) =>
    sharp(path.join(SRC_DIR, src))
      .resize(tileWidth, ogHeight, { fit: "cover", position: "centre" })
      .toBuffer(),
  ),
);

await sharp({
  create: { width: ogWidth, height: ogHeight, channels: 3, background: "#0B3B2E" },
})
  .composite(tiles.map((input, i) => ({ input, left: i * tileWidth, top: 0 })))
  .jpeg({ quality: 84 })
  .toFile(path.resolve("public/og-image.jpg"));

console.log("public/og-image.jpg created");
