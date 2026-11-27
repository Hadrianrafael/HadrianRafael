import { siteUrl } from "./profile";
import type { Dictionary } from "./types";

const en: Dictionary = {
  meta: {
    htmlLang: "en",
    ogLocale: "en_US",
    title: "Hadrian Rafael — Software Development & Technology",
    description:
      "Hadrian Rafael: software development with Next.js, React and TypeScript, applied AI, and experience in customer service, operations and sales.",
    jobTitle: "Software Development & Digital Solutions",
  },
  nav: {
    home: "Hadrian Rafael — home",
    about: "About",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    education: "Education",
    goals: "Goals",
    contact: "Contact",
    resume: "Résumé",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    skipToContent: "Skip to content",
    primary: "Main navigation",
  },
  hero: {
    status: "Open to new opportunities",
    greeting: "Hi, I'm Hadrian Rafael.",
    subtitle:
      "Professional in software development, technology and digital solutions, with experience in operations, customer service and business relationships.",
    text:
      "My path brings together technology, business sense and a constant interest in innovation. I enjoy turning problems into solutions and using technology to create better experiences and results.",
    ctaJourney: "Explore my journey",
    ctaProjects: "See my projects",
    ctaResume: "Download résumé (PDF)",
    ctaContact: "Get in touch",
    photoAlt: "Professional photo of Hadrian Rafael",
    photoPlaceholder: "Reserved for a professional photo",
    focusLabel: "Focus",
    focus: ["Software Development", "Full Stack", "AI & Automation", "SDR / BDR", "Inside Sales"],
    facts: [
      { value: "5", label: "companies so far" },
      { value: "ADS", label: "degree in progress" },
      { value: "3", label: "languages" },
    ],
    scroll: "Scroll to explore",
  },
  about: {
    kicker: "About me",
    title: "Technology with a business mindset and a focus on people.",
    paragraphs: [
      "I have always been interested in technology and innovation — in understanding how things work and how they could work better. That interest led me to a degree in Systems Analysis and Development at Anhanguera and to software development, where I build websites, web systems and digital solutions.",
      "My professional path includes customer service, operations and sales. These experiences taught me to listen, understand real needs, negotiate and maintain relationships — skills I now apply to build solutions that make sense for the people who use them.",
      "I am also dedicated to artificial intelligence and process automation, using tools such as Claude, ChatGPT and Gemini in my workflow. I build personal projects and freelance work.",
    ],
    pillars: [
      { title: "Professionalism", text: "Commitment to deadlines, clear communication and ownership of every delivery." },
      { title: "Continuous learning", text: "Constantly studying new technologies, tools and ways of working." },
      { title: "Problem solving", text: "Focused on understanding root causes and delivering solutions that produce results." },
    ],
  },
  experience: {
    kicker: "Professional experience",
    title: "A career built close to people and operations.",
    intro:
      "Experience in customer service, support, operations and sales that shaped how I see customers, processes and results.",
    current: "Current",
    items: [
      {
        company: "Teleperformance",
        role: "Expert — Customer Service & Support",
        period: "Mar 2026 — present",
        start: "2026-03",
        current: true,
        summary:
          "Customer service, operations and support, with activities related to insurance and assistance services.",
        highlights: [
          "Support for iFood delivery partners in accident situations and insurance claims.",
          "Guidance on procedures and required documentation.",
          "Operational support and onboarding of new team members.",
        ],
      },
      {
        company: "Konecta",
        role: "Sales Consultant — Vivo Fibra",
        period: "Nov 2024 — Dec 2025",
        start: "2024-11",
        summary: "Sales role in the telecommunications sector, focused on Vivo Fibra internet plans and services.",
        highlights: [
          "Customer outreach and needs discovery.",
          "Solution presentation, negotiation and closing.",
        ],
      },
      {
        company: "Núbia Festas",
        role: "Sales Support & Customer Service",
        period: "Feb 2024 — Sep 2024",
        start: "2024-02",
        summary: "Operations and customer service, supporting the sales process.",
        highlights: [
          "Support for students and prospects interested in products and courses.",
          "Negotiation, purchase support and payment slip issuance.",
        ],
      },
      {
        company: "Polimix",
        role: "Administrative Assistant",
        period: "May 2023 — Feb 2024",
        start: "2023-05",
        summary: "Professional experience in an operational environment, supporting administrative routines.",
        highlights: [
          "Document organization and support for operational routines.",
          "Follow-up on internal requests.",
        ],
      },
      {
        company: "Caixa Econômica Federal",
        role: "Banking Service — Business & Individual",
        period: "Feb 2022 — Dec 2022",
        start: "2022-02",
        summary: "Service for individual and business customers, focused on relationships and needs discovery.",
        highlights: [
          "Business account opening and guidance on cards, loans and financial services.",
          "Relationship with business owners and individual customers.",
        ],
      },
    ],
  },
  skills: {
    kicker: "Technology & skills",
    title: "The tools and knowledge I work with.",
    intro:
      "A combination of a technical foundation in development, hands-on use of artificial intelligence and skills built through direct contact with customers.",
    note: "Knowledge and tools used in studies, personal projects and freelance work.",
    groups: [
      {
        id: "dev",
        title: "Development",
        description: "Building interfaces, web systems and integrations.",
        items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Full Stack Development", "APIs", "Databases", "Git & GitHub"],
      },
      {
        id: "ai",
        title: "Artificial Intelligence",
        description: "AI applied to development, productivity and automation.",
        items: ["ChatGPT", "Claude", "Gemini", "Claude Code", "Codex", "Process automation", "AI agent development", "Prompt engineering"],
      },
      {
        id: "design",
        title: "Design & experience",
        description: "Clear, accessible and responsive interfaces.",
        items: ["UI/UX", "Interface design", "Responsive websites"],
      },
      {
        id: "professional",
        title: "Professional skills",
        description: "Skills developed in customer service, operations and sales.",
        items: ["Customer service", "Communication", "Negotiation", "Sales", "Business relationships", "Problem solving", "Organization", "Continuous learning"],
      },
    ],
  },
  projects: {
    kicker: "Projects",
    title: "Real work, with a transparent status.",
    intro: "Projects I developed. Each card clearly shows whether the project is completed or in progress.",
    goalLabel: "Goal",
    stackLabel: "Technologies",
    demo: "View demo",
    code: "View code",
    status: { completed: "Completed", "in-progress": "In progress", concept: "Concept" },
    items: [
      {
        slug: "mdsilva-advocacia",
        name: "MDSilva Advocacia",
        category: "Institutional website",
        status: "completed",
        description:
          "Institutional website for a law firm with two offices: practice area pages, legal articles, a contact form with anti-spam protection and privacy documents (LGPD).",
        goal:
          "Present the firm with credibility, follow Brazilian legal advertising rules and make the first client contact easy.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zod", "Vercel"],
        image: {
          src: "/images/projects/mdsilva-advocacia.webp",
          alt: "MDSilva Advocacia home page in a desktop browser",
          width: 1440,
          height: 900,
        },
      },
      {
        slug: "portfolio",
        name: "Professional portfolio",
        category: "Web application",
        status: "completed",
        description:
          "This website, built by me: a portfolio in Portuguese, English and Spanish, with a PDF résumé generated from the same content, technical SEO, accessibility and static generation.",
        goal: "Present my career to recruiters and companies in a clear, fast and professional way.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
        image: {
          src: "/images/projects/portfolio.webp",
          alt: "Hadrian Rafael portfolio home page in a desktop browser",
          width: 1440,
          height: 900,
        },
        demoUrl: siteUrl,
        repoUrl: "https://github.com/Hadrianrafael/HadrianRafael",
      },
    ],
    moreTitle: "More projects on GitHub",
    moreText: "New work will be published here as it is completed. Follow my repositories on GitHub.",
    moreCta: "View GitHub profile",
  },
  education: {
    kicker: "Education",
    title: "A technical foundation that keeps evolving.",
    degree: "Systems Analysis and Development",
    institution: "Anhanguera",
    status: "In progress",
    expected: "Expected completion: December 2026",
    complementaryTitle: "Courses & certifications",
    complementaryText: "Complementary courses, certifications and professional updates in technology and sales.",
    complementary: [],
    complementaryEmpty: "This section will be updated with completed courses and certifications.",
  },
  goals: {
    kicker: "Career goals",
    title: "Where I can add the most value.",
    intro:
      "I am looking for opportunities where technology and business go hand in hand — whether building solutions or bringing them to customers.",
    tracks: [
      {
        title: "Technology",
        text: "Building, automating and supporting digital products.",
        roles: ["Software Development", "Full Stack Development", "Artificial Intelligence", "Automation", "Technical Support"],
      },
      {
        title: "Sales",
        text: "Generating opportunities and building customer relationships.",
        roles: ["SDR / BDR", "Sales Assistant", "Inside Sales", "B2B Sales"],
      },
    ],
    differentialTitle: "What sets me apart",
    differentialText:
      "I understand the technical language of those who build and the language of those who buy. This combination lets me translate business needs into solutions — and explain technical solutions clearly to customers.",
  },
  languages: {
    kicker: "Languages",
    title: "Communication in three languages.",
    items: [
      { name: "Portuguese", level: "Native", label: "Native", value: 100 },
      { name: "English", level: "B2", label: "Upper intermediate", value: 72 },
      { name: "Spanish", level: "A2", label: "Elementary", value: 35 },
    ],
  },
  contact: {
    kicker: "Contact",
    title: "Let's talk.",
    text:
      "If you are a recruiter, a manager or represent a company, I would be glad to talk about opportunities and projects.",
    email: "Email",
    phone: "Phone",
    linkedin: "LinkedIn",
    github: "GitHub",
    website: "Website",
    resume: "Download résumé",
    copy: "Copy email",
    copied: "Email copied",
    location: "São Paulo, SP — Brazil",
  },
  footer: {
    tagline: "Software development, technology and digital solutions.",
    navigation: "Navigation",
    contact: "Contact",
    documents: "Documents",
    resumeOnline: "Online résumé",
    resumePdf: "PDF résumé",
    rights: "All rights reserved.",
    built: "Built with Next.js and TypeScript.",
    backToTop: "Back to top",
  },
  resume: {
    pageTitle: "Résumé — Hadrian Rafael",
    pageDescription: "Résumé of Hadrian Rafael: experience in customer service, support and sales, Systems Analysis studies, development and AI skills, and languages.",
    download: "Download PDF",
    print: "Print",
    back: "Back to website",
    summaryTitle: "Professional summary",
    summary:
      "Professional in software development, technology and digital solutions, currently studying Systems Analysis and Development. Experience in customer service, operations, support and consultative sales. Builds personal and freelance projects with Next.js, React and TypeScript, using artificial intelligence and automation in the workflow.",
    experienceTitle: "Professional experience",
    educationTitle: "Education",
    skillsTitle: "Skills",
    languagesTitle: "Languages",
    projectsTitle: "Projects",
    location: "São Paulo, Brazil",
  },
  notFound: {
    title: "Page not found",
    text: "The address you tried does not exist or has changed.",
    cta: "Back to home",
  },
};

export default en;
