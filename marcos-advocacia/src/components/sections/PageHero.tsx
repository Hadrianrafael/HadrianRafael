import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  crumbs: Crumb[];
  aside?: ReactNode;
  children?: ReactNode;
}

/** Abertura das páginas internas (fundo azul-marinho com profundidade). */
export function PageHero({ eyebrow, title, lead, crumbs, aside, children }: PageHeroProps) {
  return (
    <section className="bg-navy-depth relative overflow-hidden pb-16 pt-32 text-white sm:pb-20 lg:pb-24 lg:pt-44">
      <div aria-hidden="true" className="bg-lines pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 size-[34rem] rounded-full border border-gold-400/10"
      />
      <div className="container-site relative">
        <Breadcrumbs items={crumbs} />
        <div className={`mt-8 grid gap-12 ${aside ? "lg:grid-cols-12 lg:items-end" : ""}`}>
          <div className={aside ? "lg:col-span-7" : "max-w-3xl"}>
            {eyebrow ? <span className="eyebrow eyebrow-light animate-fade-up">{eyebrow}</span> : null}
            <h1 className="display mt-5 animate-fade-up text-[2.6rem] text-white sm:text-6xl lg:text-[4.25rem] [animation-delay:80ms]">
              {title}
            </h1>
            {lead ? (
              <p className="mt-6 max-w-2xl animate-fade-up text-base leading-relaxed text-white/70 sm:text-lg [animation-delay:160ms]">
                {lead}
              </p>
            ) : null}
            {children ? <div className="mt-8 animate-fade-up [animation-delay:240ms]">{children}</div> : null}
          </div>
          {aside ? <div className="animate-fade-up lg:col-span-5 [animation-delay:200ms]">{aside}</div> : null}
        </div>
      </div>
    </section>
  );
}
