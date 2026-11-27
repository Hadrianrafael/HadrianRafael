import { Cpu, Handshake, Zap } from "lucide-react";
import type { Dictionary } from "@/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";

const trackIcons = [Cpu, Handshake];

export function Goals({ d }: { d: Dictionary }) {
  const g = d.goals;
  return (
    <section id="objetivos" aria-labelledby="objetivos-title" className="relative py-24 sm:py-32">
      <div aria-hidden className="hairline absolute inset-x-0 top-0" />
      <div className="container-page">
        <SectionHeading id="objetivos" index="06" kicker={g.kicker} title={g.title} intro={g.intro} align="split" />

        <div className="grid gap-5 md:grid-cols-2">
          {g.tracks.map((track, i) => {
            const Icon = trackIcons[i] ?? Cpu;
            return (
              <div key={track.title} data-reveal style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}>
                <TiltCard as="article" max={2.5} className="surface h-full p-7 sm:p-8">
                  <div className="flex items-center gap-4">
                    <span className="grid size-11 place-items-center rounded-xl border border-ember/25 bg-ember/10 text-ember">
                      <Icon size={20} aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-paper">{track.title}</h3>
                      <p className="text-sm text-muted">{track.text}</p>
                    </div>
                  </div>
                  <ul className="mt-7 grid gap-2 sm:grid-cols-2">
                    {track.roles.map((role) => (
                      <li
                        key={role}
                        className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3 text-[0.93rem] font-medium text-paper/90"
                      >
                        <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-ember" />
                        {role}
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </div>
            );
          })}
        </div>

        <div data-reveal className="mt-5">
          <div className="relative overflow-hidden rounded-[1.25rem] border border-ember/20 bg-[linear-gradient(120deg,rgb(255_107_26/0.12),rgb(232_56_61/0.05)_45%,transparent_75%)] p-7 sm:p-10">
            <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-center md:gap-10">
              <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-b from-ember to-flare text-ink-950 shadow-[0_10px_30px_-8px_rgb(255_107_26/0.7)]">
                <Zap size={24} aria-hidden />
              </span>
              <div>
                <h3 className="text-xl font-extrabold tracking-tight text-paper sm:text-2xl">{g.differentialTitle}</h3>
                <p className="mt-2 max-w-3xl text-pretty leading-relaxed text-paper/80 sm:text-lg">{g.differentialText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
