import { z } from "zod";
import { contactTopics } from "./topics";

export const MESSAGE_MAX = 1500;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Informe seu nome completo.")
    .max(100, "O nome deve ter no máximo 100 caracteres."),
  phone: z
    .string()
    .trim()
    .transform((v) => v.replace(/\D/g, ""))
    .refine((d) => /^(55)?[1-9]{2}9?\d{8}$/.test(d), "Informe um telefone válido com DDD."),
  email: z.string().trim().toLowerCase().max(160, "E-mail muito longo.").pipe(z.email("Informe um e-mail válido.")),
  subject: z.enum(contactTopics, { error: "Selecione um assunto." }),
  message: z
    .string()
    .trim()
    .min(20, "Descreva brevemente o assunto (mínimo de 20 caracteres).")
    .max(MESSAGE_MAX, `A mensagem deve ter no máximo ${MESSAGE_MAX} caracteres.`),
  consent: z.literal("on", { error: "É necessário autorizar o tratamento dos dados para enviar a mensagem." }),
});

export type ContactField = keyof z.input<typeof contactSchema>;

export interface ContactState {
  status: "idle" | "success" | "invalid" | "error" | "unavailable" | "blocked";
  message: string;
  fieldErrors?: Partial<Record<ContactField, string>>;
  /** Valores devolvidos para repreencher o formulário em caso de erro. */
  values?: Partial<Record<Exclude<ContactField, "consent">, string>>;
}

export const initialContactState: ContactState = { status: "idle", message: "" };
