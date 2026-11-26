import { aiAttendance, site, units, type UnitId } from "@/config/site";

/**
 * Mensagens iniciais neutras e informativas: apenas identificam o canal
 * e o assunto. Nada de promessas, urgência artificial ou oferta de serviço.
 */
export function buildWhatsAppMessage(unitId: UnitId, topic?: string): string {
  const unit = units[unitId];
  const subject = topic ? ` sobre ${topic}` : "";
  return `Olá! Encontrei o site do escritório ${site.brand} e gostaria de entrar em contato com a ${unit.name}${subject}.`;
}

export function whatsappUnitUrl(unitId: UnitId, topic?: string): string {
  const unit = units[unitId];
  const text = encodeURIComponent(buildWhatsAppMessage(unitId, topic));
  return `https://wa.me/${unit.phoneE164}?text=${text}`;
}

/** Canal exclusivo do atendimento inicial com IA (campanha). */
export function whatsappAiUrl(topic?: string): string {
  const subject = topic ? ` sobre ${topic}` : "";
  const text = encodeURIComponent(
    `Olá! Vim pelo site do escritório ${site.brand} e gostaria de receber informações iniciais${subject}.`,
  );
  return `https://wa.me/${aiAttendance.phoneE164}?text=${text}`;
}

export function telUrl(e164: string): string {
  return `tel:+${e164}`;
}
