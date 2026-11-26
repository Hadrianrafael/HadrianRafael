export type ConsentValue = "granted" | "denied";

const KEY = "mds-consent-v1";
export const CONSENT_EVENT = "mds:consent-change";
export const OPEN_PREFERENCES_EVENT = "mds:open-cookie-preferences";

export const analyticsConfig = {
  gaId: process.env.NEXT_PUBLIC_GA_ID?.trim() || "",
  gtmId: process.env.NEXT_PUBLIC_GTM_ID?.trim() || "",
};

/** Só há cookies não essenciais se alguma integração de métricas estiver configurada. */
export const hasOptionalTracking = Boolean(analyticsConfig.gaId || analyticsConfig.gtmId);

export function readConsent(): ConsentValue | null {
  try {
    const value = window.localStorage.getItem(KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function writeConsent(value: ConsentValue) {
  try {
    window.localStorage.setItem(KEY, value);
  } catch {
    /* armazenamento indisponível: a escolha vale apenas nesta visita */
  }
  window.dispatchEvent(new CustomEvent<ConsentValue>(CONSENT_EVENT, { detail: value }));
}
