export type AreaSlug = "trabalho" | "civil" | "familia" | "empresarial";

/**
 * Blocos de conteúdo editorial. Texto aceita marcação inline mínima:
 *   **negrito**   e   [texto do link](/caminho-ou-url)
 */
export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; title: string; text: string };

export interface Article {
  slug: string;
  title: string;
  /** Resumo exibido nos cartões e usado como meta description. */
  excerpt: string;
  category: AreaSlug;
  /** Data de publicação (AAAA-MM-DD). */
  date: string;
  /** Data da última revisão (AAAA-MM-DD), se houver. */
  updated?: string;
  cover: { src: string; alt: string };
  seoTitle?: string;
  keywords?: string[];
  blocks: ContentBlock[];
}

export const areaInfo: Record<AreaSlug, { label: string; href: string }> = {
  trabalho: { label: "Direito do Trabalho", href: "/direito-do-trabalho" },
  civil: { label: "Direito Civil", href: "/direito-civil" },
  familia: { label: "Direito de Família", href: "/direito-de-familia" },
  empresarial: { label: "Direito Empresarial", href: "/direito-empresarial" },
};
