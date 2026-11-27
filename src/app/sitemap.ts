import type { MetadataRoute } from "next";
import { localeLabels, locales, siteUrl } from "@/content";

const paths = [
  { path: "", priority: 1, changeFrequency: "monthly" as const },
  { path: "/curriculo", priority: 0.8, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return paths.flatMap(({ path, priority, changeFrequency }) =>
    locales.map((locale) => ({
      url: `${siteUrl}/${locale}${path}`,
      lastModified,
      changeFrequency,
      priority: locale === "pt" ? priority : Math.round((priority - 0.1) * 10) / 10,
      alternates: {
        languages: {
          ...Object.fromEntries(locales.map((l) => [localeLabels[l].hreflang, `${siteUrl}/${l}${path}`])),
          "x-default": `${siteUrl}/pt${path}`,
        },
      },
    })),
  );
}
