/** Assuntos usados nas mensagens iniciais e no formulário de contato. */
export const contactTopics = [
  "Direito do Trabalho",
  "Reconhecimento de vínculo empregatício",
  "Direito Civil",
  "Direito de Família",
  "Direito Empresarial",
  "Outro assunto",
] as const;

export type ContactTopic = (typeof contactTopics)[number];

/** Assunto sugerido de acordo com a página visitada. */
export function topicFromPath(pathname: string): string | undefined {
  if (pathname.startsWith("/direito-do-trabalho/reconhecimento-de-vinculo-empregaticio"))
    return "Reconhecimento de vínculo empregatício";
  if (pathname.startsWith("/direito-do-trabalho")) return "Direito do Trabalho";
  if (pathname.startsWith("/direito-civil")) return "Direito Civil";
  if (pathname.startsWith("/direito-de-familia")) return "Direito de Família";
  if (pathname.startsWith("/direito-empresarial")) return "Direito Empresarial";
  return undefined;
}
