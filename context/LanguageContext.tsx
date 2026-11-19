"use client";

import React, { createContext, useContext, useState, useEffect, useSyncExternalStore } from 'react';

type Language = 'es' | 'en';

const es = {
  brand: {
    name: "3CATS",
    subtitle: "SOFTWARE DEVELOPMENT & PROJECT DELIVERY",
    tagline: "TECNOLOGÍA · INTELIGENCIA · ESTRATEGIA",
    slogan: "Tecnología con visión de negocio",
    equation: "Tecnología + Inteligencia + Estrategia = Resultados",
    bottomBarLeft: "TECNOLOGÍA CON VISIÓN DE NEGOCIO",
    bottomBarRight: "TECHNOLOGY THAT MOVES BUSINESS FORWARD",
  },
  nav: {
    services: "Servicios",
    methodology: "Metodología",
    model: "Modelo",
    about: "Nosotros",
    talent: "Red de Talento",
    contact: "Contacto",
    cta: "Agendar Conversación",
    menu: "Navegación",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  hero: {
    motto: "SOFTWARE DEVELOPMENT & PROJECT DELIVERY",
    titlePrefix: "Ingeniería tecnológica para",
    titleHighlight: "transformar negocios",
    equation: "Tecnología + Inteligencia + Estrategia = Resultados",
    desc: "Ayudamos a las organizaciones a evolucionar mediante el diseño, desarrollo e implementación de soluciones en automatización, inteligencia artificial, datos y software a la medida.",
    btnPrimary: "Agendar Conversación",
    btnSecondary: "Ver Metodología",
    pillars: [
      { id: "automation", title: "Automatización de procesos", icon: "flow" },
      { id: "ai", title: "Agentes de IA", icon: "ai" },
      { id: "data", title: "Datos & BI", icon: "data" },
      { id: "cloud", title: "Arquitectura cloud", icon: "cloud" },
      { id: "software", title: "Software a la medida", icon: "code" },
      { id: "consulting", title: "Consultoría & proyectos", icon: "compass" }
    ],
    badgeTitle: "TECNOLOGÍA CON VISIÓN DE",
    badgeHighlight: "NEGOCIO"
  },
  cockpit: {
    title: "3CATS DELIVERY CONSOLE",
    status: "Proyecto activo",
    tabs: { delivery: "Seguimiento", architecture: "Arquitectura", governance: "Gobierno" },
    sprintLabel: "Sprint activo",
    sprintName: "Sprint 14: Automatización de aprobaciones",
    onTrack: "En plazo",
    progressLabel: "Avance de entregables",
    progressVal: "88% (42/48)",
    tasksDone: ["Agente IA conectado al ERP", "Pipeline de datos ETL en staging"],
    taskPending: "Dashboard ejecutivo de KPIs en validación",
    archLabel: "Arquitectura de la solución",
    arch: [
      { k: "INTEGRACIÓN", v: "APIs y orquestación" },
      { k: "INTELIGENCIA", v: "Agentes IA + RAG" },
      { k: "DATOS", v: "Data Warehouse + BI" },
      { k: "CLOUD", v: "Infraestructura escalable" }
    ],
    governance: [
      { k: "Metodología", v: "Scrum · Kanban" },
      { k: "Alcance, tiempo y costos", v: "Bajo control" },
      { k: "Riesgos", v: "Seguimiento continuo" }
    ]
  },
  equationSection: {
    tag: "QUIÉNES SOMOS",
    title: "Tecnología con visión de negocio",
    desc: "3CATS ayuda a las organizaciones a evolucionar mediante soluciones en automatización, inteligencia artificial, datos y desarrollo digital. Integramos talento especializado y gestión profesional para convertir necesidades empresariales en soluciones concretas.",
    items: [
      { title: "Tecnología", desc: "Software, cloud e integraciones construidos con estándares de ingeniería y preparados para evolucionar." },
      { title: "Inteligencia", desc: "Inteligencia artificial y datos aplicados para ampliar capacidades y respaldar cada decisión." },
      { title: "Estrategia", desc: "Dirección de proyectos que alinea cada entrega con los objetivos del negocio." },
      { title: "Resultados", desc: "Soluciones concretas, medibles y sostenibles que impulsan a su organización." }
    ]
  },
  methodology: {
    tag: "METODOLOGÍA DE ENTREGA",
    title: "De la necesidad a la",
    titleHighlight: "solución.",
    desc: "Un proceso estructurado en seis etapas que brinda visibilidad y control en cada fase del proyecto.",
    phase: "ETAPA",
    nodes: [
      { num: "01", title: "DESCUBRIMIENTO", subtitle: "Entendemos su negocio.", detail: "Analizamos el contexto, los procesos y las necesidades de su organización." },
      { num: "02", title: "DISEÑO", subtitle: "Definimos la solución.", detail: "Establecemos la solución y la arquitectura adecuadas para sus objetivos." },
      { num: "03", title: "PLANEACIÓN", subtitle: "Organizamos el camino.", detail: "Acordamos alcance, equipo, cronograma y entregables." },
      { num: "04", title: "EJECUCIÓN", subtitle: "Construimos por iteraciones.", detail: "Desarrollo e implementación iterativa con avances visibles." },
      { num: "05", title: "VALIDACIÓN", subtitle: "Aseguramos la calidad.", detail: "Pruebas, control de calidad y aceptación de cada entrega." },
      { num: "06", title: "EVOLUCIÓN", subtitle: "Acompañamos el crecimiento.", detail: "Soporte y mejora continua de la solución en el tiempo." }
    ]
  },
  services: {
    tag: "6 EJES DE SERVICIO",
    title: "Capacidades integradas para transformar su negocio",
    desc: "Cubrimos el ciclo completo de la transformación tecnológica: desde la automatización y la inteligencia artificial hasta la arquitectura, el software y la gestión del proyecto.",
    cta: "Conversar sobre este servicio",
    more: "Ver todo",
    less: "Ver menos",
    items: [
      {
        id: "automation", badge: "Automatización",
        title: "Automatización Inteligente de Procesos",
        focus: "Automatizamos procesos. Liberamos capacidades.",
        desc: "Transformamos actividades manuales y repetitivas en procesos digitales eficientes, conectados y controlados.",
        bullets: ["Automatización de procesos empresariales", "Flujos de trabajo y aprobaciones", "Automatización documental", "Integración entre aplicaciones", "Automatización de tareas operativas", "Orquestación de procesos"]
      },
      {
        id: "ai", badge: "Inteligencia Artificial",
        title: "Agentes y Soluciones de IA",
        focus: "La inteligencia artificial trabajando para su organización.",
        desc: "Diseñamos e integramos soluciones basadas en IA que amplían las capacidades operativas y facilitan el acceso al conocimiento empresarial.",
        bullets: ["Agentes inteligentes empresariales", "Asistentes virtuales", "Sistemas RAG y consulta de conocimiento corporativo", "Automatización de procesos mediante IA", "Integración con modelos de lenguaje (LLMs)", "Agentes conectados a sistemas empresariales"]
      },
      {
        id: "data", badge: "Datos & BI",
        title: "Datos e Inteligencia de Negocios",
        focus: "Convertimos datos en decisiones.",
        desc: "Integramos, modelamos y visualizamos su información para que cada decisión se apoye en datos confiables.",
        bullets: ["Integración y procesamiento de datos", "Procesos ETL y ELT", "Modelado de datos", "Data Warehouse", "Dashboards ejecutivos y KPIs", "Analítica empresarial"]
      },
      {
        id: "cloud", badge: "Cloud",
        title: "Arquitectura e Ingeniería Cloud",
        focus: "Arquitecturas preparadas para evolucionar.",
        desc: "Diseñamos, migramos y modernizamos infraestructuras en la nube alineadas con el crecimiento de su negocio.",
        bullets: ["Arquitectura de soluciones cloud", "Diseño de infraestructura", "Migración de aplicaciones y datos", "Integración de servicios en la nube", "Optimización de recursos tecnológicos", "Modernización de arquitecturas existentes"]
      },
      {
        id: "software", badge: "Software",
        title: "Ingeniería de Software a la Medida",
        focus: "Software diseñado alrededor de su negocio.",
        desc: "Desarrollamos aplicaciones y plataformas alineadas con los procesos, necesidades y objetivos de cada organización.",
        bullets: ["Aplicaciones web y plataformas empresariales", "Sistemas de información", "Diseño UX/UI", "Desarrollo Front-End y Back-End", "APIs e integraciones", "Bases de datos y documentación técnica"]
      },
      {
        id: "consulting", badge: "Consultoría & PMO",
        title: "Consultoría Tecnológica y Gestión de Proyectos",
        focus: "La tecnología necesita dirección para generar resultados.",
        desc: "9 años de experiencia en dirección y gestión de proyectos tecnológicos, de la estructuración al cierre.",
        bullets: ["Gerencia, estructuración y planeación", "Gestión de alcance, tiempo y costos", "Metodologías ágiles y tradicionales (Scrum, Kanban)", "Gestión de riesgos, seguimiento y control", "Consultoría en procesos de desarrollo de software"]
      }
    ]
  },
  estimator: {
    tag: "CONFIGURADOR DE PROYECTO",
    title: "Defina el punto de partida de su proyecto",
    desc: "Seleccione el tipo de solución y el equipo que necesita para conocer cómo lo abordaríamos.",
    step1: "1. Tipo de solución",
    step2: "2. Equipo requerido",
    squads: [
      { id: "full", title: "Equipo completo", desc: "Líder técnico + especialistas + QA" },
      { id: "lead", title: "Núcleo técnico", desc: "Líder técnico + especialistas clave" },
      { id: "advisory", title: "Dirección de proyecto", desc: "Gerente de proyecto + arquitecto" }
    ],
    outputLabel: "Enfoque propuesto",
    rows: [
      { k: "Metodología", v: "Scrum · Kanban" },
      { k: "Proceso", v: "6 etapas de entrega" },
      { k: "Coordinación", v: "Dirección centralizada" }
    ],
    teamLabel: "Equipo",
    cta: "Solicitar propuesta"
  },
  stats: {
    tag: "TRAYECTORIA",
    title: "Experiencia que respalda cada proyecto",
    desc: "Un modelo de trabajo probado, con dirección profesional y capacidades integradas.",
    items: [
      { num: "9", label: "Años en dirección y gestión de proyectos tecnológicos" },
      { num: "6", label: "Ejes de servicio integrados" },
      { num: "6", label: "Etapas de entrega, de la necesidad a la solución" },
      { num: "1", label: "Solo aliado tecnológico para su organización" }
    ]
  },
  solutions: {
    tag: "MODELO OPERATIVO",
    title: "El equipo adecuado para cada desafío",
    desc: "Un solo aliado tecnológico. Las capacidades necesarias para cada proyecto, con equipos multidisciplinarios bajo demanda.",
    items: [
      { title: "Núcleo de dirección", desc: "Dirección y coordinación centralizada de cada proyecto." },
      { title: "Especialistas técnicos", desc: "Perfiles incorporados según las necesidades de cada desafío." },
      { title: "Metodologías definidas", desc: "Colaboración bajo marcos de trabajo claros y acordados." },
      { title: "Entregables acordados", desc: "Responsabilidades y entregables definidos desde el inicio." }
    ],
    controlLabel: "Control transversal",
    controlTitle: "Seguimiento permanente en todo el ciclo del proyecto"
  },
  talent: {
    tag: "RED DE TALENTO",
    title: "Red de Profesionales Especializados",
    desc: "Integramos profesionales especializados a nuestros proyectos según las necesidades de cada cliente.",
    benefits: [],
    cta: "Registrarse en la Red"
  },
  contact: {
    tag: "CONTACTO",
    title: "El siguiente paso de su transformación comienza aquí.",
    desc: "Cuéntenos su necesidad e identifiquemos juntos oportunidades de mejora e innovación para su negocio.",
    channelsTitle: "Canales de contacto",
    nda: {
      title: "Confidencialidad",
      desc: "Toda la información que comparta será tratada de forma confidencial y utilizada únicamente para responder a su solicitud."
    },
    form: {
      name: "Nombre y apellido",
      namePlaceholder: "Ej. Carolina Mendoza",
      email: "Correo corporativo",
      emailPlaceholder: "nombre@empresa.com",
      company: "Empresa",
      companyPlaceholder: "Nombre de su organización",
      service: "Área de interés",
      servicePlaceholder: "Seleccione una opción...",
      serviceOther: "Aún no lo tengo definido",
      message: "Cuéntenos sobre su necesidad",
      messagePlaceholder: "Objetivos, contexto actual o desafíos que desea resolver.",
      submit: "Enviar Solicitud",
      submitting: "Enviando...",
      successTitle: "Solicitud recibida",
      success: "Gracias por contactarnos. Nuestro equipo revisará su solicitud y se comunicará con usted para coordinar una primera conversación.",
      reset: "Enviar otra solicitud"
    },
    direct: {
      emailLabel: "Correo corporativo",
      emailVal: "contacto@3cats.com",
      locationLabel: "Modalidad",
      locationVal: "Proyectos y equipos bajo demanda",
      hoursLabel: "Metodologías",
      hoursVal: "Scrum · Kanban · Tradicional"
    }
  },
  footer: {
    title: "Conectamos tecnología, inteligencia y estrategia para generar resultados",
    desc: "Acompañamos a las organizaciones en el desarrollo de nuevas capacidades tecnológicas.",
    cta: "Agendar Conversación",
    contactInfo: "Contacto",
    aboutUs: "Servicios",
    hiring: "Para Profesionales",
    hiringLink: "Únete a la Red de Talento",
    rights: "Todos los derechos reservados.",
    links: [
      { label: "Automatización de procesos", href: "/#services" },
      { label: "Agentes y soluciones de IA", href: "/#services" },
      { label: "Datos e inteligencia de negocios", href: "/#services" },
      { label: "Arquitectura cloud", href: "/#services" },
      { label: "Software a la medida", href: "/#services" },
      { label: "Consultoría y proyectos", href: "/#services" }
    ]
  },
  register: {
    pageTag: "Red de Talento 3CATS",
    pageTitle: "Participa en proyectos empresariales de alto impacto",
    pageDesc: "Buscamos ingenieros, arquitectos y directores de proyecto senior para integrarse a iniciativas corporativas de vanguardia.",
    leftTitle: "¿Por qué colaborar con 3CATS?",
    leftBenefits: [
      "Involucramiento en proyectos con empresas líderes e industrias en transformación",
      "Estructura organizada, metodologías ágiles consolidadas y respeto por los plazos",
      "Esquemas de colaboración claros, con entregables y responsabilidades acordadas",
      "Ecosistema colaborativo con pares de alto nivel técnico"
    ],
    fields: {
      name: "Nombre completo",
      namePlaceholder: "Ej. Roberto Silva",
      email: "Correo electrónico profesional",
      emailPlaceholder: "roberto@dominio.com",
      portfolio: "LinkedIn o Perfil de GitHub",
      portfolioPlaceholder: "https://linkedin.com/in/tu-perfil",
      specialization: "Área de especialización",
      specializationPlaceholder: "Selecciona tu disciplina principal...",
      experience: "Años de experiencia relevante",
      experiencePlaceholder: "Selecciona tu rango de experiencia...",
      modality: "Modalidad de trabajo preferida",
      modalityPlaceholder: "¿Cómo prefieres colaborar?",
      availability: "Disponibilidad semanal",
      availabilityPlaceholder: "¿Cuántas horas puedes dedicar?",
      bio: "Resumen de trayectoria y fortalezas",
      bioPlaceholder: "Resume en 2-3 líneas tu experiencia técnica, proyectos insignia y entorno tecnológico habitual."
    },
    specializations: [
      { value: "fullstack", label: "Ingeniería Full Stack Senior" },
      { value: "architecture", label: "Arquitectura de Software / Cloud" },
      { value: "backend", label: "Desarrollo Backend & Microservicios" },
      { value: "frontend", label: "Desarrollo Frontend Avanzado (React/Next.js)" },
      { value: "mobile", label: "Desarrollo Móvil (iOS / Android / Flutter)" },
      { value: "ai_ml", label: "Inteligencia Artificial / Machine Learning" },
      { value: "data", label: "Data Engineering & Analytics" },
      { value: "devops", label: "DevOps / SecOps / Infraestructura" },
      { value: "pm", label: "Gerencia de Proyectos (PMP / Agile Coach)" },
      { value: "qa", label: "QA Automation & Performance Testing" },
      { value: "other", label: "Otra especialidad técnica" }
    ],
    experiences: [
      { value: "3-5", label: "3 - 5 años" },
      { value: "5-8", label: "5 - 8 años (Senior)" },
      { value: "8+", label: "Más de 8 años (Lead / Principal)" },
      { value: "12+", label: "Más de 12 años (Director / Architect)" }
    ],
    modalities: [
      { value: "remote", label: "100% Remoto" },
      { value: "hybrid", label: "Híbrido" },
      { value: "onsite", label: "Presencial por proyecto" }
    ],
    availabilities: [
      { value: "full-time", label: "Dedicación Completa (40h/semana)" },
      { value: "part-time", label: "Media Dedicación (20h/semana)" },
      { value: "consulting", label: "Advisory / Por Horas de Consultoría" },
      { value: "sprint", label: "Por Sprints / Hitos de Entrega" }
    ],
    submit: "Postular al Ecosistema",
    successTitle: "¡Perfil recibido correctamente!",
    successDesc: "Nuestro equipo técnico de talento evaluará tus credenciales y te contactará para proyectos que requieran tu nivel de experiencia.",
    successCta: "Volver a la Página Principal"
  }
};

// The English dictionary must match the Spanish one key-for-key:
// a missing or extra key in either language is a compile error.
type Dictionary = typeof es;

const en: Dictionary = {
  brand: {
    name: "3CATS",
    subtitle: "SOFTWARE DEVELOPMENT & PROJECT DELIVERY",
    tagline: "TECHNOLOGY · INTELLIGENCE · STRATEGY",
    slogan: "Technology with a business vision",
    equation: "Technology + Intelligence + Strategy = Results",
    bottomBarLeft: "TECHNOLOGY WITH A BUSINESS VISION",
    bottomBarRight: "TECHNOLOGY THAT MOVES BUSINESS FORWARD",
  },
  nav: {
    services: "Services",
    methodology: "Methodology",
    model: "Model",
    about: "About",
    talent: "Talent Network",
    contact: "Contact",
    cta: "Schedule a Call",
    menu: "Navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    motto: "SOFTWARE DEVELOPMENT & PROJECT DELIVERY",
    titlePrefix: "Technology engineering to",
    titleHighlight: "transform businesses",
    equation: "Technology + Intelligence + Strategy = Results",
    desc: "We help organizations evolve by designing, building and implementing solutions in automation, artificial intelligence, data and custom software.",
    btnPrimary: "Schedule a Call",
    btnSecondary: "View Methodology",
    pillars: [
      { id: "automation", title: "Process automation", icon: "flow" },
      { id: "ai", title: "AI agents", icon: "ai" },
      { id: "data", title: "Data & BI", icon: "data" },
      { id: "cloud", title: "Cloud architecture", icon: "cloud" },
      { id: "software", title: "Custom software", icon: "code" },
      { id: "consulting", title: "Consulting & projects", icon: "compass" }
    ],
    badgeTitle: "TECHNOLOGY WITH A",
    badgeHighlight: "BUSINESS VISION"
  },
  cockpit: {
    title: "3CATS DELIVERY CONSOLE",
    status: "Active project",
    tabs: { delivery: "Tracking", architecture: "Architecture", governance: "Governance" },
    sprintLabel: "Active sprint",
    sprintName: "Sprint 14: Approval automation",
    onTrack: "On track",
    progressLabel: "Deliverables progress",
    progressVal: "88% (42/48)",
    tasksDone: ["AI agent connected to the ERP", "ETL data pipeline in staging"],
    taskPending: "Executive KPI dashboard in validation",
    archLabel: "Solution architecture",
    arch: [
      { k: "INTEGRATION", v: "APIs & orchestration" },
      { k: "INTELLIGENCE", v: "AI agents + RAG" },
      { k: "DATA", v: "Data Warehouse + BI" },
      { k: "CLOUD", v: "Scalable infrastructure" }
    ],
    governance: [
      { k: "Methodology", v: "Scrum · Kanban" },
      { k: "Scope, time & cost", v: "Under control" },
      { k: "Risks", v: "Continuous tracking" }
    ]
  },
  equationSection: {
    tag: "WHO WE ARE",
    title: "Technology with a business vision",
    desc: "3CATS helps organizations evolve through solutions in automation, artificial intelligence, data and digital development. We combine specialized talent with professional management to turn business needs into concrete solutions.",
    items: [
      { title: "Technology", desc: "Software, cloud and integrations built to engineering standards and ready to evolve." },
      { title: "Intelligence", desc: "Applied artificial intelligence and data that expand capabilities and support every decision." },
      { title: "Strategy", desc: "Project leadership that aligns every delivery with business objectives." },
      { title: "Results", desc: "Concrete, measurable and sustainable solutions that move your organization forward." }
    ]
  },
  methodology: {
    tag: "DELIVERY METHODOLOGY",
    title: "From need to",
    titleHighlight: "solution.",
    desc: "A structured six-stage process that provides visibility and control at every phase of the project.",
    phase: "STAGE",
    nodes: [
      { num: "01", title: "DISCOVERY", subtitle: "We understand your business.", detail: "We analyze your organization's context, processes and needs." },
      { num: "02", title: "DESIGN", subtitle: "We define the solution.", detail: "We set the right solution and architecture for your goals." },
      { num: "03", title: "PLANNING", subtitle: "We map the way forward.", detail: "We agree on scope, team, schedule and deliverables." },
      { num: "04", title: "EXECUTION", subtitle: "We build iteratively.", detail: "Iterative development and implementation with visible progress." },
      { num: "05", title: "VALIDATION", subtitle: "We ensure quality.", detail: "Testing, quality control and acceptance of every delivery." },
      { num: "06", title: "EVOLUTION", subtitle: "We support your growth.", detail: "Ongoing support and continuous improvement over time." }
    ]
  },
  services: {
    tag: "6 SERVICE PRACTICES",
    title: "Integrated capabilities to transform your business",
    desc: "We cover the full cycle of technology transformation: from automation and artificial intelligence to architecture, software and project management.",
    cta: "Discuss this service",
    more: "See all",
    less: "See less",
    items: [
      {
        id: "automation", badge: "Automation",
        title: "Intelligent Process Automation",
        focus: "We automate processes. We free up capacity.",
        desc: "We turn manual, repetitive work into efficient, connected and controlled digital processes.",
        bullets: ["Business process automation", "Workflows and approvals", "Document automation", "Application integration", "Operational task automation", "Process orchestration"]
      },
      {
        id: "ai", badge: "Artificial Intelligence",
        title: "AI Agents & Solutions",
        focus: "Artificial intelligence working for your organization.",
        desc: "We design and integrate AI-based solutions that expand operational capabilities and make enterprise knowledge easier to access.",
        bullets: ["Enterprise intelligent agents", "Virtual assistants", "RAG systems and corporate knowledge retrieval", "AI-driven process automation", "Large language model (LLM) integration", "Agents connected to enterprise systems"]
      },
      {
        id: "data", badge: "Data & BI",
        title: "Data & Business Intelligence",
        focus: "We turn data into decisions.",
        desc: "We integrate, model and visualize your information so every decision rests on reliable data.",
        bullets: ["Data integration and processing", "ETL and ELT pipelines", "Data modeling", "Data Warehouse", "Executive dashboards and KPIs", "Business analytics"]
      },
      {
        id: "cloud", badge: "Cloud",
        title: "Cloud Architecture & Engineering",
        focus: "Architectures built to evolve.",
        desc: "We design, migrate and modernize cloud infrastructure aligned with your business growth.",
        bullets: ["Cloud solution architecture", "Infrastructure design", "Application and data migration", "Cloud service integration", "Technology resource optimization", "Modernization of existing architectures"]
      },
      {
        id: "software", badge: "Software",
        title: "Custom Software Engineering",
        focus: "Software designed around your business.",
        desc: "We build applications and platforms aligned with each organization's processes, needs and goals.",
        bullets: ["Web applications and enterprise platforms", "Information systems", "UX/UI design", "Front-end and back-end development", "APIs and integrations", "Databases and technical documentation"]
      },
      {
        id: "consulting", badge: "Consulting & PMO",
        title: "Technology Consulting & Project Management",
        focus: "Technology needs direction to deliver results.",
        desc: "9 years of experience leading and managing technology projects, from structuring to close.",
        bullets: ["Project leadership, structuring and planning", "Scope, time and cost management", "Agile and traditional methods (Scrum, Kanban)", "Risk management, tracking and control", "Software development process consulting"]
      }
    ]
  },
  estimator: {
    tag: "PROJECT CONFIGURATOR",
    title: "Define your project's starting point",
    desc: "Select the type of solution and the team you need to see how we would approach it.",
    step1: "1. Solution type",
    step2: "2. Required team",
    squads: [
      { id: "full", title: "Full team", desc: "Tech lead + specialists + QA" },
      { id: "lead", title: "Technical core", desc: "Tech lead + key specialists" },
      { id: "advisory", title: "Project leadership", desc: "Project manager + architect" }
    ],
    outputLabel: "Proposed approach",
    rows: [
      { k: "Methodology", v: "Scrum · Kanban" },
      { k: "Process", v: "6 delivery stages" },
      { k: "Coordination", v: "Centralized leadership" }
    ],
    teamLabel: "Team",
    cta: "Request a proposal"
  },
  stats: {
    tag: "TRACK RECORD",
    title: "Experience behind every project",
    desc: "A proven way of working, with professional leadership and integrated capabilities.",
    items: [
      { num: "9", label: "Years leading and managing technology projects" },
      { num: "6", label: "Integrated service practices" },
      { num: "6", label: "Delivery stages, from need to solution" },
      { num: "1", label: "Single technology partner for your organization" }
    ]
  },
  solutions: {
    tag: "OPERATING MODEL",
    title: "The right team for every challenge",
    desc: "One technology partner. The capabilities each project needs, with multidisciplinary teams on demand.",
    items: [
      { title: "Leadership core", desc: "Centralized leadership and coordination of every project." },
      { title: "Technical specialists", desc: "Profiles brought in according to each challenge." },
      { title: "Defined methodologies", desc: "Collaboration under clear, agreed frameworks." },
      { title: "Agreed deliverables", desc: "Responsibilities and deliverables defined from day one." }
    ],
    controlLabel: "Cross-cutting control",
    controlTitle: "Continuous tracking throughout the project lifecycle"
  },
  talent: {
    tag: "TALENT NETWORK",
    title: "Specialized Professional Network",
    desc: "We bring specialized professionals into our projects based on each client's needs.",
    benefits: [],
    cta: "Apply to the Network"
  },
  contact: {
    tag: "CONTACT",
    title: "The next step in your transformation starts here.",
    desc: "Tell us about your needs and let's identify opportunities for improvement and innovation together.",
    channelsTitle: "Contact channels",
    nda: {
      title: "Confidentiality",
      desc: "All information you share will be treated confidentially and used only to respond to your request."
    },
    form: {
      name: "Full name",
      namePlaceholder: "E.g. Caroline Miller",
      email: "Work email",
      emailPlaceholder: "name@company.com",
      company: "Company",
      companyPlaceholder: "Your organization's name",
      service: "Area of interest",
      servicePlaceholder: "Select an option...",
      serviceOther: "Not defined yet",
      message: "Tell us about your needs",
      messagePlaceholder: "Goals, current context or challenges you want to solve.",
      submit: "Send Request",
      submitting: "Sending...",
      successTitle: "Request received",
      success: "Thank you for reaching out. Our team will review your request and contact you to schedule a first conversation.",
      reset: "Send another request"
    },
    direct: {
      emailLabel: "Corporate email",
      emailVal: "contacto@3cats.com",
      locationLabel: "Engagement",
      locationVal: "Projects and on-demand teams",
      hoursLabel: "Methodologies",
      hoursVal: "Scrum · Kanban · Traditional"
    }
  },
  footer: {
    title: "We connect technology, intelligence and strategy to deliver results",
    desc: "We help organizations build new technology capabilities.",
    cta: "Schedule a Call",
    contactInfo: "Contact",
    aboutUs: "Services",
    hiring: "For Professionals",
    hiringLink: "Join the Talent Network",
    rights: "All rights reserved.",
    links: [
      { label: "Process automation", href: "/#services" },
      { label: "AI agents & solutions", href: "/#services" },
      { label: "Data & business intelligence", href: "/#services" },
      { label: "Cloud architecture", href: "/#services" },
      { label: "Custom software", href: "/#services" },
      { label: "Consulting & projects", href: "/#services" }
    ]
  },
  register: {
    pageTag: "3CATS Talent Network",
    pageTitle: "Join high-impact enterprise technology initiatives",
    pageDesc: "We partner with senior engineers, solutions architects, and delivery leads to drive mission-critical corporate projects.",
    leftTitle: "Why partner with 3CATS?",
    leftBenefits: [
      "Direct access to enterprise clients transforming their core industries",
      "Disciplined agile methodologies, clear scopes, and respectful workflows",
      "Clear collaboration terms with agreed deliverables and responsibilities",
      "A peer community of senior, verified technical practitioners"
    ],
    fields: {
      name: "Full Name",
      namePlaceholder: "E.g. Robert Smith",
      email: "Professional Email",
      emailPlaceholder: "robert@domain.com",
      portfolio: "LinkedIn or GitHub Profile",
      portfolioPlaceholder: "https://linkedin.com/in/your-profile",
      specialization: "Core Discipline",
      specializationPlaceholder: "Select your primary expertise...",
      experience: "Years of Relevant Experience",
      experiencePlaceholder: "Select experience bracket...",
      modality: "Preferred Engagement",
      modalityPlaceholder: "How do you prefer to collaborate?",
      availability: "Weekly Availability",
      availabilityPlaceholder: "How many hours can you commit?",
      bio: "Executive Bio & Key Strengths",
      bioPlaceholder: "Summarize in 2-3 lines your technical background, flagship achievements, and key stack."
    },
    specializations: [
      { value: "fullstack", label: "Senior Full Stack Engineering" },
      { value: "architecture", label: "Software & Cloud Architecture" },
      { value: "backend", label: "Backend Engineering & Microservices" },
      { value: "frontend", label: "Advanced Frontend (React / Next.js)" },
      { value: "mobile", label: "Mobile Engineering (iOS / Android / Flutter)" },
      { value: "ai_ml", label: "AI / Machine Learning Engineering" },
      { value: "data", label: "Data Engineering & Analytics" },
      { value: "devops", label: "DevOps / SecOps / Cloud Infrastructure" },
      { value: "pm", label: "Technical Project Management (PMP / Agile)" },
      { value: "qa", label: "QA Automation & Performance Engineering" },
      { value: "other", label: "Other Specialized Domain" }
    ],
    experiences: [
      { value: "3-5", label: "3 - 5 years" },
      { value: "5-8", label: "5 - 8 years (Senior)" },
      { value: "8+", label: "8+ years (Lead / Staff)" },
      { value: "12+", label: "12+ years (Principal / Director)" }
    ],
    modalities: [
      { value: "remote", label: "100% Remote" },
      { value: "hybrid", label: "Hybrid" },
      { value: "onsite", label: "On-site per milestone" }
    ],
    availabilities: [
      { value: "full-time", label: "Full Time (40h/week)" },
      { value: "part-time", label: "Part Time (20h/week)" },
      { value: "consulting", label: "Advisory / Hourly Consulting" },
      { value: "sprint", label: "Sprint / Milestone-Based" }
    ],
    submit: "Submit Application",
    successTitle: "Profile Received Successfully!",
    successDesc: "Our technical leadership team will evaluate your credentials and reach out for projects matching your seniority.",
    successCta: "Return to Homepage"
  }
};

const dictionaries: Record<Language, Dictionary> = { es, en };

type LanguageContextType = {
  language: Language;
  t: Dictionary;
  toggleLanguage: () => void;
};

const subscribeNoop = () => () => {};

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'es';
  try {
    const stored = localStorage.getItem('3cats_lang');
    if (stored === 'es' || stored === 'en') return stored;
    return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es';
  } catch {
    return 'es';
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const isMounted = useSyncExternalStore(subscribeNoop, () => true, () => false);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === 'es' ? 'en' : 'es';
      try {
        localStorage.setItem('3cats_lang', next);
      } catch {}
      return next;
    });
  };

  if (!isMounted) return null;

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
