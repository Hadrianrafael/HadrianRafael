import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { getDictionary, locales } from "@/content";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans", display: "swap" });

export const metadata: Metadata = {
  title: "404 — Hadrian Rafael",
  robots: { index: false, follow: true },
};

export default function GlobalNotFound() {
  return (
    <html lang="pt-BR" className={geistSans.variable}>
      <body className="grid min-h-dvh place-items-center px-6">
        <main className="max-w-xl text-center">
          <p className="font-mono text-sm tracking-[0.2em] text-ember">404</p>
          <div className="mt-8 space-y-8">
            {locales.map((locale) => {
              const d = getDictionary(locale);
              return (
                <div key={locale} lang={d.meta.htmlLang}>
                  <h1 className="text-2xl font-extrabold tracking-tight text-paper sm:text-3xl">{d.notFound.title}</h1>
                  <p className="mt-2 text-mist">{d.notFound.text}</p>
                  <a href={`/${locale}`} className="mt-4 inline-flex text-sm font-semibold text-ember-soft hover:text-ember">
                    {d.notFound.cta} →
                  </a>
                </div>
              );
            })}
          </div>
        </main>
      </body>
    </html>
  );
}
