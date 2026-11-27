import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { navItems, profile, resumePdfPath, type Dictionary, type Locale } from "@/content";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

export function Footer({ d, locale }: { d: Dictionary; locale: Locale }) {
  const f = d.footer;
  const year = new Date().getFullYear();
  return (
    <footer className="relative print:hidden border-t border-white/[0.06] bg-ink-950/60">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href={`/${locale}`} className="inline-flex min-h-11 items-center gap-3">
            <span className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/[0.04] font-mono text-[0.8rem] font-semibold text-paper">
              HR
            </span>
            <span className="font-semibold tracking-tight text-paper">{profile.name}</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{f.tagline}</p>
          <div className="mt-6 flex gap-2">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid size-11 place-items-center rounded-full border border-white/10 text-mist transition hover:border-ember/40 hover:text-paper"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid size-11 place-items-center rounded-full border border-white/10 text-mist transition hover:border-ember/40 hover:text-paper"
            >
              <GithubIcon size={16} />
            </a>
          </div>
        </div>

        <nav aria-label={f.navigation}>
          <h2 className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-faint">{f.navigation}</h2>
          <ul className="mt-3 space-y-0.5 text-sm">
            {navItems(d).map((item) => (
              <li key={item.id}>
                <a href={`/${locale}#${item.id}`} className="inline-block py-3 text-mist transition hover:text-paper">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-faint">{f.contact}</h2>
          <ul className="mt-3 space-y-0.5 text-sm">
            <li>
              <a href={`mailto:${profile.email}`} className="inline-block break-all py-3 text-mist transition hover:text-paper">
                {profile.email}
              </a>
            </li>
            <li>
              <a href={profile.phoneHref} className="inline-block py-3 text-mist transition hover:text-paper">
                {profile.phone}
              </a>
            </li>
            <li className="py-3 text-muted">{d.contact.location}</li>
          </ul>
        </div>

        <div>
          <h2 className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-faint">{f.documents}</h2>
          <ul className="mt-3 space-y-0.5 text-sm">
            <li>
              <Link href={`/${locale}/curriculo`} className="inline-block py-3 text-mist transition hover:text-paper">
                {f.resumeOnline}
              </Link>
            </li>
            <li>
              <a href={resumePdfPath(locale)} download className="inline-block py-3 text-mist transition hover:text-paper">
                {f.resumePdf}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.05]">
        <div className="container-page flex flex-col gap-4 py-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.fullName}. {f.rights}
          </p>
          <div className="flex items-center gap-6">
            <span>{f.built}</span>
            <a href="#top" className="inline-flex min-h-11 items-center gap-1.5 text-mist transition hover:text-paper">
              <ArrowUp size={13} aria-hidden />
              {f.backToTop}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
