import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, FileText } from "lucide-react";
import { aiAttendance, getSiteUrl, site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";
import { whatsappAiUrl } from "@/lib/whatsapp";
import { getArticlesByArea } from "@/content/articles";
import { PageHero } from "@/components/sections/PageHero";
import { FaqList } from "@/components/sections/FaqList";
import { ArticleCard } from "@/components/sections/ArticleCard";
import { UnitsSection } from "@/components/sections/UnitsSection";
import { WhatsAppPicker } from "@/components/ui/WhatsAppPicker";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { JsonLd } from "@/components/ui/JsonLd";

const PATH = "/direito-do-trabalho/reconhecimento-de-vinculo-empregaticio";
const TOPIC = "Reconhecimento de vínculo empregatício";

export const metadata: Metadata = pageMetadata({
  title: "Reconhecimento de vínculo empregatício",
  description:
    "O que caracteriza a relação de emprego segundo a CLT, os requisitos legais e a diferença entre prestação de serviços e vínculo empregatício.",
  path: PATH,
  keywords: [
    "reconhecimento de vínculo empregatício",
    "vínculo empregatício",
    "trabalho sem carteira assinada",
    "pejotização",
    "requisitos da relação de emprego",
    "advogado trabalhista São Paulo",
    "advogado trabalhista Votuporanga",
  ],
});

const sections = [
  { id: "o-que-caracteriza", label: "O que caracteriza a relação de emprego" },
  { id: "requisitos", label: "Requisitos previstos na legislação" },
  { id: "diferencas", label: "Prestação de serviços x relação de emprego" },
  { id: "direitos", label: "Direitos que podem estar envolvidos" },
  { id: "analise-individual", label: "A importância da análise individual" },
  { id: "contato", label: "Como entrar em contato" },
];

const requirements = [
  {
    title: "Pessoa física",
    text: "O serviço é prestado por uma pessoa natural. A existência de uma empresa formal em nome do trabalhador não afasta, por si só, a análise da relação real.",
  },
  {
    title: "Pessoalidade",
    text: "A atividade deve ser realizada pessoalmente pelo trabalhador, que não pode se fazer substituir livremente por outra pessoa.",
  },
  {
    title: "Não eventualidade",
    text: "O trabalho é prestado de forma contínua ou habitual, inserido na dinâmica normal da atividade de quem contrata.",
  },
  {
    title: "Onerosidade",
    text: "Há contraprestação pelo trabalho, ou seja, o serviço é remunerado, independentemente da forma ou do nome dado ao pagamento.",
  },
  {
    title: "Subordinação",
    text: "Quem contrata dirige o modo de execução do trabalho: dá ordens, define horários, fiscaliza, estabelece metas ou aplica penalidades.",
  },
];

const comparison = [
  {
    aspect: "Direção do trabalho",
    service: "O prestador organiza como, quando e onde executa a atividade, com autonomia.",
    employment: "O empregador dirige a prestação de serviços, com ordens e fiscalização.",
  },
  {
    aspect: "Pessoalidade",
    service: "Em regra, admite substituição ou a atuação de auxiliares.",
    employment: "O serviço deve ser prestado pessoalmente pelo empregado.",
  },
  {
    aspect: "Continuidade",
    service: "Pode atender demandas pontuais ou por projeto, muitas vezes para diversos clientes.",
    employment: "Trabalho contínuo, integrado à rotina da atividade do empregador.",
  },
  {
    aspect: "Remuneração",
    service: "Preço ajustado pelo serviço ou pelo resultado, normalmente com emissão de nota fiscal.",
    employment: "Salário pago periodicamente pelo trabalho prestado.",
  },
  {
    aspect: "Riscos da atividade",
    service: "O prestador assume os riscos do próprio negócio.",
    employment: "Os riscos da atividade econômica são do empregador (CLT, art. 2º).",
  },
];

const rights = [
  "Registro do contrato na Carteira de Trabalho (CTPS), inclusive na versão digital.",
  "Depósitos do FGTS referentes ao período.",
  "Férias acrescidas de um terço e 13º salário.",
  "Contribuições previdenciárias (INSS) do período.",
  "Horas extras, adicionais e descanso semanal remunerado, quando aplicáveis.",
  "Verbas rescisórias, como aviso prévio e indenização de 40% do FGTS, conforme a forma de término do contrato.",
  "Direitos previstos em acordos e convenções coletivas da categoria.",
];

const faq = [
  {
    q: "Trabalho como MEI ou pessoa jurídica. Posso ter vínculo empregatício?",
    a: "A forma de contratação não é, isoladamente, decisiva. Se a relação apresentar, na prática, os requisitos dos artigos 2º e 3º da CLT, a questão pode ser discutida. Por outro lado, existem contratações legítimas por meio de pessoa jurídica, e o tema é debatido nos tribunais, inclusive no STF. Só a análise do caso concreto permite uma orientação responsável.",
  },
  {
    q: "O contrato de prestação de serviços que assinei impede o reconhecimento do vínculo?",
    a: "Não necessariamente. No Direito do Trabalho, considera-se a realidade da relação, e não apenas o que está escrito no contrato (princípio da primazia da realidade). Ainda assim, o contrato é um documento relevante e será considerado na análise.",
  },
  {
    q: "Quanto tempo tenho para buscar orientação?",
    a: "Em regra, a ação trabalhista deve ser proposta em até dois anos após o término da relação de trabalho, podendo alcançar créditos dos cinco anos anteriores ao ajuizamento (Constituição Federal, art. 7º, XXIX). Por isso, é recomendável buscar orientação o quanto antes.",
  },
  {
    q: "Preciso enviar documentos no primeiro contato?",
    a: "Não. No primeiro contato, basta uma breve descrição da situação. Documentos como contratos, comprovantes de pagamento, mensagens e registros de horário poderão ser solicitados posteriormente, por canal adequado.",
  },
  {
    q: "O contato com o escritório garante o reconhecimento do vínculo?",
    a: "Não. Nenhum profissional pode garantir resultados. O contato permite que a situação seja avaliada com responsabilidade, para que você compreenda os caminhos possíveis e os riscos envolvidos.",
  },
];

export default function Page() {
  const related = getArticlesByArea("trabalho").slice(0, 3);
  const base = getSiteUrl();

  return (
    <>
      <PageHero
        eyebrow="Direito do Trabalho"
        title="Reconhecimento de vínculo empregatício"
        lead="Prestar serviços sem carteira assinada, como autônomo ou por meio de empresa própria, nem sempre significa ausência de relação de emprego. Entenda os critérios que a legislação utiliza."
        crumbs={[
          { label: "Direito do Trabalho", href: "/direito-do-trabalho" },
          { label: "Vínculo empregatício", href: PATH },
        ]}
        aside={<WhatsAppPicker defaultTopic={TOPIC} fixedTopic title="Tire suas dúvidas com o escritório" />}
      >
        <a href="#o-que-caracteriza" className="btn btn-ghost-light">
          Ler o conteúdo
          <ArrowRight aria-hidden="true" className="size-4" />
        </a>
      </PageHero>

      <div className="bg-ivory-depth py-16 sm:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          {/* Índice */}
          <aside className="lg:col-span-4">
            <nav aria-label="Nesta página" className="lg:sticky lg:top-28">
              <p className="eyebrow">Nesta página</p>
              <ol className="mt-5 space-y-1 border-l border-line">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="-ml-px flex gap-3 border-l border-transparent py-2 pl-4 text-sm text-slate transition-colors hover:border-gold-500 hover:text-navy-900"
                    >
                      <span className="font-serif text-gold-700">{String(i + 1).padStart(2, "0")}</span>
                      {s.label}
                    </a>
                  </li>
                ))}
              </ol>
              <div className="card mt-8 hidden p-5 lg:block">
                <p className="text-xs leading-relaxed text-slate">
                  Conteúdo informativo elaborado sob responsabilidade de {site.lawyer.name} ({site.lawyer.oab}). Não
                  substitui a análise individual do caso.
                </p>
              </div>
            </nav>
          </aside>

          <article className="lg:col-span-8">
            <section id="o-que-caracteriza" className="scroll-mt-28" data-reveal>
              <span className="eyebrow">01</span>
              <h2 className="display mt-4 text-[2.2rem] text-navy-900 sm:text-[2.8rem]">
                O que caracteriza uma relação de emprego
              </h2>
              <div className="prose-legal mt-6">
                <p>
                  A relação de emprego é uma espécie de relação de trabalho com proteção específica da legislação
                  trabalhista. Ela existe quando a forma concreta de prestação do serviço reúne os elementos previstos
                  nos artigos 2º e 3º da Consolidação das Leis do Trabalho (CLT), independentemente do nome dado ao
                  contrato.
                </p>
                <blockquote>
                  <p>
                    Considera-se empregador a empresa, individual ou coletiva, que, assumindo os riscos da atividade
                    econômica, admite, assalaria e dirige a prestação pessoal de serviço.
                  </p>
                  <footer className="mt-2 font-sans text-xs uppercase tracking-[0.18em] text-gold-700">CLT, art. 2º</footer>
                </blockquote>
                <blockquote>
                  <p>
                    Considera-se empregado toda pessoa física que prestar serviços de natureza não eventual a
                    empregador, sob a dependência deste e mediante salário.
                  </p>
                  <footer className="mt-2 font-sans text-xs uppercase tracking-[0.18em] text-gold-700">CLT, art. 3º</footer>
                </blockquote>
                <p>
                  A Justiça do Trabalho aplica o chamado <strong>princípio da primazia da realidade</strong>: o que
                  importa é como a relação acontece no dia a dia. O artigo 9º da CLT considera nulos os atos destinados a
                  desvirtuar, impedir ou fraudar a aplicação das normas trabalhistas.
                </p>
              </div>
            </section>

            <section id="requisitos" className="mt-20 scroll-mt-28">
              <div data-reveal>
                <span className="eyebrow">02</span>
                <h2 className="display mt-4 text-[2.2rem] text-navy-900 sm:text-[2.8rem]">
                  Requisitos previstos na legislação
                </h2>
                <p className="mt-5 text-[1.0625rem] leading-relaxed text-slate">
                  A partir da lei e da interpretação dos tribunais, costumam ser analisados cinco elementos, que devem
                  estar presentes em conjunto:
                </p>
              </div>
              <ol className="mt-8 grid gap-4 sm:grid-cols-2">
                {requirements.map((r, i) => (
                  <li
                    key={r.title}
                    data-reveal
                    style={{ "--reveal-delay": `${(i % 2) * 80}ms` } as React.CSSProperties}
                    className={`card card-hover p-6 ${i === requirements.length - 1 ? "sm:col-span-2" : ""}`}
                  >
                    <span className="font-serif text-sm font-semibold tracking-[0.2em] text-gold-700">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 font-serif text-2xl font-semibold text-navy-900">{r.title}</h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-slate">{r.text}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section id="diferencas" className="mt-20 scroll-mt-28">
              <div data-reveal>
                <span className="eyebrow">03</span>
                <h2 className="display mt-4 text-[2.2rem] text-navy-900 sm:text-[2.8rem]">
                  Prestação de serviços x relação de emprego
                </h2>
                <p className="mt-5 text-[1.0625rem] leading-relaxed text-slate">
                  A prestação de serviços autônoma é uma forma lícita de contratação. A diferença está, principalmente,
                  na autonomia de quem trabalha. Veja uma comparação simplificada:
                </p>
              </div>
              <div className="mt-8 overflow-hidden rounded-3xl border border-line bg-white" data-reveal>
                <div className="hidden grid-cols-[0.8fr_1fr_1fr] bg-navy-900 text-xs font-semibold uppercase tracking-[0.16em] text-white/80 md:grid">
                  <div className="p-5">Aspecto</div>
                  <div className="border-l border-white/10 p-5">Prestação de serviços</div>
                  <div className="border-l border-white/10 p-5 text-gold-300">Relação de emprego</div>
                </div>
                <dl className="divide-y divide-line">
                  {comparison.map((row) => (
                    <div key={row.aspect} className="grid md:grid-cols-[0.8fr_1fr_1fr]">
                      <dt className="bg-ivory/70 p-5 font-serif text-lg font-semibold text-navy-900 md:bg-transparent">
                        {row.aspect}
                      </dt>
                      <dd className="px-5 pb-3 pt-4 text-[0.93rem] leading-relaxed text-slate md:border-l md:border-line md:p-5">
                        <span className="mb-1 block text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-mist md:hidden">
                          Prestação de serviços
                        </span>
                        {row.service}
                      </dd>
                      <dd className="px-5 pb-5 pt-1 text-[0.93rem] leading-relaxed text-navy-800 md:border-l md:border-line md:p-5">
                        <span className="mb-1 block text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-gold-700 md:hidden">
                          Relação de emprego
                        </span>
                        {row.employment}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-slate">
                Comparação meramente ilustrativa. Nenhum elemento isolado define a natureza da relação: a análise
                considera o conjunto das circunstâncias.
              </p>
            </section>

            <section id="direitos" className="mt-20 scroll-mt-28" data-reveal>
              <span className="eyebrow">04</span>
              <h2 className="display mt-4 text-[2.2rem] text-navy-900 sm:text-[2.8rem]">
                Direitos que podem estar envolvidos
              </h2>
              <div className="prose-legal mt-6">
                <p>
                  Se a relação de emprego for reconhecida, podem ser discutidos direitos como os listados abaixo. A
                  existência e a extensão de cada um dependem das particularidades do caso, do período trabalhado e das
                  provas disponíveis:
                </p>
                <ul>
                  {rights.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section id="analise-individual" className="mt-20 scroll-mt-28" data-reveal>
              <span className="eyebrow">05</span>
              <h2 className="display mt-4 text-[2.2rem] text-navy-900 sm:text-[2.8rem]">
                A importância da análise individual
              </h2>
              <div className="prose-legal mt-6">
                <p>
                  Cada relação de trabalho tem características próprias. Situações aparentemente semelhantes podem ter
                  enquadramentos jurídicos diferentes, conforme a rotina, a forma de remuneração, o grau de autonomia e
                  os documentos existentes. Além disso, o tema é objeto de constante evolução na jurisprudência,
                  inclusive em discussões no Supremo Tribunal Federal sobre formas de contratação.
                </p>
                <p>
                  Por isso, <strong>não é possível afirmar a existência de direitos sem a análise individual</strong> de
                  cada situação. A orientação jurídica permite compreender os caminhos possíveis, os riscos envolvidos e
                  a documentação relevante.
                </p>
                <aside className="rounded-2xl border border-gold-500/30 bg-gold-200/25 p-5 sm:p-6">
                  <p className="font-serif text-xl font-semibold text-navy-900">Atenção aos prazos</p>
                  <p className="mt-2 text-[0.98rem] leading-relaxed">
                    Em regra, a ação trabalhista deve ser proposta em até dois anos após o término do contrato, podendo
                    alcançar créditos dos cinco anos anteriores ao ajuizamento (Constituição Federal, art. 7º, XXIX).
                  </p>
                </aside>
                <h3>Documentos que costumam ser úteis</h3>
                <ul>
                  <li>Contratos de prestação de serviços e aditivos.</li>
                  <li>Comprovantes de pagamento e notas fiscais emitidas.</li>
                  <li>Mensagens, e-mails e comunicados com ordens, metas ou escalas.</li>
                  <li>Registros de horário, crachás, uniformes ou acessos a sistemas da empresa.</li>
                </ul>
                <p className="text-sm text-slate">
                  Não é necessário enviar documentos no primeiro contato. Evite compartilhar documentos ou dados
                  sensíveis pelo formulário do site.
                </p>
              </div>
            </section>

            <section id="contato" className="mt-20 scroll-mt-28" data-reveal>
              <span className="eyebrow">06</span>
              <h2 className="display mt-4 text-[2.2rem] text-navy-900 sm:text-[2.8rem]">Como entrar em contato</h2>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-slate">
                Escolha o canal de sua preferência. O atendimento das unidades de São Paulo e Votuporanga é realizado
                pelo próprio escritório.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <a href="#unidades" className="card card-hover flex items-start gap-4 p-6">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-navy-900 text-gold-300">
                    <WhatsAppIcon className="size-5" />
                  </span>
                  <span>
                    <span className="block font-semibold text-navy-900">WhatsApp e telefone das unidades</span>
                    <span className="mt-1 block text-sm text-slate">São Paulo e Votuporanga, cada uma com seu número.</span>
                  </span>
                </a>
                <Link href="/contato#formulario" className="card card-hover flex items-start gap-4 p-6">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-navy-900 text-gold-300">
                    <FileText aria-hidden="true" className="size-5" />
                  </span>
                  <span>
                    <span className="block font-semibold text-navy-900">Formulário de contato</span>
                    <span className="mt-1 block text-sm text-slate">Envie uma mensagem breve com o assunto.</span>
                  </span>
                </Link>
                {aiAttendance.enabled ? (
                  <a
                    href={whatsappAiUrl(TOPIC)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-channel="whatsapp-atendimento-inicial"
                    className="card card-hover flex items-start gap-4 p-6 sm:col-span-2"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-gold-500/15 text-gold-700">
                      <Bot aria-hidden="true" className="size-5" />
                    </span>
                    <span>
                      <span className="block font-semibold text-navy-900">
                        Atendimento inicial automatizado · {aiAttendance.phoneDisplay}
                      </span>
                      <span className="mt-1 block text-sm text-slate">
                        Canal com assistente virtual para informações gerais e organização do primeiro contato. Não
                        substitui a análise e a orientação do advogado.
                      </span>
                    </span>
                  </a>
                ) : null}
              </div>
            </section>
          </article>
        </div>
      </div>

      <UnitsSection topic={TOPIC} title="Fale com a unidade mais próxima" />

      <section className="bg-white py-20 sm:py-28">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4" data-reveal>
            <span className="eyebrow">Perguntas frequentes</span>
            <h2 className="display mt-5 text-[2.35rem] text-navy-900 sm:text-5xl">Dúvidas sobre vínculo</h2>
          </div>
          <div className="lg:col-span-8">
            <FaqList items={faq} />
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="bg-ivory-depth py-20 sm:py-28">
          <div className="container-site">
            <span className="eyebrow">Continue lendo</span>
            <h2 className="display mt-5 text-[2.35rem] text-navy-900 sm:text-5xl">Conteúdos relacionados</h2>
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

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Reconhecimento de vínculo empregatício",
          url: `${base}${PATH}`,
          inLanguage: "pt-BR",
          about: { "@type": "Thing", name: "Relação de emprego" },
          provider: { "@id": `${base}/#escritorio` },
        }}
      />
    </>
  );
}
