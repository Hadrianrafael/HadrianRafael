"use client";

import { useId, useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { unitList, type UnitId } from "@/config/site";
import { contactTopics } from "@/lib/topics";
import { whatsappUnitUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./BrandIcons";

interface WhatsAppPickerProps {
  defaultTopic?: string;
  /** Oculta o seletor de assunto (ex.: páginas com tema já definido). */
  fixedTopic?: boolean;
  title?: string;
  className?: string;
}

/**
 * Seletor de unidade + assunto, que abre o WhatsApp da unidade escolhida
 * com uma mensagem inicial neutra. Cada unidade usa somente o próprio número.
 */
export function WhatsAppPicker({
  defaultTopic,
  fixedTopic = false,
  title = "Fale com o escritório",
  className = "",
}: WhatsAppPickerProps) {
  const [unitId, setUnitId] = useState<UnitId>("sao-paulo");
  const [topic, setTopic] = useState<string>(defaultTopic ?? "");
  const topicId = useId();
  const groupId = useId();
  const selected = unitList.find((u) => u.id === unitId) ?? unitList[0]!;
  const topicForMessage = topic && topic !== "Outro assunto" ? topic : undefined;

  return (
    <div className={`glass rounded-3xl p-5 text-white shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)] sm:p-7 ${className}`}>
      <div className="flex items-center justify-between gap-4">
        <p className="font-serif text-2xl font-semibold leading-tight">{title}</p>
        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gold-500/15 text-gold-300">
          <WhatsAppIcon className="size-5" />
        </span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-white/60">
        Escolha a unidade de atendimento. A conversa é iniciada diretamente com o escritório.
      </p>

      <fieldset className="mt-6">
        <legend id={groupId} className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/50">
          Unidade
        </legend>
        <div role="radiogroup" aria-labelledby={groupId} className="mt-2.5 grid grid-cols-2 gap-1.5 rounded-2xl bg-black/20 p-1.5">
          {unitList.map((unit) => {
            const active = unit.id === unitId;
            return (
              <button
                key={unit.id}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => setUnitId(unit.id)}
                className={`rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-300 ${
                  active
                    ? "bg-white text-navy-900 shadow-[0_6px_18px_-8px_rgba(0,0,0,0.5)]"
                    : "text-white/70 hover:bg-white/[0.05] hover:text-white"
                }`}
              >
                {unit.city}
              </button>
            );
          })}
        </div>
      </fieldset>

      {!fixedTopic ? (
        <div className="mt-4">
          <label htmlFor={topicId} className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/50">
            Assunto
          </label>
          <select
            id={topicId}
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="field-dark mt-2.5 appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23cdb07a%22 stroke-width=%222%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:14px] bg-[right_1rem_center] bg-no-repeat pr-10"
          >
            <option value="">Selecione (opcional)</option>
            {contactTopics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      <div className="mt-5 flex items-start gap-2.5 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-3.5 text-xs text-white/60">
        <MapPin aria-hidden="true" className="mt-0.5 size-3.5 shrink-0 text-gold-400" />
        <span>
          <span className="font-medium text-white/85">{selected.name}</span> · {selected.fullAddress}
        </span>
      </div>

      <a
        href={whatsappUnitUrl(unitId, topicForMessage)}
        target="_blank"
        rel="noopener noreferrer"
        data-channel={`whatsapp-${unitId}`}
        className="btn btn-gold mt-5 w-full"
      >
        <WhatsAppIcon className="size-[1.15rem]" />
        Conversar com {selected.city}
        <ArrowUpRight aria-hidden="true" className="size-4" />
      </a>
      <p className="mt-3 text-center text-[0.7rem] leading-relaxed text-white/40">
        {selected.phoneDisplay} · Evite enviar documentos ou dados sensíveis no primeiro contato.
      </p>
    </div>
  );
}
