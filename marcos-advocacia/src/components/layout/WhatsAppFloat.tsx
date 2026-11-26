"use client";

import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { unitList } from "@/config/site";
import { topicFromPath } from "@/lib/topics";
import { whatsappUnitUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";

/** Botão flutuante: o visitante escolhe a unidade antes de abrir o WhatsApp. */
export function WhatsAppFloat() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const topic = topicFromPath(pathname);

  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onPointer = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="fixed bottom-4 right-4 z-40 flex flex-col items-end sm:bottom-6 sm:right-6">
      <div
        id={panelId}
        role="dialog"
        aria-label="Escolha a unidade para conversar pelo WhatsApp"
        className={`mb-3 w-[min(20rem,calc(100vw-2rem))] origin-bottom-right rounded-2xl border border-white/10 bg-navy-900/95 p-4 text-white shadow-2xl backdrop-blur-xl transition-all duration-300 ${
          open ? "visible scale-100 opacity-100" : "invisible scale-95 opacity-0"
        }`}
      >
        <p className="font-serif text-lg font-semibold">Escolha a unidade</p>
        <p className="mt-1 text-xs text-white/55">
          {topic ? `Assunto: ${topic}. ` : ""}A conversa é iniciada com o escritório.
        </p>
        <ul className="mt-3 space-y-2">
          {unitList.map((unit) => (
            <li key={unit.id}>
              <a
                href={whatsappUnitUrl(unit.id, topic)}
                target="_blank"
                rel="noopener noreferrer"
                data-channel={`whatsapp-${unit.id}`}
                tabIndex={open ? 0 : -1}
                className="group flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-3 transition-colors hover:border-gold-400/50"
              >
                <span>
                  <span className="block text-sm font-semibold">{unit.city}</span>
                  <span className="block text-xs text-white/55">{unit.phoneDisplay}</span>
                </span>
                <ArrowUpRight aria-hidden="true" className="size-4 text-gold-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Fechar opções de WhatsApp" : "Conversar pelo WhatsApp"}
        onClick={() => setOpen((v) => !v)}
        className="group relative grid size-14 place-items-center rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-gold-600 text-navy-950 shadow-[0_18px_40px_-12px_rgba(184,149,90,0.75)] ring-1 ring-gold-200/40 transition-transform duration-300 hover:-translate-y-0.5"
      >
        {open ? <X aria-hidden="true" className="size-6" /> : <WhatsAppIcon className="size-7" />}
      </button>
    </div>
  );
}
