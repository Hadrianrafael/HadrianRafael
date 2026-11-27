import { Briefcase } from "lucide-react";
import type { Dictionary } from "@/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience({ d }: { d: Dictionary }) {
  const e = d.experience;
  return (
    <section id="experiencia" aria-labelledby="experiencia-title" className="relative py-24 sm:py-32">
      <div aria-hidden className="hairline absolute inset-x-0 top-0" />
      <div className="container-page">
        <SectionHeading id="experiencia" index="02" kicker={e.kicker} title={e.title} intro={e.intro} align="split" />

        <ol className="relative">
          {/* Linha do tempo */}
          <span
            aria-hidden
            className="absolute bottom-6 left-[15px] top-6 w-px bg-gradient-to-b from-ember via-white/12 to-transparent md:left-[calc(12rem+15px)]"
          />
          {e.items.map((item, i) => (
            <li
              key={item.company}
              data-reveal
              style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
              className="relative grid gap-3 pb-6 pl-12 last:pb-0 md:grid-cols-[12rem_1fr] md:gap-0 md:pl-0"
            >
              <div className="md:pr-8 md:pt-7 md:text-right">
                <p className="whitespace-nowrap font-mono text-[0.7rem] uppercase tracking-[0.08em] text-muted">
                  <time dateTime={item.start}>{item.period}</time>
                </p>
              </div>

              <span
                aria-hidden
                className={`absolute left-0 top-0 grid size-[31px] place-items-center rounded-full border md:left-[12rem] md:top-6 ${
                  item.current
                    ? "border-ember/60 bg-ember/15 text-ember shadow-[0_0_20px_rgb(255_107_26/0.4)]"
                    : "border-white/12 bg-ink-850 text-faint"
                }`}
              >
                <Briefcase size={13} />
              </span>

              <article className="surface spotlight p-6 transition-colors duration-300 hover:border-white/15 sm:p-7 md:ml-12">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-paper sm:text-2xl">{item.company}</h3>
                    <p className="mt-1 text-[0.95rem] font-medium text-ember-soft">{item.role}</p>
                  </div>
                  {item.current ? (
                    <span className="inline-flex items-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-3 py-1 text-xs font-semibold text-ember">
                      <span className="size-1.5 rounded-full bg-ember animate-pulse-dot" aria-hidden />
                      {e.current}
                    </span>
                  ) : null}
                </div>
                <p className="mt-4 text-pretty leading-relaxed text-mist">{item.summary}</p>
                {item.highlights.length ? (
                  <ul className="mt-5 space-y-2.5 border-t border-white/[0.06] pt-5">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-[0.93rem] leading-relaxed text-mist">
                        <span aria-hidden className="mt-[0.6rem] h-px w-3 shrink-0 bg-ember/70" />
                        {h}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
