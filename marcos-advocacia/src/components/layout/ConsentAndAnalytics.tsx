"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import {
  analyticsConfig,
  CONSENT_EVENT,
  type ConsentValue,
  hasOptionalTracking,
  OPEN_PREFERENCES_EVENT,
  readConsent,
  writeConsent,
} from "@/lib/consent";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Banner de consentimento + carregamento condicional do GA4 / GTM.
 * Nenhum script de métricas é carregado sem ID configurado E sem aceite.
 */
export function ConsentAndAnalytics() {
  const [consent, setConsent] = useState<ConsentValue | null>(null);
  const [ready, setReady] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(false);

  useEffect(() => {
    if (!hasOptionalTracking) return;
    const stored = readConsent();
    // Leitura do localStorage só existe no cliente; sincroniza o estado após a hidratação.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setConsent(stored);
    setBannerOpen(stored === null);
    setReady(true);
    const onChange = (event: Event) => setConsent((event as CustomEvent<ConsentValue>).detail);
    const onOpen = () => setBannerOpen(true);
    window.addEventListener(CONSENT_EVENT, onChange);
    window.addEventListener(OPEN_PREFERENCES_EVENT, onOpen);
    return () => {
      window.removeEventListener(CONSENT_EVENT, onChange);
      window.removeEventListener(OPEN_PREFERENCES_EVENT, onOpen);
    };
  }, []);

  // Eventos de conversão sem dados pessoais (apenas o canal clicado).
  useEffect(() => {
    if (consent !== "granted") return;
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest?.("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      let name: string | null = null;
      if (href.startsWith("https://wa.me/")) name = "contato_whatsapp";
      else if (href.startsWith("tel:")) name = "contato_telefone";
      else if (href.startsWith("mailto:")) name = "contato_email";
      if (!name) return;
      const channel = anchor.dataset.channel || "geral";
      if (window.gtag) window.gtag("event", name, { canal: channel, pagina: window.location.pathname });
      else window.dataLayer?.push({ event: name, canal: channel, pagina: window.location.pathname });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [consent]);

  if (!hasOptionalTracking || !ready) return null;

  const choose = (value: ConsentValue) => {
    writeConsent(value);
    setBannerOpen(false);
    if (value === "denied" && consent === "granted") {
      // Scripts já carregados só deixam de atuar após recarregar a página.
      window.location.reload();
    }
  };

  return (
    <>
      {consent === "granted" && analyticsConfig.gaId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(analyticsConfig.gaId)}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config',${JSON.stringify(
              analyticsConfig.gaId,
            )},{anonymize_ip:true});`}
          </Script>
        </>
      ) : null}
      {consent === "granted" && analyticsConfig.gtmId ? (
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer',${JSON.stringify(
            analyticsConfig.gtmId,
          )});`}
        </Script>
      ) : null}

      {bannerOpen ? (
        <div
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-title"
          className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-xl animate-fade-up rounded-2xl border border-white/10 bg-navy-900/95 p-5 text-white shadow-2xl backdrop-blur-xl sm:bottom-5"
        >
          <h2 id="cookie-title" className="font-serif text-xl font-semibold">
            Sua privacidade
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            Utilizamos cookies de métricas apenas com a sua autorização, para entender de forma agregada como o site é
            usado. Cookies essenciais não são necessários para navegar. Saiba mais na{" "}
            <Link href="/politica-de-privacidade" className="text-gold-300 underline underline-offset-2">
              Política de Privacidade
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <button type="button" className="btn btn-gold min-h-11 flex-1" onClick={() => choose("granted")}>
              Aceitar métricas
            </button>
            <button type="button" className="btn btn-ghost-light min-h-11 flex-1" onClick={() => choose("denied")}>
              Recusar
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
