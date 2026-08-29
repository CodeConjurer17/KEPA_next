import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import path from "path";

const TARGET_DIR = path.join(process.cwd(), "public", "assets");
const MAX_WIDTH = 1600;
const JPEG_QUALITY = 80;
const PNG_QUALITY = 80;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath);
    } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
      await optimize(fullPath);
    }
  }
}

async function optimize(filePath) {
  const before = (await stat(filePath)).size;
  const buffer = await sharp(filePath)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
    .png({ quality: PNG_QUALITY })
    .toBuffer();

  // only overwrite if it's actually smaller
  if (buffer.length < before) {
    await sharp(buffer).toFile(filePath + ".tmp");
    await import("fs/promises").then(({ rename }) => rename(filePath + ".tmp", filePath));
    console.log(`${path.relative(process.cwd(), filePath)}: ${(before / 1024).toFixed(0)}KB -> ${(buffer.length / 1024).toFixed(0)}KB`);
  } else {
    console.log(`${path.relative(process.cwd(), filePath)}: already optimal, skipped`);
  }
}

walk(TARGET_DIR).then(() => console.log("Done."));