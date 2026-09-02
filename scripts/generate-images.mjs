// One-off generator for the two starter art assets this course replaces:
// the homepage hero and the social preview card. Both are built from an SVG
// receipt/price-tag motif and rasterised with sharp, which is already a
// project dependency. Run with `node scripts/generate-images.mjs`.
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(root, "..", "src", "assets", "images");

const CREAM = "#fbf6ec";
const INK = "#2a2118";
const GOLD = "#b97d1c";
const BRONZE = "#8a5c13";
const GREY = "#6b6154";
const GREEN = "#16a34a";

function barcodeStripes(x, y, height, count, seed) {
  let bars = "";
  let cursor = x;
  let s = seed;
  const rand = () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
  for (let i = 0; i < count; i++) {
    const w = 2 + rand() * 6;
    if (rand() > 0.45) {
      bars += `<rect x="${cursor.toFixed(1)}" y="${y}" width="${w.toFixed(1)}" height="${height}" fill="${INK}" opacity="0.14" />`;
    }
    cursor += w + 3;
  }
  return bars;
}

function priceTag({ cx, cy, scale }) {
  return `
    <g transform="translate(${cx} ${cy}) rotate(8) scale(${scale})">
      <path d="M -20 -140 L 140 -140 Q 160 -140 160 -120 L 160 100 Q 160 120 140 132 L -10 210 Q -30 220 -42 202 L -150 -20 Q -160 -38 -144 -52 Z"
            fill="${CREAM}" stroke="${INK}" stroke-width="6" />
      <circle cx="-6" cy="-108" r="16" fill="${CREAM}" stroke="${INK}" stroke-width="6" />
      <text x="20" y="-40" font-family="Georgia, 'Times New Roman', serif" font-size="46" fill="${GREY}"
            text-decoration="line-through" text-anchor="middle">$249</text>
      <text x="20" y="40" font-family="Georgia, 'Times New Roman', serif" font-weight="700" font-size="78" fill="${GREEN}"
            text-anchor="middle">$189</text>
      <text x="20" y="90" font-family="Helvetica, Arial, sans-serif" font-size="22" fill="${INK}" text-anchor="middle"
            letter-spacing="2">WEEK 3 EXAMPLE</text>
    </g>
  `;
}

function heroSvg(width, height) {
  // The theme overlays its own page-title <h1> across the bottom of whatever
  // band survives object-fit: cover cropping, which on this template's short
  // hero container keeps only a wide horizontal slice near the vertical
  // centre --- not the full 2560x1086 canvas. Baking a competing headline into
  // this art collided with that overlaid title, so this stays a plain motif
  // (stripes + a single price tag, both centred vertically) and lets the real
  // heading do the talking.
  const midline = height / 2;
  return `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${width}" height="${height}" fill="${CREAM}" />
    ${barcodeStripes(0, 0, height, 140, 7)}
    ${barcodeStripes(width - 720, 0, height, 100, 42)}

    <line x1="0" y1="${midline - 150}" x2="${width}" y2="${midline - 150}" stroke="${GREY}" stroke-width="3"
          stroke-dasharray="14 10" opacity="0.5" />
    <line x1="0" y1="${midline + 150}" x2="${width}" y2="${midline + 150}" stroke="${GREY}" stroke-width="3"
          stroke-dasharray="14 10" opacity="0.5" />

    ${priceTag({ cx: width - 420, cy: midline, scale: 1.35 })}
  </svg>`;
}

function cardSvg(width, height) {
  return `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${width}" height="${height}" fill="${CREAM}" />
    ${barcodeStripes(40, 40, height - 80, 40, 11)}

    <text x="70" y="180" font-family="Helvetica, Arial, sans-serif" font-weight="800" font-size="58" fill="${INK}">SLOP3746</text>
    <text x="70" y="270" font-family="Helvetica, Arial, sans-serif" font-weight="800" font-size="72" fill="${GOLD}">How to Never</text>
    <text x="70" y="350" font-family="Helvetica, Arial, sans-serif" font-weight="800" font-size="72" fill="${GOLD}">Pay Full Price</text>
    <text x="70" y="410" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="28" fill="${BRONZE}">
      Pricing, persuasion, and the mathematics of buying things
    </text>

    <line x1="40" y1="${height - 60}" x2="${width - 40}" y2="${height - 60}" stroke="${GREY}" stroke-width="3"
          stroke-dasharray="12 8" opacity="0.6" />

    ${priceTag({ cx: width - 190, cy: height / 2 + 10, scale: 0.62 })}
  </svg>`;
}

async function main() {
  await mkdir(imagesDir, { recursive: true });

  const heroWidth = 2560;
  const heroHeight = 1086;
  const heroSvgBuffer = Buffer.from(heroSvg(heroWidth, heroHeight));
  await sharp(heroSvgBuffer)
    .resize(heroWidth, heroHeight)
    .avif({ quality: 60 })
    .toFile(path.join(imagesDir, "hero-home.avif"));
  console.log("wrote src/assets/images/hero-home.avif");

  const cardWidth = 1200;
  const cardHeight = 630;
  const cardSvgBuffer = Buffer.from(cardSvg(cardWidth, cardHeight));
  await sharp(cardSvgBuffer).resize(cardWidth, cardHeight).png().toFile(path.join(imagesDir, "card.png"));
  console.log("wrote src/assets/images/card.png");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
