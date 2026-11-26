import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";
import { areas } from "@/content/areas";
import { getAllArticles } from "@/content/articles";
import { WhatsAppPicker } from "@/components/ui/WhatsAppPicker";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArticleCard } from "@/components/sections/ArticleCard";
import { UnitsSection } from "@/components/sections/UnitsSection";
import { ContactBand } from "@/components/sections/ContactBand";

export const metadata: Metadata = {
  ...pageMetadata({
    title: `${site.brand} | Advogado em São Paulo e Votuporanga`,
    ogTitle: site.brand,
    description: site.description,
    path: "/",
    keywords: [
      "advogado São Paulo",
      "advogado Votuporanga",
      "escritório de advocacia",
      "advogado trabalhista",
      "direito de família",
      "direito civil",
      "direito empresarial",
    ],
  }),
  title: { absolute: `${site.brand} | Advogado em São Paulo e Votuporanga` },
};

const facts = [
  { label: "Inscrição", value: site.lawyer.oab },
  { label: "Formação", value: `Direito · ${site.lawyer.graduationYear}` },
  { label: "Unidades", value: "São Paulo · Votuporanga" },
  { label: "Áreas de atuação", value: "Quatro áreas" },
];

const bento = [
  { area: areas.trabalho, className: "md:col-span-2 md:row-span-2", featured: true },
  { area: areas.familia, className: "" },
  { area: areas.civil, className: "" },
  { area: areas.empresarial, className: "md:col-span-2" },
];

export default function HomePage() {
  const articles = getAllArticles().slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="bg-navy-depth relative overflow-hidden pt-28 text-white lg:pt-40">
        <div aria-hidden="true" className="bg-lines pointer-events-none absolute inset-0" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-48 -top-24 size-[44rem] rounded-full border border-gold-400/10" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-24 size-[30rem] rounded-full border border-white/[0.05]" />

        <div className="container-site relative grid gap-12 pb-16 sm:pb-20 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pb-28">
          <div className="lg:col-span-7">
            <p className="inline-flex animate-fade-up items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] py-1.5 pl-1.5 pr-4 text-xs text-white/75">
              <span className="rounded-full bg-gold-500/15 px-2.5 py-1 font-semibold text-gold-300">{site.lawyer.oab}</span>
              {site.lawyer.name}
            </p>
            <h1 className="display mt-7 animate-fade-up text-[2.55rem] leading-[1.06] sm:text-6xl lg:text-[4.35rem] [animation-delay:80ms]">
              Advocacia com responsabilidade, conhecimento jurídico e compromisso com a{" "}
              <em className="text-gold-gradient font-medium">orientação de cada cliente.</em>
            </h1>
            <p className="mt-7 max-w-xl animate-fade-up text-base leading-relaxed text-white/70 sm:text-lg [animation-delay:160ms]">
              Escritório com unidades em São Paulo e Votuporanga, com atuação em Direito do Trabalho, Direito Civil,
              Direito de Família e Direito Empresarial.
            </p>
            <div className="mt-9 flex animate-fade-up flex-col gap-3 sm:flex-row [animation-delay:240ms]">
              <a href="#areas" className="btn btn-ghost-light">
                Conheça as áreas de atuação
                <ArrowRight aria-hidden="true" className="size-4" />
              </a>
              <Link href="/sobre" className="btn btn-ghost-light border-transparent bg-transparent text-white/80 hover:text-white">
                O escritório
              </Link>
            </div>
          </div>
          <div className="animate-fade-up lg:col-span-5 [animation-delay:220ms]">
            <WhatsAppPicker />
          </div>
        </div>

        <div className="relative border-t border-white/[0.07]">
          <dl className="container-site grid grid-cols-2 lg:grid-cols-4">
            {facts.map((fact, i) => (
              <div
                key={fact.label}
                className={`py-6 sm:py-8 ${i % 2 === 1 ? "pl-5 sm:pl-8" : ""} ${i > 0 ? "lg:border-l lg:border-white/[0.07] lg:pl-8" : ""} ${
                  i % 2 === 1 ? "border-l border-white/[0.07]" : ""
                } ${i >= 2 ? "border-t border-white/[0.07] lg:border-t-0" : ""}`}
              >
                <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white/45">{fact.label}</dt>
                <dd className="mt-2 font-serif text-base font-semibold text-white sm:text-xl">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* APRESENTAÇÃO */}
      <section className="bg-ivory-depth py-20 sm:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5" data-reveal>
            <span className="eyebrow">O escritório</span>
            <h2 className="display mt-5 text-[2.35rem] text-navy-900 sm:text-5xl lg:text-[3.4rem]">
              Orientação jurídica clara, ética e individualizada
            </h2>
          </div>
          <div className="lg:col-span-7" data-reveal style={{ "--reveal-delay": "100ms" } as React.CSSProperties}>
            <div className="prose-legal">
              <p>
                O escritório <strong>{site.brand}</strong> é conduzido pelo advogado <strong>{site.lawyer.name}</strong>,
                bacharel em Direito formado em {site.lawyer.graduationYear} e inscrito na Ordem dos Advogados do Brasil
                sob o número {site.lawyer.oab}.
              </p>
              <p>
                O atendimento é realizado nas unidades de São Paulo e de Votuporanga, com atenção às particularidades
                de cada situação, linguagem acessível e respeito ao sigilo profissional.
              </p>
            </div>
            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
              {[
                { t: "Responsabilidade", d: "Análise individual de cada caso, sem promessas de resultado." },
                { t: "Clareza", d: "Explicações acessíveis sobre direitos, riscos e caminhos possíveis." },
                { t: "Sigilo", d: "Respeito ao dever de sigilo profissional previsto no Estatuto da Advocacia." },
              ].map((v) => (
                <div key={v.t} className="bg-white p-6">
                  <p className="font-serif text-xl font-semibold text-navy-900">{v.t}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{v.d}</p>
                </div>
              ))}
            </div>
            <Link href="/sobre" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy-800 link-underline">
              Conheça o escritório
              <ArrowRight aria-hidden="true" className="size-4 text-gold-700" />
            </Link>
          </div>
        </div>
      </section>

      {/* ÁREAS (bento) */}
      <section id="areas" className="scroll-mt-24 bg-white py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Áreas de atuação"
            title="Atuação em quatro áreas do Direito"
            description="Conteúdo informativo sobre cada área e os temas mais frequentes, para que você compreenda melhor a sua situação."
          />
          <div className="mt-12 grid auto-rows-[minmax(15rem,auto)] gap-4 md:grid-cols-4">
            {bento.map(({ area, className, featured }, i) => (
              <Link
                key={area.slug}
                href={area.path}
                data-reveal
                style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border p-7 transition-all duration-500 hover:-translate-y-1 sm:p-9 ${
                  featured
                    ? "bg-navy-depth border-navy-800 text-white hover:shadow-[0_40px_80px_-40px_rgba(11,23,48,0.8)]"
                    : "border-line bg-ivory hover:border-gold-500/50 hover:bg-white hover:shadow-[0_30px_60px_-40px_rgba(11,23,48,0.4)]"
                } ${className}`}
              >
                {featured ? (
                  <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -right-32 size-96 rounded-full border border-gold-400/15" />
                ) : null}
                <div className="relative">
                  <span className={`font-serif text-sm font-semibold tracking-[0.2em] ${featured ? "text-gold-400" : "text-gold-700"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className={`display mt-4 ${featured ? "text-4xl sm:text-5xl" : "text-3xl"} ${featured ? "text-white" : "text-navy-900"}`}>
                    {area.label}
                  </h3>
                  <p className={`mt-4 max-w-md text-[0.95rem] leading-relaxed ${featured ? "text-white/70" : "text-slate"}`}>
                    {area.heroLead}
                  </p>
                </div>
                <div className="relative mt-8 flex items-end justify-between gap-4">
                  {featured ? (
                    <ul className="flex flex-wrap gap-2">
                      {area.topics.slice(0, 5).map((t) => (
                        <li key={t.title} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/75">
                          {t.title}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-xs text-slate">{area.topics.length} temas</span>
                  )}
                  <span
                    className={`grid size-11 shrink-0 place-items-center rounded-full border transition-all duration-500 group-hover:rotate-45 ${
                      featured ? "border-gold-400/40 text-gold-300" : "border-line bg-white text-navy-800"
                    }`}
                  >
                    <ArrowUpRight aria-hidden="true" className="size-5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DESTAQUE: VÍNCULO */}
      <section className="bg-ivory-depth py-20 sm:py-24">
        <div className="container-site">
          <div className="card relative grid gap-8 overflow-hidden p-8 sm:p-12 lg:grid-cols-12 lg:items-center" data-reveal>
            <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-gold-300 via-gold-500 to-gold-700" />
            <div className="lg:col-span-8">
              <span className="eyebrow">Conteúdo em destaque · Direito do Trabalho</span>
              <h2 className="display mt-4 text-[2.1rem] text-navy-900 sm:text-[2.8rem]">
                Prestação de serviços ou vínculo empregatício?
              </h2>
              <p className="mt-4 max-w-2xl text-slate">
                Conheça os requisitos que a CLT utiliza para caracterizar a relação de emprego e entenda por que cada
                situação precisa ser analisada individualmente.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link href="/direito-do-trabalho/reconhecimento-de-vinculo-empregaticio" className="btn btn-navy">
                Entenda o tema
                <ArrowRight aria-hidden="true" className="size-4 text-gold-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <UnitsSection />

      {/* CONTEÚDOS */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-site">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Conteúdos jurídicos"
              title="Informação para decisões mais conscientes"
              description="Textos educativos sobre temas frequentes do dia a dia jurídico."
            />
            <Link href="/conteudos" className="btn btn-outline self-start sm:self-auto">
              Ver todos
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

      <ContactBand />
    </>
  );
}
