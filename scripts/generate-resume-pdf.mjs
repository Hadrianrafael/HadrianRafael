#!/usr/bin/env node
/**
 * Gera os currículos em PDF (A4, uma página) a partir das páginas /{locale}/curriculo.
 *
 * Uso:
 *   pnpm build && pnpm start            # em um terminal
 *   pnpm resume:pdf                     # em outro terminal
 *
 * Variáveis opcionais:
 *   RESUME_BASE_URL   (padrão: http://localhost:3000)
 *
 * Requer o Playwright com Chromium disponível na máquina (npx playwright install chromium).
 * Ele não é dependência do site: só é usado localmente para gerar os arquivos em public/documents/.
 */
import { execSync } from "node:child_process";
import { mkdir } from "node:fs/promises";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const baseUrl = (process.env.RESUME_BASE_URL ?? "http://localhost:3000").replace(/\/$/, "");
const locales = ["pt", "en", "es"];

// Usa o Playwright do projeto, se existir; senão, a instalação global.
async function loadChromium() {
  try {
    return (await import("playwright")).chromium;
  } catch {
    const globalRoot = execSync("npm root -g", { encoding: "utf8" }).trim();
    return createRequire(join(globalRoot, "noop.js"))("playwright").chromium;
  }
}

let chromium;
try {
  chromium = await loadChromium();
} catch {
  console.error("Playwright não encontrado. Rode: npm i -g playwright && npx playwright install chromium");
  process.exit(1);
}

const outDir = join(root, "public", "documents");
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
let failed = false;
try {
  for (const locale of locales) {
    const page = await browser.newPage();
    const url = `${baseUrl}/${locale}/curriculo`;
    const res = await page.goto(url, { waitUntil: "networkidle" });
    if (!res?.ok()) throw new Error(`Falha ao abrir ${url}: HTTP ${res?.status()}`);
    await page.emulateMedia({ media: "print" });
    const file = join(outDir, `hadrian-rafael-curriculo-${locale}.pdf`);
    const pdf = await page.pdf({ path: file, format: "A4", printBackground: true, preferCSSPageSize: true, tagged: true, outline: true });
    const pages = (pdf.toString("latin1").match(/\/Type\s*\/Page[^s]/g) ?? []).length;
    console.log(`${pages === 1 ? "✓" : "✗"} ${file} — ${pages} página(s)`);
    if (pages !== 1) failed = true;
    await page.close();
  }
} finally {
  await browser.close();
}

if (failed) {
  console.error("Algum currículo passou de uma página. Reduza o conteúdo em src/content/*.ts.");
  process.exit(1);
}
