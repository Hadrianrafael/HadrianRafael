import type { Metadata } from "next";
import { getDictionary, localeLabels, locales, profile, siteUrl, type Locale } from "@/content";

/** URLs alternativas (hreflang) para um caminho relativo ao idioma, ex.: "" ou "/curriculo". */
export function alternates(locale: Locale, path = "") {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[localeLabels[l].hreflang] = `/${l}${path}`;
  languages["x-default"] = `/pt${path}`;
  return { canonical: `/${locale}${path}`, languages };
}

export function baseMetadata(locale: Locale): Metadata {
  const d = getDictionary(locale);
  return {
    metadataBase: new URL(siteUrl),
    title: { default: d.meta.title, template: `%s — ${profile.name}` },
    description: d.meta.description,
    applicationName: profile.name,
    authors: [{ name: profile.fullName, url: siteUrl }],
    creator: profile.fullName,
    keywords: [
      "Hadrian Rafael",
      "portfólio",
      "desenvolvedor",
      "desenvolvimento de software",
      "Next.js",
      "React",
      "TypeScript",
      "inteligência artificial",
      "SDR",
      "Inside Sales",
    ],
    alternates: alternates(locale),
    openGraph: {
      type: "profile",
      firstName: "Hadrian",
      lastName: "Rafael",
      locale: d.meta.ogLocale,
      alternateLocale: locales.filter((l) => l !== locale).map((l) => getDictionary(l).meta.ogLocale),
      url: `/${locale}`,
      siteName: profile.name,
      title: d.meta.title,
      description: d.meta.description,
    },
    twitter: { card: "summary_large_image", title: d.meta.title, description: d.meta.description },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
    formatDetection: { telephone: false, email: false, address: false },
  };
}

export function personJsonLd(locale: Locale) {
  const d = getDictionary(locale);
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    inLanguage: localeLabels[locale].hreflang,
    url: `${siteUrl}/${locale}`,
    mainEntity: {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: profile.fullName,
      alternateName: profile.name,
      jobTitle: d.meta.jobTitle,
      description: d.meta.description,
      url: siteUrl,
      email: `mailto:${profile.email}`,
      sameAs: [profile.linkedin, profile.github],
      address: { "@type": "PostalAddress", addressLocality: "São Paulo", addressRegion: "SP", addressCountry: "BR" },
      alumniOf: { "@type": "CollegeOrUniversity", name: "Anhanguera" },
      knowsLanguage: ["pt-BR", "en", "es"],
      knowsAbout: d.skills.groups.flatMap((g) => g.items).slice(0, 24),
    },
  };
}
