import en from "./en";
import es from "./es";
import pt from "./pt";
import type { Dictionary, Locale, SectionId } from "./types";

export * from "./types";
export * from "./profile";

const dictionaries: Record<Locale, Dictionary> = { pt, en, es };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export const localeLabels: Record<Locale, { short: string; name: string; hreflang: string }> = {
  pt: { short: "PT", name: "Português", hreflang: "pt-BR" },
  en: { short: "EN", name: "English", hreflang: "en" },
  es: { short: "ES", name: "Español", hreflang: "es" },
};


export function navItems(d: Dictionary): { id: SectionId; label: string }[] {
  return [
    { id: "sobre", label: d.nav.about },
    { id: "experiencia", label: d.nav.experience },
    { id: "competencias", label: d.nav.skills },
    { id: "projetos", label: d.nav.projects },
    { id: "formacao", label: d.nav.education },
    { id: "objetivos", label: d.nav.goals },
    { id: "contato", label: d.nav.contact },
  ];
}
