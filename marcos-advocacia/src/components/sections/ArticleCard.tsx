import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { areaInfo, type Article } from "@/content/types";
import { formatDate, readingMinutes } from "@/content/articles";

export function ArticleCard({ article, priority = false }: { article: Article; priority?: boolean }) {
  return (
    <article className="card card-hover group relative flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden bg-navy-900">
        <Image
          src={article.cover.src}
          alt={article.cover.alt}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 85vw"
          priority={priority}
          unoptimized={article.cover.src.endsWith(".svg")}
          className="object-cover transition-transform duration-700 ease-[var(--ease-elegant)] group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs text-slate">
          <span className="font-semibold uppercase tracking-[0.16em] text-gold-700">{areaInfo[article.category].label}</span>
          <span aria-hidden="true" className="h-3 w-px bg-line" />
          <time dateTime={article.date}>{formatDate(article.date)}</time>
        </div>
        <h3 className="mt-3 font-serif text-[1.55rem] font-semibold leading-snug text-navy-900">
          <Link href={`/conteudos/${article.slug}`} className="after:absolute after:inset-0">
            {article.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate">{article.excerpt}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-navy-800">
          Ler conteúdo · {readingMinutes(article)} min
          <ArrowUpRight aria-hidden="true" className="size-4 text-gold-600 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </article>
  );
}
