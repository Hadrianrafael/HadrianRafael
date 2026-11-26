import type { Metadata } from "next";
import { getSiteUrl, site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";
import { getAllArticles } from "@/content/articles";
import { areaInfo, type AreaSlug } from "@/content/types";
import { PageHero } from "@/components/sections/PageHero";
import { ArticleCard } from "@/components/sections/ArticleCard";
import { ArticleFilter } from "@/components/sections/ArticleFilter";
import { ContactBand } from "@/components/sections/ContactBand";
import { JsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "Conteúdos jurídicos",
  description:
    "Artigos informativos sobre Direito do Trabalho, Direito Civil, Direito de Família e Direito Empresarial, elaborados pelo escritório MDSilva Advocacia.",
  path: "/conteudos",
});

export default function ConteudosPage() {
  const articles = getAllArticles();
  const base = getSiteUrl();
  const options = (Object.keys(areaInfo) as AreaSlug[])
    .map((slug) => ({ value: slug, label: areaInfo[slug].label, count: articles.filter((a) => a.category === slug).length }))
    .filter((o) => o.count > 0);

  return (
    <>
      <PageHero
        eyebrow="Conteúdos jurídicos"
        title="Informação jurídica de forma clara"
        lead="Textos educativos sobre temas frequentes. Os conteúdos têm caráter informativo e não substituem a análise individual de cada caso."
        crumbs={[{ label: "Conteúdos jurídicos", href: "/conteudos" }]}
      />

      <section className="bg-ivory-depth py-16 sm:py-24">
        <div className="container-site">
          <h2 className="sr-only">Lista de conteúdos</h2>
          <ArticleFilter options={options} total={articles.length}>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article, i) => (
                <li key={article.slug} data-area={article.category}>
                  <ArticleCard article={article} priority={i < 3} />
                </li>
              ))}
            </ul>
          </ArticleFilter>
        </div>
      </section>

      <ContactBand />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `Conteúdos jurídicos | ${site.brand}`,
          url: `${base}/conteudos`,
          inLanguage: "pt-BR",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: articles.map((a, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `${base}/conteudos/${a.slug}`,
              name: a.title,
            })),
          },
        }}
      />
    </>
  );
}
