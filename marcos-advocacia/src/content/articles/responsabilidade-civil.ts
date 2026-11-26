import type { Article } from "../types";

const article: Article = {
  slug: "responsabilidade-civil-dever-de-indenizar",
  title: "Responsabilidade civil: quando surge o dever de reparar um dano",
  excerpt:
    "Conduta, dano e nexo de causalidade: entenda os elementos gerais da responsabilidade civil previstos no Código Civil e por que cada caso exige análise própria.",
  category: "civil",
  date: "2026-11-26",
  cover: {
    src: "/images/conteudos/responsabilidade-civil-dever-de-indenizar.svg",
    alt: "Ilustração abstrata em azul-marinho e dourado com uma balança estilizada",
  },
  keywords: ["responsabilidade civil", "danos materiais", "danos morais", "art. 927 Código Civil", "Direito Civil"],
  blocks: [
    {
      type: "p",
      text: "A responsabilidade civil trata da obrigação de reparar danos causados a outra pessoa. Está presente em situações variadas do cotidiano, como acidentes, descumprimentos contratuais, problemas em imóveis e relações de consumo.",
    },
    { type: "h2", text: "A regra geral do Código Civil" },
    {
      type: "p",
      text: "O Código Civil estabelece que comete ato ilícito quem, por ação ou omissão voluntária, negligência ou imprudência, viola direito e causa dano a outrem, ainda que exclusivamente moral (art. 186). E quem, por ato ilícito, causar dano a outrem fica obrigado a repará-lo (art. 927).",
    },
    { type: "h2", text: "Elementos geralmente analisados" },
    {
      type: "ul",
      items: [
        "**Conduta:** a ação ou omissão atribuída a alguém.",
        "**Dano:** o prejuízo efetivamente sofrido, que pode ser material (danos emergentes e lucros cessantes) ou extrapatrimonial (como o dano moral).",
        "**Nexo de causalidade:** a ligação entre a conduta e o dano.",
        "**Culpa**, nos casos de responsabilidade subjetiva. Em hipóteses previstas em lei, ou em atividades que impliquem risco, a responsabilidade pode ser objetiva, ou seja, independente de culpa (art. 927, parágrafo único).",
      ],
    },
    { type: "h2", text: "Responsabilidade contratual e extracontratual" },
    {
      type: "p",
      text: "Quando o dano decorre do descumprimento de um contrato, fala-se em responsabilidade contratual. Quando decorre da violação de um dever geral, sem contrato entre as partes, fala-se em responsabilidade extracontratual. As regras aplicáveis e as provas necessárias podem variar em cada caso.",
    },
    {
      type: "callout",
      title: "Documente os fatos",
      text: "Fotografias, mensagens, notas fiscais, orçamentos, boletins de ocorrência e contratos costumam ser importantes para compreender a situação. Também há prazos prescricionais aplicáveis, que devem ser observados.",
    },
    {
      type: "p",
      text: "Conheça a área de [Direito Civil](/direito-civil) ou [entre em contato](/contato).",
    },
  ],
};

export default article;
