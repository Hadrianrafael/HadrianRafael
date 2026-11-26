"use client";

import { useState, type ReactNode } from "react";

interface ArticleFilterProps {
  options: { value: string; label: string; count: number }[];
  total: number;
  children: ReactNode;
}

/** Filtro por área: os cartões são renderizados no servidor e apenas ocultados via CSS. */
export function ArticleFilter({ options, total, children }: ArticleFilterProps) {
  const [filter, setFilter] = useState("todos");
  const all = [{ value: "todos", label: "Todos", count: total }, ...options];
  const visible = all.find((o) => o.value === filter)?.count ?? total;

  return (
    <div data-filter={filter}>
      <div role="toolbar" aria-label="Filtrar por área" className="snap-carousel -mx-5 gap-2 px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
        {all.map((o) => {
          const active = o.value === filter;
          return (
            <button
              key={o.value}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(o.value)}
              className={`whitespace-nowrap rounded-full border px-4 py-2.5 text-sm transition-all duration-300 ${
                active
                  ? "border-navy-900 bg-navy-900 text-white"
                  : "border-line bg-white text-slate hover:border-gold-500/60 hover:text-navy-900"
              }`}
            >
              {o.label}
              <span className={`ml-2 text-xs ${active ? "text-gold-300" : "text-mist"}`}>{o.count}</span>
            </button>
          );
        })}
      </div>
      <p className="sr-only" aria-live="polite">
        {visible} conteúdos exibidos
      </p>
      {children}
    </div>
  );
}
