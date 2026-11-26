"use client";

import { useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Unit } from "@/config/site";

/**
 * Mapa carregado somente após ação do visitante: o Google Maps pode
 * utilizar cookies próprios, por isso não é carregado automaticamente.
 */
export function MapEmbed({ unit }: { unit: Unit }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line bg-sand sm:aspect-[16/10]">
      {loaded ? (
        <iframe
          title={`Mapa: ${unit.name}, ${unit.fullAddress}`}
          src={unit.mapsEmbedUrl}
          className="absolute inset-0 size-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className="bg-navy-depth absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center text-white">
          <div aria-hidden="true" className="bg-lines pointer-events-none absolute inset-0" />
          <span className="relative grid size-12 place-items-center rounded-full bg-gold-500/15 text-gold-300">
            <MapPin aria-hidden="true" className="size-6" />
          </span>
          <p className="relative max-w-xs text-sm text-white/75">{unit.fullAddress}</p>
          <div className="relative flex flex-col gap-2 sm:flex-row">
            <button type="button" onClick={() => setLoaded(true)} className="btn btn-gold min-h-11 py-2 text-[0.85rem]">
              Carregar mapa
            </button>
            <a href={unit.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light min-h-11 py-2 text-[0.85rem]">
              Abrir no Google Maps
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>
          <p className="relative max-w-xs text-[0.7rem] leading-relaxed text-white/45">
            Ao carregar o mapa, o Google poderá coletar dados de navegação conforme a política dele.
          </p>
        </div>
      )}
    </div>
  );
}
