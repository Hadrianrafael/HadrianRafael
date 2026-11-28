import { ArrowDown, ArrowRight, Bot, CodeXml, Download, Mail } from "lucide-react";
import Image from "next/image";
import { profile, resumePdfPath, type Dictionary, type Locale } from "@/content";

export function Hero({ d, locale }: { d: Dictionary; locale: Locale }) {
  const h = d.hero;
  const [before, after] = h.greeting.split(profile.name);

  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-[calc(var(--header-h)+2.5rem)] sm:pt-[calc(var(--header-h)+4rem)]">
      {/* Iluminação de fundo */}
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 -z-10 size-[42rem] rounded-full bg-[radial-gradient(circle,rgb(255_107_26/0.16),transparent_62%)] blur-2xl"
      />

      <div className="container-page grid items-center gap-14 pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-24">
        <div>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] py-1.5 pl-2.5 pr-3.5 text-[0.8rem] font-medium text-mist">
            <span className="relative size-2 rounded-full bg-ember animate-pulse-dot" aria-hidden />
            {h.status}
          </p>

          <h1
            id="hero-title"
            className="mt-7 text-balance text-[2.75rem] font-black leading-[0.98] tracking-[-0.045em] text-paper sm:text-6xl lg:text-[4.6rem]"
          >
            {before}
            <span className="text-gradient">{profile.name}</span>
            {after}
          </h1>

          <p className="mt-7 max-w-2xl text-pretty text-lg font-medium leading-relaxed text-paper/90 sm:text-xl">
            {h.subtitle}
          </p>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-mist sm:text-[1.05rem]">{h.text}</p>

          <div className="mt-7 flex flex-wrap items-center gap-2">
            <span className="mr-1 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted">{h.focusLabel}</span>
            {h.focus.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[0.8rem] font-medium text-paper/90">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#sobre" className="btn btn-primary">
              {h.ctaJourney}
              <ArrowRight size={17} className="arrow" aria-hidden />
            </a>
            <a href="#projetos" className="btn btn-secondary">
              {h.ctaProjects}
            </a>
            <a href={resumePdfPath(locale)} download className="btn btn-secondary">
              <Download size={16} className="arrow-down" aria-hidden />
              {h.ctaResume}
            </a>
            <a href="#contato" className="btn btn-ghost">
              <Mail size={16} aria-hidden />
              {h.ctaContact}
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.06]">
            {h.facts.map((fact) => (
              <div key={fact.label} className="bg-ink-900/90 px-4 py-4 sm:px-5">
                <dt className="sr-only">{fact.label}</dt>
                <dd>
                  <span className="block text-2xl font-extrabold tracking-tight text-paper sm:text-[1.7rem]">{fact.value}</span>
                  <span className="mt-1 block text-xs leading-snug text-muted">{fact.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Retrato */}
        <div className={`relative mx-auto w-full lg:max-w-none ${profile.photo ? "max-w-sm sm:max-w-md" : "max-w-md"}`}>
          <div
            aria-hidden
            className="absolute -inset-px rounded-[2rem] bg-gradient-to-b from-ember/50 via-white/10 to-flare/20 opacity-70"
          />
          <figure
            className={`relative overflow-hidden rounded-[2rem] bg-ink-850 ${
              profile.photo ? "aspect-[4/5]" : "aspect-[16/10] sm:aspect-[4/3] lg:aspect-[4/5]"
            }`}
          >
            {profile.photo ? (
              <>
                <Image
                  src={profile.photo}
                  alt={h.photoAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 460px, (min-width: 640px) 448px, 90vw"
                  className="object-cover object-top"
                />
                {/* Escurece a base para a legenda ficar legível */}
                <div aria-hidden className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink-950/90 via-ink-950/40 to-transparent" />
              </>
            ) : (
              <div role="img" aria-label={h.photoPlaceholder} className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,rgb(255_107_26/0.22),transparent_55%),linear-gradient(180deg,#15131b,#0b0a0f)]" />
                <div className="grid-bg absolute inset-0 opacity-60" />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="select-none bg-gradient-to-b from-white/[0.16] to-white/[0.02] bg-clip-text text-[5.5rem] font-black leading-none tracking-[-0.08em] text-transparent sm:text-[8rem] lg:text-[11rem]">
                    HR
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink-900 to-transparent" />
              </div>
            )}
            <figcaption className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3">
              <div>
                <p className="text-lg font-bold tracking-tight text-paper">{profile.name}</p>
                <p className="text-sm text-mist">{d.meta.jobTitle}</p>
              </div>
            </figcaption>
          </figure>

          <div className="surface absolute -left-4 top-10 hidden items-center gap-3 !rounded-2xl px-4 py-3 sm:flex lg:-left-10">
            <span className="grid size-9 place-items-center rounded-xl bg-ember/15 text-ember">
              <CodeXml size={18} aria-hidden />
            </span>
            <span className="text-sm">
              <span className="block font-semibold text-paper">Next.js · TypeScript</span>
              <span className="block text-xs text-muted">React · Node.js</span>
            </span>
          </div>
          <div className="surface absolute -right-3 bottom-24 hidden items-center gap-3 !rounded-2xl px-4 py-3 sm:flex lg:-right-8">
            <span className="grid size-9 place-items-center rounded-xl bg-flare/15 text-flare">
              <Bot size={18} aria-hidden />
            </span>
            <span className="text-sm">
              <span className="block font-semibold text-paper">{d.skills.groups[1].title}</span>
              <span className="block text-xs text-muted">Claude · ChatGPT · Gemini</span>
            </span>
          </div>
        </div>
      </div>

      <div className="container-page hidden pb-10 lg:block">
        <a href="#sobre" className="inline-flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-faint transition hover:text-mist">
          <span className="grid size-8 place-items-center rounded-full border border-white/10">
            <ArrowDown size={14} aria-hidden />
          </span>
          {h.scroll}
        </a>
      </div>
    </section>
  );
}
