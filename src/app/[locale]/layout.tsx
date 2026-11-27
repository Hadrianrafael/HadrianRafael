import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { RevealObserver } from "@/components/ui/RevealObserver";
import { getDictionary, isLocale, localeLabels, locales, navItems } from "@/content";
import { baseMetadata } from "@/lib/seo";
import "../globals.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: "#0b0a0f",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return baseMetadata(locale);
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDictionary(locale);

  return (
    <html lang={d.meta.htmlLang} className={`${geistSans.variable} ${geistMono.variable}`} data-scroll-behavior="smooth">
      <body id="top" className="min-h-dvh">
        <Header
          locale={locale}
          items={navItems(d)}
          labels={{
            resume: d.nav.resume,
            openMenu: d.nav.openMenu,
            closeMenu: d.nav.closeMenu,
            language: d.nav.language,
            primary: d.nav.primary,
            skipToContent: d.nav.skipToContent,
          }}
          languages={locales.map((l) => ({ locale: l, ...localeLabels[l] }))}
        />
        <main id="conteudo" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer d={d} locale={locale} />
        <RevealObserver />
      </body>
    </html>
  );
}
