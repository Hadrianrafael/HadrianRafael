import { Lightbulb, ShieldCheck, TrendingUp } from "lucide-react";
import type { Dictionary } from "@/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";

const pillarIcons = [ShieldCheck, TrendingUp, Lightbulb];

export function About({ d }: { d: Dictionary }) {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="relative py-24 sm:py-32">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading id="sobre" index="01" kicker={d.about.kicker} title={d.about.title} />
          </div>
          <div className="space-y-6">
            {d.about.paragraphs.map((p, i) => (
              <p
                key={i}
                data-reveal
                style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
                className={`text-pretty leading-[1.75] ${i === 0 ? "text-lg text-paper sm:text-xl" : "text-base text-mist sm:text-[1.075rem]"}`}
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        <ul className="mt-16 grid gap-4 sm:mt-20 md:grid-cols-3">
          {d.about.pillars.map((pillar, i) => {
            const Icon = pillarIcons[i] ?? Lightbulb;
            return (
              <li key={pillar.title} data-reveal style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}>
                <TiltCard className="surface h-full p-6 sm:p-7">
                  <span className="grid size-11 place-items-center rounded-xl border border-ember/25 bg-ember/10 text-ember">
                    <Icon size={20} aria-hidden />
                  </span>
                  <h3 className="mt-6 text-lg font-bold tracking-tight text-paper">{pillar.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-mist">{pillar.text}</p>
                </TiltCard>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
