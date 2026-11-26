import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import { join, extname } from "node:path";

const ROOT = new URL("../public/images/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const MAX_WIDTH = 1400;
const QUALITY = 70;

async function walk(dir) {
  const out = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if ([".jpg", ".jpeg", ".png", ".webp"].includes(extname(entry.name).toLowerCase())) out.push(full);
  }
  return out;
}

const files = await walk(ROOT);
let before = 0;
let after = 0;

for (const file of files) {
  const info = await stat(file);
  before += info.size;
  const pipeline = sharp(file).rotate().resize({ width: MAX_WIDTH, withoutEnlargement: true });
  const tmp = `${file}.tmp`;
  if (extname(file).toLowerCase() === ".png") {
    await pipeline.png({ compressionLevel: 9, palette: true }).toFile(tmp);
  } else {
    await pipeline.jpeg({ quality: QUALITY, mozjpeg: true, progressive: true }).toFile(tmp);
  }
  const out = await stat(tmp);
  after += out.size;
  const { rename } = await import("node:fs/promises");
  await rename(tmp, file);
}

console.log(`Optimized ${files.length} images: ${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024 / 1024).toFixed(2)}MB`);
