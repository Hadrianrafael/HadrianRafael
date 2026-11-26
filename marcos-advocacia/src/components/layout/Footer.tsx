import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navigation, site, unitList } from "@/config/site";
import { telUrl, whatsappUnitUrl } from "@/lib/whatsapp";
import { Logo } from "@/components/ui/Logo";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/ui/BrandIcons";
import { CookiePreferencesButton } from "@/components/layout/CookiePreferencesButton";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-depth relative overflow-hidden text-white">
      <div aria-hidden="true" className="bg-lines pointer-events-none absolute inset-0" />
      <div className="container-site relative">
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">{site.tagline}</p>
            <dl className="mt-6 space-y-1 text-sm">
              <div className="flex gap-2">
                <dt className="text-white/45">Advogado responsável:</dt>
                <dd className="text-white/85">{site.lawyer.name}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-white/45">Inscrição:</dt>
                <dd className="text-white/85">{site.lawyer.oab}</dd>
              </div>
            </dl>
            <div className="mt-6 flex items-center gap-2">
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram ${site.instagram.handle} (abre em nova aba)`}
                className="grid size-10 place-items-center rounded-full border border-white/12 text-white/75 transition-colors hover:border-gold-400/60 hover:text-gold-300"
              >
                <InstagramIcon className="size-[1.1rem]" />
              </a>
              <a
                href={site.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Facebook ${site.facebook.name} (abre em nova aba)`}
                className="grid size-10 place-items-center rounded-full border border-white/12 text-white/75 transition-colors hover:border-gold-400/60 hover:text-gold-300"
              >
                <FacebookIcon className="size-[1.1rem]" />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label={`Enviar e-mail para ${site.email}`}
                className="grid size-10 place-items-center rounded-full border border-white/12 text-white/75 transition-colors hover:border-gold-400/60 hover:text-gold-300"
              >
                <Mail aria-hidden="true" className="size-[1.1rem]" />
              </a>
            </div>
          </div>

          <nav aria-label="Institucional" className="lg:col-span-2">
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold-400">Institucional</h2>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>
                <Link href="/" className="link-underline hover:text-white">
                  Início
                </Link>
              </li>
              {navigation.main.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-underline hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Áreas de atuação" className="lg:col-span-2">
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold-400">Áreas</h2>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {navigation.areas.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-underline hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/direito-do-trabalho/reconhecimento-de-vinculo-empregaticio"
                  className="link-underline hover:text-white"
                >
                  Vínculo empregatício
                </Link>
              </li>
            </ul>
          </nav>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
            {unitList.map((unit) => (
              <address key={unit.id} className="not-italic">
                <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold-400">{unit.name}</h2>
                <a
                  href={unit.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex gap-2.5 text-sm leading-relaxed text-white/70 hover:text-white"
                >
                  <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-gold-400/80" />
                  <span>
                    {unit.street}, {unit.number}
                    <br />
                    {unit.district}, {unit.city} - {unit.state}
                  </span>
                </a>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                  <a href={telUrl(unit.phoneE164)} className="inline-flex items-center gap-2 text-white/70 hover:text-white">
                    <Phone aria-hidden="true" className="size-4 text-gold-400/80" />
                    {unit.phoneDisplay}
                  </a>
                  <a
                    href={whatsappUnitUrl(unit.id)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/70 hover:text-white"
                  >
                    <WhatsAppIcon className="size-4 text-gold-400/80" />
                    WhatsApp
                  </a>
                </div>
              </address>
            ))}
          </div>
        </div>

        <div className="gold-rule" />

        <div className="py-8 text-xs leading-relaxed text-white/45">
          <p className="max-w-4xl">
            Este site tem caráter exclusivamente informativo e institucional, em observância ao Estatuto da Advocacia
            (Lei nº 8.906/1994), ao Código de Ética e Disciplina da OAB e ao Provimento nº 205/2021 do Conselho Federal
            da OAB. As informações publicadas não constituem consultoria jurídica nem substituem a análise individual de
            cada caso por advogado. O contato por meio deste site não estabelece, por si só, relação entre advogado e
            cliente.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {site.brand} · {site.lawyer.name} · {site.lawyer.oab}
            </p>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {navigation.legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-underline hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <CookiePreferencesButton />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
