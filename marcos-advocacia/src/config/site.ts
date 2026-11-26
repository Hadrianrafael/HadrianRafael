/**
 * Fonte única das informações institucionais do escritório.
 *
 * IMPORTANTE: todas as informações abaixo foram fornecidas oficialmente.
 * Não acrescente dados (biografia, resultados, clientes, depoimentos,
 * especializações, CNPJ, horários, coordenadas) sem confirmação do advogado.
 */

export type UnitId = "sao-paulo" | "votuporanga";

export interface Unit {
  id: UnitId;
  name: string;
  city: string;
  state: "SP";
  street: string;
  number: string;
  district: string;
  /** Endereço completo em uma linha. */
  fullAddress: string;
  phoneDisplay: string;
  /** Número no formato internacional (E.164 sem "+"), usado no WhatsApp e em tel:. */
  phoneE164: string;
  mapsUrl: string;
  mapsEmbedUrl: string;
}

function mapsQuery(address: string) {
  return encodeURIComponent(address);
}

const spAddress = "Rua Pedro Severino Junior, 74, Vila Guarani, São Paulo - SP";
const votuAddress = "Rua Ivaí, 2527, Jardim Eldorado, Votuporanga - SP";

export const units: Record<UnitId, Unit> = {
  "sao-paulo": {
    id: "sao-paulo",
    name: "Unidade São Paulo",
    city: "São Paulo",
    state: "SP",
    street: "Rua Pedro Severino Junior",
    number: "74",
    district: "Vila Guarani",
    fullAddress: spAddress,
    phoneDisplay: "(11) 98087-8572",
    phoneE164: "5511980878572",
    mapsUrl: `https://www.google.com/maps/search/?api=1&query=${mapsQuery(spAddress)}`,
    mapsEmbedUrl: `https://www.google.com/maps?q=${mapsQuery(spAddress)}&output=embed`,
  },
  votuporanga: {
    id: "votuporanga",
    name: "Unidade Votuporanga",
    city: "Votuporanga",
    state: "SP",
    street: "Rua Ivaí",
    number: "2527",
    district: "Jardim Eldorado",
    fullAddress: votuAddress,
    phoneDisplay: "(17) 99170-8236",
    phoneE164: "5517991708236",
    mapsUrl: `https://www.google.com/maps/search/?api=1&query=${mapsQuery(votuAddress)}`,
    mapsEmbedUrl: `https://www.google.com/maps?q=${mapsQuery(votuAddress)}&output=embed`,
  },
};

export const unitList: Unit[] = [units["sao-paulo"], units.votuporanga];

/**
 * Canal reservado ao atendimento inicial com IA / campanha.
 * NÃO substitui o contato pessoal do advogado e NÃO deve ser misturado
 * aos números das unidades. Só é exibido quando
 * NEXT_PUBLIC_AI_ATTENDANCE_ENABLED="true" (ver README).
 */
export const aiAttendance = {
  enabled: process.env.NEXT_PUBLIC_AI_ATTENDANCE_ENABLED === "true",
  phoneDisplay: "(11) 97871-0130",
  phoneE164: "5511978710130",
};

const facebookEnvUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL?.trim();

export const site = {
  brand: "MDSilva Advocacia",
  brandShort: "MDSilva",
  lawyer: {
    name: "Marcos Danilo da Silva",
    oab: "OAB/SP 309.058",
    oabNumber: "309.058",
    oabState: "SP",
    education: "Bacharel em Direito",
    graduationYear: 2005,
  },
  email: "mdireitosilva@yahoo.com.br",
  instagram: {
    handle: "@marcosdsilva.adv",
    url: "https://www.instagram.com/marcosdsilva.adv/",
  },
  facebook: {
    name: "MDSilva - Advocacia",
    /**
     * O endereço exato da página não foi informado. Enquanto
     * NEXT_PUBLIC_FACEBOOK_URL não for definido, o link leva à busca
     * pelo nome oficial da página.
     */
    url: facebookEnvUrl || "https://www.facebook.com/search/top?q=MDSilva%20-%20Advocacia",
    isExactUrl: Boolean(facebookEnvUrl),
  },
  tagline:
    "Advocacia com responsabilidade, conhecimento jurídico e compromisso com a orientação de cada cliente.",
  description:
    "Escritório de advocacia de Marcos Danilo da Silva (OAB/SP 309.058), com unidades em São Paulo e Votuporanga. Atuação em Direito do Trabalho, Direito Civil, Direito de Família e Direito Empresarial.",
  locale: "pt_BR",
} as const;

export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/+$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

export const navigation = {
  areas: [
    {
      href: "/direito-do-trabalho",
      label: "Direito do Trabalho",
      description: "Relações de emprego, rescisão, jornada e FGTS",
    },
    {
      href: "/direito-civil",
      label: "Direito Civil",
      description: "Contratos, obrigações e responsabilidade civil",
    },
    {
      href: "/direito-de-familia",
      label: "Direito de Família",
      description: "Divórcio, guarda, alimentos e sucessões",
    },
    {
      href: "/direito-empresarial",
      label: "Direito Empresarial",
      description: "Contratos, questões societárias e consultoria",
    },
  ],
  main: [
    { href: "/sobre", label: "O escritório" },
    { href: "/conteudos", label: "Conteúdos jurídicos" },
    { href: "/contato", label: "Contato" },
  ],
  legal: [
    { href: "/politica-de-privacidade", label: "Política de Privacidade" },
    { href: "/termos-de-uso", label: "Termos de Uso" },
  ],
} as const;
