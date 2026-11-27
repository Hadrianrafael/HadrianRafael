import { ArrowLeft, Download } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PrintButton } from "@/components/ui/PrintButton";
import { getDictionary, isLocale, profile, resumePdfPath } from "@/content";
import { alternates } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[locale]/curriculo">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const d = getDictionary(locale);
  return {
    title: { absolute: d.resume.pageTitle },
    description: d.resume.pageDescription,
    alternates: alternates(locale, "/curriculo"),
    openGraph: {
      title: d.resume.pageTitle,
      description: d.resume.pageDescription,
      url: `/${locale}/curriculo`,
      images: [{ url: `/${locale}/opengraph-image`, width: 1200, height: 630, alt: profile.name }],
    },
  };
}

/**
 * Currículo em HTML semântico, coluna única e sem elementos gráficos no conteúdo —
 * legível por sistemas ATS. É também a fonte dos PDFs gerados por scripts/generate-resume-pdf.mjs.
 */
export default async function ResumePage({ params }: PageProps<"/[locale]/curriculo">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDictionary(locale);
  const r = d.resume;
  const devGroup = d.skills.groups.find((g) => g.id === "dev");
  const aiGroup = d.skills.groups.find((g) => g.id === "ai");
  const designGroup = d.skills.groups.find((g) => g.id === "design");
  const proGroup = d.skills.groups.find((g) => g.id === "professional");

  return (
    <div className="resume-screen pb-20 pt-[calc(var(--header-h)+1.5rem)] print:p-0">
      <div className="container-page print:hidden">
        <div className="mx-auto flex max-w-[210mm] flex-wrap items-center justify-between gap-3 pb-6">
          <Link href={`/${locale}`} className="btn btn-ghost !px-0">
            <ArrowLeft size={16} aria-hidden />
            {r.back}
          </Link>
          <div className="flex gap-2">
            <PrintButton label={r.print} />
            <a href={resumePdfPath(locale)} download className="btn btn-primary !min-h-10 !px-4 !text-sm">
              <Download size={15} aria-hidden />
              {r.download}
            </a>
          </div>
        </div>
      </div>

      <article
        id="resume"
        className="resume-sheet mx-auto w-full max-w-[210mm] bg-white px-[13mm] py-[10mm] text-[9.2pt] leading-[1.38] text-[#1d1b20] shadow-[0_30px_80px_-20px_rgb(0_0_0/0.8)] print:max-w-none print:shadow-none"
      >
        <header className="border-b-2 border-[#ff6b1a] pb-3">
          <h1 className="text-[21pt] font-extrabold leading-tight tracking-tight text-[#0b0a0f]">{profile.fullName}</h1>
          <p className="mt-0.5 text-[11pt] font-semibold text-[#c2410c]">{d.meta.jobTitle}</p>
          <p className="mt-2 text-[8.8pt] text-[#3f3b45]">
            {r.location} · <a href={profile.phoneHref}>{profile.phone}</a> · <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <br />
            <a href={profile.linkedin}>{profile.linkedinLabel}</a> · <a href={profile.github}>{profile.githubLabel}</a> ·{" "}
            <a href={profile.website}>{profile.websiteLabel}</a>
          </p>
        </header>

        <section className="mt-3">
          <h2 className="resume-h2">{r.summaryTitle}</h2>
          <p>{r.summary}</p>
        </section>

        <section className="mt-3">
          <h2 className="resume-h2">{r.experienceTitle}</h2>
          <div className="space-y-2">
            {d.experience.items.map((item) => (
              <div key={item.company} className="break-inside-avoid">
                <h3 className="flex flex-wrap items-baseline justify-between gap-x-3 text-[10pt] font-bold text-[#0b0a0f]">
                  <span>
                    {item.role} — {item.company}
                  </span>
                  <span className="text-[8.8pt] font-medium text-[#57525e]">{item.period}</span>
                </h3>
                <ul className="mt-0.5 list-disc space-y-0.5 pl-4 marker:text-[#ff6b1a]">
                  <li>{item.summary}</li>
                  {item.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-3">
          <h2 className="resume-h2">{r.educationTitle}</h2>
          <h3 className="flex flex-wrap items-baseline justify-between gap-x-3 text-[10pt] font-bold text-[#0b0a0f]">
            <span>
              {d.education.degree} — {d.education.institution}
            </span>
            <span className="text-[8.8pt] font-medium text-[#57525e]">{d.education.status}</span>
          </h3>
          <p>{d.education.expected}</p>
        </section>

        <section className="mt-3">
          <h2 className="resume-h2">{r.skillsTitle}</h2>
          <ul className="space-y-0.5">
            {[devGroup, aiGroup, designGroup, proGroup].map((g) =>
              g ? (
                <li key={g.id}>
                  <strong className="text-[#0b0a0f]">{g.title}:</strong> {g.items.join(", ")}.
                </li>
              ) : null,
            )}
          </ul>
        </section>

        <section className="mt-3">
          <h2 className="resume-h2">{r.projectsTitle}</h2>
          <ul className="list-disc space-y-0.5 pl-4 marker:text-[#ff6b1a]">
            {d.projects.items.map((p) => (
              <li key={p.slug}>
                <strong className="text-[#0b0a0f]">{p.name}</strong> ({d.projects.status[p.status]}) — {p.category}. {p.stack.join(", ")}.
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-3">
          <h2 className="resume-h2">{r.languagesTitle}</h2>
          <p>{d.languages.items.map((l) => `${l.name}: ${l.level === l.label ? l.level : `${l.level} (${l.label})`}`).join(" · ")}</p>
        </section>
      </article>
    </div>
  );
}
