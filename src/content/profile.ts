/**
 * Dados pessoais compartilhados entre idiomas, site, currículo e metadados.
 * A URL pública vem de NEXT_PUBLIC_SITE_URL (definida na Vercel); o valor abaixo é o padrão.
 * Dados que ainda dependem de confirmação estão listados no README.
 */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.hadrianrafael.com.br").replace(/\/$/, "");

export const profile = {
  fullName: "Hadrian Rafael Silva de Oliveira",
  name: "Hadrian Rafael",
  initials: "HR",
  email: "hadrianrafael82@gmail.com",
  phone: "+55 11 91652-8370",
  phoneHref: "tel:+5511916528370",
  location: "São Paulo, SP — Brasil",
  linkedin: "https://www.linkedin.com/in/hadrianrafael",
  linkedinLabel: "linkedin.com/in/hadrianrafael",
  github: "https://github.com/Hadrianrafael",
  githubLabel: "github.com/Hadrianrafael",
  website: siteUrl,
  websiteLabel: siteUrl.replace(/^https?:\/\/(www\.)?/, ""),
  /** Caminho em /public. Deixe vazio enquanto a foto profissional não for adicionada. */
  photo: "/images/profile/hadrian-rafael.webp" as string,
} as const;

export function resumePdfPath(locale: string) {
  return `/documents/hadrian-rafael-curriculo-${locale}.pdf`;
}
