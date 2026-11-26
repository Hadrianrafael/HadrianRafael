import type { AreaSlug, Article } from "../types";
import prestacao from "./prestacao-de-servicos-ou-relacao-de-emprego";
import verbas from "./verbas-rescisorias";
import jornada from "./jornada-e-horas-extras";
import divorcio from "./divorcio-modalidades";
import contratos from "./contratos-empresariais";
import responsabilidade from "./responsabilidade-civil";

/**
 * Para publicar um novo artigo: crie um arquivo nesta pasta seguindo o
 * modelo dos existentes e adicione-o a esta lista. Veja o README.
 */
const all: Article[] = [prestacao, verbas, jornada, divorcio, contratos, responsabilidade];

export function getAllArticles(): Article[] {
  return [...all].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.title.localeCompare(b.title)));
}

export function getArticle(slug: string): Article | undefined {
  return all.find((a) => a.slug === slug);
}

export function getArticlesByArea(area: AreaSlug): Article[] {
  return getAllArticles().filter((a) => a.category === area);
}

/** Artigos relacionados: primeiro da mesma área, depois os mais recentes. */
export function getRelatedArticles(article: Article, limit = 3): Article[] {
  const others = getAllArticles().filter((a) => a.slug !== article.slug);
  const same = others.filter((a) => a.category === article.category);
  const rest = others.filter((a) => a.category !== article.category);
  return [...same, ...rest].slice(0, limit);
}

export function readingMinutes(article: Article): number {
  const words = article.blocks
    .map((b) => ("text" in b ? b.text : "items" in b ? b.items.join(" ") : ""))
    .join(" ")
    .split(/\s+/).length;
  return Math.max(2, Math.round(words / 200));
}

export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(Date.UTC(y!, (m ?? 1) - 1, d ?? 1)),
  );
}
