/** Tipos e constantes do formulário compartilhados com o cliente (sem Zod no bundle do navegador). */
export const MESSAGE_MAX = 1500;

export type ContactField = "name" | "phone" | "email" | "subject" | "message" | "consent";

export interface ContactState {
  status: "idle" | "success" | "invalid" | "error" | "unavailable" | "blocked";
  message: string;
  fieldErrors?: Partial<Record<ContactField, string>>;
  /** Valores devolvidos para repreencher o formulário em caso de erro. */
  values?: Partial<Record<Exclude<ContactField, "consent">, string>>;
}

export const initialContactState: ContactState = { status: "idle", message: "" };
