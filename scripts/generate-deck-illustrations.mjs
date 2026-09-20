// One-off generator for the deck comic illustrations, following the same
// approach as generate-images.mjs: hand-built SVG in the site's own palette,
// written straight to src/decks/assets/ (astromotion resolves deck images as
// relative paths, so these need no sharp rasterisation step). Run with
// `node scripts/generate-deck-illustrations.mjs`.
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(root, "..", "src", "decks", "assets");

const CREAM = "#fbf6ec";
const INK = "#2a2118";
const GOLD = "#b97d1c";
const BRONZE = "#8a5c13";
const GREY = "#6b6154";
const GREEN = "#16a34a";
const RED = "#a8402a";

const W = 480;
const H = 640;

function halftone(id, color = INK, opacity = 0.1, r = 3, gap = 16) {
  return `
  <pattern id="${id}" width="${gap}" height="${gap}" patternUnits="userSpaceOnUse">
    <circle cx="${gap / 2}" cy="${gap / 2}" r="${r}" fill="${color}" opacity="${opacity}" />
  </pattern>`;
}

// Comic panel chrome shared by every illustration: cream ground, thick ink
// border, a halftone dot corner, so all 13 read as one consistent set.
function frame(id, halftoneCorner = "tl") {
  const corners = {
    tl: { x: 0, y: 0, w: W * 0.55, h: H * 0.4 },
    br: { x: W * 0.45, y: H * 0.62, w: W * 0.55, h: H * 0.38 },
    tr: { x: W * 0.45, y: 0, w: W * 0.55, h: H * 0.4 },
  };
  const c = corners[halftoneCorner];
  return `
    <defs>${halftone(id)}</defs>
    <rect width="${W}" height="${H}" fill="${CREAM}" />
    <rect x="${c.x}" y="${c.y}" width="${c.w}" height="${c.h}" fill="url(#${id})" />
    <rect x="10" y="10" width="${W - 20}" height="${H - 20}" fill="none" stroke="${INK}" stroke-width="8" rx="14" />`;
}

function burst(cx, cy, r, color) {
  const points = [];
  const spikes = 10;
  for (let i = 0; i < spikes * 2; i++) {
    const rad = i % 2 === 0 ? r : r * 0.55;
    const ang = (Math.PI * i) / spikes;
    points.push(`${(cx + rad * Math.sin(ang)).toFixed(1)},${(cy - rad * Math.cos(ang)).toFixed(1)}`);
  }
  return `<polygon points="${points.join(" ")}" fill="${color}" stroke="${INK}" stroke-width="4" />`;
}

function label(x, y, text, { size = 22, fill = INK, weight = 800, anchor = "middle" } = {}) {
  return `<text x="${x}" y="${y}" font-family="Helvetica, Arial, sans-serif" font-weight="${weight}" font-size="${size}" fill="${fill}" text-anchor="${anchor}">${text}</text>`;
}

const illustrations = {
  // --- Week 1: SEE ---------------------------------------------------
  "week1-five-prices": () => `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${frame("h1")}
    <g transform="translate(240 300)">
      <path d="M -70 -170 L 90 -170 Q 108 -170 108 -152 L 108 60 Q 108 78 92 88 L -50 168 Q -68 176 -78 160 L -140 -50 Q -148 -66 -134 -78 Z"
            fill="${CREAM}" stroke="${INK}" stroke-width="7" />
      <circle cx="-52" cy="-138" r="12" fill="${CREAM}" stroke="${INK}" stroke-width="7" />
      ${label(10, -30, "?", { size: 90, fill: GOLD, weight: 900 })}
    </g>
    ${[
      { a: -110, t: "sticker", c: INK },
      { a: -45, t: "reference", c: BRONZE },
      { a: 20, t: "sale", c: RED },
      { a: 85, t: "market", c: GREEN },
      { a: 150, t: "willingness\nto pay", c: GOLD },
    ]
      .map(({ a, t, c }) => {
        const rad = (a * Math.PI) / 180;
        const cx = 240 + 195 * Math.sin(rad);
        const cy = 300 - 205 * Math.cos(rad) * 0.62 - 30;
        const lines = t.split("\n");
        return `
        <line x1="240" y1="300" x2="${cx.toFixed(1)}" y2="${cy.toFixed(1)}" stroke="${GREY}" stroke-width="2" stroke-dasharray="6 6" opacity="0.6" />
        <circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="46" fill="${CREAM}" stroke="${c}" stroke-width="5" />
        ${lines.map((l, li) => label(cx, cy - (lines.length - 1) * 7 + li * 14 + 5, l, { size: 12, fill: c, weight: 700 })).join("")}
      `;
      })
      .join("")}
  </svg>`,

  "week1-anchor": () => `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${frame("h2", "br")}
    <g transform="translate(240 250)">
      <circle cx="0" cy="-150" r="26" fill="none" stroke="${INK}" stroke-width="10" />
      <line x1="0" y1="-124" x2="0" y2="70" stroke="${INK}" stroke-width="14" />
      <line x1="-95" y1="10" x2="95" y2="10" stroke="${INK}" stroke-width="14" />
      <path d="M -95 10 Q -95 90 -20 100" fill="none" stroke="${INK}" stroke-width="14" stroke-linecap="round" />
      <path d="M 95 10 Q 95 90 20 100" fill="none" stroke="${INK}" stroke-width="14" stroke-linecap="round" />
      <line x1="-40" y1="-40" x2="40" y2="-40" stroke="${INK}" stroke-width="12" />
    </g>
    <g transform="translate(240 470) rotate(-6)">
      <path d="M -66 -10 L 66 -10 L 78 40 L -78 40 Z" fill="${GOLD}" stroke="${INK}" stroke-width="6" />
      ${label(0, 24, "$249", { size: 30, fill: CREAM, weight: 900 })}
    </g>
    <line x1="240" y1="330" x2="240" y2="420" stroke="${INK}" stroke-width="5" stroke-dasharray="3 8" />
    ${label(240, 590, "the anchor sets the number", { size: 17, fill: BRONZE, weight: 700 })}
  </svg>`,

  "week1-decoy": () => `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${frame("h3")}
    ${[
      { x: 100, h: 120, price: "$1.60", note: "SMALL", chosen: false },
      { x: 240, h: 190, price: "$1.80", note: "MEDIUM", chosen: true },
      { x: 380, h: 150, price: "$2.60", note: "LARGE", chosen: false },
    ]
      .map(({ x, h, price, note, chosen }) => `
      <rect x="${x - 55}" y="${470 - h}" width="110" height="${h}" fill="${chosen ? GOLD : CREAM}"
            stroke="${INK}" stroke-width="6" rx="8" />
      ${label(x, 470 - h + 30, note, { size: 14, fill: chosen ? CREAM : GREY, weight: 800 })}
      ${label(x, 470 - h + 62, price, { size: 22, fill: chosen ? CREAM : INK, weight: 900 })}
      ${chosen ? burst(x, 470 - h - 34, 30, GREEN) : ""}
      ${chosen ? label(x, 470 - h - 40, "★", { size: 22, fill: CREAM }) : ""}
    `)
      .join("")}
    <line x1="60" y1="470" x2="420" y2="470" stroke="${INK}" stroke-width="6" />
    ${label(240, 560, "add a decoy, watch the middle win", { size: 16, fill: BRONZE, weight: 700 })}
  </svg>`,

  "week1-lecture": () => `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${frame("h4", "tr")}
    <rect x="90" y="200" width="300" height="200" rx="10" fill="${INK}" />
    <rect x="106" y="216" width="268" height="168" rx="4" fill="${GREEN}" opacity="0.18" />
    ${label(240, 280, "SLOP3746", { size: 30, fill: CREAM, weight: 900 })}
    ${label(240, 320, "How to Never Pay Full Price", { size: 15, fill: CREAM, weight: 600 })}
    <g stroke="${CREAM}" stroke-width="4" fill="none">
      <path d="M 130 350 L 190 350" />
      <path d="M 210 350 L 290 350" />
      <path d="M 310 350 L 350 350" />
    </g>
    <rect x="150" y="440" width="180" height="120" fill="${BRONZE}" stroke="${INK}" stroke-width="7" />
    <rect x="150" y="440" width="180" height="18" fill="${GOLD}" stroke="${INK}" stroke-width="4" />
    ${label(240, 520, "LECTURN", { size: 13, fill: CREAM, weight: 700 })}
  </svg>`,

  "week1-grading": () => `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${frame("h5", "br")}
    <g transform="translate(140 90)">
      <path d="M -60 0 L 60 0 L 60 40 L 48 34 L 36 40 L 24 34 L 12 40 L 0 34 L -12 40 L -24 34 L -36 40 L -48 34 L -60 40 Z"
            fill="${CREAM}" stroke="${INK}" stroke-width="5" />
      ${label(0, 25, "RECEIPT", { size: 12, fill: GREY, weight: 700 })}
    </g>
    ${[
      { y: 160, w: 200, label: "Deal Autopsy — SEE", pct: "20%", c: GREEN },
      { y: 260, w: 300, label: "Beat the Cart — CALCULATE", pct: "30%", c: GOLD },
      { y: 360, w: 380, label: "Buying Engine — DECIDE", pct: "50%", c: RED },
    ]
      .map(({ y, w, label: lbl, pct, c }) => `
      <rect x="60" y="${y}" width="${w}" height="52" fill="${c}" stroke="${INK}" stroke-width="6" rx="6" />
      ${label(60 + 16, y + 33, lbl, { size: 14, fill: CREAM, weight: 700, anchor: "start" })}
      ${label(60 + w - 16, y + 33, pct, { size: 20, fill: CREAM, weight: 900, anchor: "end" })}
    `)
      .join("")}
    ${label(240, 480, "weights sum to 100%", { size: 16, fill: BRONZE, weight: 700 })}
  </svg>`,

  // --- Week 4: CALCULATE ---------------------------------------------
  "week4-coupon-stack": () => `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${frame("h6")}
    ${[
      { rot: -10, y: 200, c: CREAM, text: "10% OFF" },
      { rot: 4, y: 260, c: GOLD, text: "FREE SHIP" },
      { rot: -4, y: 320, c: CREAM, text: "$20 OFF $150" },
      { rot: 9, y: 380, c: BRONZE, text: "NOT WITH SALE ITEMS" },
    ]
      .map(({ rot, y, c, text }) => `
      <g transform="translate(240 ${y}) rotate(${rot})">
        <rect x="-150" y="-36" width="300" height="72" rx="10" fill="${c}" stroke="${INK}" stroke-width="6" />
        <circle cx="-150" cy="0" r="10" fill="${CREAM}" stroke="${INK}" stroke-width="4" />
        <circle cx="150" cy="0" r="10" fill="${CREAM}" stroke="${INK}" stroke-width="4" />
        ${label(0, 8, text, { size: 18, fill: c === CREAM ? INK : CREAM, weight: 800 })}
      </g>
    `)
      .join("")}
    ${label(240, 470, "which of these still apply, in what order?", { size: 15, fill: BRONZE, weight: 700 })}
  </svg>`,

  "week4-robot-dial": () => `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${frame("h7", "tr")}
    <rect x="150" y="140" width="180" height="150" rx="18" fill="${GREY}" stroke="${INK}" stroke-width="7" />
    <circle cx="200" cy="200" r="18" fill="${CREAM}" stroke="${INK}" stroke-width="5" />
    <circle cx="280" cy="200" r="18" fill="${CREAM}" stroke="${INK}" stroke-width="5" />
    <circle cx="200" cy="200" r="6" fill="${INK}" />
    <circle cx="280" cy="200" r="6" fill="${INK}" />
    <rect x="185" y="250" width="110" height="16" rx="8" fill="${INK}" />
    <line x1="240" y1="140" x2="240" y2="100" stroke="${INK}" stroke-width="8" />
    <circle cx="240" cy="90" r="12" fill="${RED}" stroke="${INK}" stroke-width="5" />
    <line x1="330" y1="220" x2="400" y2="260" stroke="${INK}" stroke-width="10" stroke-linecap="round" />
    <circle cx="400" cy="330" r="70" fill="${CREAM}" stroke="${INK}" stroke-width="7" />
    <line x1="400" y1="330" x2="400" y2="278" stroke="${GOLD}" stroke-width="6" transform="rotate(40 400 330)" />
    ${[0, 45, 90, 135, 180].map((a) => `<line x1="${400 + 60 * Math.sin((a * Math.PI) / 180)}" y1="${330 - 60 * Math.cos((a * Math.PI) / 180)}" x2="${400 + 70 * Math.sin((a * Math.PI) / 180)}" y2="${330 - 70 * Math.cos((a * Math.PI) / 180)}" stroke="${INK}" stroke-width="3" />`).join("")}
    ${label(400, 430, "YOUR PRICE", { size: 12, fill: BRONZE, weight: 800 })}
    ${label(240, 540, "same seat, different price, different screen", { size: 15, fill: BRONZE, weight: 700 })}
  </svg>`,

  "week4-cancel-maze": () => `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${frame("h8", "br")}
    <rect x="130" y="110" width="220" height="60" rx="10" fill="${GREEN}" stroke="${INK}" stroke-width="6" />
    ${label(240, 148, "SUBSCRIBE", { size: 20, fill: CREAM, weight: 900 })}
    <path d="M 240 170 C 120 220, 380 260, 140 320 C -20 360, 400 380, 200 440 C 60 480, 360 480, 300 540"
          fill="none" stroke="${GREY}" stroke-width="6" stroke-dasharray="2 14" stroke-linecap="round" />
    <rect x="250" y="550" width="120" height="46" rx="8" fill="${CREAM}" stroke="${INK}" stroke-width="5" />
    ${label(310, 580, "cancel", { size: 15, fill: GREY, weight: 700 })}
    ${label(240, 40, "one click in", { size: 14, fill: BRONZE, weight: 700 })}
    ${label(240, 615, "many clicks out", { size: 14, fill: BRONZE, weight: 700 })}
  </svg>`,

  "week4-points-jar": () => `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${frame("h9")}
    <path d="M 160 220 L 320 220 L 300 480 Q 296 500 276 500 L 204 500 Q 184 500 180 480 Z"
          fill="none" stroke="${INK}" stroke-width="8" />
    <path d="M 178 330 L 302 330 L 292 470 Q 289 486 273 486 L 207 486 Q 191 486 188 470 Z" fill="${GOLD}" opacity="0.5" />
    <rect x="150" y="196" width="180" height="26" rx="8" fill="${BRONZE}" stroke="${INK}" stroke-width="6" />
    ${[
      { cx: 210, cy: 380 },
      { cx: 260, cy: 350 },
      { cx: 290, cy: 400 },
      { cx: 225, cy: 430 },
      { cx: 270, cy: 450 },
    ]
      .map(({ cx, cy }) => `<polygon points="${starPoints(cx, cy, 18, 8)}" fill="${GREEN}" stroke="${INK}" stroke-width="3" />`)
      .join("")}
    ${label(240, 550, "points feel free — they were never free", { size: 15, fill: BRONZE, weight: 700 })}
  </svg>`,

  // --- Week 10: DECIDE -------------------------------------------------
  "week10-sunk-hole": () => `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${frame("h10", "tr")}
    <ellipse cx="240" cy="480" rx="150" ry="46" fill="${INK}" />
    <ellipse cx="240" cy="468" rx="128" ry="34" fill="${GREY}" />
    ${[
      { cx: 210, cy: 460 },
      { cx: 250, cy: 470 },
      { cx: 275, cy: 455 },
      { cx: 225, cy: 480 },
    ]
      .map(({ cx, cy }) => `<circle cx="${cx}" cy="${cy}" r="14" fill="${GOLD}" stroke="${INK}" stroke-width="3" />`)
      .join("")}
    <g transform="translate(150 200)">
      <circle cx="0" cy="0" r="26" fill="${CREAM}" stroke="${INK}" stroke-width="6" />
      <rect x="-18" y="24" width="36" height="70" rx="10" fill="${CREAM}" stroke="${INK}" stroke-width="6" />
      <line x1="0" y1="40" x2="70" y2="20" stroke="${INK}" stroke-width="8" stroke-linecap="round" />
    </g>
    <circle cx="230" cy="205" r="10" fill="${GOLD}" stroke="${INK}" stroke-width="3" />
    <circle cx="255" cy="230" r="10" fill="${GOLD}" stroke="${INK}" stroke-width="3" />
    <circle cx="215" cy="245" r="10" fill="${GOLD}" stroke="${INK}" stroke-width="3" />
    ${label(240, 100, "“but I already paid for it”", { size: 16, fill: BRONZE, weight: 700 })}
    ${label(240, 590, "the hole doesn't care what's already in it", { size: 14, fill: GREY, weight: 700 })}
  </svg>`,

  "week10-clock-price": () => `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${frame("h11")}
    <circle cx="240" cy="260" r="130" fill="${CREAM}" stroke="${INK}" stroke-width="10" />
    <line x1="240" y1="260" x2="240" y2="160" stroke="${INK}" stroke-width="8" stroke-linecap="round" />
    <line x1="240" y1="260" x2="310" y2="280" stroke="${INK}" stroke-width="8" stroke-linecap="round" />
    <circle cx="240" cy="260" r="10" fill="${RED}" />
    ${[0, 90, 180, 270].map((a) => `<line x1="${240 + 118 * Math.sin((a * Math.PI) / 180)}" y1="${260 - 118 * Math.cos((a * Math.PI) / 180)}" x2="${240 + 130 * Math.sin((a * Math.PI) / 180)}" y2="${260 - 130 * Math.cos((a * Math.PI) / 180)}" stroke="${INK}" stroke-width="5" />`).join("")}
    <path d="M 340 440 L 400 440 L 400 500 L 350 500 L 350 470 L 300 470 L 300 440 Z" fill="${RED}" stroke="${INK}" stroke-width="6" />
    <line x1="80" y1="500" x2="300" y2="440" stroke="${RED}" stroke-width="8" stroke-linecap="round" />
    <polygon points="300,440 316,444 306,458" fill="${RED}" />
    ${label(160, 540, "PRICE", { size: 20, fill: RED, weight: 900 })}
    ${label(240, 600, "the countdown is doing the persuading", { size: 15, fill: BRONZE, weight: 700 })}
  </svg>`,

  "week10-wine-invest": () => `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${frame("h12", "br")}
    <g transform="translate(160 260)">
      <path d="M -8 -160 L 8 -160 L 8 -110 Q 40 -90 40 -40 L 40 120 Q 40 140 20 140 L -20 140 Q -40 140 -40 120 L -40 -40 Q -40 -90 -8 -110 Z"
            fill="${CREAM}" stroke="${INK}" stroke-width="7" />
      <rect x="-30" y="0" width="60" height="70" fill="${BRONZE}" opacity="0.7" />
      <rect x="-28" y="-8" width="56" height="34" fill="${CREAM}" stroke="${INK}" stroke-width="3" />
      ${label(0, 14, "INVEST-\nMENT", { size: 10, fill: INK, weight: 800 })}
    </g>
    <text x="240" y="270" font-size="46" fill="${GREY}" text-anchor="middle">→</text>
    <g transform="translate(340 260)">
      <path d="M -50 -120 L 50 -120 L 30 40 L -30 40 Z" fill="none" stroke="${INK}" stroke-width="7" />
      <path d="M -32 -10 L 32 -10 L 20 30 L -20 30 Z" fill="${GOLD}" opacity="0.55" />
      <line x1="0" y1="40" x2="0" y2="90" stroke="${INK}" stroke-width="7" />
      <line x1="-34" y1="90" x2="34" y2="90" stroke="${INK}" stroke-width="7" />
      ${label(0, -140, "FREE", { size: 16, fill: GREEN, weight: 900 })}
    </g>
    ${label(240, 470, "the same bottle, felt two different ways", { size: 15, fill: BRONZE, weight: 700 })}
  </svg>`,

  "week10-scale": () => `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${frame("h13", "tr")}
    <line x1="240" y1="150" x2="240" y2="380" stroke="${INK}" stroke-width="12" />
    <polygon points="240,140 260,170 220,170" fill="${INK}" />
    <line x1="110" y1="230" x2="370" y2="200" stroke="${INK}" stroke-width="10" />
    <g transform="translate(130 230)">
      <line x1="0" y1="0" x2="0" y2="60" stroke="${INK}" stroke-width="6" />
      <path d="M -55 60 Q 0 110 55 60 Z" fill="${GOLD}" stroke="${INK}" stroke-width="6" />
      ${label(0, 145, "WAIT", { size: 18, fill: BRONZE, weight: 900 })}
    </g>
    <g transform="translate(350 200)">
      <line x1="0" y1="0" x2="0" y2="60" stroke="${INK}" stroke-width="6" />
      <path d="M -60 60 Q 0 118 60 60 Z" fill="${GREEN}" stroke="${INK}" stroke-width="6" />
      ${label(0, 145, "BUY NOW", { size: 16, fill: GREEN, weight: 900 })}
    </g>
    <g transform="translate(350 240)">
      <rect x="-16" y="0" width="32" height="32" fill="${RED}" stroke="${INK}" stroke-width="4" />
      ${label(0, 22, "sunk", { size: 10, fill: CREAM, weight: 800 })}
    </g>
    ${label(240, 470, "one side has a thumb on it", { size: 15, fill: BRONZE, weight: 700 })}
  </svg>`,
};

function starPoints(cx, cy, r, n) {
  const pts = [];
  for (let i = 0; i < n * 2; i++) {
    const rad = i % 2 === 0 ? r : r * 0.42;
    const ang = (Math.PI * i) / n - Math.PI / 2;
    pts.push(`${(cx + rad * Math.cos(ang)).toFixed(1)},${(cy + rad * Math.sin(ang)).toFixed(1)}`);
  }
  return pts.join(" ");
}

async function main() {
  await mkdir(outDir, { recursive: true });
  for (const [name, build] of Object.entries(illustrations)) {
    const svg = build().trim();
    await writeFile(path.join(outDir, `${name}.svg`), svg + "\n");
    console.log(`wrote src/decks/assets/${name}.svg`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
