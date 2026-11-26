import type { Article } from "../types";

const article: Article = {
  slug: "verbas-rescisorias-o-que-pode-ser-devido",
  title: "Verbas rescisórias: o que pode ser devido no fim do contrato de trabalho",
  excerpt:
    "As verbas devidas na rescisão variam conforme a forma de encerramento do contrato. Conheça as principais parcelas previstas na legislação e o prazo de pagamento.",
  category: "trabalho",
  date: "2026-11-26",
  cover: {
    src: "/images/conteudos/verbas-rescisorias-o-que-pode-ser-devido.svg",
    alt: "Ilustração abstrata em azul-marinho e dourado com linhas que remetem a um documento de rescisão",
  },
  seoTitle: "Verbas rescisórias: quais parcelas podem ser devidas",
  keywords: ["verbas rescisórias", "rescisão contratual", "aviso prévio", "multa do FGTS", "art. 477 CLT"],
  blocks: [
    {
      type: "p",
      text: "Quando um contrato de trabalho termina, a legislação prevê o pagamento de determinadas parcelas, conhecidas como **verbas rescisórias**. Quais valores são devidos depende principalmente da forma como o contrato foi encerrado e das particularidades de cada relação de trabalho.",
    },
    { type: "h2", text: "Formas mais comuns de encerramento" },
    {
      type: "ul",
      items: [
        "**Dispensa sem justa causa:** iniciativa do empregador, sem falta grave atribuída ao empregado.",
        "**Pedido de demissão:** iniciativa do empregado.",
        "**Dispensa por justa causa:** quando o empregador aponta uma das faltas graves previstas no art. 482 da CLT.",
        "**Rescisão indireta:** quando o empregado aponta falta grave do empregador (art. 483 da CLT).",
        "**Acordo entre as partes:** modalidade prevista no art. 484-A da CLT.",
        "**Término de contrato por prazo determinado**, como o contrato de experiência.",
      ],
    },
    { type: "h2", text: "Parcelas que podem estar envolvidas" },
    {
      type: "p",
      text: "Sem considerar as particularidades de cada caso, as parcelas usualmente analisadas em uma rescisão incluem:",
    },
    {
      type: "ul",
      items: [
        "**Saldo de salário** pelos dias trabalhados no mês da rescisão.",
        "**Aviso prévio**, trabalhado ou indenizado, de no mínimo 30 dias, acrescido de 3 dias por ano de serviço, até o limite de 90 dias (Lei nº 12.506/2011).",
        "**Férias vencidas e proporcionais**, acrescidas de um terço.",
        "**13º salário proporcional.**",
        "**Depósitos do FGTS** do período e, na dispensa sem justa causa, a **indenização de 40%** sobre os depósitos (Lei nº 8.036/1990, art. 18).",
        "Documentos para movimentação do FGTS e, quando cabível, para o requerimento do seguro-desemprego.",
      ],
    },
    {
      type: "p",
      text: "No pedido de demissão e na dispensa por justa causa, parte dessas parcelas não é devida. No acordo do art. 484-A, algumas verbas são pagas pela metade, e há regras específicas para a movimentação do FGTS e para o seguro-desemprego.",
    },
    { type: "h2", text: "Prazo para pagamento" },
    {
      type: "p",
      text: "Segundo o art. 477, § 6º, da CLT, a entrega dos documentos e o pagamento das verbas rescisórias devem ocorrer em até **dez dias** contados do término do contrato. O descumprimento do prazo pode gerar a multa prevista no § 8º do mesmo artigo.",
    },
    {
      type: "callout",
      title: "Cada rescisão tem suas particularidades",
      text: "Horas extras habituais, adicionais, comissões, estabilidades provisórias e normas de convenções coletivas podem alterar os valores devidos. A conferência do termo de rescisão deve considerar o histórico completo do contrato.",
    },
    { type: "h2", text: "Quando buscar orientação" },
    {
      type: "p",
      text: "Se houver dúvidas sobre os valores pagos, sobre a modalidade de rescisão ou sobre o prazo de pagamento, a análise do termo de rescisão, dos holerites e do extrato do FGTS permite uma orientação adequada. Conheça a área de [Direito do Trabalho](/direito-do-trabalho) ou [fale com o escritório](/contato).",
    },
  ],
};

export default article;
