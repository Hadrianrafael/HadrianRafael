import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import type { ContentBlock } from "@/content/types";

const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)\s]+\))/g;

/** Converte a marcação inline mínima em elementos React (sem HTML bruto). */
export function inline(text: string): ReactNode[] {
  return text.split(TOKEN).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
    const link = /^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(part);
    if (link) {
      const [, label, href] = link;
      if (href!.startsWith("/")) {
        return (
          <Link key={i} href={href!}>
            {label}
          </Link>
        );
      }
      return (
        <a key={i} href={href} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

export function slugify(text: string) {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function RichBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return <p key={i}>{inline(block.text)}</p>;
          case "h2":
            return (
              <h2 key={i} id={block.id ?? slugify(block.text)} className="scroll-mt-28">
                {block.text}
              </h2>
            );
          case "h3":
            return <h3 key={i}>{block.text}</h3>;
          case "ul":
            return (
              <ul key={i}>
                {block.items.map((item, j) => (
                  <li key={j}>{inline(item)}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i}>
                {block.items.map((item, j) => (
                  <li key={j}>{inline(item)}</li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote key={i}>
                <p>{inline(block.text)}</p>
                {block.cite ? (
                  <footer className="mt-2 font-sans text-xs uppercase tracking-[0.18em] text-gold-700">{block.cite}</footer>
                ) : null}
              </blockquote>
            );
          case "callout":
            return (
              <aside key={i} className="rounded-2xl border border-gold-500/30 bg-gold-200/25 p-5 sm:p-6">
                <p className="font-serif text-xl font-semibold text-navy-900">{block.title}</p>
                <p className="mt-2 text-[0.98rem] leading-relaxed">{inline(block.text)}</p>
              </aside>
            );
          default:
            return null;
        }
      })}
    </>
  );
}
