"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'es' | 'en';

type Dictionary = {
  [key: string]: string | string[] | any;
};

const dictionaries: Record<Language, Dictionary> = {
  es: {
    nav: {
      services: "Servicios",
      about: "Nosotros",
      contact: "Contacto",
      cta: "Hablemos"
    },
    hero: {
      title: "Tu visión de negocio, hecha realidad",
      subtitle: "Del desafío al resultado.",
      desc: "En 3Cats conectamos estrategia, tecnología y talento de élite para transformar los retos de tu empresa en soluciones concretas, escalables y rentables.",
      btnPrimary: "Consulta gratuita",
      btnSecondary: "Ver servicios"
    },
    about: {
      tag: "¿Qué es 3Cats?",
      title: "Tu socio estratégico en tecnología e innovación",
      desc: "Somos un ecosistema de profesionales especializados en desarrollo de software, inteligencia artificial, marketing digital y consultoría de negocio. No somos una agencia tradicional — somos el equipo que tu empresa necesita, exactamente cuando lo necesita."
    },
    services: {
      tag: "Lo que hacemos",
      title: "Tres pilares. Un solo equipo. Resultados reales.",
      items: [
        {
          title: "Tecnología",
          desc: "Desarrollamos plataformas, aplicaciones y soluciones de IA que automatizan, escalan y generan ventaja competitiva para tu negocio."
        },
        {
          title: "Marketing Digital",
          desc: "Diseñamos estrategias que posicionan tu marca, atraen clientes y convierten audiencias en resultados medibles."
        },
        {
          title: "Consultoría Estratégica",
          desc: "Alineamos tu tecnología con tus metas de negocio. Tomamos decisiones basadas en datos, no en suposiciones."
        }
      ]
    },
    custom: {
      tag: "Nada genérico. Todo a medida.",
      title: "Cada empresa es única. Tus soluciones también deberían serlo."
    },
    value: {
      title: "Por qué las empresas eligen 3Cats",
      items: [
        {
          title: "Talento curado, sin fricciones",
          desc: "Accede a equipos multidisciplinarios pre-validados. Sin procesos de contratación, sin riesgos, con resultados desde el primer sprint."
        },
        {
          title: "Un solo punto de contacto",
          desc: "Coordinamos todo el proyecto — tecnología, diseño, marketing — bajo una sola gestión. Tú te enfocas en tu negocio, nosotros en la ejecución."
        },
        {
          title: "Tecnología que crece contigo",
          desc: "Construimos con visión de largo plazo. Cada solución está diseñada para escalar con tu empresa, desde el MVP hasta la versión enterprise."
        }
      ],
      stats: {
        title: "Nuestro compromiso contigo",
        desc: "Entregas puntuales, comunicación clara, calidad garantizada. Sin letra pequeña."
      }
    },
    process: {
      title: "Cómo Trabajamos",
      desc: "Un proceso probado, transparente y orientado a resultados.",
      steps: [
        { title: "Descubrimiento", desc: "Escuchamos profundamente. Entendemos tus objetivos, contexto de negocio, usuarios y restricciones para diseñar la solución correcta desde el inicio." },
        { title: "Planeación", desc: "Definimos el roadmap: alcances, tiempos, recursos y entregables. Sin sorpresas a mitad del camino." },
        { title: "Diseño", desc: "Prototipamos y validamos experiencias (UX/UI) antes de escribir una sola línea de código. Decisiones visuales basadas en datos." },
        { title: "Desarrollo", desc: "Construimos con tecnologías modernas, código limpio y prácticas de ingeniería de software de primer nivel." },
        { title: "Pruebas", desc: "Testing riguroso en cada capa: funcional, de rendimiento y de seguridad. Solo lanzamos cuando estamos seguros." },
        { title: "Implementación", desc: "Desplegamos de forma controlada, asegurando continuidad del negocio y una transición sin fricciones." },
        { title: "Evolución", desc: "El lanzamiento es el inicio, no el final. Monitoreamos, iteramos y escalamos junto a tu empresa." }
      ]
    },
    solutions: {
      title: "Soluciones que Construimos",
      items: [
        { title: "Plataformas Empresariales", desc: "Sistemas centralizados y robustos que digitalizan y optimizan la operación de tu empresa a gran escala." },
        { title: "Sistemas ERP y CRM", desc: "Gestión de recursos y relaciones con clientes, diseñada a la medida de tu industria y flujos de trabajo." },
        { title: "Aplicaciones Web", desc: "Plataformas web de alto rendimiento, seguras, responsivas y optimizadas para conversión y experiencia de usuario." },
        { title: "Aplicaciones Móviles", desc: "Apps nativas y multiplataforma con UX excepcional para iOS y Android que los usuarios adoptan y retienen." },
        { title: "Marketplaces", desc: "Ecosistemas de comercio digital complejos: multi-vendor, pagos integrados, logística y analytics en tiempo real." },
        { title: "Plataformas SaaS", desc: "Arquitecturas cloud-native listas para comercializar tu producto digital con modelos de suscripción escalables." },
        { title: "Business Intelligence", desc: "Dashboards y reportes en tiempo real que convierten tus datos en decisiones estratégicas accionables." },
        { title: "Automatización de Procesos", desc: "Workflows inteligentes que eliminan tareas manuales, reducen errores y liberan a tu equipo para lo que importa." },
        { title: "Soluciones con IA", desc: "Desde chatbots hasta modelos predictivos: implementamos IA práctica que genera impacto medible en tu negocio." },
        { title: "Integraciones y APIs", desc: "Unificamos tu stack tecnológico: CRMs, ERPs, pagos, logística, comunicaciones — todo hablando entre sí." }
      ]
    },
    talent: {
      tag: "¿Eres un profesional tech?",
      title: "Forma parte de la red 3Cats",
      desc: "Conectamos a los mejores profesionales en tecnología, diseño y estrategia con proyectos reales que generan impacto. Sin burocracia, con flexibilidad y con un equipo que valora tu talento.",
      benefits: [
        { icon: "🚀", title: "Proyectos con propósito", desc: "Trabajarás en proyectos desafiantes y variados que amplían tu portfolio y experiencia." },
        { icon: "🤝", title: "Comunidad de élite", desc: "Accede a una red de profesionales top de diferentes disciplinas y colabora en equipo." },
        { icon: "🎯", title: "Flexibilidad real", desc: "Define tu modalidad: freelance, part-time o contrato. Tú eliges cómo y cuánto trabajas." }
      ],
      cta: "Únete a la red"
    },
    footer: {
      title: "¿Listo para transformar tu negocio?",
      desc: "Hablemos. Una conversación puede ser el inicio del proyecto que cambiará tu empresa para siempre.",
      cta: "Agendar una llamada",
      contactInfo: "Contáctanos",
      aboutUs: "Sobre 3Cats",
      hiring: "Para Talento",
      hiringLink: "Únete a nuestra red",
      rights: "Todos los derechos reservados."
    },
    register: {
      pageTag: "Red de Talento 3Cats",
      pageTitle: "Tu próximo gran proyecto te espera",
      pageDesc: "Completa tu perfil y te contactaremos cuando tengamos un proyecto que se alinee con tu experiencia y metas.",
      leftTitle: "¿Por qué unirte?",
      leftBenefits: [
        "Acceso a proyectos reales con empresas que están transformando sus industrias",
        "Flexibilidad total: define tu modalidad, horario y tipo de proyecto",
        "Comunidad de profesionales top en tecnología, diseño y estrategia",
        "Apoyo de un equipo que valora tu desarrollo profesional"
      ],
      fields: {
        name: "Nombre completo",
        namePlaceholder: "Ej. María García",
        email: "Correo electrónico",
        emailPlaceholder: "maria@ejemplo.com",
        portfolio: "LinkedIn o Portfolio",
        portfolioPlaceholder: "https://linkedin.com/in/tu-perfil",
        specialization: "Área de especialización",
        specializationPlaceholder: "Selecciona un área...",
        experience: "Años de experiencia",
        experiencePlaceholder: "Selecciona tu experiencia...",
        modality: "Modalidad preferida",
        modalityPlaceholder: "¿Cómo prefieres trabajar?",
        availability: "Disponibilidad",
        availabilityPlaceholder: "¿Cuántas horas puedes dedicar?",
        bio: "Cuéntanos sobre ti",
        bioPlaceholder: "En 2-3 líneas: ¿qué haces, en qué eres brillante y qué tipo de proyectos te emocionan?"
      },
      specializations: [
        { value: "fullstack", label: "Desarrollo Full Stack" },
        { value: "frontend", label: "Desarrollo Frontend" },
        { value: "backend", label: "Desarrollo Backend" },
        { value: "mobile", label: "Desarrollo Móvil (iOS / Android)" },
        { value: "ai_ml", label: "Inteligencia Artificial / Machine Learning" },
        { value: "data", label: "Data Engineering / Analytics" },
        { value: "devops", label: "DevOps / Cloud / Infraestructura" },
        { value: "design", label: "Diseño UI/UX" },
        { value: "marketing", label: "Marketing Digital / Growth" },
        { value: "consulting", label: "Consultoría de Negocio / Estrategia" },
        { value: "pm", label: "Gestión de Proyectos / Producto" },
        { value: "security", label: "Ciberseguridad" },
        { value: "other", label: "Otro" }
      ],
      experiences: [
        { value: "0-1", label: "Menos de 1 año" },
        { value: "1-3", label: "1 - 3 años" },
        { value: "3-5", label: "3 - 5 años" },
        { value: "5-8", label: "5 - 8 años" },
        { value: "8+", label: "Más de 8 años" }
      ],
      modalities: [
        { value: "remote", label: "100% Remoto" },
        { value: "hybrid", label: "Híbrido" },
        { value: "onsite", label: "Presencial" }
      ],
      availabilities: [
        { value: "full-time", label: "Tiempo completo (40h/semana)" },
        { value: "part-time", label: "Medio tiempo (20h/semana)" },
        { value: "freelance", label: "Freelance / Por proyecto" },
        { value: "hours", label: "Por horas (menos de 20h/semana)" }
      ],
      submit: "Enviar mi perfil",
      successTitle: "¡Perfil recibido!",
      successDesc: "Gracias por querer ser parte de 3Cats. Revisaremos tu perfil y te contactaremos cuando tengamos un proyecto que encaje perfectamente contigo.",
      successCta: "Volver al inicio"
    }
  },
  en: {
    nav: {
      services: "Services",
      about: "About Us",
      contact: "Contact",
      cta: "Let's Talk"
    },
    hero: {
      title: "Your business vision, made real",
      subtitle: "From challenge to result.",
      desc: "At 3Cats we connect strategy, technology, and elite talent to transform your company's challenges into concrete, scalable, and profitable solutions.",
      btnPrimary: "Free Consultation",
      btnSecondary: "See Services"
    },
    about: {
      tag: "What is 3Cats?",
      title: "Your strategic partner in technology and innovation",
      desc: "We are an ecosystem of specialized professionals in software development, artificial intelligence, digital marketing, and business consulting. We're not a traditional agency — we're the team your company needs, exactly when it needs it."
    },
    services: {
      tag: "What We Do",
      title: "Three pillars. One team. Real results.",
      items: [
        {
          title: "Technology",
          desc: "We develop platforms, applications, and AI solutions that automate, scale, and generate competitive advantage for your business."
        },
        {
          title: "Digital Marketing",
          desc: "We design strategies that position your brand, attract clients, and convert audiences into measurable results."
        },
        {
          title: "Strategic Consulting",
          desc: "We align your technology with your business goals. We make data-driven decisions, not assumptions."
        }
      ]
    },
    custom: {
      tag: "Nothing generic. Everything tailored.",
      title: "Every company is unique. Your solutions should be too."
    },
    value: {
      title: "Why companies choose 3Cats",
      items: [
        {
          title: "Curated talent, no friction",
          desc: "Access pre-validated multidisciplinary teams. No hiring processes, no risks, with results from the first sprint."
        },
        {
          title: "Single point of contact",
          desc: "We coordinate the entire project — technology, design, marketing — under one management. You focus on your business, we handle execution."
        },
        {
          title: "Technology that grows with you",
          desc: "We build with a long-term vision. Every solution is designed to scale with your company, from MVP to enterprise version."
        }
      ],
      stats: {
        title: "Our commitment to you",
        desc: "On-time delivery, clear communication, guaranteed quality. No fine print."
      }
    },
    process: {
      title: "How We Work",
      desc: "A proven, transparent, and results-driven process.",
      steps: [
        { title: "Discovery", desc: "We listen deeply. We understand your objectives, business context, users, and constraints to design the right solution from the start." },
        { title: "Planning", desc: "We define the roadmap: scope, timelines, resources, and deliverables. No surprises midway." },
        { title: "Design", desc: "We prototype and validate experiences (UX/UI) before writing a single line of code. Visual decisions grounded in data." },
        { title: "Development", desc: "We build with modern technologies, clean code, and top-tier software engineering practices." },
        { title: "Testing", desc: "Rigorous testing at every layer: functional, performance, and security. We only launch when we're sure." },
        { title: "Launch", desc: "We deploy in a controlled manner, ensuring business continuity and a frictionless transition." },
        { title: "Evolution", desc: "The launch is the beginning, not the end. We monitor, iterate, and scale alongside your company." }
      ]
    },
    solutions: {
      title: "Solutions We Build",
      items: [
        { title: "Enterprise Platforms", desc: "Centralized, robust systems that digitalize and optimize your company's operations at scale." },
        { title: "ERP & CRM Systems", desc: "Resource and customer relationship management, tailored to your industry and workflows." },
        { title: "Web Applications", desc: "High-performance, secure, responsive web platforms optimized for conversion and user experience." },
        { title: "Mobile Applications", desc: "Native and cross-platform apps with exceptional UX for iOS and Android that users adopt and retain." },
        { title: "Marketplaces", desc: "Complex digital commerce ecosystems: multi-vendor, integrated payments, logistics, and real-time analytics." },
        { title: "SaaS Platforms", desc: "Cloud-native architectures ready to commercialize your digital product with scalable subscription models." },
        { title: "Business Intelligence", desc: "Real-time dashboards and reports that turn your data into actionable strategic decisions." },
        { title: "Process Automation", desc: "Intelligent workflows that eliminate manual tasks, reduce errors, and free your team for what matters." },
        { title: "AI Solutions", desc: "From chatbots to predictive models: we implement practical AI that generates measurable impact for your business." },
        { title: "Integrations & APIs", desc: "We unify your tech stack: CRMs, ERPs, payments, logistics, communications — all talking to each other." }
      ]
    },
    talent: {
      tag: "Are you a tech professional?",
      title: "Join the 3Cats network",
      desc: "We connect the best professionals in technology, design, and strategy with real projects that create impact. No bureaucracy, full flexibility, and a team that values your talent.",
      benefits: [
        { icon: "🚀", title: "Purposeful projects", desc: "Work on challenging and varied projects that expand your portfolio and experience." },
        { icon: "🤝", title: "Elite community", desc: "Access a network of top professionals from different disciplines and collaborate as a team." },
        { icon: "🎯", title: "Real flexibility", desc: "Define your modality: freelance, part-time, or contract. You choose how and how much you work." }
      ],
      cta: "Join the network"
    },
    footer: {
      title: "Ready to transform your business?",
      desc: "Let's talk. One conversation could be the start of the project that will change your company forever.",
      cta: "Schedule a call",
      contactInfo: "Contact Us",
      aboutUs: "About 3Cats",
      hiring: "For Talent",
      hiringLink: "Join our network",
      rights: "All rights reserved."
    },
    register: {
      pageTag: "3Cats Talent Network",
      pageTitle: "Your next big project is waiting",
      pageDesc: "Complete your profile and we'll reach out when we have a project aligned with your experience and goals.",
      leftTitle: "Why join?",
      leftBenefits: [
        "Access to real projects with companies transforming their industries",
        "Full flexibility: define your modality, schedule, and project type",
        "Community of top professionals in tech, design, and strategy",
        "Support from a team that values your professional growth"
      ],
      fields: {
        name: "Full name",
        namePlaceholder: "E.g. John Smith",
        email: "Email address",
        emailPlaceholder: "john@example.com",
        portfolio: "LinkedIn or Portfolio",
        portfolioPlaceholder: "https://linkedin.com/in/your-profile",
        specialization: "Area of specialization",
        specializationPlaceholder: "Select an area...",
        experience: "Years of experience",
        experiencePlaceholder: "Select your experience...",
        modality: "Preferred modality",
        modalityPlaceholder: "How do you prefer to work?",
        availability: "Availability",
        availabilityPlaceholder: "How many hours can you dedicate?",
        bio: "Tell us about yourself",
        bioPlaceholder: "In 2-3 lines: what you do, where you excel, and what type of projects excite you."
      },
      specializations: [
        { value: "fullstack", label: "Full Stack Development" },
        { value: "frontend", label: "Frontend Development" },
        { value: "backend", label: "Backend Development" },
        { value: "mobile", label: "Mobile Development (iOS / Android)" },
        { value: "ai_ml", label: "Artificial Intelligence / Machine Learning" },
        { value: "data", label: "Data Engineering / Analytics" },
        { value: "devops", label: "DevOps / Cloud / Infrastructure" },
        { value: "design", label: "UI/UX Design" },
        { value: "marketing", label: "Digital Marketing / Growth" },
        { value: "consulting", label: "Business Consulting / Strategy" },
        { value: "pm", label: "Project / Product Management" },
        { value: "security", label: "Cybersecurity" },
        { value: "other", label: "Other" }
      ],
      experiences: [
        { value: "0-1", label: "Less than 1 year" },
        { value: "1-3", label: "1 - 3 years" },
        { value: "3-5", label: "3 - 5 years" },
        { value: "5-8", label: "5 - 8 years" },
        { value: "8+", label: "8+ years" }
      ],
      modalities: [
        { value: "remote", label: "100% Remote" },
        { value: "hybrid", label: "Hybrid" },
        { value: "onsite", label: "On-site" }
      ],
      availabilities: [
        { value: "full-time", label: "Full time (40h/week)" },
        { value: "part-time", label: "Part time (20h/week)" },
        { value: "freelance", label: "Freelance / Per project" },
        { value: "hours", label: "Per hour (under 20h/week)" }
      ],
      submit: "Submit my profile",
      successTitle: "Profile received!",
      successDesc: "Thank you for wanting to be part of 3Cats. We'll review your profile and get in touch when we have a project that fits you perfectly.",
      successCta: "Back to home"
    }
  }
};

type LanguageContextType = {
  language: Language;
  t: Dictionary;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('en')) {
      setLanguage('en');
    } else {
      setLanguage('es');
    }
    setIsInitialized(true);
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  if (!isInitialized) return null;

  return (
    <LanguageContext.Provider value={{ language, t: dictionaries[language], toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
