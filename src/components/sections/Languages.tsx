import type { Dictionary } from "@/content";

export function Languages({ d }: { d: Dictionary }) {
  const l = d.languages;
  return (
    <section aria-labelledby="idiomas-title" className="relative -mt-8 pb-20 sm:-mt-12 sm:pb-28">
      <div className="container-page">
        <div className="surface grid gap-10 p-7 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div data-reveal>
            <p className="eyebrow">
              <span className="text-faint">07</span>
              {l.kicker}
            </p>
            <h2 id="idiomas-title" className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.03em] text-paper sm:text-4xl">
              {l.title}
            </h2>
          </div>
          <ul className="grid gap-6 sm:grid-cols-3">
            {l.items.map((item, i) => (
              <li key={item.name} data-reveal style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}>
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-lg font-bold text-paper">{item.name}</span>
                  <span className="font-mono text-sm font-medium text-ember">{item.level}</span>
                </div>
                <div
                  className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.07]"
                  role="img"
                  aria-label={`${item.name}: ${item.level} — ${item.label}`}
                >
                  <div className="h-full rounded-full bg-gradient-to-r from-flare via-ember to-ember-soft" style={{ width: `${item.value}%` }} />
                </div>
                <p className="mt-2 text-sm text-muted">{item.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
