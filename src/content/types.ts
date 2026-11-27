export const locales = ["pt", "en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Âncoras das seções, na ordem da página. */
export const sectionIds = ["sobre", "experiencia", "competencias", "projetos", "formacao", "objetivos", "contato"] as const;
export type SectionId = (typeof sectionIds)[number];

export type ProjectStatus = "completed" | "in-progress" | "concept";
export type ProjectCategory = "institutional" | "web-system" | "saas" | "ai" | "automation";

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  /** ISO-like start used for ordering and the résumé, e.g. "2026-03" */
  start: string;
  current?: boolean;
  location?: string;
  summary: string;
  highlights: string[];
}

export interface ProjectItem {
  slug: string;
  name: string;
  category: string;
  status: ProjectStatus;
  description: string;
  goal: string;
  stack: string[];
  image?: { src: string; alt: string; width: number; height: number };
  demoUrl?: string;
  repoUrl?: string;
}

export interface SkillGroup {
  id: "dev" | "ai" | "design" | "professional";
  title: string;
  description: string;
  items: string[];
}

export interface Dictionary {
  meta: {
    htmlLang: string;
    ogLocale: string;
    title: string;
    description: string;
    jobTitle: string;
  };
  nav: {
    about: string;
    experience: string;
    skills: string;
    projects: string;
    education: string;
    goals: string;
    contact: string;
    resume: string;
    openMenu: string;
    closeMenu: string;
    language: string;
    skipToContent: string;
    primary: string;
  };
  hero: {
    status: string;
    greeting: string;
    subtitle: string;
    text: string;
    ctaJourney: string;
    ctaProjects: string;
    ctaResume: string;
    ctaContact: string;
    photoAlt: string;
    photoPlaceholder: string;
    facts: { value: string; label: string }[];
    scroll: string;
  };
  about: {
    kicker: string;
    title: string;
    paragraphs: string[];
    pillars: { title: string; text: string }[];
  };
  experience: {
    kicker: string;
    title: string;
    intro: string;
    current: string;
    items: ExperienceItem[];
  };
  skills: {
    kicker: string;
    title: string;
    intro: string;
    note: string;
    groups: SkillGroup[];
  };
  projects: {
    kicker: string;
    title: string;
    intro: string;
    goalLabel: string;
    stackLabel: string;
    demo: string;
    code: string;
    status: Record<ProjectStatus, string>;
    items: ProjectItem[];
    moreTitle: string;
    moreText: string;
    moreCta: string;
  };
  education: {
    kicker: string;
    title: string;
    degree: string;
    institution: string;
    status: string;
    expected: string;
    complementaryTitle: string;
    complementaryText: string;
    complementary: { title: string; issuer: string; year: string }[];
    complementaryEmpty: string;
  };
  goals: {
    kicker: string;
    title: string;
    intro: string;
    tracks: { title: string; text: string; roles: string[] }[];
    differentialTitle: string;
    differentialText: string;
  };
  languages: {
    kicker: string;
    title: string;
    items: { name: string; level: string; label: string; value: number }[];
  };
  contact: {
    kicker: string;
    title: string;
    text: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    website: string;
    resume: string;
    copy: string;
    copied: string;
    location: string;
  };
  footer: {
    tagline: string;
    navigation: string;
    contact: string;
    documents: string;
    resumeOnline: string;
    resumePdf: string;
    rights: string;
    built: string;
    backToTop: string;
  };
  resume: {
    pageTitle: string;
    pageDescription: string;
    download: string;
    print: string;
    back: string;
    summaryTitle: string;
    summary: string;
    experienceTitle: string;
    educationTitle: string;
    skillsTitle: string;
    languagesTitle: string;
    projectsTitle: string;
    location: string;
  };
  notFound: { title: string; text: string; cta: string };
}
