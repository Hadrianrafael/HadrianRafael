import { siteUrl } from "./profile";
import type { Dictionary } from "./types";

const pt: Dictionary = {
  meta: {
    htmlLang: "pt-BR",
    ogLocale: "pt_BR",
    title: "Hadrian Rafael — Desenvolvimento de Software e Tecnologia",
    description:
      "Hadrian Rafael: desenvolvimento de software com Next.js, React e TypeScript, IA aplicada e experiência em atendimento, operações e vendas.",
    jobTitle: "Desenvolvimento de Software e Soluções Digitais",
  },
  nav: {
    home: "Hadrian Rafael — página inicial",
    about: "Sobre",
    experience: "Experiência",
    skills: "Competências",
    projects: "Projetos",
    education: "Formação",
    goals: "Objetivos",
    contact: "Contato",
    resume: "Currículo",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    language: "Idioma",
    skipToContent: "Pular para o conteúdo",
    primary: "Navegação principal",
  },
  hero: {
    status: "Aberto a novas oportunidades",
    greeting: "Olá, sou Hadrian Rafael.",
    subtitle:
      "Profissional em desenvolvimento de software, tecnologia e soluções digitais, com experiência em operações, atendimento e relacionamento comercial.",
    text:
      "Minha trajetória reúne tecnologia, visão de negócios e interesse constante em inovação. Gosto de transformar problemas em soluções e utilizar a tecnologia para criar experiências e resultados melhores.",
    ctaJourney: "Conheça minha trajetória",
    ctaProjects: "Ver meus projetos",
    ctaResume: "Baixar currículo em PDF",
    ctaContact: "Entrar em contato",
    photoAlt: "Fotografia profissional de Hadrian Rafael",
    photoPlaceholder: "Espaço reservado para fotografia profissional",
    focusLabel: "Foco",
    focus: ["Desenvolvimento de Software", "Full Stack", "IA e Automação", "SDR / BDR", "Inside Sales"],
    facts: [
      { value: "5", label: "empresas na trajetória" },
      { value: "ADS", label: "graduação em andamento" },
      { value: "3", label: "idiomas" },
    ],
    scroll: "Role para explorar",
  },
  about: {
    kicker: "Sobre mim",
    title: "Tecnologia com visão de negócio e foco em pessoas.",
    paragraphs: [
      "Sempre tive interesse por tecnologia e inovação — por entender como as coisas funcionam e como podem funcionar melhor. Esse interesse me levou à graduação em Análise e Desenvolvimento de Sistemas pela Anhanguera e ao desenvolvimento de software, área em que construo sites, sistemas web e soluções digitais.",
      "Minha trajetória profissional passou por atendimento ao cliente, operações e vendas. Nessas experiências aprendi a ouvir, entender necessidades reais, negociar e manter relacionamentos — habilidades que hoje aplico para desenvolver soluções que façam sentido para quem vai usá-las.",
      "Também me dedico à inteligência artificial e à automação de processos, utilizando ferramentas como Claude, ChatGPT e Gemini no meu fluxo de trabalho. Desenvolvo projetos próprios e trabalhos freelance.",
    ],
    pillars: [
      { title: "Profissionalismo", text: "Compromisso com prazos, clareza na comunicação e responsabilidade com cada entrega." },
      { title: "Aprendizado contínuo", text: "Estudo constante de novas tecnologias, ferramentas e formas de trabalhar." },
      { title: "Resolução de problemas", text: "Foco em entender a causa e entregar soluções que gerem resultado." },
    ],
  },
  experience: {
    kicker: "Experiência profissional",
    title: "Uma trajetória construída perto das pessoas e das operações.",
    intro:
      "Experiências em atendimento, suporte, operações e vendas que formaram minha visão sobre clientes, processos e resultados.",
    current: "Atual",
    items: [
      {
        company: "Teleperformance",
        role: "Expert — Atendimento e Suporte",
        period: "Mar 2026 — atual",
        start: "2026-03",
        current: true,
        summary:
          "Atuação em atendimento, operações e suporte ao cliente, com atividades relacionadas a seguros e assistência.",
        highlights: [
          "Atendimento a entregadores parceiros do iFood em situações de acidente e acionamento de seguros.",
          "Orientação sobre procedimentos e documentação necessária.",
          "Apoio operacional e integração de novos colaboradores.",
        ],
      },
      {
        company: "Konecta",
        role: "Consultor de Vendas — Vivo Fibra",
        period: "Nov 2024 — Dez 2025",
        start: "2024-11",
        summary:
          "Atuação comercial no segmento de telecomunicações, com foco em vendas de internet e serviços Vivo Fibra.",
        highlights: [
          "Abordagem de clientes e identificação de necessidades.",
          "Apresentação de soluções, negociação e fechamento de vendas.",
        ],
      },
      {
        company: "Núbia Festas",
        role: "Atendimento Comercial e Suporte",
        period: "Fev 2024 — Set 2024",
        start: "2024-02",
        summary: "Experiência em operações e atendimento, com apoio ao processo comercial.",
        highlights: [
          "Atendimento a alunas e interessadas em produtos e cursos.",
          "Negociação, apoio à compra e emissão de boletos.",
        ],
      },
      {
        company: "Polimix",
        role: "Auxiliar Administrativo",
        period: "Mai 2023 — Fev 2024",
        start: "2023-05",
        summary: "Experiência profissional em ambiente operacional, com apoio às rotinas administrativas.",
        highlights: [
          "Organização de documentos e suporte às rotinas operacionais.",
          "Acompanhamento de demandas internas.",
        ],
      },
      {
        company: "Caixa Econômica Federal",
        role: "Atendimento Bancário — PJ e PF",
        period: "Fev 2022 — Dez 2022",
        start: "2022-02",
        summary: "Atendimento a clientes pessoa física e empresas, com foco em relacionamento e identificação de necessidades.",
        highlights: [
          "Abertura de contas empresariais e orientação sobre cartões, empréstimos e serviços financeiros.",
          "Relacionamento com empresários e clientes pessoa física.",
        ],
      },
    ],
  },
  skills: {
    kicker: "Tecnologia e competências",
    title: "Ferramentas e conhecimentos com os quais trabalho.",
    intro:
      "Uma combinação de base técnica em desenvolvimento, uso prático de inteligência artificial e competências construídas no contato direto com clientes.",
    note: "Conhecimentos e ferramentas utilizados em estudos, projetos próprios e trabalhos freelance.",
    groups: [
      {
        id: "dev",
        title: "Desenvolvimento",
        description: "Construção de interfaces, sistemas web e integrações.",
        items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Desenvolvimento Full Stack", "APIs", "Bancos de dados", "Git e GitHub"],
      },
      {
        id: "ai",
        title: "Inteligência Artificial",
        description: "IA aplicada ao desenvolvimento, à produtividade e à automação.",
        items: ["ChatGPT", "Claude", "Gemini", "Claude Code", "Codex", "Automação de processos", "Desenvolvimento de agentes de IA", "Engenharia de prompts"],
      },
      {
        id: "design",
        title: "Design e experiência",
        description: "Interfaces claras, acessíveis e responsivas.",
        items: ["UI/UX", "Design de interfaces", "Sites responsivos"],
      },
      {
        id: "professional",
        title: "Competências profissionais",
        description: "Habilidades desenvolvidas em atendimento, operações e vendas.",
        items: ["Atendimento ao cliente", "Comunicação", "Negociação", "Vendas", "Relacionamento comercial", "Resolução de problemas", "Organização", "Aprendizado contínuo"],
      },
    ],
  },
  projects: {
    kicker: "Projetos",
    title: "Trabalhos reais, com status transparente.",
    intro:
      "Projetos desenvolvidos por mim. Cada card indica claramente se o projeto está concluído ou em desenvolvimento.",
    goalLabel: "Objetivo",
    stackLabel: "Tecnologias",
    demo: "Ver demonstração",
    code: "Ver código",
    status: { completed: "Concluído", "in-progress": "Em desenvolvimento", concept: "Conceito" },
    items: [
      {
        slug: "mdsilva-advocacia",
        name: "MDSilva Advocacia",
        category: "Site institucional",
        status: "completed",
        description:
          "Site institucional para um escritório de advocacia com duas unidades: páginas por área de atuação, conteúdos jurídicos, formulário de contato com proteção anti-spam e documentos de privacidade (LGPD).",
        goal:
          "Apresentar o escritório com credibilidade, seguir as regras de publicidade da advocacia e facilitar o primeiro contato do cliente.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zod", "Vercel"],
        image: {
          src: "/images/projects/mdsilva-advocacia.webp",
          alt: "Página inicial do site MDSilva Advocacia em um navegador desktop",
          width: 1440,
          height: 900,
        },
      },
      {
        slug: "portfolio",
        name: "Portfólio profissional",
        category: "Aplicação web",
        status: "completed",
        description:
          "Este site, desenvolvido por mim: portfólio em português, inglês e espanhol, com currículo em PDF gerado a partir do mesmo conteúdo, SEO técnico, acessibilidade e geração estática.",
        goal: "Apresentar minha trajetória a recrutadores e empresas de forma clara, rápida e profissional.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
        image: {
          src: "/images/projects/portfolio.webp",
          alt: "Página inicial do portfólio de Hadrian Rafael em um navegador desktop",
          width: 1440,
          height: 900,
        },
        demoUrl: siteUrl,
        repoUrl: "https://github.com/Hadrianrafael/HadrianRafael",
      },
    ],
    moreTitle: "Mais projetos no GitHub",
    moreText: "Novos trabalhos serão publicados aqui à medida que forem concluídos. Acompanhe meus repositórios no GitHub.",
    moreCta: "Ver perfil no GitHub",
  },
  education: {
    kicker: "Formação acadêmica",
    title: "Base técnica em constante evolução.",
    degree: "Análise e Desenvolvimento de Sistemas",
    institution: "Anhanguera",
    status: "Em andamento",
    expected: "Conclusão prevista: dezembro de 2026",
    complementaryTitle: "Cursos e certificações",
    complementaryText: "Cursos complementares, certificações e atualizações profissionais em tecnologia e vendas.",
    complementary: [],
    complementaryEmpty: "Esta seção será atualizada com cursos e certificações concluídos.",
  },
  goals: {
    kicker: "Objetivos profissionais",
    title: "Onde posso gerar mais valor.",
    intro:
      "Busco oportunidades em que tecnologia e negócios caminhem juntos — seja construindo soluções, seja levando-as até o cliente.",
    tracks: [
      {
        title: "Tecnologia",
        text: "Desenvolver, automatizar e dar suporte a produtos digitais.",
        roles: ["Desenvolvimento de Software", "Desenvolvimento Full Stack", "Inteligência Artificial", "Automação", "Suporte e Tecnologia"],
      },
      {
        title: "Comercial",
        text: "Gerar oportunidades e construir relacionamentos com clientes.",
        roles: ["SDR / BDR", "Assistente Comercial", "Inside Sales", "Vendas B2B"],
      },
    ],
    differentialTitle: "O diferencial",
    differentialText:
      "Entendo a linguagem técnica de quem constrói e a linguagem de quem compra. Essa combinação me permite traduzir necessidades de negócio em soluções — e explicar soluções técnicas de forma clara para clientes.",
  },
  languages: {
    kicker: "Idiomas",
    title: "Comunicação em três idiomas.",
    items: [
      { name: "Português", level: "Nativo", label: "Nativo", value: 100 },
      { name: "Inglês", level: "B2", label: "Intermediário avançado", value: 72 },
      { name: "Espanhol", level: "A2", label: "Básico", value: 35 },
    ],
  },
  contact: {
    kicker: "Contato",
    title: "Vamos conversar?",
    text:
      "Se você é recrutador, gestor ou representa uma empresa, será um prazer conversar sobre oportunidades e projetos.",
    email: "E-mail",
    phone: "Telefone",
    linkedin: "LinkedIn",
    github: "GitHub",
    website: "Site",
    resume: "Baixar currículo",
    copy: "Copiar e-mail",
    copied: "E-mail copiado",
    location: "São Paulo, SP — Brasil",
  },
  footer: {
    tagline: "Desenvolvimento de software, tecnologia e soluções digitais.",
    navigation: "Navegação",
    contact: "Contato",
    documents: "Documentos",
    resumeOnline: "Currículo online",
    resumePdf: "Currículo em PDF",
    rights: "Todos os direitos reservados.",
    built: "Desenvolvido com Next.js e TypeScript.",
    backToTop: "Voltar ao topo",
  },
  resume: {
    pageTitle: "Currículo — Hadrian Rafael",
    pageDescription: "Currículo de Hadrian Rafael: experiência em atendimento, suporte e vendas, formação em ADS, competências em desenvolvimento e IA, e idiomas.",
    download: "Baixar PDF",
    print: "Imprimir",
    back: "Voltar ao site",
    summaryTitle: "Resumo profissional",
    summary:
      "Profissional em desenvolvimento de software, tecnologia e soluções digitais, cursando Análise e Desenvolvimento de Sistemas. Experiência em atendimento ao cliente, operações, suporte e vendas consultivas. Desenvolve projetos próprios e freelance com Next.js, React e TypeScript, utilizando inteligência artificial e automação no fluxo de trabalho.",
    experienceTitle: "Experiência profissional",
    educationTitle: "Formação acadêmica",
    skillsTitle: "Competências",
    languagesTitle: "Idiomas",
    projectsTitle: "Projetos",
    location: "São Paulo, SP",
  },
  notFound: {
    title: "Página não encontrada",
    text: "O endereço acessado não existe ou foi alterado.",
    cta: "Voltar ao início",
  },
};

export default pt;
