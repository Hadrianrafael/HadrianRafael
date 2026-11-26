#!/usr/bin/env node
/**
 * Gera a imagem de capa (SVG) de um artigo na identidade visual do site.
 * Uso: node scripts/generate-cover.mjs <slug> <trabalho|civil|familia|empresarial>
 * Saída: public/images/conteudos/<slug>.svg
 * Também é possível usar uma foto própria (JPG/WebP) e apontar o campo
 * `cover.src` do artigo para ela.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const [slug, category] = process.argv.slice(2);
const labels = {
  trabalho: "Direito do Trabalho",
  civil: "Direito Civil",
  familia: "Direito de Família",
  empresarial: "Direito Empresarial",
};
if (!slug || !labels[category]) {
  console.error("Uso: node scripts/generate-cover.mjs <slug> <trabalho|civil|familia|empresarial>");
  process.exit(1);
}

// Semente determinística a partir do slug: cada capa é única e estável.
let seed = [...slug].reduce((acc, ch) => (acc * 31 + ch.charCodeAt(0)) >>> 0, 7);
const rand = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 2 ** 32);

const W = 1200;
const H = 750;
const motifs = {
  trabalho: () =>
    Array.from({ length: 7 }, (_, i) => {
      const r = 90 + i * 46;
      return `<circle cx="${860 + rand() * 40}" cy="${330 + rand() * 30}" r="${r}" stroke="url(#g)" stroke-opacity="${0.55 - i * 0.06}" fill="none"/>`;
    }).join(""),
  civil: () =>
    `<path d="M600 170 V560 M430 250 H770 M430 250 L360 420 H500 Z M770 250 L700 420 H840 Z M520 560 H680" stroke="url(#g)" stroke-width="2" fill="none" stroke-opacity="0.75" transform="translate(${180 + rand() * 40} 0)"/>`,
  familia: () =>
    `<path d="M620 560 C620 330 820 260 980 330" stroke="url(#g)" stroke-width="2" fill="none" stroke-opacity="0.8"/><path d="M700 560 C700 380 860 330 1020 390" stroke="url(#g)" stroke-width="2" fill="none" stroke-opacity="0.5"/><circle cx="${930 + rand() * 30}" cy="250" r="34" stroke="url(#g)" fill="none" stroke-opacity="0.7"/>`,
  empresarial: () =>
    Array.from({ length: 9 }, (_, i) => {
      const y = 190 + i * 44;
      const w = 220 + rand() * 260;
      return `<line x1="${640}" y1="${y}" x2="${640 + w}" y2="${y}" stroke="url(#g)" stroke-opacity="${0.75 - i * 0.06}" stroke-width="2"/>`;
    }).join(""),
};

const grid = Array.from({ length: 11 }, (_, i) => `<line x1="${i * 120}" y1="0" x2="${i * 120}" y2="${H}" stroke="#fff" stroke-opacity="0.035"/>`).join("");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${labels[category]}">
<defs>
<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0f1e3b"/><stop offset="1" stop-color="#070e1c"/></linearGradient>
<radialGradient id="glow" cx="0.78" cy="0.3" r="0.6"><stop offset="0" stop-color="#47679c" stop-opacity="0.45"/><stop offset="1" stop-color="#47679c" stop-opacity="0"/></radialGradient>
<linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e3cfa3"/><stop offset="1" stop-color="#977645"/></linearGradient>
</defs>
<rect width="${W}" height="${H}" fill="url(#bg)"/>
<rect width="${W}" height="${H}" fill="url(#glow)"/>
${grid}
${motifs[category]()}
<line x1="80" y1="${H - 120}" x2="150" y2="${H - 120}" stroke="#cdb07a" stroke-width="2"/>
<text x="80" y="${H - 80}" fill="#cdb07a" font-family="Georgia, serif" font-size="30" letter-spacing="3">${labels[category].toUpperCase()}</text>
<text x="80" y="120" fill="#ffffff" fill-opacity="0.85" font-family="Georgia, serif" font-size="40">MD<tspan fill="#e3cfa3">Silva</tspan></text>
<text x="82" y="150" fill="#ffffff" fill-opacity="0.5" font-family="Helvetica, Arial, sans-serif" font-size="14" letter-spacing="6">ADVOCACIA</text>
</svg>
`;

const out = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "images", "conteudos", `${slug}.svg`);
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, svg);
console.log(`Capa gerada: ${out}`);
