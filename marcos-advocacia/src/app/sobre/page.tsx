import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getSiteUrl, navigation, site, unitList } from "@/config/site";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { UnitsSection } from "@/components/sections/UnitsSection";
import { ContactBand } from "@/components/sections/ContactBand";
import { JsonLd } from "@/components/ui/JsonLd";
import fotoRetrato from "@/assets/fotos/marcos-retrato.jpg";
import fotoEscritorio from "@/assets/fotos/marcos-escritorio.jpg";
import fotoComputador from "@/assets/fotos/marcos-computador.jpg";

export const metadata: Metadata = pageMetadata({
  title: `Sobre o advogado ${site.lawyer.name}`,
  description: `Conheça o escritório ${site.brand} e o advogado ${site.lawyer.name}, formado em Direito em ${site.lawyer.graduationYear}, inscrito na ${site.lawyer.oab}.`,
  path: "/sobre",
});

const commitments = [
  {
    title: "Análise individual",
    text: "Cada situação é examinada a partir de seus fatos e documentos, sem respostas padronizadas.",
  },
  {
    title: "Informação clara",
    text: "Explicação acessível sobre direitos, deveres, riscos e caminhos possíveis, para decisões conscientes.",
  },
  {
    title: "Ética profissional",
    text: "Atuação em conformidade com o Estatuto da Advocacia e com o Código de Ética e Disciplina da OAB.",
  },
  {
    title: "Sigilo",
    text: "Respeito ao sigilo profissional e cuidado no tratamento das informações compartilhadas.",
  },
];

export default function SobrePage() {
  const base = getSiteUrl();
  return (
    <>
      <PageHero
        eyebrow="O escritório"
        title={
          <>
            {site.brand.replace(" Advocacia", "")} <span className="text-gold-gradient">Advocacia</span>
          </>
        }
        lead="Um escritório dedicado à orientação jurídica responsável, com atendimento em São Paulo e em Votuporanga."
        crumbs={[{ label: "O escritório", href: "/sobre" }]}
      />

      <section className="bg-ivory-depth py-20 sm:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Cartão de identificação com a fotografia oficial (acima da dobra: sem animação de entrada) */}
          <div className="lg:col-span-5">
            <div className="bg-navy-depth relative overflow-hidden rounded-[2rem] p-8 text-white shadow-[0_40px_80px_-45px_rgba(11,23,48,0.6)] sm:p-10">
              <div className="relative z-10 -mx-8 -mt-8 mb-8 sm:-mx-10 sm:-mt-10">
                <Image
                  src={fotoRetrato}
                  alt={`${site.lawyer.name}, advogado, no escritório`}
                  placeholder="blur"
                  preload
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-900 to-transparent" />
              </div>
              <div aria-hidden="true" className="bg-lines pointer-events-none absolute inset-0" />
              <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full border border-gold-400/15" />
              <div className="relative">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-gold-400">Advogado</p>
                <h2 className="display mt-3 text-4xl sm:text-[2.8rem]">{site.lawyer.name}</h2>
                <div className="gold-rule my-7" />
                <dl className="space-y-5 text-sm">
                  <div>
                    <dt className="text-white/45">Inscrição na OAB</dt>
                    <dd className="mt-1 font-serif text-xl text-white">{site.lawyer.oab}</dd>
                  </div>
                  <div>
                    <dt className="text-white/45">Formação</dt>
                    <dd className="mt-1 font-serif text-xl text-white">
                      {site.lawyer.education}, formado em {site.lawyer.graduationYear}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-white/45">Unidades</dt>
                    <dd className="mt-1 font-serif text-xl text-white">{unitList.map((u) => u.city).join(" · ")}</dd>
                  </div>
                  <div>
                    <dt className="text-white/45">Contato</dt>
                    <dd className="mt-1 break-all text-white/85">
                      <a href={`mailto:${site.email}`} className="link-underline">
                        {site.email}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div data-reveal>
              <span className="eyebrow">Apresentação institucional</span>
              <h2 className="display mt-5 text-[2.35rem] text-navy-900 sm:text-5xl">
                Responsabilidade e compromisso com a orientação de cada cliente
              </h2>
            </div>
            <div className="prose-legal mt-8" data-reveal>
              <p>
                O escritório <strong>{site.brand}</strong> é conduzido pelo advogado{" "}
                <strong>{site.lawyer.name}</strong>, bacharel em Direito formado em {site.lawyer.graduationYear} e
                regularmente inscrito na Ordem dos Advogados do Brasil, Seção de São Paulo, sob o número{" "}
                {site.lawyer.oabNumber}.
              </p>
              <p>
                O escritório atua em Direito do Trabalho, Direito Civil, Direito de Família e Direito Empresarial, com
                atendimento nas unidades de São Paulo, na Vila Guarani, e de Votuporanga, no Jardim Eldorado.
              </p>
              <p>
                A proposta é oferecer orientação jurídica com responsabilidade e conhecimento técnico, explicando de
                forma clara os direitos, os deveres e os caminhos possíveis em cada situação, sempre a partir da análise
                individual do caso.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4" data-reveal>
              <Image
                src={fotoEscritorio}
                alt={`${site.lawyer.name} no escritório`}
                placeholder="blur"
                sizes="(min-width: 1024px) 330px, 50vw"
                className="aspect-[4/5] w-full rounded-2xl object-cover object-top"
              />
              <Image
                src={fotoComputador}
                alt={`${site.lawyer.name} trabalhando em sua mesa`}
                placeholder="blur"
                sizes="(min-width: 1024px) 330px, 50vw"
                className="aspect-[4/5] w-full rounded-2xl object-cover object-top"
              />
            </div>

            <div className="mt-14" data-reveal>
              <h2 className="font-serif text-3xl font-semibold text-navy-900">Compromissos de atuação</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {commitments.map((c, i) => (
                  <div key={c.title} className="card p-6">
                    <span className="font-serif text-sm font-semibold tracking-[0.2em] text-gold-700">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 font-serif text-2xl font-semibold text-navy-900">{c.title}</h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-slate">{c.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-14" data-reveal>
              <h2 className="font-serif text-3xl font-semibold text-navy-900">Áreas de atuação</h2>
              <ul className="mt-6 divide-y divide-line border-y border-line">
                {navigation.areas.map((area) => (
                  <li key={area.href}>
                    <Link href={area.href} className="group flex items-center justify-between gap-4 py-5">
                      <span>
                        <span className="block font-serif text-2xl font-semibold text-navy-900">{area.label}</span>
                        <span className="mt-1 block text-sm text-slate">{area.description}</span>
                      </span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-5 shrink-0 text-gold-700 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <UnitsSection />
      <ContactBand />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: `Sobre | ${site.brand}`,
          url: `${base}/sobre`,
          inLanguage: "pt-BR",
          mainEntity: { "@id": `${base}/#advogado` },
          about: { "@id": `${base}/#escritorio` },
        }}
      />
    </>
  );
}
