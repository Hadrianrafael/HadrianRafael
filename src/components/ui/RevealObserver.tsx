"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Observa todos os elementos com [data-reveal] e marca [data-shown] quando entram na tela.
 * Um único observer para a página inteira mantém o custo de JavaScript mínimo.
 * Reexecuta a cada troca de rota, pois o layout (e este componente) permanece montado.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-shown])"));
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.setAttribute("data-shown", ""));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-shown", "");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
