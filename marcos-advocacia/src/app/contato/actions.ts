"use server";

import { headers } from "next/headers";
import { site } from "@/config/site";
import { getContactConfig } from "@/lib/contact-config";
import { contactSchema } from "@/lib/contact-schema";
import type { ContactField, ContactState } from "@/lib/contact-shared";
import { rateLimit } from "@/lib/rate-limit";

const MIN_FILL_MS = 3000;
const MAX_FILL_MS = 1000 * 60 * 60 * 6;

function oneLine(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function formatPhone(digits: string) {
  const d = digits.startsWith("55") && digits.length > 11 ? digits.slice(2) : digits;
  return d.length === 11 ? `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}` : `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
}

async function verifyTurnstile(secret: string, token: string, ip: string) {
  try {
    const body = new URLSearchParams({ secret, response: token });
    if (ip) body.set("remoteip", ip);
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body,
      signal: AbortSignal.timeout(8000),
    });
    const data = (await res.json()) as { success?: boolean };
    return Boolean(data.success);
  } catch {
    return false;
  }
}

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const config = getContactConfig();
  const raw = {
    name: String(formData.get("name") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    email: String(formData.get("email") ?? ""),
    subject: String(formData.get("subject") ?? ""),
    message: String(formData.get("message") ?? ""),
  };
  const values = raw;

  if (!config.enabled) {
    return {
      status: "unavailable",
      message:
        "O envio pelo formulário ainda não está disponível. Por favor, utilize o WhatsApp, o telefone ou o e-mail do escritório.",
      values,
    };
  }

  // 1) Honeypot: campo invisível que pessoas não preenchem.
  if (String(formData.get("website") ?? "").trim() !== "") {
    return { status: "blocked", message: "Não foi possível enviar a mensagem." };
  }

  // 2) Tempo de preenchimento (robôs enviam instantaneamente).
  const startedAt = Number(formData.get("startedAt"));
  const elapsed = Date.now() - startedAt;
  if (!Number.isFinite(startedAt) || elapsed < MIN_FILL_MS || elapsed > MAX_FILL_MS) {
    return {
      status: "blocked",
      message: "Não foi possível validar o envio. Recarregue a página e tente novamente.",
      values,
    };
  }

  // 3) Limite de envios por IP.
  const h = await headers();
  const ip = (h.get("x-forwarded-for") ?? "").split(",")[0]?.trim() || h.get("x-real-ip") || "desconhecido";
  if (!rateLimit(`contact:${ip}`)) {
    return {
      status: "blocked",
      message: "Muitas tentativas em pouco tempo. Aguarde alguns minutos ou utilize o WhatsApp.",
      values,
    };
  }

  // 4) Validação dos campos.
  const parsed = contactSchema.safeParse({ ...raw, consent: formData.get("consent") ?? undefined });
  if (!parsed.success) {
    const fieldErrors: Partial<Record<ContactField, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as ContactField | undefined;
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { status: "invalid", message: "Revise os campos destacados.", fieldErrors, values };
  }

  // 5) Cloudflare Turnstile (opcional, quando configurado).
  if (config.turnstileSecret) {
    const token = String(formData.get("cf-turnstile-response") ?? "");
    if (!token || !(await verifyTurnstile(config.turnstileSecret, token, ip))) {
      return { status: "blocked", message: "Confirme a verificação de segurança e tente novamente.", values };
    }
  }

  const data = parsed.data;
  const receivedAt = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "America/Sao_Paulo",
  }).format(new Date());

  const text = [
    `Nova mensagem enviada pelo formulário do site ${site.brand}.`,
    "",
    `Nome: ${oneLine(data.name)}`,
    `Telefone: ${formatPhone(data.phone)}`,
    `E-mail: ${data.email}`,
    `Assunto: ${data.subject}`,
    "",
    "Mensagem:",
    data.message,
    "",
    "—",
    `Recebida em: ${receivedAt} (horário de Brasília)`,
    "Consentimento para tratamento dos dados: sim (LGPD, art. 7º, I e V).",
    "Esta mensagem não foi armazenada no site; existe apenas neste e-mail.",
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${config.apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: config.from,
        to: [config.to],
        reply_to: data.email,
        subject: oneLine(`[Site] ${data.subject} · ${data.name}`).slice(0, 180),
        text,
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) {
      // Registra apenas o código de status, nunca o conteúdo da mensagem.
      console.error(`[contato] Falha no provedor de e-mail: HTTP ${res.status}`);
      return {
        status: "error",
        message:
          "Não foi possível enviar sua mensagem agora. Tente novamente em instantes ou utilize o WhatsApp ou o e-mail do escritório.",
        values,
      };
    }
  } catch {
    console.error("[contato] Erro de rede ao enviar e-mail.");
    return {
      status: "error",
      message: "Não foi possível enviar sua mensagem agora. Tente novamente ou utilize o WhatsApp.",
      values,
    };
  }

  return {
    status: "success",
    message: "Mensagem enviada. O escritório recebeu seu contato e responderá pelos dados informados.",
  };
}
