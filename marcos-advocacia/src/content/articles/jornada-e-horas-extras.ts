import type { Article } from "../types";

const article: Article = {
  slug: "jornada-de-trabalho-e-horas-extras",
  title: "Jornada de trabalho e horas extras: noções essenciais",
  excerpt:
    "Limites de jornada, adicional de horas extras, intervalos e banco de horas: um panorama das regras gerais previstas na Constituição e na CLT.",
  category: "trabalho",
  date: "2026-11-26",
  cover: {
    src: "/images/conteudos/jornada-de-trabalho-e-horas-extras.svg",
    alt: "Ilustração abstrata em azul-marinho e dourado com formas circulares que remetem a um relógio",
  },
  keywords: ["horas extras", "jornada de trabalho", "banco de horas", "intervalo intrajornada", "adicional de horas extras"],
  blocks: [
    {
      type: "p",
      text: "A duração do trabalho é um dos temas mais frequentes nas relações de emprego. A Constituição Federal e a CLT estabelecem regras gerais, que podem ser complementadas por acordos e convenções coletivas e por regras específicas de determinadas profissões.",
    },
    { type: "h2", text: "Limites gerais da jornada" },
    {
      type: "p",
      text: "Como regra geral, a Constituição Federal (art. 7º, XIII) prevê duração do trabalho não superior a **oito horas diárias e 44 horas semanais**, admitida a compensação de horários e a redução da jornada mediante acordo ou convenção coletiva.",
    },
    { type: "h2", text: "Horas extras e adicional" },
    {
      type: "p",
      text: "O trabalho além da jornada contratada pode caracterizar horas extras. A Constituição (art. 7º, XVI) assegura remuneração do serviço extraordinário com adicional de, no mínimo, **50%** sobre o valor da hora normal. Normas coletivas podem prever percentuais maiores.",
    },
    {
      type: "p",
      text: "A CLT (art. 59) admite, como regra, o acréscimo de até duas horas extras diárias. Quando habituais, as horas extras podem repercutir em outras parcelas, como férias, 13º salário, descanso semanal remunerado e FGTS.",
    },
    { type: "h2", text: "Intervalos" },
    {
      type: "ul",
      items: [
        "**Intervalo intrajornada:** para jornadas acima de seis horas, intervalo mínimo de uma hora para repouso e alimentação (art. 71 da CLT), salvo hipóteses previstas em lei ou em norma coletiva.",
        "**Intervalo interjornada:** mínimo de onze horas consecutivas entre duas jornadas (art. 66 da CLT).",
        "**Descanso semanal remunerado:** preferencialmente aos domingos.",
      ],
    },
    { type: "h2", text: "Banco de horas e compensação" },
    {
      type: "p",
      text: "A compensação de jornada e o banco de horas são permitidos, desde que observados os requisitos legais, que variam conforme a forma de ajuste (acordo individual, acordo coletivo ou convenção coletiva) e o período de compensação (art. 59, §§ 2º, 5º e 6º, da CLT).",
    },
    { type: "h2", text: "Controle de jornada" },
    {
      type: "p",
      text: "Estabelecimentos com mais de vinte trabalhadores devem manter registro de horário de entrada e saída (art. 74, § 2º, da CLT). Registros de ponto, escalas, mensagens e outros documentos costumam ser relevantes quando há divergência sobre a jornada efetivamente cumprida.",
    },
    {
      type: "callout",
      title: "Regras especiais",
      text: "Algumas atividades e categorias possuem regras próprias de jornada, e certos cargos podem estar sujeitos a regimes diferenciados (por exemplo, art. 62 da CLT). A situação concreta deve ser analisada individualmente.",
    },
    {
      type: "p",
      text: "Para dúvidas sobre jornada, horas extras ou compensação, conheça a área de [Direito do Trabalho](/direito-do-trabalho) ou [entre em contato](/contato).",
    },
  ],
};

export default article;
