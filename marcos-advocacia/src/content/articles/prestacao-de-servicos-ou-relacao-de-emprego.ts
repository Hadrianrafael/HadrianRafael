import type { Article } from "../types";

const article: Article = {
  slug: "prestacao-de-servicos-ou-relacao-de-emprego",
  title: "Prestação de serviços ou relação de emprego? Entenda a diferença",
  excerpt:
    "Contratos de prestação de serviços, trabalho como pessoa jurídica ou como autônomo nem sempre afastam a relação de emprego. Veja quais elementos a legislação considera.",
  category: "trabalho",
  date: "2026-11-26",
  cover: {
    src: "/images/conteudos/prestacao-de-servicos-ou-relacao-de-emprego.svg",
    alt: "Ilustração abstrata em azul-marinho e dourado representando a análise de uma relação de trabalho",
  },
  seoTitle: "Prestação de serviços ou relação de emprego: qual a diferença?",
  keywords: ["vínculo empregatício", "prestação de serviços", "pejotização", "CLT artigo 3º", "relação de emprego"],
  blocks: [
    {
      type: "p",
      text: "Muitas pessoas trabalham sob contratos chamados de prestação de serviços, como microempreendedores individuais (MEI), por meio de empresa própria ou como autônomas. Essas formas de contratação são lícitas e comuns. Em algumas situações, porém, o modo como o trabalho é realizado no dia a dia pode apresentar as características de uma **relação de emprego**, independentemente do nome dado ao contrato.",
    },
    { type: "h2", text: "O que a lei considera relação de emprego" },
    {
      type: "p",
      text: "A Consolidação das Leis do Trabalho (CLT) define empregador e empregado nos artigos 2º e 3º. Segundo o artigo 3º, empregado é a pessoa física que presta serviços de natureza não eventual a empregador, sob a dependência deste e mediante salário.",
    },
    {
      type: "quote",
      text: "Considera-se empregado toda pessoa física que prestar serviços de natureza não eventual a empregador, sob a dependência deste e mediante salário.",
      cite: "CLT, art. 3º",
    },
    {
      type: "p",
      text: "Da leitura da lei e da interpretação consolidada pela Justiça do Trabalho, costumam ser analisados os seguintes elementos:",
    },
    {
      type: "ul",
      items: [
        "**Pessoa física:** o trabalho é prestado por uma pessoa, e não por uma empresa em sentido real.",
        "**Pessoalidade:** a atividade deve ser realizada pela própria pessoa contratada, que não pode se fazer substituir livremente.",
        "**Não eventualidade (habitualidade):** o trabalho se insere de forma contínua na rotina da atividade do contratante.",
        "**Onerosidade:** há pagamento pela atividade prestada.",
        "**Subordinação:** o contratante dirige a forma de execução do trabalho, com ordens, controle de horários, metas, fiscalização ou aplicação de penalidades.",
      ],
    },
    { type: "h2", text: "O contrato escrito decide a questão?" },
    {
      type: "p",
      text: "Não necessariamente. No Direito do Trabalho vigora o chamado **princípio da primazia da realidade**: a análise leva em conta como a relação acontece na prática, e não apenas o que consta no papel. O artigo 9º da CLT também estabelece que são nulos os atos praticados com o objetivo de desvirtuar, impedir ou fraudar a aplicação das normas trabalhistas.",
    },
    {
      type: "p",
      text: "Por outro lado, a existência de um contrato de prestação de serviços também não significa, por si só, que houve fraude. Há relações legítimas de autonomia, de terceirização e de contratação entre empresas, e o tema é objeto de constante discussão nos tribunais, inclusive no Supremo Tribunal Federal. Por isso, cada situação precisa ser examinada individualmente.",
    },
    { type: "h2", text: "Exemplos de sinais que costumam ser avaliados" },
    {
      type: "ul",
      items: [
        "Cumprimento de horário fixo definido pelo contratante.",
        "Recebimento de ordens diretas e supervisão constante.",
        "Impossibilidade de recusar tarefas ou de enviar outra pessoa em seu lugar.",
        "Pagamento fixo e periódico, semelhante a um salário.",
        "Exclusividade imposta ou integração à estrutura da empresa (uso de crachá, e-mail corporativo, uniforme).",
      ],
    },
    {
      type: "p",
      text: "Esses sinais não funcionam como uma lista de verificação automática. A presença de um ou outro elemento não define o resultado; o que importa é o conjunto das circunstâncias concretas.",
    },
    {
      type: "callout",
      title: "Atenção aos prazos",
      text: "A Constituição Federal (art. 7º, XXIX) prevê prazos para reclamar direitos decorrentes da relação de trabalho. Em regra, a ação deve ser proposta em até dois anos após o término do contrato, podendo alcançar créditos dos cinco anos anteriores ao ajuizamento. A contagem pode variar conforme o caso, o que reforça a importância de buscar orientação.",
    },
    { type: "h2", text: "Como buscar orientação" },
    {
      type: "p",
      text: "Se você tem dúvidas sobre a natureza da sua relação de trabalho, ou se é contratante e deseja estruturar contratações de forma adequada, a orientação jurídica permite avaliar documentos, rotina e particularidades da situação. Saiba mais na página sobre [reconhecimento de vínculo empregatício](/direito-do-trabalho/reconhecimento-de-vinculo-empregaticio) ou [entre em contato com o escritório](/contato).",
    },
  ],
};

export default article;
