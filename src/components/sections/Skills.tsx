import { CodeXml, Handshake, Palette, Sparkles, type LucideIcon } from "lucide-react";
import type { Dictionary, SkillGroup } from "@/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";

const meta: Record<SkillGroup["id"], { icon: LucideIcon; span: string; accent: string }> = {
  dev: { icon: CodeXml, span: "md:col-span-4", accent: "text-ember bg-ember/10 border-ember/25" },
  ai: { icon: Sparkles, span: "md:col-span-2 md:row-span-2", accent: "text-flare bg-flare/10 border-flare/25" },
  design: { icon: Palette, span: "md:col-span-2", accent: "text-ember-soft bg-ember-soft/10 border-ember-soft/25" },
  professional: { icon: Handshake, span: "md:col-span-2", accent: "text-paper bg-white/[0.06] border-white/15" },
};

export function Skills({ d }: { d: Dictionary }) {
  const s = d.skills;
  return (
    <section id="competencias" aria-labelledby="competencias-title" className="relative py-24 sm:py-32">
      <div aria-hidden className="hairline absolute inset-x-0 top-0" />
      <div className="container-page">
        <SectionHeading id="competencias" index="03" kicker={s.kicker} title={s.title} intro={s.intro} align="split" />

        <div className="grid gap-4 md:grid-cols-6">
          {s.groups.map((group, i) => {
            const m = meta[group.id];
            const Icon = m.icon;
            return (
              <div key={group.id} data-reveal style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties} className={m.span}>
                <TiltCard max={2.5} className="surface flex h-full flex-col p-6 sm:p-7">
                  <div className="flex items-center gap-4">
                    <span className={`grid size-11 shrink-0 place-items-center rounded-xl border ${m.accent}`}>
                      <Icon size={20} aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold tracking-tight text-paper">{group.title}</h3>
                      <p className="text-sm text-muted">{group.description}</p>
                    </div>
                  </div>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="chip">
                        {item}
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </div>
            );
          })}
        </div>
        <p className="mt-6 text-sm text-faint">{s.note}</p>
      </div>
    </section>
  );
}
