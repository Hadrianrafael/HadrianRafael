"use client";

import { Check, ChevronDown, FileText, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import type { Locale, SectionId } from "@/content/types";

interface HeaderProps {
  locale: Locale;
  items: { id: SectionId; label: string }[];
  labels: {
    home: string;
    resume: string;
    openMenu: string;
    closeMenu: string;
    language: string;
    primary: string;
    skipToContent: string;
  };
  languages: { locale: Locale; short: string; name: string; hreflang: string }[];
}

export function Header({ locale, items, labels, languages }: HeaderProps) {
  const pathname = usePathname() ?? `/${locale}`;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const langMenuId = useId();
  const mobileMenuId = useId();
  const isHome = pathname === `/${locale}`;

  // Cabeçalho com fundo ao rolar
  useEffect(() => {
    const firstSection = items[0] ? document.getElementById(items[0].id) : null;
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      // Acima da primeira seção (hero), nenhum item do menu fica ativo
      if (firstSection && window.scrollY < firstSection.offsetTop - window.innerHeight * 0.4) setActive(null);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items, pathname]);

  // Destaque da seção atual
  useEffect(() => {
    if (!isHome) return;
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome, items]);

  // Fecha o seletor de idioma ao clicar fora ou pressionar Esc
  useEffect(() => {
    if (!langOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!langRef.current?.contains(e.target as Node)) setLangOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLangOpen(false);
        langRef.current?.querySelector("button")?.focus();
      }
    };
    // Fecha também quando o foco do teclado sai do seletor
    const container = langRef.current;
    const onFocusOut = (e: FocusEvent) => {
      if (!container?.contains(e.relatedTarget as Node | null)) setLangOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    container?.addEventListener("focusout", onFocusOut);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
      container?.removeEventListener("focusout", onFocusOut);
    };
  }, [langOpen]);

  // Menu mobile: trava a rolagem e fecha com Esc
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Mantém o foco do teclado dentro do menu aberto
    const outside = Array.from(document.querySelectorAll<HTMLElement>("main, footer"));
    outside.forEach((el) => (el.inert = true));
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      outside.forEach((el) => (el.inert = false));
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const localizedPath = (target: Locale) => pathname.replace(/^\/(pt|en|es)(?=\/|$)/, `/${target}`) || `/${target}`;
  const current = languages.find((l) => l.locale === locale) ?? languages[0];
  const solid = scrolled || menuOpen;

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only print:hidden focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ember focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-950"
      >
        {labels.skipToContent}
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 print:hidden transition-[background-color,border-color,backdrop-filter] duration-500 ${
          solid ? "border-b border-white/[0.07] bg-ink-900/75 backdrop-blur-xl" : "border-b border-transparent"
        }`}
      >
        <div className="container-page flex h-[var(--header-h)] items-center justify-between gap-4">
          <Link
            href={`/${locale}`}
            className="group flex min-h-11 items-center gap-3"
            aria-label={labels.home}
            onClick={() => setMenuOpen(false)}
          >
            <span className="relative grid size-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] font-mono text-[0.8rem] font-semibold tracking-tight text-paper shadow-[inset_0_1px_0_rgb(255_255_255/0.08)] transition group-hover:border-ember/50">
              HR
              <span className="absolute -right-0.5 -top-0.5 size-2 rounded-full bg-ember shadow-[0_0_10px_rgb(255_107_26/0.8)]" />
            </span>
            <span className="hidden text-[0.95rem] font-semibold tracking-tight text-paper sm:inline">Hadrian Rafael</span>
          </Link>

          <nav aria-label={labels.primary} className="hidden xl:block">
            <ul className="flex items-center gap-1 rounded-full border border-white/[0.07] bg-white/[0.02] p-1 backdrop-blur-md">
              {items.map((item) => {
                const isActive = isHome && active === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`/${locale}#${item.id}`}
                      aria-current={isActive ? "true" : undefined}
                      className={`relative block whitespace-nowrap rounded-full px-3.5 py-1.5 text-[0.83rem] font-medium transition-colors ${
                        isActive ? "bg-white/[0.08] text-paper" : "text-muted hover:text-paper"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={`/${locale}/curriculo`}
              className="hidden min-h-11 items-center gap-2 rounded-full px-3 py-2 text-[0.83rem] font-medium text-mist transition hover:text-paper md:inline-flex"
            >
              <FileText size={15} aria-hidden />
              {labels.resume}
            </Link>

            <div ref={langRef} className="relative">
              <button
                type="button"
                onClick={() => setLangOpen((v) => !v)}
                aria-haspopup="true"
                aria-expanded={langOpen}
                aria-controls={langMenuId}
                aria-label={`${labels.language}: ${current.name}`}
                className="inline-flex h-11 items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 font-mono text-xs font-medium text-paper transition hover:border-white/20"
              >
                {current.short}
                <ChevronDown size={14} aria-hidden className={`transition-transform duration-300 ${langOpen ? "rotate-180" : ""}`} />
              </button>
              <ul
                id={langMenuId}
                hidden={!langOpen}
                className="surface absolute right-0 mt-2 w-44 overflow-hidden !rounded-2xl !bg-ink-850/95 p-1.5"
              >
                {languages.map((lang) => (
                  <li key={lang.locale}>
                    <Link
                      href={localizedPath(lang.locale)}
                      hrefLang={lang.hreflang}
                      lang={lang.hreflang}
                      aria-current={lang.locale === locale ? "true" : undefined}
                      onClick={() => setLangOpen(false)}
                      className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-mist transition hover:bg-white/[0.06] hover:text-paper"
                    >
                      <span className="flex items-center gap-3">
                        <span className="w-6 font-mono text-[0.7rem] text-faint">{lang.short}</span>
                        {lang.name}
                      </span>
                      {lang.locale === locale ? <Check size={14} className="text-ember" aria-hidden /> : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <button
              ref={menuButtonRef}
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-paper xl:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls={mobileMenuId}
              aria-label={menuOpen ? labels.closeMenu : labels.openMenu}
            >
              {menuOpen ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
            </button>
          </div>
        </div>

        <div
          id={mobileMenuId}
          hidden={!menuOpen}
          className="h-[calc(100dvh-var(--header-h))] overflow-y-auto border-t border-white/[0.06] bg-ink-900/95 backdrop-blur-xl xl:hidden"
        >
          <nav aria-label={labels.primary} className="container-page py-6">
            <ul className="divide-y divide-white/[0.06]">
              {items.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`/${locale}#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between py-4 text-2xl font-semibold tracking-tight text-paper"
                  >
                    {item.label}
                    <span className="font-mono text-xs text-faint">{String(i + 1).padStart(2, "0")}</span>
                  </a>
                </li>
              ))}
            </ul>
            <Link
              href={`/${locale}/curriculo`}
              onClick={() => setMenuOpen(false)}
              className="btn btn-secondary mt-8 w-full"
            >
              <FileText size={16} aria-hidden />
              {labels.resume}
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
