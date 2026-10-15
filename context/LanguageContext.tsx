"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'es' | 'en';

type Dictionary = {
  [key: string]: string | string[] | any;
};

const dictionaries: Record<Language, Dictionary> = {
  es: {
    brand: {
      name: "3Cats",
      subtitle: "SOFTWARE DEVELOPMENT & PROJECT DELIVERY",
      tagline: "IDEAS | PROYECTOS | RESULTADOS",
      slogan: "Proyectos que impulsan tu negocio",
      equation: "Estrategia + Personas + Tecnología = Resultados",
      valueReal: "TECNOLOGÍA Y PERSONAS PARA UN MAYOR VALOR REAL",
      bottomBarLeft: "PROYECTOS QUE IMPULSAN TU NEGOCIO",
      bottomBarRight: "TECNOLOGÍA · PERSONAS · PROPÓSITO",
    },
    nav: {
      services: "Servicios",
      methodology: "Metodología",
      solutions: "Soluciones",
      about: "Nosotros",
      talent: "Red de Talento",
      contact: "Contacto",
      cta: "Agendar Consulta",
    },
    hero: {
      tag: "SOFTWARE DEVELOPMENT & PROJECT DELIVERY",
      motto: "IDEAS · PROYECTOS · RESULTADOS",
      titlePrefix: "Proyectos que impulsan",
      titleHighlight: "tu negocio",
      equation: "Estrategia + Personas + Tecnología = Resultados",
      desc: "Desarrollamos soluciones de software de clase empresarial, lideramos la gerencia estratégica de proyectos y brindamos consultoría tecnológica enfocada en resultados medibles para el sector corporativo.",
      btnPrimary: "Iniciar Proyecto",
      btnSecondary: "Ver Metodología",
      pillars: [
        {
          id: "software",
          title: "Desarrollo de software",
          desc: "Arquitecturas cloud-native robustas, código limpio y plataformas de alta escalabilidad.",
          icon: "code"
        },
        {
          id: "pm",
          title: "Gestión de proyectos",
          desc: "Planificación rigurosa, equipos alineados y entrega continua bajo metodologías ágiles.",
          icon: "users"
        },
        {
          id: "consulting",
          title: "Consultoría tecnológica",
          desc: "Alineación estratégica de TI con los objetivos de negocio para maximizar el ROI.",
          icon: "chart"
        },
        {
          id: "custom",
          title: "Soluciones a la medida",
          desc: "Sistemas empresariales personalizados diseñados para la ventaja competitiva de tu organización.",
          icon: "rocket"
        }
      ],
      badgeTitle: "TECNOLOGÍA Y PERSONAS PARA UN MAYOR",
      badgeHighlight: "VALOR REAL"
    },
    equationSection: {
      tag: "NUESTRA FÓRMULA DE VALOR",
      title: "Estrategia + Personas + Tecnología = Resultados",
      desc: "En el entorno corporativo actual, el software no se construye en el vacío. Combinamos visión de negocio, talento especializado de élite y tecnología probada para asegurar que cada proyecto genere impacto real en el balance de tu organización.",
      items: [
        {
          title: "Estrategia Clara",
          desc: "Definición rigurosa del roadmap, análisis de viabilidad técnica y alineación directa con los KPIs comerciales de tu empresa."
        },
        {
          title: "Personas de Élite",
          desc: "Líderes técnicos, ingenieros senior y gerentes de proyecto certificados con probada experiencia en entregas de alto riesgo."
        },
        {
          title: "Tecnología Escalable",
          desc: "Estándares modernos de ingeniería, ciberseguridad integrada, microservicios y despliegue continuo con cero fricción."
        },
        {
          title: "Resultados Tangibles",
          desc: "Entregables a tiempo, cumplimiento de presupuesto, código auditado y soluciones preparadas para el crecimiento sostenido."
        }
      ]
    },
    methodology: {
      tag: "METODOLOGÍA & GESTIÓN DE PROYECTOS",
      title: "La Gerencia de Proyectos convierte metas en",
      titleHighlight: "realidades.",
      desc: "Con planificación, equipo, tecnología y seguimiento, los objetivos dejan de ser una intención para convertirse en resultados medibles.",
      nodes: [
        {
          num: "01",
          title: "OBJETIVOS CLAROS",
          subtitle: "Definimos el rumbo desde el inicio.",
          detail: "Establecemos alcances precisos, métricas de éxito (OKRs/KPIs), matriz de riesgos y viabilidad técnica antes del primer sprint."
        },
        {
          num: "02",
          title: "EQUIPOS ALINEADOS",
          subtitle: "Conectamos talento y capacidades.",
          detail: "Configuramos squads multidisciplinarios con roles transparentes, comunicación directa y liderazgo enfocado en el objetivo del negocio."
        },
        {
          num: "03",
          title: "EJECUCIÓN DISCIPLINADA",
          subtitle: "Gestionamos avances, riesgos y cambios.",
          detail: "Monitoreo continuo de sprints, QA riguroso, control de desvíos en tiempo real y reportes ejecutivos para stakeholders."
        },
        {
          num: "04",
          title: "RESULTADOS TANGIBLES",
          subtitle: "Impulsamos el éxito de tu organización.",
          detail: "Despliegues en producción seguros, transferencia metodológica, observabilidad total y soporte empresarial post-lanzamiento."
        }
      ]
    },
    services: {
      tag: "CAPACIDADES CORPORATIVAS B2B",
      title: "Servicios diseñados para organizaciones exigentes",
      desc: "Ofrecemos soporte integral de punta a punta: desde la ideación estratégica y arquitectura técnica hasta el desarrollo y gobierno continuo.",
      items: [
        {
          id: "dev",
          badge: "Core Engineering",
          title: "Desarrollo de Software Enterprise",
          desc: "Construimos aplicaciones web, móviles y backend escalables preparadas para transacciones masivas y altos estándares de disponibilidad.",
          bullets: ["Microservicios y APIs RESTful/GraphQL", "Sistemas Cloud-Native en AWS/GCP/Azure", "Bases de datos distribuidas y alta concurrencia", "Auditoría de seguridad y control de calidad (QA)"]
        },
        {
          id: "pm",
          badge: "Project Governance",
          title: "Gestión y Gerencia de Proyectos",
          desc: "Lideramos la dirección de iniciativas complejas asegurando cumplimiento estricto de plazos, presupuestos y calidad con marcos ágiles probados.",
          bullets: ["Oficina de Gestión de Proyectos (PMO)", "Scrum & Kanban a escala corporativa", "Gestión activa de riesgos y dependencias", "Tableros de control y reporting para C-Level"]
        },
        {
          id: "consulting",
          badge: "Strategic Advisory",
          title: "Consultoría y Arquitectura Tecnológica",
          desc: "Guiamos a las empresas en su proceso de modernización tecnológica, reducción de deuda técnica y adopción de arquitecturas del futuro.",
          bullets: ["Evaluación y modernización de código legacy", "Estrategia de migración y optimización Cloud", "Políticas de ciberseguridad y gobernanza", "Alineación de stack con objetivos corporativos"]
        },
        {
          id: "custom",
          badge: "Custom Systems",
          title: "Soluciones a la Medida & Automatización",
          desc: "Desarrollo de herramientas propietarias, automatización de flujos operativos complejos e integración con los ecosistemas actuales de la empresa.",
          bullets: ["Plataformas ERP y CRM personalizadas", "Workflows automatizados y orquestación", "Modelos de Inteligencia Artificial aplicada", "Integración de pasarelas, ERPs y servicios externos"]
        }
      ]
    },
    solutions: {
      tag: "PORTAFOLIO DE SOLUCIONES",
      title: "Soluciones de Alto Impacto que Implementamos",
      desc: "Respaldamos operaciones corporativas a través de arquitecturas robustas y escalables.",
      items: [
        { title: "Plataformas Empresariales", desc: "Sistemas centralizados para digitalizar y optimizar la operación de compañías a escala nacional e internacional." },
        { title: "Sistemas ERP y CRM a Medida", desc: "Gestión operativa y de relaciones comerciales alineada fielmente a los flujos únicos de tu industria." },
        { title: "Aplicaciones Web de Alto Tráfico", desc: "Soluciones web ultrarrápidas, seguras y preparadas para soportar picos críticos de concurrencia." },
        { title: "Aplicaciones Móviles Nativas y Cross", desc: "Apps corporativas para iOS y Android con experiencia de usuario impecable para equipos y clientes." },
        { title: "Portales SaaS & Multitenant", desc: "Arquitecturas cloud-ready para comercializar plataformas de software con modelos de suscripción y facturación." },
        { title: "Business Intelligence & Dashboards", desc: "Consolidación de fuentes de datos dispersas en paneles analíticos en tiempo real para toma de decisiones ejecutivas." },
        { title: "Automatización de Procesos con IA", desc: "Agentes inteligentes y automatización de flujos repetitivos que incrementan la productividad operativa." },
        { title: "Arquitectura de Integraciones & APIs", desc: "Conexión fluida entre plataformas heredadas, servicios en la nube y software de terceros sin fricción." }
      ]
    },
    stats: {
      tag: "NUESTROS COMPROMISOS",
      title: "Resultados que respaldan nuestra reputación",
      desc: "La satisfacción corporativa se construye con métricas verificables y disciplina operativa.",
      items: [
        { num: "100%", label: "Proyectos entregados bajo metodología" },
        { num: "+10", label: "Años de trayectoria combinada en ingeniería" },
        { num: "4", label: "Pilares estratégicos integrados" },
        { num: "99.9%", label: "Cumplimiento de acuerdos SLA en producción" }
      ]
    },
    talent: {
      tag: "¿BUSCAS TALENTO TECH SENIOR O ALIANZA?",
      title: "Red de Profesionales & Partners Estratégicos",
      desc: "En 3Cats conectamos ingenieros senior, arquitectos de software y líderes de proyecto con retos tecnológicos empresariales de alta envergadura.",
      benefits: [
        { icon: "🛡️", title: "Proyectos Enterprise de Alto Calibre", desc: "Iniciativas estratégicas con clientes corporativos líderes en su sector." },
        { icon: "⚡", title: "Cultura de Excelencia Técnica", desc: "Equipos que valoran las buenas prácticas, la arquitectura limpia y la entrega formal." },
        { icon: "🤝", title: "Alianzas y Flexibilidad", desc: "Formatos de colaboración por proyecto o asignación de squad especializado." }
      ],
      cta: "Registrarse en la Red"
    },
    contact: {
      tag: "INICIAR CONVERSACIÓN",
      title: "¿Listo para impulsar tus proyectos estratégicos?",
      desc: "Conversemos sobre los retos y metas de tu compañía. Nuestro equipo directivo responderá en menos de 24 horas con una propuesta orientada a valor.",
      form: {
        name: "Nombre y Apellido",
        namePlaceholder: "Ej. Carlos Mendoza",
        email: "Correo Corporativo",
        emailPlaceholder: "carlos@empresa.com",
        company: "Empresa / Organización",
        companyPlaceholder: "Ej. Corporación Andina S.A.",
        service: "Servicio de Interés",
        servicePlaceholder: "Selecciona una opción...",
        message: "Describe el alcance del proyecto",
        messagePlaceholder: "¿Cuáles son los objetivos, plazos estimados o desafíos de tu iniciativa?",
        submit: "Solicitar Consulta Estratégica",
        submitting: "Enviando solicitud...",
        success: "¡Solicitud enviada con éxito! Un director de proyecto se comunicará contigo a la brevedad."
      },
      direct: {
        emailLabel: "Correo Corporativo",
        emailVal: "contacto@3cats.com",
        locationLabel: "Atención B2B",
        locationVal: "Proyectos Regionales & Globales",
        hoursLabel: "SLA de Respuesta",
        hoursVal: "Menos de 24 horas hábiles"
      }
    },
    footer: {
      title: "Impulsa tu organización con soluciones tecnológicas de alto nivel",
      desc: "3Cats: Software Development & Project Delivery. Transformando metas complejas en realidades empresariales medibles.",
      cta: "Agendar Llamada Directiva",
      contactInfo: "Contacto Corporativo",
      aboutUs: "Pilares de Servicio",
      hiring: "Para Profesionales",
      hiringLink: "Únete a la Red Senior",
      rights: "Todos los derechos reservados. Confidencialidad y seguridad empresarial garantizada.",
      links: [
        { label: "Desarrollo de Software", href: "#services" },
        { label: "Gerencia de Proyectos", href: "#methodology" },
        { label: "Consultoría TI", href: "#services" },
        { label: "Soluciones a Medida", href: "#solutions" }
      ]
    },
    register: {
      pageTag: "Red de Talento Senior 3Cats",
      pageTitle: "Participa en proyectos empresariales de alto impacto",
      pageDesc: "Buscamos ingenieros, arquitectos y directores de proyecto senior para integrarse a iniciativas corporativas de vanguardia.",
      leftTitle: "¿Por qué colaborar con 3Cats?",
      leftBenefits: [
        "Involucramiento en proyectos con empresas líderes e industrias en transformación",
        "Estructura organizada, metodologías ágiles consolidadas y respeto por los plazos",
        "Tarifas competitivas a nivel enterprise con liquidación puntual garantizada",
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
  },
  en: {
    brand: {
      name: "3Cats",
      subtitle: "SOFTWARE DEVELOPMENT & PROJECT DELIVERY",
      tagline: "IDEAS | PROJECTS | RESULTS",
      slogan: "Projects that drive your business",
      equation: "Strategy + People + Technology = Results",
      valueReal: "TECHNOLOGY AND PEOPLE FOR GREATER REAL VALUE",
      bottomBarLeft: "PROJECTS THAT DRIVE YOUR BUSINESS",
      bottomBarRight: "TECHNOLOGY · PEOPLE · PURPOSE",
    },
    nav: {
      services: "Services",
      methodology: "Methodology",
      solutions: "Solutions",
      about: "About Us",
      talent: "Talent Network",
      contact: "Contact",
      cta: "Schedule a Call",
    },
    hero: {
      tag: "SOFTWARE DEVELOPMENT & PROJECT DELIVERY",
      motto: "IDEAS · PROJECTS · RESULTS",
      titlePrefix: "Projects that drive",
      titleHighlight: "your business",
      equation: "Strategy + People + Technology = Results",
      desc: "We build enterprise-grade software solutions, lead strategic project management, and deliver high-impact technology consulting with measurable corporate ROI.",
      btnPrimary: "Start a Project",
      btnSecondary: "Explore Methodology",
      pillars: [
        {
          id: "software",
          title: "Software Development",
          desc: "Robust cloud-native architectures, clean code, and high-scale enterprise platforms.",
          icon: "code"
        },
        {
          id: "pm",
          title: "Project Management",
          desc: "Rigorous planning, aligned teams, and continuous delivery under agile frameworks.",
          icon: "users"
        },
        {
          id: "consulting",
          title: "Tech Consulting",
          desc: "Strategic IT alignment with business objectives to maximize corporate ROI.",
          icon: "chart"
        },
        {
          id: "custom",
          title: "Tailored Solutions",
          desc: "Custom enterprise platforms engineered to deliver sustainable competitive advantage.",
          icon: "rocket"
        }
      ],
      badgeTitle: "TECHNOLOGY AND PEOPLE FOR GREATER",
      badgeHighlight: "REAL VALUE"
    },
    equationSection: {
      tag: "OUR VALUE FORMULA",
      title: "Strategy + People + Technology = Results",
      desc: "In today's corporate landscape, software cannot exist in a silo. We combine sharp business vision, elite specialized talent, and proven enterprise engineering to make sure every delivery accelerates your balance sheet.",
      items: [
        {
          title: "Clear Strategy",
          desc: "Rigorous roadmap definition, technical feasibility analysis, and explicit alignment with corporate KPIs."
        },
        {
          title: "Elite People",
          desc: "Senior technical leaders, software engineers, and certified project managers with proven execution track records."
        },
        {
          title: "Scalable Technology",
          desc: "Modern engineering standards, baked-in cybersecurity, microservices, and continuous delivery with zero friction."
        },
        {
          title: "Tangible Results",
          desc: "On-time delivery, budget discipline, audited code quality, and platforms engineered for sustained organizational growth."
        }
      ]
    },
    methodology: {
      tag: "METHODOLOGY & PROJECT DELIVERY",
      title: "Project Management turns goals into",
      titleHighlight: "realities.",
      desc: "With planning, team alignment, technology, and oversight, objectives stop being an intention and become measurable outcomes.",
      nodes: [
        {
          num: "01",
          title: "CLEAR OBJECTIVES",
          subtitle: "We set the direction from day one.",
          detail: "We establish precise scopes, business KPIs/OKRs, risk matrices, and architectural feasibility before the first sprint begins."
        },
        {
          num: "02",
          title: "ALIGNED TEAMS",
          subtitle: "We connect talent and capability.",
          detail: "We assemble senior multidisciplinary squads with transparent roles, proactive communication, and business-focused leadership."
        },
        {
          num: "03",
          title: "DISCIPLINED EXECUTION",
          subtitle: "We govern progress, risks, and changes.",
          detail: "Continuous sprint tracking, rigorous QA automation, real-time risk mitigation, and executive reporting for stakeholders."
        },
        {
          num: "04",
          title: "TANGIBLE RESULTS",
          subtitle: "We drive your organization's success.",
          detail: "Secure production rollouts, methodology handoff, end-to-end observability, and enterprise post-launch support."
        }
      ]
    },
    services: {
      tag: "ENTERPRISE B2B CAPABILITIES",
      title: "Technology services engineered for demanding corporations",
      desc: "We provide end-to-end capabilities: from strategic ideation and enterprise architecture to robust development and governance.",
      items: [
        {
          id: "dev",
          badge: "Core Engineering",
          title: "Enterprise Software Development",
          desc: "We build scalable web, mobile, and backend systems ready for massive transaction volumes and critical SLA requirements.",
          bullets: ["Microservices & RESTful/GraphQL APIs", "Cloud-Native systems on AWS/GCP/Azure", "High-concurrency distributed architectures", "Comprehensive QA and security audits"]
        },
        {
          id: "pm",
          badge: "Project Governance",
          title: "End-to-End Project Delivery",
          desc: "We lead complex initiatives with strict adherence to timelines, budgets, and quality standards through proven agile governance.",
          bullets: ["Project Management Office (PMO)", "Scrum & Kanban at enterprise scale", "Proactive dependency & risk mitigation", "Executive dashboards for C-Level leadership"]
        },
        {
          id: "consulting",
          badge: "Strategic Advisory",
          title: "Tech Consulting & Architecture",
          desc: "We guide organizations through system modernization, legacy refactoring, and cloud-native architecture adoption.",
          bullets: ["Technical debt audit & code refactoring", "Cloud migration and DevOps pipelines", "Cybersecurity & IT governance standards", "Strategic tech stack optimization"]
        },
        {
          id: "custom",
          badge: "Custom Systems",
          title: "Tailored Systems & Automation",
          desc: "Custom-built platforms, workflow automation, and applied artificial intelligence integrated into your existing operational landscape.",
          bullets: ["Custom ERP / CRM implementations", "Automated enterprise workflows", "Applied AI and machine learning models", "Third-party and ERP seamless integrations"]
        }
      ]
    },
    solutions: {
      tag: "SOLUTIONS PORTFOLIO",
      title: "High-Impact Enterprise Solutions",
      desc: "Empowering corporate operations through robust and scalable digital architectures.",
      items: [
        { title: "Enterprise Platforms", desc: "Centralized systems designed to digitize and streamline high-volume operations at multinational scale." },
        { title: "Custom ERP & CRM Systems", desc: "Operational and client management platforms tailored exactly to your unique organizational workflows." },
        { title: "High-Traffic Web Applications", desc: "Ultra-fast, secure, and resilient web solutions built to handle peak traffic demands." },
        { title: "Native & Cross-Platform Mobile", desc: "Enterprise iOS and Android applications with intuitive UX for corporate teams and end users." },
        { title: "SaaS & Multitenant Portals", desc: "Cloud architectures engineered to launch and scale subscription-based digital software products." },
        { title: "Business Intelligence & BI Dashboards", desc: "Consolidation of scattered data sources into real-time analytical cockpits for executive decisions." },
        { title: "AI-Powered Process Automation", desc: "Intelligent agents and automated workflows that eliminate manual friction and elevate operational speed." },
        { title: "API Gateway & System Integration", desc: "Frictionless interconnectivity between legacy databases, modern cloud services, and external APIs." }
      ]
    },
    stats: {
      tag: "OUR COMMITMENT",
      title: "Proven metrics backing our corporate delivery",
      desc: "Corporate trust is founded on quantifiable outcomes and operational discipline.",
      items: [
        { num: "100%", label: "Projects delivered under rigorous methodology" },
        { num: "+10", label: "Years of combined engineering and delivery track record" },
        { num: "4", label: "Integrated strategic capability pillars" },
        { num: "99.9%", label: "SLA compliance in high-availability production environments" }
      ]
    },
    talent: {
      tag: "SENIOR TECH TALENT & PARTNERSHIPS",
      title: "Enterprise Professional & Partner Network",
      desc: "At 3Cats we connect senior engineers, software architects, and agile delivery managers with major corporate initiatives.",
      benefits: [
        { icon: "🛡️", title: "Enterprise-Caliber Projects", desc: "High-stakes initiatives with leading companies across diverse industries." },
        { icon: "⚡", title: "Engineering Excellence Culture", desc: "Teams dedicated to clean code, robust architectures, and disciplined delivery." },
        { icon: "🤝", title: "Flexible Collaboration", desc: "Project-based engagements or dedicated senior squad placements." }
      ],
      cta: "Apply to the Network"
    },
    contact: {
      tag: "START A CONVERSATION",
      title: "Ready to accelerate your corporate technology goals?",
      desc: "Let's discuss your organization's challenges and objectives. Our senior team will respond within 24 hours with a value-focused evaluation.",
      form: {
        name: "Full Name",
        namePlaceholder: "E.g. David Miller",
        email: "Corporate Email",
        emailPlaceholder: "david@company.com",
        company: "Company / Organization",
        companyPlaceholder: "E.g. Global Logistics Inc.",
        service: "Area of Interest",
        servicePlaceholder: "Select an option...",
        message: "Describe your project scope",
        messagePlaceholder: "What are your core objectives, estimated timelines, or key challenges?",
        submit: "Request Strategic Consultation",
        submitting: "Sending request...",
        success: "Request sent successfully! A project director will reach out shortly."
      },
      direct: {
        emailLabel: "Corporate Inquiries",
        emailVal: "contact@3cats.com",
        locationLabel: "B2B Delivery",
        locationVal: "Regional & Global Deployments",
        hoursLabel: "Response SLA",
        hoursVal: "Under 24 business hours"
      }
    },
    footer: {
      title: "Empowering enterprises through high-performance technology delivery",
      desc: "3Cats: Software Development & Project Delivery. Converting complex ambitions into measurable corporate realities.",
      cta: "Schedule Executive Briefing",
      contactInfo: "Corporate Inquiries",
      aboutUs: "Service Pillars",
      hiring: "For Professionals",
      hiringLink: "Join Senior Network",
      rights: "All rights reserved. Strict corporate confidentiality and data security guaranteed.",
      links: [
        { label: "Software Development", href: "#services" },
        { label: "Project Management", href: "#methodology" },
        { label: "Tech Consulting", href: "#services" },
        { label: "Tailored Solutions", href: "#solutions" }
      ]
    },
    register: {
      pageTag: "3Cats Senior Talent Network",
      pageTitle: "Join high-impact enterprise technology initiatives",
      pageDesc: "We partner with senior engineers, solutions architects, and delivery leads to drive mission-critical corporate projects.",
      leftTitle: "Why partner with 3Cats?",
      leftBenefits: [
        "Direct access to enterprise clients transforming their core industries",
        "Disciplined agile methodologies, clear scopes, and respectful workflows",
        "Competitive corporate-tier compensation with guaranteed on-time settlement",
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
    try {
      const stored = localStorage.getItem('3cats_lang') as Language;
      if (stored === 'es' || stored === 'en') {
        setLanguage(stored);
      } else {
        const browserLang = navigator.language?.toLowerCase() || '';
        setLanguage(browserLang.startsWith('en') ? 'en' : 'es');
      }
    } catch {
      setLanguage('es');
    }
    setIsInitialized(true);
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === 'es' ? 'en' : 'es';
      try {
        localStorage.setItem('3cats_lang', next);
      } catch {}
      return next;
    });
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
