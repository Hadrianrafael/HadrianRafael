import type { Metadata } from "next";
import { getSiteUrl, navigation, site, unitList } from "@/config/site";

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  /** Título exibido no Open Graph (padrão: igual ao title). */
  ogTitle?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  images?: string[];
  keywords?: string[];
}

/** Gera metadata consistente (canonical, Open Graph, Twitter) para cada página. */
export function pageMetadata({
  title,
  description,
  path,
  ogTitle,
  type = "website",
  publishedTime,
  modifiedTime,
  images,
  keywords,
}: PageMetaInput): Metadata {
  const ogImages = images ?? ["/opengraph-image"];
  // Títulos longos dispensam o sufixo da marca para não serem truncados no Google.
  const fullTitle = title.length + ` | ${site.brand}`.length > 65 ? { absolute: title } : title;
  return {
    title: fullTitle,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: site.locale,
      siteName: site.brand,
      url: path,
      title: ogTitle ?? title,
      description,
      ...(type === "article" ? {} : { images: ogImages }),
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle ?? title,
      description,
      ...(type === "article" ? {} : { images: ogImages }),
    },
  };
}

/** Grafo schema.org do escritório: advogado + unidades. Sem avaliações ou dados não fornecidos. */
export function organizationJsonLd() {
  const base = getSiteUrl();
  const orgId = `${base}/#escritorio`;
  const personId = `${base}/#advogado`;
  const sameAs = [site.instagram.url, ...(site.facebook.isExactUrl ? [site.facebook.url] : [])];
  const knowsAbout = navigation.areas.map((a) => a.label);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": orgId,
        name: site.brand,
        url: base,
        logo: `${base}/icon.svg`,
        image: `${base}/opengraph-image`,
        description: site.description,
        email: site.email,
        telephone: `+${unitList[0]!.phoneE164}`,
        address: postalAddress(unitList[0]!),
        knowsAbout,
        areaServed: unitList.map((u) => ({ "@type": "City", name: u.city })),
        sameAs,
        founder: { "@id": personId },
        department: unitList.map((u) => ({ "@id": `${base}/#unidade-${u.id}` })),
      },
      ...unitList.map((u) => ({
        "@type": "LegalService",
        "@id": `${base}/#unidade-${u.id}`,
        name: `${site.brand} · ${u.name}`,
        url: `${base}/contato#${u.id}`,
        image: `${base}/opengraph-image`,
        telephone: `+${u.phoneE164}`,
        email: site.email,
        address: postalAddress(u),
        hasMap: u.mapsUrl,
        areaServed: { "@type": "City", name: u.city },
        knowsAbout,
        parentOrganization: { "@id": orgId },
        employee: { "@id": personId },
      })),
      {
        "@type": "Person",
        "@id": personId,
        name: site.lawyer.name,
        jobTitle: "Advogado",
        email: site.email,
        worksFor: { "@id": orgId },
        knowsAbout,
        sameAs: [site.instagram.url],
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "Inscrição profissional",
            name: site.lawyer.oab,
            recognizedBy: { "@type": "Organization", name: "Ordem dos Advogados do Brasil — Seção de São Paulo" },
          },
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "degree",
            name: `${site.lawyer.education} (${site.lawyer.graduationYear})`,
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: base,
        name: site.brand,
        inLanguage: "pt-BR",
        publisher: { "@id": orgId },
      },
    ],
  };
}

function postalAddress(u: (typeof unitList)[number]) {
  return {
    "@type": "PostalAddress",
    streetAddress: `${u.street}, ${u.number} - ${u.district}`,
    addressLocality: u.city,
    addressRegion: u.state,
    addressCountry: "BR",
  };
}
