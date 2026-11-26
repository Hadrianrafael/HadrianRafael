"use client";

import Link from "next/link";
import Script from "next/script";
import { useActionState, useEffect, useId, useRef, useState } from "react";
import { AlertCircle, CheckCircle2, Info, Loader2, Send } from "lucide-react";
import { sendContact } from "@/app/contato/actions";
import { initialContactState, MESSAGE_MAX, type ContactField } from "@/lib/contact-schema";
import { contactTopics } from "@/lib/topics";

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() || "";

function maskPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

interface ContactFormProps {
  enabled: boolean;
  defaultSubject?: string;
}

export function ContactForm({ enabled, defaultSubject }: ContactFormProps) {
  const [state, formAction, pending] = useActionState(sendContact, initialContactState);
  const [startedAt, setStartedAt] = useState("");
  const [phone, setPhone] = useState("");
  const [messageLength, setMessageLength] = useState(0);
  const statusRef = useRef<HTMLDivElement>(null);
  const formId = useId();

  // Marca o início do preenchimento no cliente (proteção antispam).
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStartedAt(String(Date.now()));
  }, []);

  // Após uma resposta: repreenche campos controlados e leva o foco ao aviso.
  const [handled, setHandled] = useState(state);
  if (state !== handled) {
    setHandled(state);
    if (state.status === "success") {
      setPhone("");
      setMessageLength(0);
    } else if (state.values) {
      setPhone(maskPhone(state.values.phone ?? ""));
      setMessageLength(state.values.message?.length ?? 0);
    }
  }
  useEffect(() => {
    if (state.status !== "idle") statusRef.current?.focus();
  }, [state]);

  const err = (field: ContactField) => state.fieldErrors?.[field];
  const val = (field: Exclude<ContactField, "consent">) =>
    state.status === "success" ? undefined : state.values?.[field];
  const fid = (name: string) => `${formId}-${name}`;
  const describe = (name: ContactField, extra?: string) =>
    [err(name) ? `${fid(name)}-error` : null, extra].filter(Boolean).join(" ") || undefined;
  const disabled = !enabled || pending;
  // A chave força o reset dos campos não controlados após um envio bem-sucedido.
  const formKey = state.status === "success" ? `ok-${startedAt}` : "form";

  return (
    <div>
      {!enabled ? (
        <div role="note" className="mb-6 flex gap-3 rounded-2xl border border-gold-500/40 bg-gold-200/30 p-4 text-sm leading-relaxed text-navy-900">
          <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-gold-700" />
          <p>
            <strong>O envio pelo formulário ainda não está ativo.</strong> Enquanto isso, entre em contato pelo
            WhatsApp ou telefone das unidades, ou pelo e-mail do escritório.
          </p>
        </div>
      ) : null}

      <div ref={statusRef} tabIndex={-1} aria-live="polite" className="outline-none">
        {state.status === "success" ? (
          <div className="mb-6 flex gap-3 rounded-2xl border border-emerald-700/25 bg-emerald-50 p-4 text-sm text-emerald-900">
            <CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
            <p>{state.message}</p>
          </div>
        ) : state.status !== "idle" ? (
          <div className="mb-6 flex gap-3 rounded-2xl border border-[#b4412f]/25 bg-[#fbf1ee] p-4 text-sm text-[#7d2a1d]">
            <AlertCircle aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
            <p>{state.message}</p>
          </div>
        ) : null}
      </div>

      <form key={formKey} action={formAction} noValidate className="grid gap-5" aria-describedby={`${formId}-privacy`}>
        <input type="hidden" name="startedAt" value={startedAt} />
        {/* Honeypot: invisível para pessoas, preenchido por robôs. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label htmlFor={fid("website")}>Não preencha este campo</label>
          <input id={fid("website")} type="text" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <fieldset disabled={disabled} className="grid gap-5 disabled:opacity-70">
          <legend className="sr-only">Dados para contato</legend>
          <div>
            <label htmlFor={fid("name")} className="mb-2 block text-sm font-medium text-navy-900">
              Nome completo <span className="text-gold-700">*</span>
            </label>
            <input
              id={fid("name")}
              name="name"
              type="text"
              autoComplete="name"
              required
              minLength={3}
              maxLength={100}
              defaultValue={val("name")}
              aria-invalid={err("name") ? true : undefined}
              aria-describedby={describe("name")}
              className="field"
            />
            {err("name") ? (
              <p id={`${fid("name")}-error`} className="mt-1.5 text-xs text-[#b4412f]">
                {err("name")}
              </p>
            ) : null}
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor={fid("phone")} className="mb-2 block text-sm font-medium text-navy-900">
                Telefone / WhatsApp <span className="text-gold-700">*</span>
              </label>
              <input
                id={fid("phone")}
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel-national"
                required
                placeholder="(00) 00000-0000"
                value={phone}
                onChange={(e) => setPhone(maskPhone(e.target.value))}
                aria-invalid={err("phone") ? true : undefined}
                aria-describedby={describe("phone")}
                className="field"
              />
              {err("phone") ? (
                <p id={`${fid("phone")}-error`} className="mt-1.5 text-xs text-[#b4412f]">
                  {err("phone")}
                </p>
              ) : null}
            </div>
            <div>
              <label htmlFor={fid("email")} className="mb-2 block text-sm font-medium text-navy-900">
                E-mail <span className="text-gold-700">*</span>
              </label>
              <input
                id={fid("email")}
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                required
                maxLength={160}
                defaultValue={val("email")}
                aria-invalid={err("email") ? true : undefined}
                aria-describedby={describe("email")}
                className="field"
              />
              {err("email") ? (
                <p id={`${fid("email")}-error`} className="mt-1.5 text-xs text-[#b4412f]">
                  {err("email")}
                </p>
              ) : null}
            </div>
          </div>

          <div>
            <label htmlFor={fid("subject")} className="mb-2 block text-sm font-medium text-navy-900">
              Assunto <span className="text-gold-700">*</span>
            </label>
            <select
              id={fid("subject")}
              name="subject"
              required
              defaultValue={val("subject") ?? (defaultSubject && contactTopics.includes(defaultSubject as never) ? defaultSubject : "")}
              aria-invalid={err("subject") ? true : undefined}
              aria-describedby={describe("subject")}
              className="field appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23977645%22 stroke-width=%222%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:14px] bg-[right_1rem_center] bg-no-repeat pr-10"
            >
              <option value="" disabled>
                Selecione o assunto
              </option>
              {contactTopics.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            {err("subject") ? (
              <p id={`${fid("subject")}-error`} className="mt-1.5 text-xs text-[#b4412f]">
                {err("subject")}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor={fid("message")} className="mb-2 block text-sm font-medium text-navy-900">
              Mensagem <span className="text-gold-700">*</span>
            </label>
            <textarea
              id={fid("message")}
              name="message"
              required
              rows={5}
              minLength={20}
              maxLength={MESSAGE_MAX}
              defaultValue={val("message")}
              onChange={(e) => setMessageLength(e.target.value.length)}
              aria-invalid={err("message") ? true : undefined}
              aria-describedby={describe("message", `${fid("message")}-hint`)}
              className="field min-h-36 resize-y"
            />
            <div className="mt-1.5 flex justify-between gap-4 text-xs">
              <p id={`${fid("message")}-hint`} className="text-slate">
                Descreva o assunto de forma breve. Não inclua documentos, dados de saúde, números de processos ou outras
                informações sensíveis.
              </p>
              <span className="shrink-0 tabular-nums text-mist">
                {messageLength}/{MESSAGE_MAX}
              </span>
            </div>
            {err("message") ? (
              <p id={`${fid("message")}-error`} className="mt-1.5 text-xs text-[#b4412f]">
                {err("message")}
              </p>
            ) : null}
          </div>

          <div>
            <div className="flex gap-3">
              <input
                id={fid("consent")}
                name="consent"
                type="checkbox"
                required
                aria-invalid={err("consent") ? true : undefined}
                aria-describedby={describe("consent")}
                className="mt-1 size-5 shrink-0 accent-navy-800"
              />
              <label htmlFor={fid("consent")} className="text-sm leading-relaxed text-slate">
                Autorizo o tratamento dos dados informados exclusivamente para que o escritório responda a este contato,
                conforme a{" "}
                <Link href="/politica-de-privacidade" className="font-medium text-navy-800 underline underline-offset-2">
                  Política de Privacidade
                </Link>{" "}
                e a Lei Geral de Proteção de Dados (Lei nº 13.709/2018). <span className="text-gold-700">*</span>
              </label>
            </div>
            {err("consent") ? (
              <p id={`${fid("consent")}-error`} className="mt-1.5 text-xs text-[#b4412f]">
                {err("consent")}
              </p>
            ) : null}
          </div>

          {enabled && turnstileSiteKey ? (
            <>
              <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" async defer />
              <div className="cf-turnstile" data-sitekey={turnstileSiteKey} data-language="pt-br" data-theme="light" />
            </>
          ) : null}

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button type="submit" className="btn btn-navy w-full sm:w-auto" disabled={disabled}>
              {pending ? (
                <>
                  <Loader2 aria-hidden="true" className="size-4 animate-spin" />
                  Enviando…
                </>
              ) : (
                <>
                  <Send aria-hidden="true" className="size-4 text-gold-300" />
                  Enviar mensagem
                </>
              )}
            </button>
            <p id={`${formId}-privacy`} className="text-xs leading-relaxed text-slate sm:max-w-xs sm:text-right">
              O envio do formulário não estabelece relação entre advogado e cliente. Campos com * são obrigatórios.
            </p>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
