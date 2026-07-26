import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "images");
mkdirSync(OUT, { recursive: true });

const CREAM = "#F7F1E6";
const GOLD = "#C9A24B";
const GOLD_LIGHT = "#E7CE8F";

// A small library of tasteful line glyphs (pastry themed).
const GLYPHS = {
  cake: `<path d="M20 80 h60 v-22 q0 -10 -10 -10 h-40 q-10 0 -10 10 z M20 58 q10 -8 20 0 t20 0 t20 0 M50 26 v10 M50 22 a3 3 0 1 0 0.1 0" />`,
  slice: `<path d="M30 78 L70 78 L50 30 Z M34 66 h32" />`,
  cupcake: `<path d="M32 52 h36 l-6 28 h-24 z M30 52 q20 -30 40 0 M50 24 a4 4 0 1 0 0.1 0" />`,
  cookie: `<circle cx="50" cy="54" r="24"/><circle cx="43" cy="48" r="2.4"/><circle cx="56" cy="46" r="2.4"/><circle cx="54" cy="60" r="2.4"/><circle cx="42" cy="60" r="2.4"/>`,
  choco: `<path d="M30 40 h40 v40 h-40 z M30 53 h40 M30 66 h40 M43 40 v40 M57 40 v40"/>`,
  bread: `<path d="M26 66 q0 -24 24 -24 t24 24 q0 8 -8 8 h-32 q-8 0 -8 -8 z M40 50 l-4 14 M50 48 v16 M60 50 l4 14"/>`,
  pot: `<path d="M28 54 h44 v14 q0 10 -10 10 h-24 q-10 0 -10 -10 z M24 54 h52 M40 46 v-8 M50 46 v-8 M60 46 v-8"/>`,
  shop: `<path d="M28 52 h44 v26 h-44 z M24 44 h52 l-4 8 h-44 z M44 78 v-16 h12 v16"/>`,
  chef: `<circle cx="50" cy="44" r="14"/><path d="M32 82 q0 -18 18 -18 t18 18"/>`,
};

const svg = (glyph, c1, c2, accent, label, w = 800, h = 1000) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/>
      <stop offset="1" stop-color="${c2}"/>
    </linearGradient>
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${GOLD_LIGHT}"/>
      <stop offset="1" stop-color="${accent}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.35" r="0.7">
      <stop offset="0" stop-color="${accent}" stop-opacity="0.28"/>
      <stop offset="1" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect width="${w}" height="${h}" fill="url(#glow)"/>
  <g transform="translate(${w / 2} ${h * 0.42}) scale(${Math.min(w, h) / 130})">
    <circle r="52" fill="none" stroke="url(#gold)" stroke-width="1.5" opacity="0.55"/>
    <g transform="translate(-50 -52)" fill="none" stroke="url(#gold)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
      ${glyph}
    </g>
  </g>
  <text x="${w / 2}" y="${h * 0.72}" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="${w * 0.055}" fill="${GOLD_LIGHT}">Chadili Académie</text>
  <text x="${w / 2}" y="${h * 0.72 + w * 0.06}" text-anchor="middle" font-family="Georgia, serif" letter-spacing="6" font-size="${w * 0.03}" fill="${CREAM}" opacity="0.7">${label}</text>
</svg>`;

const B1 = "#5A1A2B", B2 = "#2A0A15", PLUM = "#3D0F1D", ROSE = "#7A2A3D";

const files = {
  "hero-cake": svg(GLYPHS.cake, B1, B2, GOLD, "CAKE DESIGN", 900, 1100),
  "chef": svg(GLYPHS.chef, ROSE, PLUM, GOLD_LIGHT, "CHEF AWATIF", 800, 1000),
  "course-cake": svg(GLYPHS.cake, B1, PLUM, GOLD, "CAKE DESIGN", 800, 560),
  "course-patisserie": svg(GLYPHS.cupcake, ROSE, B2, GOLD_LIGHT, "PÂTISSERIE", 800, 560),
  "course-chocolate": svg(GLYPHS.choco, "#4A2016", "#241009", GOLD, "CHOCOLAT", 800, 560),
  "course-viennoiserie": svg(GLYPHS.bread, "#6b3a1e", "#2a1509", GOLD_LIGHT, "VIENNOISERIE", 800, 560),
  "course-cuisine": svg(GLYPHS.pot, B1, B2, GOLD, "CUISINE", 800, 560),
  "course-business": svg(GLYPHS.shop, PLUM, B2, GOLD_LIGHT, "PROJET", 800, 560),
  "student-1": svg(GLYPHS.chef, ROSE, PLUM, GOLD, "ÉLÈVE", 400, 400),
  "student-2": svg(GLYPHS.chef, B1, B2, GOLD_LIGHT, "ÉLÈVE", 400, 400),
  "student-3": svg(GLYPHS.chef, "#4A2016", "#241009", GOLD, "ÉLÈVE", 400, 400),
  "gallery-1": svg(GLYPHS.cake, B1, B2, GOLD, "", 700, 560),
  "gallery-2": svg(GLYPHS.cupcake, ROSE, PLUM, GOLD_LIGHT, "", 560, 760),
  "gallery-3": svg(GLYPHS.slice, "#4A2016", "#241009", GOLD, "", 800, 560),
  "gallery-4": svg(GLYPHS.choco, PLUM, B2, GOLD_LIGHT, "", 560, 760),
  "gallery-5": svg(GLYPHS.cookie, B1, PLUM, GOLD, "", 800, 560),
  "gallery-6": svg(GLYPHS.bread, "#6b3a1e", "#2a1509", GOLD_LIGHT, "", 560, 760),
  "gallery-7": svg(GLYPHS.cupcake, ROSE, B2, GOLD, "", 800, 560),
  "gallery-8": svg(GLYPHS.cake, B1, B2, GOLD_LIGHT, "", 560, 760),
};

for (const [name, content] of Object.entries(files)) {
  writeFileSync(join(OUT, `${name}.svg`), content, "utf8");
}

// Favicon
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${GOLD_LIGHT}"/><stop offset="1" stop-color="${GOLD}"/></linearGradient></defs>
  <rect width="64" height="64" rx="16" fill="#3D0F1D"/>
  <text x="32" y="44" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-weight="bold" font-size="40" fill="url(#g)">C</text>
</svg>`;
writeFileSync(join(__dirname, "..", "public", "favicon.svg"), favicon, "utf8");

console.log(`Generated ${Object.keys(files).length} placeholder images + favicon.`);
