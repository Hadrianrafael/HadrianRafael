import { ArrowUpRight, Plus } from "lucide-react";
import Image from "next/image";
import { profile, type Dictionary, type ProjectItem, type ProjectStatus } from "@/content";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";

const statusStyle: Record<ProjectStatus, string> = {
  completed: "border-emerald-400/25 bg-emerald-400/10 text-emerald-300",
  "in-progress": "border-ember/30 bg-ember/10 text-ember",
  concept: "border-white/15 bg-white/[0.05] text-mist",
};

/** Mockup gerado em CSS para projetos que ainda não têm captura de tela. */
function GeneratedMockup({ name }: { name: string }) {
  return (
    <div aria-hidden className="absolute inset-0 bg-[radial-gradient(90%_70%_at_80%_0%,rgb(255_107_26/0.25),transparent_60%),linear-gradient(180deg,#16141c,#0c0b10)] p-6">
      <div className="grid-bg absolute inset-0 opacity-70" />
      <div className="relative flex h-full flex-col justify-center gap-3 px-[8%]">
        <span className="h-2 w-16 rounded-full bg-ember/70" />
        <span className="text-[clamp(1.4rem,3vw,2.2rem)] font-black leading-none tracking-[-0.04em] text-paper/90">{name}</span>
        <span className="h-2 w-3/4 rounded-full bg-white/10" />
        <span className="h-2 w-1/2 rounded-full bg-white/[0.07]" />
        <div className="mt-3 flex gap-2">
          <span className="h-7 w-24 rounded-full bg-ember/80" />
          <span className="h-7 w-20 rounded-full border border-white/15" />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, d, featured }: { project: ProjectItem; d: Dictionary; featured: boolean }) {
  const p = d.projects;
  return (
    <TiltCard as="article" max={2} className={`surface group flex h-full flex-col overflow-hidden ${featured ? "lg:flex-row" : ""}`}>
      {/* Moldura de navegador */}
      <div className={`relative shrink-0 border-b border-white/[0.07] ${featured ? "lg:w-[58%] lg:border-b-0 lg:border-r" : ""}`}>
        <div className="flex h-8 items-center gap-1.5 border-b border-white/[0.06] bg-ink-850 px-4">
          <span className="size-2.5 rounded-full bg-flare/70" />
          <span className="size-2.5 rounded-full bg-ember/60" />
          <span className="size-2.5 rounded-full bg-white/20" />
        </div>
        <div className="relative aspect-[16/10] overflow-hidden bg-ink-850">
          {project.image ? (
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              sizes={featured ? "(min-width: 1024px) 680px, 100vw" : "(min-width: 768px) 50vw, 100vw"}
              className="h-full w-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
            />
          ) : (
            <GeneratedMockup name={project.name} />
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${statusStyle[project.status]}`}>
            {p.status[project.status]}
          </span>
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted">{project.category}</span>
        </div>
        <h3 className="mt-4 text-2xl font-bold tracking-tight text-paper">{project.name}</h3>
        <p className="mt-3 text-pretty leading-relaxed text-mist">{project.description}</p>

        <dl className="mt-5 space-y-4 text-sm">
          <div>
            <dt className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-faint">{p.goalLabel}</dt>
            <dd className="mt-1.5 leading-relaxed text-mist">{project.goal}</dd>
          </div>
          <div>
            <dt className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-faint">{p.stackLabel}</dt>
            <dd className="mt-2">
              <ul className="flex flex-wrap gap-1.5">
                {project.stack.map((t) => (
                  <li key={t} className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-1 font-mono text-[0.72rem] text-mist">
                    {t}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>

        {project.demoUrl || project.repoUrl ? (
          <div className="mt-auto flex flex-wrap gap-2 pt-6">
            {project.demoUrl ? (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary !min-h-10 !px-4 !text-sm">
                {p.demo}
                <ArrowUpRight size={15} aria-hidden />
                <span className="sr-only">— {project.name}</span>
              </a>
            ) : null}
            {project.repoUrl ? (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !min-h-10 !text-sm">
                <GithubIcon size={15} />
                {p.code}
                <span className="sr-only">— {project.name}</span>
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </TiltCard>
  );
}

export function Projects({ d }: { d: Dictionary }) {
  const p = d.projects;
  const [first, ...rest] = p.items;
  return (
    <section id="projetos" aria-labelledby="projetos-title" className="relative py-24 sm:py-32">
      <div aria-hidden className="hairline absolute inset-x-0 top-0" />
      <div className="container-page">
        <SectionHeading id="projetos" index="04" kicker={p.kicker} title={p.title} intro={p.intro} align="split" />

        <div className="grid gap-5 md:grid-cols-2">
          {first ? (
            <div data-reveal className="md:col-span-2">
              <ProjectCard project={first} d={d} featured />
            </div>
          ) : null}
          {rest.map((project, i) => (
            <div key={project.slug} data-reveal style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}>
              <ProjectCard project={project} d={d} featured={false} />
            </div>
          ))}

          <div data-reveal style={{ "--reveal-delay": `${rest.length * 90}ms` } as React.CSSProperties}>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full min-h-72 flex-col justify-between rounded-[1.25rem] border border-dashed border-white/12 p-6 transition hover:border-ember/40 hover:bg-ember/[0.03] sm:p-7"
            >
              <span className="grid size-11 place-items-center rounded-xl border border-white/10 text-mist transition group-hover:border-ember/40 group-hover:text-ember">
                <Plus size={20} aria-hidden />
              </span>
              <div>
                <h3 className="text-xl font-bold tracking-tight text-paper">{p.moreTitle}</h3>
                <p className="mt-2 text-pretty leading-relaxed text-mist">{p.moreText}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-paper">
                  <GithubIcon size={16} />
                  {p.moreCta}
                  <ArrowUpRight size={15} aria-hidden className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
