import type { AreaSlug } from "./types";

export interface AreaTopic {
  title: string;
  text: string;
  href?: string;
}

export interface AreaContent {
  slug: AreaSlug;
  path: string;
  label: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroTitle: string;
  heroLead: string;
  intro: string[];
  topicsTitle: string;
  topicsLead: string;
  topics: AreaTopic[];
  faq: { q: string; a: string }[];
}

export const areas: Record<AreaSlug, AreaContent> = {
  trabalho: {
    slug: "trabalho",
    path: "/direito-do-trabalho",
    label: "Direito do Trabalho",
    metaTitle: "Direito do Trabalho em São Paulo e Votuporanga",
    metaDescription:
      "Informações sobre vínculo empregatício, rescisão contratual, verbas rescisórias, jornada, horas extras e FGTS. Atendimento nas unidades de São Paulo e Votuporanga.",
    keywords: [
      "advogado trabalhista São Paulo",
      "advogado trabalhista Votuporanga",
      "direito do trabalho",
      "vínculo empregatício",
      "verbas rescisórias",
      "horas extras",
      "FGTS",
    ],
    heroTitle: "Direito do Trabalho",
    heroLead:
      "Orientação jurídica sobre as relações entre empregadores e trabalhadores, com atenção às particularidades de cada contrato e de cada rotina de trabalho.",
    intro: [
      "O Direito do Trabalho regula as relações de emprego e estabelece direitos e deveres para trabalhadores e empregadores. As principais normas estão na Constituição Federal (art. 7º), na Consolidação das Leis do Trabalho (CLT) e em leis específicas, além de acordos e convenções coletivas de cada categoria.",
      "Questões trabalhistas costumam envolver documentos, registros de jornada, holerites, mensagens e a rotina concreta de trabalho. A análise individual de cada situação é indispensável para uma orientação responsável.",
    ],
    topicsTitle: "Temas em Direito do Trabalho",
    topicsLead: "Assuntos frequentes nas relações de trabalho, apresentados de forma informativa.",
    topics: [
      {
        title: "Reconhecimento de vínculo empregatício",
        text: "Situações em que a prestação de serviços apresenta, na prática, os requisitos de uma relação de emprego previstos na CLT.",
        href: "/direito-do-trabalho/reconhecimento-de-vinculo-empregaticio",
      },
      {
        title: "Direitos trabalhistas",
        text: "Registro em carteira, salário, férias acrescidas de um terço, 13º salário, descanso semanal e demais garantias previstas em lei e em normas coletivas.",
      },
      {
        title: "Rescisão contratual",
        text: "Dispensa com ou sem justa causa, pedido de demissão, rescisão indireta, acordo entre as partes e término de contratos por prazo determinado.",
      },
      {
        title: "Verbas rescisórias",
        text: "Saldo de salário, aviso prévio, férias, 13º proporcional, FGTS e indenização de 40%, conforme a modalidade de encerramento do contrato.",
        href: "/conteudos/verbas-rescisorias-o-que-pode-ser-devido",
      },
      {
        title: "Jornada de trabalho",
        text: "Limites de duração do trabalho, intervalos, escalas, controle de ponto, compensação e banco de horas.",
        href: "/conteudos/jornada-de-trabalho-e-horas-extras",
      },
      {
        title: "Horas extras",
        text: "Trabalho além da jornada contratada, adicional mínimo de 50% e reflexos em outras parcelas quando as horas extras são habituais.",
      },
      {
        title: "FGTS",
        text: "Depósitos mensais de 8% da remuneração, conferência do extrato, hipóteses de saque e indenização rescisória.",
      },
      {
        title: "Relações entre empregadores e trabalhadores",
        text: "Orientação preventiva para empresas e empregadores sobre contratações, rotinas, documentação e cumprimento da legislação trabalhista.",
      },
    ],
    faq: [
      {
        q: "Trabalhei sem carteira assinada. Tenho direito ao registro?",
        a: "Depende de como o trabalho era realizado. Se estiverem presentes os requisitos da relação de emprego (pessoa física, pessoalidade, habitualidade, onerosidade e subordinação), pode ser discutido o reconhecimento do vínculo. Somente a análise da situação concreta permite uma avaliação responsável.",
      },
      {
        q: "Existe prazo para buscar meus direitos trabalhistas?",
        a: "Sim. Em regra, a Constituição prevê prazo de até dois anos após o término do contrato para propor a ação, alcançando créditos dos cinco anos anteriores ao ajuizamento. A contagem pode ter particularidades, por isso é recomendável buscar orientação o quanto antes.",
      },
      {
        q: "Quais documentos são úteis em uma consulta trabalhista?",
        a: "Carteira de trabalho, contrato, holerites, termo de rescisão, extrato do FGTS, registros de ponto, escalas e mensagens relacionadas ao trabalho costumam ser úteis. Não é necessário enviá-los no primeiro contato.",
      },
      {
        q: "O escritório também orienta empregadores?",
        a: "Sim. A área de Direito do Trabalho abrange a orientação a trabalhadores e a empregadores, incluindo a atuação preventiva nas relações de trabalho.",
      },
    ],
  },

  civil: {
    slug: "civil",
    path: "/direito-civil",
    label: "Direito Civil",
    metaTitle: "Direito Civil em São Paulo e Votuporanga",
    metaDescription:
      "Informações sobre contratos, obrigações, responsabilidade civil, cobranças e questões patrimoniais. Atendimento nas unidades de São Paulo e Votuporanga.",
    keywords: ["advogado direito civil", "contratos", "responsabilidade civil", "cobrança", "advogado São Paulo", "advogado Votuporanga"],
    heroTitle: "Direito Civil",
    heroLead:
      "Orientação jurídica nas relações entre pessoas e no patrimônio do dia a dia: contratos, obrigações, reparação de danos e questões de propriedade.",
    intro: [
      "O Direito Civil é o ramo que disciplina as relações jurídicas entre particulares. Suas principais regras estão no Código Civil (Lei nº 10.406/2002), complementado por leis específicas, como a Lei do Inquilinato e o Código de Defesa do Consumidor.",
      "Por abranger situações muito diversas, desde um contrato de compra e venda até a reparação de um dano, as questões civis exigem a análise cuidadosa dos documentos e dos fatos de cada caso.",
    ],
    topicsTitle: "Temas frequentes no Direito Civil",
    topicsLead: "Alguns assuntos abrangidos pelo Direito Civil, apresentados de forma informativa.",
    topics: [
      {
        title: "Contratos e obrigações",
        text: "Elaboração, revisão e interpretação de contratos entre particulares, como compra e venda, prestação de serviços e locação.",
      },
      {
        title: "Responsabilidade civil",
        text: "Situações em que se discute o dever de reparar danos materiais ou morais causados a outra pessoa.",
        href: "/conteudos/responsabilidade-civil-dever-de-indenizar",
      },
      {
        title: "Cobranças e inadimplemento",
        text: "Descumprimento de obrigações, cobrança de valores e negociação entre credores e devedores.",
      },
      {
        title: "Questões imobiliárias e locação",
        text: "Contratos de locação, compra e venda de imóveis, posse, propriedade e relações de vizinhança.",
      },
      {
        title: "Relações de consumo",
        text: "Direitos e deveres de consumidores e fornecedores na aquisição de produtos e serviços.",
      },
    ],
    faq: [
      {
        q: "Um acordo verbal tem validade?",
        a: "Em muitos casos, sim: a lei admite contratos verbais, salvo quando exige forma específica. A dificuldade costuma estar na prova do que foi combinado, por isso contratos escritos tendem a trazer mais segurança.",
      },
      {
        q: "Existe prazo para cobrar uma dívida ou pedir reparação de um dano?",
        a: "Sim. O Código Civil prevê prazos prescricionais que variam conforme o tipo de pretensão. A identificação do prazo aplicável depende da análise do caso.",
      },
      {
        q: "Quais documentos devo reunir?",
        a: "Contratos, comprovantes de pagamento, notas fiscais, mensagens, fotografias e quaisquer registros relacionados aos fatos costumam ser úteis. Não é necessário enviá-los no primeiro contato.",
      },
    ],
  },

  familia: {
    slug: "familia",
    path: "/direito-de-familia",
    label: "Direito de Família",
    metaTitle: "Direito de Família e Sucessões em São Paulo e Votuporanga",
    metaDescription:
      "Informações sobre divórcio, guarda, pensão alimentícia, regulamentação de convivência, inventário e sucessões. Atendimento em São Paulo e Votuporanga.",
    keywords: [
      "advogado de família",
      "divórcio",
      "guarda compartilhada",
      "pensão alimentícia",
      "inventário",
      "advogado família São Paulo",
      "advogado família Votuporanga",
    ],
    heroTitle: "Direito de Família",
    heroLead:
      "Orientação jurídica com discrição e sensibilidade em momentos importantes da vida familiar, sempre com atenção ao interesse de todos os envolvidos.",
    intro: [
      "O Direito de Família trata das relações familiares, como casamento, união estável, filiação, guarda e alimentos. O Direito das Sucessões, por sua vez, disciplina a transmissão do patrimônio após o falecimento de uma pessoa.",
      "Essas questões envolvem aspectos pessoais e emocionais delicados. A orientação jurídica busca esclarecer caminhos, prazos e efeitos de cada decisão, priorizando, sempre que possível, soluções consensuais.",
    ],
    topicsTitle: "Temas em Direito de Família",
    topicsLead: "Assuntos frequentes nas relações familiares e sucessórias, apresentados de forma informativa.",
    topics: [
      {
        title: "Divórcio",
        text: "Divórcio consensual ou litigioso, judicial ou em cartório, com definição de partilha de bens e demais questões relacionadas.",
        href: "/conteudos/divorcio-modalidades-e-caminhos",
      },
      {
        title: "Guarda",
        text: "Guarda compartilhada, que é a regra prevista no Código Civil, ou unilateral, sempre orientada pelo melhor interesse da criança e do adolescente.",
      },
      {
        title: "Pensão alimentícia",
        text: "Fixação, revisão e exoneração de alimentos, considerando as necessidades de quem recebe e as possibilidades de quem paga.",
      },
      {
        title: "Regulamentação de convivência",
        text: "Definição de períodos de convivência com o genitor que não reside com os filhos, incluindo datas comemorativas e férias.",
      },
      {
        title: "Inventário e sucessões",
        text: "Inventário judicial ou extrajudicial, partilha de bens, testamentos e orientação sobre a ordem de sucessão prevista em lei.",
      },
    ],
    faq: [
      {
        q: "É possível fazer o divórcio em cartório?",
        a: "Em determinadas hipóteses, sim: quando há consenso e são atendidos os requisitos legais e as normas do Conselho Nacional de Justiça. A presença de advogado é obrigatória. A viabilidade depende da análise da situação da família.",
      },
      {
        q: "Qual é o prazo para abrir um inventário?",
        a: "O Código de Processo Civil (art. 611) prevê a abertura do inventário em até dois meses a contar do falecimento. O atraso pode gerar acréscimos no imposto estadual sobre a transmissão (ITCMD), conforme a legislação de cada estado.",
      },
      {
        q: "Como é definido o valor da pensão alimentícia?",
        a: "O Código Civil (art. 1.694, § 1º) orienta que os alimentos sejam fixados na proporção das necessidades de quem os recebe e dos recursos de quem os paga. Não existe um percentual fixo aplicável a todos os casos.",
      },
    ],
  },

  empresarial: {
    slug: "empresarial",
    path: "/direito-empresarial",
    label: "Direito Empresarial",
    metaTitle: "Direito Empresarial em São Paulo e Votuporanga",
    metaDescription:
      "Informações sobre relações empresariais, contratos, questões societárias e consultoria jurídica empresarial. Atendimento em São Paulo e Votuporanga.",
    keywords: ["advogado empresarial", "contratos empresariais", "direito societário", "consultoria jurídica empresarial"],
    heroTitle: "Direito Empresarial",
    heroLead:
      "Orientação jurídica para empresas e empreendedores, com foco na prevenção de riscos e na segurança das relações comerciais e societárias.",
    intro: [
      "O Direito Empresarial disciplina a atividade econômica organizada e as relações entre empresários, sociedades, sócios, parceiros e fornecedores. Suas normas estão principalmente no Código Civil e em leis específicas.",
      "A atuação preventiva, com contratos bem estruturados e decisões societárias documentadas, contribui para a segurança jurídica do negócio e para a redução de conflitos.",
    ],
    topicsTitle: "Temas em Direito Empresarial",
    topicsLead: "Assuntos frequentes na rotina jurídica de empresas, apresentados de forma informativa.",
    topics: [
      {
        title: "Relações empresariais",
        text: "Orientação nas relações com fornecedores, clientes, parceiros comerciais e prestadores de serviço.",
      },
      {
        title: "Contratos",
        text: "Elaboração, revisão e negociação de contratos de prestação de serviços, fornecimento, parceria, confidencialidade e outros.",
        href: "/conteudos/contratos-empresariais-pontos-de-atencao",
      },
      {
        title: "Questões societárias",
        text: "Contrato social, alterações societárias, entrada e saída de sócios, acordos entre sócios e reorganizações.",
      },
      {
        title: "Consultoria jurídica empresarial",
        text: "Acompanhamento preventivo das decisões da empresa, com análise de riscos e orientação sobre o cumprimento das normas aplicáveis.",
      },
    ],
    faq: [
      {
        q: "Por que revisar um contrato antes de assiná-lo?",
        a: "Nas relações empresariais, o que está escrito no contrato tem grande peso, e a revisão judicial costuma ser excepcional. A revisão prévia permite identificar riscos e negociar ajustes antes da assinatura.",
      },
      {
        q: "O que é um acordo de sócios?",
        a: "É um instrumento que complementa o contrato social e pode disciplinar temas como tomada de decisões, entrada e saída de sócios, distribuição de resultados e solução de impasses.",
      },
      {
        q: "A empresa também pode receber orientação trabalhista?",
        a: "Sim. As relações com empregados são tratadas na área de Direito do Trabalho, inclusive de forma preventiva.",
      },
    ],
  },
};
