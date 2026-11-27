import { Award, GraduationCap } from "lucide-react";
import type { Dictionary } from "@/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";

export function Education({ d }: { d: Dictionary }) {
  const e = d.education;
  return (
    <section id="formacao" aria-labelledby="formacao-title" className="relative py-24 sm:py-32">
      <div aria-hidden className="hairline absolute inset-x-0 top-0" />
      <div className="container-page">
        <SectionHeading id="formacao" index="05" kicker={e.kicker} title={e.title} />

        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div data-reveal>
            <TiltCard as="article" max={2} className="surface h-full overflow-hidden p-7 sm:p-9">
              <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-[radial-gradient(circle,rgb(255_107_26/0.18),transparent_65%)]" />
              <div className="flex items-start justify-between gap-4">
                <span className="grid size-12 place-items-center rounded-2xl border border-ember/25 bg-ember/10 text-ember">
                  <GraduationCap size={22} aria-hidden />
                </span>
                <span className="rounded-full border border-ember/30 bg-ember/10 px-3 py-1 text-xs font-semibold text-ember">{e.status}</span>
              </div>
              <p className="mt-8 font-mono text-xs uppercase tracking-[0.16em] text-muted">{e.institution}</p>
              <h3 className="mt-2 text-balance text-2xl font-extrabold tracking-tight text-paper sm:text-3xl">{e.degree}</h3>
              <p className="mt-6 border-t border-white/[0.07] pt-5 text-mist">{e.expected}</p>
            </TiltCard>
          </div>

          <div data-reveal style={{ "--reveal-delay": "90ms" } as React.CSSProperties}>
            <article className="h-full rounded-[1.25rem] border border-white/[0.08] bg-white/[0.015] p-7 sm:p-9">
              <span className="grid size-12 place-items-center rounded-2xl border border-white/10 text-mist">
                <Award size={22} aria-hidden />
              </span>
              <h3 className="mt-8 text-xl font-bold tracking-tight text-paper">{e.complementaryTitle}</h3>
              <p className="mt-2 leading-relaxed text-mist">{e.complementaryText}</p>
              {e.complementary.length ? (
                <ul className="mt-6 divide-y divide-white/[0.06]">
                  {e.complementary.map((c) => (
                    <li key={c.title} className="flex items-baseline justify-between gap-4 py-3">
                      <span>
                        <span className="block font-medium text-paper">{c.title}</span>
                        <span className="text-sm text-muted">{c.issuer}</span>
                      </span>
                      <span className="font-mono text-xs text-faint">{c.year}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-6 rounded-xl border border-dashed border-white/10 px-4 py-3 text-sm text-muted">{e.complementaryEmpty}</p>
              )}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
