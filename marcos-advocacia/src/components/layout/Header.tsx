"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { navigation, site, unitList } from "@/config/site";
import { telUrl, whatsappUnitUrl } from "@/lib/whatsapp";
import { Logo } from "@/components/ui/Logo";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const areasRef = useRef<HTMLDivElement>(null);
  // Evita que o clique logo após o hover feche o menu que acabou de abrir.
  const openedByHover = useRef(false);
  const areasMenuId = useId();
  const mobileMenuId = useId();

  // Fecha menus ao trocar de rota.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMobileOpen(false);
    setAreasOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!areasOpen) return;
    const onPointer = (event: PointerEvent) => {
      if (areasRef.current && !areasRef.current.contains(event.target as Node)) setAreasOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setAreasOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [areasOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const areaActive = navigation.areas.some((a) => isActive(a.href));

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Barra institucional (desktop) */}
      <div
        className={`hidden border-b border-white/[0.06] bg-navy-950 text-[0.72rem] text-white/60 transition-[margin] duration-500 lg:block ${
          scrolled ? "-mt-9" : "mt-0"
        }`}
      >
        <div className="container-site flex h-9 items-center justify-between">
          <p>
            <span className="text-white/80">{site.lawyer.name}</span>
            <span className="mx-2 text-gold-500/70">·</span>
            {site.lawyer.oab}
          </p>
          <div className="flex items-center gap-6">
            {unitList.map((unit) => (
              <a key={unit.id} href={telUrl(unit.phoneE164)} className="inline-flex items-center gap-1.5 hover:text-white">
                <Phone aria-hidden="true" className="size-3 text-gold-400" />
                {unit.city} {unit.phoneDisplay}
              </a>
            ))}
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-1.5 hover:text-white">
              <Mail aria-hidden="true" className="size-3 text-gold-400" />
              {site.email}
            </a>
          </div>
        </div>
      </div>

      <div
        className={`border-b transition-all duration-500 ${
          scrolled || mobileOpen
            ? "border-white/[0.08] bg-navy-950/90 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            : "border-transparent bg-navy-950/40 backdrop-blur-md"
        }`}
      >
        <div className="container-site flex h-[4.5rem] items-center justify-between gap-6">
          <Logo tone="light" />

          <nav aria-label="Navegação principal" className="hidden items-center gap-1 lg:flex">
            <Link
              href="/sobre"
              aria-current={isActive("/sobre") ? "page" : undefined}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                isActive("/sobre") ? "text-gold-300" : "text-white/80 hover:text-white"
              }`}
            >
              O escritório
            </Link>

            <div
              ref={areasRef}
              className="relative"
              onMouseLeave={() => {
                openedByHover.current = false;
                setAreasOpen(false);
              }}
            >
              <button
                type="button"
                aria-expanded={areasOpen}
                aria-controls={areasMenuId}
                onClick={() => {
                  if (openedByHover.current) {
                    openedByHover.current = false;
                    setAreasOpen(true);
                  } else {
                    setAreasOpen((v) => !v);
                  }
                }}
                onMouseEnter={() => {
                  if (!areasOpen) openedByHover.current = true;
                  setAreasOpen(true);
                }}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm transition-colors ${
                  areaActive || areasOpen ? "text-gold-300" : "text-white/80 hover:text-white"
                }`}
              >
                Áreas de atuação
                <ChevronDown
                  aria-hidden="true"
                  className={`size-3.5 transition-transform duration-300 ${areasOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                id={areasMenuId}
                className={`absolute left-1/2 top-full w-[34rem] -translate-x-1/2 pt-3 transition-all duration-300 ${
                  areasOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
                }`}
              >
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-900/95 p-2 shadow-2xl backdrop-blur-xl">
                  <ul className="grid grid-cols-2 gap-1">
                    {navigation.areas.map((area) => (
                      <li key={area.href}>
                        <Link
                          href={area.href}
                          aria-current={isActive(area.href) ? "page" : undefined}
                          className="group block rounded-xl p-4 transition-colors hover:bg-white/[0.05]"
                        >
                          <span className="flex items-center justify-between font-serif text-lg font-semibold text-white">
                            {area.label}
                            <ArrowRight
                              aria-hidden="true"
                              className="size-4 -translate-x-1 text-gold-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                            />
                          </span>
                          <span className="mt-1 block text-xs leading-relaxed text-white/55">{area.description}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/direito-do-trabalho/reconhecimento-de-vinculo-empregaticio"
                    className="mt-1 flex items-center justify-between rounded-xl border border-gold-500/20 bg-gold-500/[0.06] px-4 py-3 text-xs text-gold-200 transition-colors hover:border-gold-500/40"
                  >
                    <span>
                      <span className="font-semibold text-gold-300">Em destaque:</span> Reconhecimento de vínculo
                      empregatício
                    </span>
                    <ArrowRight aria-hidden="true" className="size-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {navigation.main.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  isActive(item.href) ? "text-gold-300" : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/contato#unidades" className="btn btn-gold hidden min-h-0 py-2.5 text-[0.8rem] sm:inline-flex">
              <WhatsAppIcon className="size-4" />
              Fale com o escritório
            </Link>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full border border-white/15 text-white lg:hidden"
              aria-expanded={mobileOpen}
              aria-controls={mobileMenuId}
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id={mobileMenuId}
        className={`fixed inset-x-0 bottom-0 top-[4.5rem] overflow-y-auto bg-navy-950/[0.985] backdrop-blur-xl transition-all duration-500 lg:hidden ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Navegação mobile" className="container-site flex min-h-full flex-col pb-10 pt-6">
          <ul className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
            <li>
              <Link href="/" className="flex items-center justify-between py-4 font-serif text-2xl text-white">
                Início
              </Link>
            </li>
            <li>
              <Link href="/sobre" className="flex items-center justify-between py-4 font-serif text-2xl text-white">
                O escritório
              </Link>
            </li>
            <li className="py-4">
              <p className="eyebrow eyebrow-light">Áreas de atuação</p>
              <ul className="mt-3 grid grid-cols-1 gap-1">
                {navigation.areas.map((area) => (
                  <li key={area.href}>
                    <Link
                      href={area.href}
                      className={`flex items-center justify-between rounded-xl px-3 py-3 text-base ${
                        isActive(area.href) ? "bg-white/[0.06] text-gold-300" : "text-white/85"
                      }`}
                    >
                      {area.label}
                      <ArrowRight aria-hidden="true" className="size-4 text-gold-400" />
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {navigation.main.slice(1).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="flex items-center justify-between py-4 font-serif text-2xl text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <p className="eyebrow eyebrow-light">WhatsApp por unidade</p>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {unitList.map((unit) => (
                <a
                  key={unit.id}
                  href={whatsappUnitUrl(unit.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass flex items-center gap-3 rounded-2xl p-4 text-white"
                >
                  <span className="grid size-10 place-items-center rounded-full bg-gold-500/15 text-gold-300">
                    <WhatsAppIcon className="size-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{unit.city}</span>
                    <span className="block text-xs text-white/60">{unit.phoneDisplay}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
          <p className="mt-auto pt-10 text-xs text-white/45">
            {site.lawyer.name} · {site.lawyer.oab}
          </p>
        </nav>
      </div>
    </header>
  );
}
