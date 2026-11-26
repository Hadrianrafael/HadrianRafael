import type { ReactNode } from "react";
import { PageHero } from "./PageHero";

interface LegalDocumentProps {
  title: string;
  path: string;
  updated: string;
  children: ReactNode;
}

export function LegalDocument({ title, path, updated, children }: LegalDocumentProps) {
  return (
    <>
      <PageHero eyebrow="Documento legal" title={title} lead={`Última atualização: ${updated}.`} crumbs={[{ label: title, href: path }]} />
      <section className="bg-ivory-depth py-16 sm:py-24">
        <div className="container-site">
          <article className="prose-legal mx-auto max-w-[46rem]">{children}</article>
        </div>
      </section>
    </>
  );
}
