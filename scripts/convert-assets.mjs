import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const projectRoot = path.resolve(process.cwd());
const imagesDir = path.join(projectRoot, "public", "images");

const inputs = [
  {
    in: path.join(imagesDir, "Hero Image.tiff"),
    outBase: path.join(imagesDir, "hero-image"),
  },
  {
    in: path.join(imagesDir, "Logo nav.tiff"),
    outBase: path.join(imagesDir, "logo-nav"),
  },
];

async function convertOne({ in: inputPath, outBase }) {
  if (!fs.existsSync(inputPath)) {
    throw new Error(`Missing input file: ${inputPath}`);
  }

  const webpPath = `${outBase}.webp`;
  const pngPath = `${outBase}.png`;

  const pipeline = sharp(inputPath, { limitInputPixels: false }).rotate();

  await pipeline
    .clone()
    .webp({ quality: 82, effort: 5 })
    .toFile(webpPath);

  await pipeline
    .clone()
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(pngPath);

  const webpSize = fs.statSync(webpPath).size;
  const pngSize = fs.statSync(pngPath).size;

  return { webpPath, webpSize, pngPath, pngSize };
}

async function main() {
  const results = [];
  for (const item of inputs) {
    results.push(await convertOne(item));
  }

  for (const r of results) {
    console.log(`Created: ${path.relative(projectRoot, r.webpPath)} (${r.webpSize} bytes)`);
    console.log(`Created: ${path.relative(projectRoot, r.pngPath)} (${r.pngSize} bytes)`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
