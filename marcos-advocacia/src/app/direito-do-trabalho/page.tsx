import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { areas } from "@/content/areas";
import { pageMetadata } from "@/lib/seo";
import { AreaPage } from "@/components/sections/AreaPage";

const area = areas.trabalho;

export const metadata: Metadata = pageMetadata({
  title: area.metaTitle,
  description: area.metaDescription,
  path: area.path,
  keywords: area.keywords,
});

const requirements = ["Pessoa física", "Pessoalidade", "Não eventualidade", "Onerosidade", "Subordinação"];

export default function Page() {
  return (
    <AreaPage area={area}>
      <section className="bg-navy-depth relative overflow-hidden py-20 text-white sm:py-24">
        <div aria-hidden="true" className="bg-lines pointer-events-none absolute inset-0" />
        <div className="container-site relative grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7" data-reveal>
            <span className="eyebrow eyebrow-light">Em destaque</span>
            <h2 className="display mt-5 text-[2.35rem] sm:text-5xl">Reconhecimento de vínculo empregatício</h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Entenda o que caracteriza uma relação de emprego, quais requisitos a CLT prevê e qual a diferença entre
              prestação de serviços e vínculo empregatício.
            </p>
            <Link
              href="/direito-do-trabalho/reconhecimento-de-vinculo-empregaticio"
              className="btn btn-gold mt-8"
            >
              Ler o conteúdo completo
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-2" data-reveal>
            {requirements.map((r, i) => (
              <li key={r} className={`glass rounded-2xl p-4 ${i === requirements.length - 1 ? "col-span-2 sm:col-span-1 lg:col-span-2" : ""}`}>
                <span className="font-serif text-sm text-gold-400">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-1 text-sm font-medium text-white/90">{r}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </AreaPage>
  );
}
