import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getSiteUrl } from "@/config/site";
import { JsonLd } from "./JsonLd";

export interface Crumb {
  label: string;
  href: string;
}

/** Trilha de navegação com BreadcrumbList (schema.org). */
export function Breadcrumbs({ items, tone = "light" }: { items: Crumb[]; tone?: "light" | "dark" }) {
  const all: Crumb[] = [{ label: "Início", href: "/" }, ...items];
  const base = getSiteUrl();
  const isLight = tone === "light";
  return (
    <>
      <nav aria-label="Trilha de navegação">
        <ol className={`flex flex-wrap items-center gap-1.5 text-xs ${isLight ? "text-white/55" : "text-slate"}`}>
          {all.map((item, index) => {
            const isLast = index === all.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {isLast ? (
                  <span aria-current="page" className={isLight ? "text-gold-300" : "text-gold-700"}>
                    {item.label}
                  </span>
                ) : (
                  <>
                    <Link href={item.href} className={`link-underline ${isLight ? "hover:text-white" : "hover:text-navy-900"}`}>
                      {item.label}
                    </Link>
                    <ChevronRight aria-hidden="true" className="size-3 opacity-60" />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.label,
            item: `${base}${item.href === "/" ? "" : item.href}`,
          })),
        }}
      />
    </>
  );
}
