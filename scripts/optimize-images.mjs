import sharp from "sharp";
import { readdir, stat, unlink } from "fs/promises";
import path from "path";

const TARGET_DIR = path.join(process.cwd(), "public", "assets");
const MAX_WIDTH = 1200;
const WEBP_QUALITY = 75;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath);
    } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
      await convert(fullPath);
    }
  }
}

async function convert(filePath) {
  const before = (await stat(filePath)).size;
  const webpPath = filePath.replace(/\.(jpe?g|png)$/i, ".webp");

  await sharp(filePath)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY })
    .toFile(webpPath);

  const after = (await stat(webpPath)).size;
  console.log(
    `${path.relative(process.cwd(), filePath)} (${(before / 1024).toFixed(0)}KB) -> ${path.relative(process.cwd(), webpPath)} (${(after / 1024).toFixed(0)}KB)`
  );

  await unlink(filePath); // remove the old jpg/png, webp replaces it
}

walk(TARGET_DIR).then(() => console.log("Done."));