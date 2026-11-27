import { ArrowUpRight, Download, Globe, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import type { ComponentType } from "react";
import { profile, resumePdfPath, type Dictionary, type Locale } from "@/content";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { CopyEmail } from "@/components/ui/CopyEmail";

interface Channel {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon | ComponentType<{ size?: number }>;
  external?: boolean;
}

export function Contact({ d, locale }: { d: Dictionary; locale: Locale }) {
  const c = d.contact;
  const channels: Channel[] = [
    { label: c.phone, value: profile.phone, href: profile.phoneHref, icon: Phone },
    { label: c.linkedin, value: profile.linkedinLabel, href: profile.linkedin, icon: LinkedinIcon, external: true },
    { label: c.github, value: profile.githubLabel, href: profile.github, icon: GithubIcon, external: true },
    { label: c.website, value: profile.websiteLabel, href: profile.website, icon: Globe, external: true },
  ];

  return (
    <section id="contato" aria-labelledby="contato-title" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="hairline absolute inset-x-0 top-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 size-[44rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgb(255_107_26/0.12),transparent_60%)] blur-2xl"
      />
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <p className="eyebrow justify-center">
            <span className="text-faint">08</span>
            {c.kicker}
          </p>
          <h2 id="contato-title" className="mt-5 text-balance text-[2.6rem] font-black leading-[1] tracking-[-0.045em] text-paper sm:text-6xl md:text-7xl">
            {c.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-mist">{c.text}</p>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted">
            <MapPin size={15} aria-hidden />
            {c.location}
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl" data-reveal>
          <div className="surface p-3 sm:p-4">
            {/* E-mail em destaque */}
            <div className="flex flex-col gap-4 rounded-2xl border border-white/[0.07] bg-ink-850/80 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div className="flex min-w-0 items-center gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-b from-ember to-flare text-ink-950">
                  <Mail size={20} aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-faint">{c.email}</p>
                  <a href={`mailto:${profile.email}`} className="block break-all text-base font-semibold text-paper transition hover:text-ember sm:text-xl">
                    {profile.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CopyEmail email={profile.email} label={c.copy} copiedLabel={c.copied} />
                <a href={`mailto:${profile.email}`} className="btn btn-primary flex-1 sm:flex-none">
                  {d.hero.ctaContact}
                  <ArrowUpRight size={16} aria-hidden />
                </a>
              </div>
            </div>

            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {channels.map((ch) => {
                const Icon = ch.icon;
                return (
                  <li key={ch.label}>
                    <a
                      href={ch.href}
                      {...(ch.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.015] p-4 transition hover:border-white/15 hover:bg-white/[0.04]"
                    >
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-white/10 text-mist transition group-hover:text-ember">
                        <Icon size={18} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-mono text-[0.68rem] uppercase tracking-[0.16em] text-faint">{ch.label}</span>
                        <span className="block truncate text-[0.95rem] font-medium text-paper">{ch.value}</span>
                      </span>
                      <ArrowUpRight size={16} aria-hidden className="text-faint transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-paper" />
                    </a>
                  </li>
                );
              })}
            </ul>

            <a
              href={resumePdfPath(locale)}
              download
              className="mt-3 flex items-center justify-center gap-3 rounded-2xl border border-dashed border-white/12 p-4 text-sm font-semibold text-paper transition hover:border-ember/40 hover:text-ember"
            >
              <Download size={16} aria-hidden />
              {c.resume} (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
