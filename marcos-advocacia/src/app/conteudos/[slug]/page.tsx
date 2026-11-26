import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import { getSiteUrl, site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";
import { formatDate, getAllArticles, getArticle, getRelatedArticles, readingMinutes } from "@/content/articles";
import { areaInfo } from "@/content/types";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { RichBlocks } from "@/components/ui/RichText";
import { JsonLd } from "@/components/ui/JsonLd";
import { ArticleCard } from "@/components/sections/ArticleCard";
import { ContactBand } from "@/components/sections/ContactBand";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(props: PageProps<"/conteudos/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getArticle(slug);
  if (!article) return {};
  return pageMetadata({
    title: article.seoTitle ?? article.title,
    ogTitle: article.title,
    description: article.excerpt,
    path: `/conteudos/${article.slug}`,
    type: "article",
    publishedTime: article.date,
    modifiedTime: article.updated ?? article.date,
    keywords: article.keywords,
  });
}

export default async function ArticlePage(props: PageProps<"/conteudos/[slug]">) {
  const { slug } = await props.params;
  const article = getArticle(slug);
  if (!article) notFound();

  const area = areaInfo[article.category];
  const related = getRelatedArticles(article);
  const base = getSiteUrl();
  const url = `${base}/conteudos/${article.slug}`;

  return (
    <>
      <section className="bg-navy-depth relative overflow-hidden pb-24 pt-32 text-white sm:pb-32 lg:pt-44">
        <div aria-hidden="true" className="bg-lines pointer-events-none absolute inset-0" />
        <div className="container-site relative max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "Conteúdos", href: "/conteudos" },
              { label: area.label, href: area.href },
            ]}
          />
          <Link
            href={area.href}
            className="mt-8 inline-flex rounded-full border border-gold-400/30 bg-gold-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold-300"
          >
            {area.label}
          </Link>
          <h1 className="display mt-6 animate-fade-up text-[2.4rem] sm:text-[3.4rem] lg:text-[3.9rem]">{article.title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">{article.excerpt}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/60">
            <span className="inline-flex items-center gap-2">
              <CalendarDays aria-hidden="true" className="size-4 text-gold-400" />
              <time dateTime={article.date}>{formatDate(article.date)}</time>
            </span>
            {article.updated ? (
              <span>
                Atualizado em <time dateTime={article.updated}>{formatDate(article.updated)}</time>
              </span>
            ) : null}
            <span className="inline-flex items-center gap-2">
              <Clock aria-hidden="true" className="size-4 text-gold-400" />
              {readingMinutes(article)} min de leitura
            </span>
          </div>
        </div>
      </section>

      <div className="bg-ivory-depth pb-20 sm:pb-28">
        <div className="container-site max-w-4xl">
          <div className="relative -mt-14 aspect-[16/9] overflow-hidden rounded-3xl border border-white/10 bg-navy-900 shadow-[0_40px_80px_-40px_rgba(11,23,48,0.6)] sm:-mt-20">
            <Image
              src={article.cover.src}
              alt={article.cover.alt}
              fill
              priority
              sizes="(min-width: 896px) 832px, 100vw"
              unoptimized={article.cover.src.endsWith(".svg")}
              className="object-cover"
            />
          </div>

          <article className="mx-auto mt-14 max-w-[46rem]">
            <div className="prose-legal">
              <RichBlocks blocks={article.blocks} />
            </div>

            <aside className="mt-14 rounded-2xl border border-line bg-white p-6 text-sm leading-relaxed text-slate">
              <p className="font-semibold text-navy-900">Aviso importante</p>
              <p className="mt-2">
                Este conteúdo tem caráter exclusivamente informativo e educativo e reflete a legislação na data de sua
                publicação. Não constitui consultoria jurídica e não substitui a análise individual de cada situação
                por um advogado.
              </p>
            </aside>

            <div className="mt-8 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-xl bg-navy-900 font-serif text-lg font-semibold text-gold-300">
                  MD
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy-900">{site.lawyer.name}</p>
                  <p className="text-xs text-slate">
                    Advogado · {site.lawyer.oab}
                  </p>
                </div>
              </div>
              <Link href="/conteudos" className="inline-flex items-center gap-2 text-sm font-semibold text-navy-800 link-underline">
                <ArrowLeft aria-hidden="true" className="size-4 text-gold-600" />
                Todos os conteúdos
              </Link>
            </div>
          </article>
        </div>
      </div>

      {related.length > 0 ? (
        <section className="bg-white py-20 sm:py-28">
          <div className="container-site">
            <span className="eyebrow">Continue lendo</span>
            <h2 className="display mt-5 text-[2.35rem] text-navy-900 sm:text-5xl">Outros conteúdos</h2>
            <div className="snap-carousel -mx-5 mt-12 px-5 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3">
              {related.map((a) => (
                <div key={a.slug} className="w-[85%] sm:w-auto">
                  <ArticleCard article={a} />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <ContactBand topic={area.label} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.excerpt,
          image: [`${base}${article.cover.src}`],
          datePublished: article.date,
          dateModified: article.updated ?? article.date,
          inLanguage: "pt-BR",
          articleSection: area.label,
          keywords: article.keywords?.join(", "),
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
          url,
          author: { "@type": "Person", "@id": `${base}/#advogado`, name: site.lawyer.name },
          publisher: { "@id": `${base}/#escritorio` },
        }}
      />
    </>
  );
}
