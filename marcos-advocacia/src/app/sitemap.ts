import type { MetadataRoute } from "next";
import { getSiteUrl, navigation } from "@/config/site";
import { getAllArticles } from "@/content/articles";

const LAUNCH = "2026-11-26";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const staticRoutes: { path: string; priority: number; freq: "weekly" | "monthly" | "yearly" }[] = [
    { path: "", priority: 1, freq: "weekly" },
    { path: "/sobre", priority: 0.8, freq: "monthly" },
    ...navigation.areas.map((a) => ({ path: a.href, priority: 0.9, freq: "monthly" as const })),
    { path: "/direito-do-trabalho/reconhecimento-de-vinculo-empregaticio", priority: 0.9, freq: "monthly" },
    { path: "/conteudos", priority: 0.8, freq: "weekly" },
    { path: "/contato", priority: 0.8, freq: "monthly" },
    { path: "/politica-de-privacidade", priority: 0.3, freq: "yearly" },
    { path: "/termos-de-uso", priority: 0.3, freq: "yearly" },
  ];

  return [
    ...staticRoutes.map((r) => ({
      url: `${base}${r.path}`,
      lastModified: LAUNCH,
      changeFrequency: r.freq,
      priority: r.priority,
    })),
    ...getAllArticles().map((a) => ({
      url: `${base}/conteudos/${a.slug}`,
      lastModified: a.updated ?? a.date,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
