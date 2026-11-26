import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight, Scale } from "lucide-react";
import type { AreaContent } from "@/content/areas";
import { getArticlesByArea } from "@/content/articles";
import { site, unitList } from "@/config/site";
import { getSiteUrl } from "@/config/site";
import { PageHero } from "./PageHero";
import { FaqList } from "./FaqList";
import { ArticleCard } from "./ArticleCard";
import { ContactBand } from "./ContactBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/ui/JsonLd";

export function AreaPage({ area, children }: { area: AreaContent; children?: ReactNode }) {
  const articles = getArticlesByArea(area.slug).slice(0, 3);
  const base = getSiteUrl();

  return (
    <>
      <PageHero
        eyebrow="Área de atuação"
        title={area.heroTitle}
        lead={area.heroLead}
        crumbs={[{ label: area.label, href: area.path }]}
        aside={
          <div className="glass rounded-3xl p-6 sm:p-7">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-gold-500/15 text-gold-300">
                <Scale aria-hidden="true" className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">{site.lawyer.name}</p>
                <p className="text-xs text-white/55">{site.lawyer.oab}</p>
              </div>
            </div>
            <div className="gold-rule my-5" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">Atendimento</p>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              {unitList.map((u) => (
                <li key={u.id} className="flex items-center justify-between gap-3">
                  <span>{u.city}</span>
                  <span className="text-white/50">{u.phoneDisplay}</span>
                </li>
              ))}
            </ul>
            <a href="#temas" className="btn btn-ghost-light mt-6 w-full min-h-11 text-[0.85rem]">
              Ver temas da área
            </a>
          </div>
        }
      />

      <section className="bg-ivory-depth py-20 sm:py-28">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5" data-reveal>
            <span className="eyebrow">Visão geral</span>
            <h2 className="display mt-5 text-[2.35rem] text-navy-900 sm:text-5xl">O que é {area.label}</h2>
          </div>
          <div className="prose-legal lg:col-span-7" data-reveal>
            {area.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="temas" className="scroll-mt-24 bg-white py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading eyebrow="Temas" title={area.topicsTitle} description={area.topicsLead} />
          <ol className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {area.topics.map((topic, i) => {
              const content = (
                <>
                  <span className="font-serif text-sm font-semibold tracking-[0.2em] text-gold-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-serif text-[1.6rem] font-semibold leading-snug text-navy-900">{topic.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-slate">{topic.text}</p>
                  {topic.href ? (
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800">
                      Saiba mais
                      <ArrowUpRight aria-hidden="true" className="size-4 text-gold-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  ) : null}
                </>
              );
              return (
                <li key={topic.title} data-reveal style={{ "--reveal-delay": `${(i % 3) * 70}ms` } as React.CSSProperties} className="bg-white">
                  {topic.href ? (
                    <Link href={topic.href} className="group block h-full p-7 transition-colors duration-500 hover:bg-ivory sm:p-8">
                      {content}
                    </Link>
                  ) : (
                    <div className="h-full p-7 sm:p-8">{content}</div>
                  )}
                </li>
              );
            })}
          </ol>
          <p className="mt-6 text-xs leading-relaxed text-slate">
            Os temas acima têm caráter informativo. A existência de direitos e a melhor forma de atuação dependem da
            análise individual de cada situação.
          </p>
        </div>
      </section>

      {children}

      <section className="bg-ivory-depth py-20 sm:py-28">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4" data-reveal>
            <span className="eyebrow">Perguntas frequentes</span>
            <h2 className="display mt-5 text-[2.35rem] text-navy-900 sm:text-5xl">Dúvidas comuns</h2>
            <p className="mt-5 text-slate">Respostas gerais e informativas. Cada caso exige análise própria.</p>
          </div>
          <div className="lg:col-span-8">
            <FaqList items={area.faq} />
          </div>
        </div>
      </section>

      {articles.length > 0 ? (
        <section className="bg-white py-20 sm:py-28">
          <div className="container-site">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading eyebrow="Conteúdos jurídicos" title={`Leituras sobre ${area.label}`} />
              <Link href="/conteudos" className="btn btn-outline self-start sm:self-auto">
                Todos os conteúdos
              </Link>
            </div>
            <div className="snap-carousel -mx-5 mt-12 px-5 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3">
              {articles.map((article) => (
                <div key={article.slug} className="w-[85%] sm:w-auto">
                  <ArticleCard article={article} />
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
          "@type": "WebPage",
          name: `${area.label} | ${site.brand}`,
          url: `${base}${area.path}`,
          description: area.metaDescription,
          inLanguage: "pt-BR",
          about: { "@type": "Thing", name: area.label },
          provider: { "@id": `${base}/#escritorio` },
        }}
      />
    </>
  );
}
