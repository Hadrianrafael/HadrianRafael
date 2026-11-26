import type { Article } from "../types";

const article: Article = {
  slug: "divorcio-modalidades-e-caminhos",
  title: "Divórcio: modalidades e caminhos possíveis",
  excerpt:
    "Divórcio consensual ou litigioso, em cartório ou na Justiça: entenda as diferenças, as questões que costumam ser definidas e por que a orientação jurídica é necessária.",
  category: "familia",
  date: "2026-11-26",
  cover: {
    src: "/images/conteudos/divorcio-modalidades-e-caminhos.svg",
    alt: "Ilustração abstrata em azul-marinho e dourado com dois arcos que se separam",
  },
  keywords: ["divórcio", "divórcio consensual", "divórcio extrajudicial", "partilha de bens", "guarda e alimentos"],
  blocks: [
    {
      type: "p",
      text: "Desde a Emenda Constitucional nº 66/2010, o divórcio pode ser requerido diretamente, sem necessidade de prévia separação ou de prazo mínimo de casamento. O caminho a ser seguido, porém, depende do grau de consenso entre o casal e da existência de filhos e de bens.",
    },
    { type: "h2", text: "Divórcio consensual e litigioso" },
    {
      type: "ul",
      items: [
        "**Consensual:** quando há acordo sobre o divórcio e sobre as questões relacionadas, como partilha de bens, alimentos, guarda e convivência com os filhos.",
        "**Litigioso:** quando não há acordo sobre algum desses pontos, cabendo ao Poder Judiciário decidir as questões controvertidas.",
      ],
    },
    { type: "h2", text: "Divórcio judicial e extrajudicial" },
    {
      type: "p",
      text: "O divórcio consensual pode, em determinadas hipóteses, ser realizado por escritura pública em cartório de notas (art. 733 do Código de Processo Civil), com a participação obrigatória de advogado. As regras sobre essa possibilidade quando há filhos menores ou incapazes foram atualizadas por normas do Conselho Nacional de Justiça, e a viabilidade depende de requisitos específicos.",
    },
    {
      type: "p",
      text: "Quando não há consenso, ou quando os requisitos para a via extrajudicial não estão presentes, o divórcio é processado judicialmente.",
    },
    { type: "h2", text: "Questões que costumam ser definidas" },
    {
      type: "ul",
      items: [
        "**Partilha de bens**, conforme o regime de bens do casamento.",
        "**Guarda dos filhos**, sendo a guarda compartilhada a regra prevista no Código Civil (art. 1.584, § 2º), observadas as particularidades do caso.",
        "**Regulamentação da convivência** com o genitor que não reside com os filhos.",
        "**Pensão alimentícia** para os filhos e, em situações específicas, entre os ex-cônjuges.",
        "**Uso do nome** de casado.",
      ],
    },
    {
      type: "callout",
      title: "O interesse dos filhos em primeiro lugar",
      text: "Nas questões que envolvem filhos, a legislação e os tribunais orientam-se pelo melhor interesse da criança e do adolescente. Acordos bem estruturados tendem a trazer mais previsibilidade para toda a família.",
    },
    { type: "h2", text: "Orientação jurídica" },
    {
      type: "p",
      text: "Cada família tem uma realidade própria. A orientação jurídica ajuda a compreender os caminhos disponíveis, os documentos necessários e os efeitos de cada decisão. Saiba mais na página de [Direito de Família](/direito-de-familia) ou [entre em contato](/contato).",
    },
  ],
};

export default article;
