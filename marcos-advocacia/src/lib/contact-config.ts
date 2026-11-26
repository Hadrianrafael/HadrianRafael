import "server-only";
import { site } from "@/config/site";

/** Configuração do envio do formulário (somente no servidor). */
export function getContactConfig() {
  const apiKey = process.env.RESEND_API_KEY?.trim() || "";
  const from = process.env.CONTACT_FROM_EMAIL?.trim() || "";
  const to = process.env.CONTACT_TO_EMAIL?.trim() || site.email;
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY?.trim() || "";
  return {
    enabled: Boolean(apiKey && from && to),
    apiKey,
    from,
    to,
    turnstileSecret,
  };
}
