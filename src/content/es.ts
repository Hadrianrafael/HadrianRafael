import { siteUrl } from "./profile";
import type { Dictionary } from "./types";

const es: Dictionary = {
  meta: {
    htmlLang: "es",
    ogLocale: "es_ES",
    title: "Hadrian Rafael — Desarrollo de Software y Tecnología",
    description:
      "Hadrian Rafael: desarrollo de software con Next.js, React y TypeScript, IA aplicada y experiencia en atención al cliente, operaciones y ventas.",
    jobTitle: "Desarrollo de Software y Soluciones Digitales",
  },
  nav: {
    home: "Hadrian Rafael — inicio",
    about: "Sobre mí",
    experience: "Experiencia",
    skills: "Competencias",
    projects: "Proyectos",
    education: "Formación",
    goals: "Objetivos",
    contact: "Contacto",
    resume: "Currículum",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    language: "Idioma",
    skipToContent: "Saltar al contenido",
    primary: "Navegación principal",
  },
  hero: {
    status: "Abierto a nuevas oportunidades",
    greeting: "Hola, soy Hadrian Rafael.",
    subtitle:
      "Profesional en desarrollo de software, tecnología y soluciones digitales, con experiencia en operaciones, atención al cliente y relación comercial.",
    text:
      "Mi trayectoria reúne tecnología, visión de negocio e interés constante por la innovación. Me gusta transformar problemas en soluciones y usar la tecnología para crear mejores experiencias y resultados.",
    ctaJourney: "Conoce mi trayectoria",
    ctaProjects: "Ver mis proyectos",
    ctaResume: "Descargar CV en PDF",
    ctaContact: "Contactar",
    photoAlt: "Fotografía profesional de Hadrian Rafael",
    photoPlaceholder: "Espacio reservado para fotografía profesional",
    focusLabel: "Enfoque",
    focus: ["Desarrollo de Software", "Full Stack", "IA y Automatización", "SDR / BDR", "Inside Sales"],
    facts: [
      { value: "5", label: "empresas en la trayectoria" },
      { value: "ADS", label: "carrera en curso" },
      { value: "3", label: "idiomas" },
    ],
    scroll: "Desplázate para explorar",
  },
  about: {
    kicker: "Sobre mí",
    title: "Tecnología con visión de negocio y foco en las personas.",
    paragraphs: [
      "Siempre me ha interesado la tecnología y la innovación — entender cómo funcionan las cosas y cómo podrían funcionar mejor. Ese interés me llevó a la carrera de Análisis y Desarrollo de Sistemas en Anhanguera y al desarrollo de software, área en la que construyo sitios, sistemas web y soluciones digitales.",
      "Mi trayectoria profesional pasó por la atención al cliente, las operaciones y las ventas. En esas experiencias aprendí a escuchar, entender necesidades reales, negociar y mantener relaciones — habilidades que hoy aplico para desarrollar soluciones que tengan sentido para quienes las usan.",
      "También me dedico a la inteligencia artificial y a la automatización de procesos, utilizando herramientas como Claude, ChatGPT y Gemini en mi flujo de trabajo. Desarrollo proyectos propios y trabajos freelance.",
    ],
    pillars: [
      { title: "Profesionalismo", text: "Compromiso con los plazos, comunicación clara y responsabilidad en cada entrega." },
      { title: "Aprendizaje continuo", text: "Estudio constante de nuevas tecnologías, herramientas y formas de trabajar." },
      { title: "Resolución de problemas", text: "Enfoque en entender la causa y entregar soluciones que generen resultados." },
    ],
  },
  experience: {
    kicker: "Experiencia profesional",
    title: "Una trayectoria construida cerca de las personas y las operaciones.",
    intro:
      "Experiencias en atención, soporte, operaciones y ventas que formaron mi visión sobre clientes, procesos y resultados.",
    current: "Actual",
    items: [
      {
        company: "Teleperformance",
        role: "Expert — Atención y Soporte",
        period: "Mar 2026 — actualidad",
        start: "2026-03",
        current: true,
        summary:
          "Atención, operaciones y soporte al cliente, con actividades relacionadas con seguros y asistencia.",
        highlights: [
          "Atención a repartidores asociados de iFood en situaciones de accidente y activación de seguros.",
          "Orientación sobre procedimientos y documentación necesaria.",
          "Apoyo operativo e integración de nuevos colaboradores.",
        ],
      },
      {
        company: "Konecta",
        role: "Consultor de Ventas — Vivo Fibra",
        period: "Nov 2024 — Dic 2025",
        start: "2024-11",
        summary: "Ventas en el sector de telecomunicaciones, con foco en planes de internet y servicios Vivo Fibra.",
        highlights: [
          "Contacto con clientes e identificación de necesidades.",
          "Presentación de soluciones, negociación y cierre de ventas.",
        ],
      },
      {
        company: "Núbia Festas",
        role: "Atención Comercial y Soporte",
        period: "Feb 2024 — Sep 2024",
        start: "2024-02",
        summary: "Experiencia en operaciones y atención, con apoyo al proceso comercial.",
        highlights: [
          "Atención a alumnas e interesadas en productos y cursos.",
          "Negociación, apoyo a la compra y emisión de boletos de pago.",
        ],
      },
      {
        company: "Polimix",
        role: "Auxiliar Administrativo",
        period: "May 2023 — Feb 2024",
        start: "2023-05",
        summary: "Experiencia profesional en un entorno operativo, con apoyo a las rutinas administrativas.",
        highlights: [
          "Organización de documentos y soporte a rutinas operativas.",
          "Seguimiento de demandas internas.",
        ],
      },
      {
        company: "Caixa Econômica Federal",
        role: "Atención Bancaria — Empresas y Personas",
        period: "Feb 2022 — Dic 2022",
        start: "2022-02",
        summary: "Atención a clientes particulares y empresas, con foco en la relación y la identificación de necesidades.",
        highlights: [
          "Apertura de cuentas empresariales y orientación sobre tarjetas, préstamos y servicios financieros.",
          "Relación con empresarios y clientes particulares.",
        ],
      },
    ],
  },
  skills: {
    kicker: "Tecnología y competencias",
    title: "Herramientas y conocimientos con los que trabajo.",
    intro:
      "Una combinación de base técnica en desarrollo, uso práctico de la inteligencia artificial y competencias construidas en el contacto directo con clientes.",
    note: "Conocimientos y herramientas utilizados en estudios, proyectos propios y trabajos freelance.",
    groups: [
      {
        id: "dev",
        title: "Desarrollo",
        description: "Construcción de interfaces, sistemas web e integraciones.",
        items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Desarrollo Full Stack", "APIs", "Bases de datos", "Git y GitHub"],
      },
      {
        id: "ai",
        title: "Inteligencia Artificial",
        description: "IA aplicada al desarrollo, la productividad y la automatización.",
        items: ["ChatGPT", "Claude", "Gemini", "Claude Code", "Codex", "Automatización de procesos", "Desarrollo de agentes de IA", "Ingeniería de prompts"],
      },
      {
        id: "design",
        title: "Diseño y experiencia",
        description: "Interfaces claras, accesibles y responsivas.",
        items: ["UI/UX", "Diseño de interfaces", "Sitios responsivos"],
      },
      {
        id: "professional",
        title: "Competencias profesionales",
        description: "Habilidades desarrolladas en atención, operaciones y ventas.",
        items: ["Atención al cliente", "Comunicación", "Negociación", "Ventas", "Relación comercial", "Resolución de problemas", "Organización", "Aprendizaje continuo"],
      },
    ],
  },
  projects: {
    kicker: "Proyectos",
    title: "Trabajos reales, con estado transparente.",
    intro: "Proyectos desarrollados por mí. Cada tarjeta indica claramente si el proyecto está terminado o en desarrollo.",
    goalLabel: "Objetivo",
    stackLabel: "Tecnologías",
    demo: "Ver demostración",
    code: "Ver código",
    status: { completed: "Terminado", "in-progress": "En desarrollo", concept: "Concepto" },
    items: [
      {
        slug: "mdsilva-advocacia",
        name: "MDSilva Advocacia",
        category: "Sitio institucional",
        status: "completed",
        description:
          "Sitio institucional para un despacho de abogados con dos oficinas: páginas por área de práctica, artículos jurídicos, formulario de contacto con protección antispam y documentos de privacidad (LGPD).",
        goal:
          "Presentar el despacho con credibilidad, cumplir las reglas de publicidad de la abogacía en Brasil y facilitar el primer contacto del cliente.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zod", "Vercel"],
        image: {
          src: "/images/projects/mdsilva-advocacia.webp",
          alt: "Página de inicio del sitio MDSilva Advocacia en un navegador de escritorio",
          width: 1440,
          height: 900,
        },
      },
      {
        slug: "portfolio",
        name: "Portafolio profesional",
        category: "Aplicación web",
        status: "completed",
        description:
          "Este sitio, desarrollado por mí: portafolio en portugués, inglés y español, con CV en PDF generado a partir del mismo contenido, SEO técnico, accesibilidad y generación estática.",
        goal: "Presentar mi trayectoria a reclutadores y empresas de forma clara, rápida y profesional.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
        image: {
          src: "/images/projects/portfolio.webp",
          alt: "Página de inicio del portafolio de Hadrian Rafael en un navegador de escritorio",
          width: 1440,
          height: 900,
        },
        demoUrl: siteUrl,
        repoUrl: "https://github.com/Hadrianrafael/HadrianRafael",
      },
    ],
    moreTitle: "Más proyectos en GitHub",
    moreText: "Los nuevos trabajos se publicarán aquí a medida que se terminen. Sigue mis repositorios en GitHub.",
    moreCta: "Ver perfil en GitHub",
  },
  education: {
    kicker: "Formación académica",
    title: "Una base técnica en constante evolución.",
    degree: "Análisis y Desarrollo de Sistemas",
    institution: "Anhanguera",
    status: "En curso",
    expected: "Finalización prevista: diciembre de 2026",
    complementaryTitle: "Cursos y certificaciones",
    complementaryText: "Cursos complementarios, certificaciones y actualizaciones profesionales en tecnología y ventas.",
    complementary: [],
    complementaryEmpty: "Esta sección se actualizará con cursos y certificaciones terminados.",
  },
  goals: {
    kicker: "Objetivos profesionales",
    title: "Donde puedo aportar más valor.",
    intro:
      "Busco oportunidades en las que la tecnología y los negocios vayan de la mano — ya sea construyendo soluciones o llevándolas al cliente.",
    tracks: [
      {
        title: "Tecnología",
        text: "Desarrollar, automatizar y dar soporte a productos digitales.",
        roles: ["Desarrollo de Software", "Desarrollo Full Stack", "Inteligencia Artificial", "Automatización", "Soporte y Tecnología"],
      },
      {
        title: "Comercial",
        text: "Generar oportunidades y construir relaciones con clientes.",
        roles: ["SDR / BDR", "Asistente Comercial", "Inside Sales", "Ventas B2B"],
      },
    ],
    differentialTitle: "El diferencial",
    differentialText:
      "Entiendo el lenguaje técnico de quien construye y el lenguaje de quien compra. Esa combinación me permite traducir necesidades de negocio en soluciones — y explicar soluciones técnicas de forma clara a los clientes.",
  },
  languages: {
    kicker: "Idiomas",
    title: "Comunicación en tres idiomas.",
    items: [
      { name: "Portugués", level: "Nativo", label: "Nativo", value: 100 },
      { name: "Inglés", level: "B2", label: "Intermedio alto", value: 72 },
      { name: "Español", level: "A2", label: "Básico", value: 35 },
    ],
  },
  contact: {
    kicker: "Contacto",
    title: "¿Conversamos?",
    text:
      "Si eres reclutador, gerente o representas a una empresa, será un placer conversar sobre oportunidades y proyectos.",
    email: "Correo",
    phone: "Teléfono",
    linkedin: "LinkedIn",
    github: "GitHub",
    website: "Sitio",
    resume: "Descargar CV",
    copy: "Copiar correo",
    copied: "Correo copiado",
    location: "São Paulo, SP — Brasil",
  },
  footer: {
    tagline: "Desarrollo de software, tecnología y soluciones digitales.",
    navigation: "Navegación",
    contact: "Contacto",
    documents: "Documentos",
    resumeOnline: "CV en línea",
    resumePdf: "CV en PDF",
    rights: "Todos los derechos reservados.",
    built: "Desarrollado con Next.js y TypeScript.",
    backToTop: "Volver arriba",
  },
  resume: {
    pageTitle: "Currículum — Hadrian Rafael",
    pageDescription: "Currículum de Hadrian Rafael: experiencia en atención, soporte y ventas, estudios de ADS, competencias en desarrollo e IA, e idiomas.",
    download: "Descargar PDF",
    print: "Imprimir",
    back: "Volver al sitio",
    summaryTitle: "Resumen profesional",
    summary:
      "Profesional en desarrollo de software, tecnología y soluciones digitales, cursando Análisis y Desarrollo de Sistemas. Experiencia en atención al cliente, operaciones, soporte y ventas consultivas. Desarrolla proyectos propios y freelance con Next.js, React y TypeScript, utilizando inteligencia artificial y automatización en su flujo de trabajo.",
    experienceTitle: "Experiencia profesional",
    educationTitle: "Formación académica",
    skillsTitle: "Competencias",
    languagesTitle: "Idiomas",
    projectsTitle: "Proyectos",
    location: "São Paulo, Brasil",
  },
  notFound: {
    title: "Página no encontrada",
    text: "La dirección a la que accediste no existe o ha cambiado.",
    cta: "Volver al inicio",
  },
};

export default es;
