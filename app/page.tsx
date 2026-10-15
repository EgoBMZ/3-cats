"use client";

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { useState, useEffect, useRef } from 'react';
import Logo3Cats from '../components/Logo3Cats';

// ── Intersection Observer Hook for Smooth Scroll Reveals ────────────
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

// ── Clean Vector Corporate Icons ────────────────────────────────────
const IconCode = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const IconUsers = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconChart = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
    <polyline points="4 6 12 2 20 6" />
  </svg>
);

const IconRocket = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <line x1="9" y1="9" x2="9.01" y2="9" />
  </svg>
);

const IconTarget = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const IconGear = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const IconCheck = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function Home() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [cockpitTab, setCockpitTab] = useState<'delivery' | 'architecture' | 'sla'>('delivery');
  const [selectedArchLayer, setSelectedArchLayer] = useState<number>(1);
  const [estimatorService, setEstimatorService] = useState<'software' | 'pm' | 'consulting' | 'custom'>('software');
  const [estimatorSquad, setEstimatorSquad] = useState<'full' | 'lead' | 'advisory'>('full');

  // Consultation Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  // Reveal Refs
  const heroRef = useReveal();
  const formulaRef = useReveal();
  const methodologyRef = useReveal();
  const servicesRef = useReveal();
  const solutionsRef = useReveal();
  const estimatorRef = useReveal();
  const governanceRef = useReveal();
  const contactRef = useReveal();

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    await new Promise((res) => setTimeout(res, 1000));
    setFormStatus('success');
  };

  const getPillarIcon = (icon: string) => {
    switch (icon) {
      case 'code': return <IconCode />;
      case 'users': return <IconUsers />;
      case 'chart': return <IconChart />;
      case 'rocket': return <IconRocket />;
      default: return <IconCode />;
    }
  };

  const getMethodologyIcon = (index: number) => {
    switch (index) {
      case 0: return <IconTarget />;
      case 1: return <IconUsers />;
      case 2: return <IconGear />;
      case 3: return <IconChart />;
      default: return <IconTarget />;
    }
  };

  return (
    <div className="tech-grid-bg" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* ── 1. HERO SECTION (Reference: demo1.jpeg & Mobile-First) ── */}
      <section id="home" className="section" style={{ minHeight: '92vh', display: 'flex', alignItems: 'center', paddingTop: '2.5rem', paddingBottom: '3.5rem' }}>
        <div ref={heroRef} className="reveal container">
          <div className="grid lg:grid-cols-12 items-center" style={{ gap: '3rem' }}>

            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Eyebrow Badge */}
              <div className="corp-badge mb-5">
                <span className="corp-badge-pulse" />
                <span>{t.hero.motto}</span>
              </div>

              {/* Main Headline */}
              <h1 className="heading-xl mb-4" style={{ color: 'var(--text-white)' }}>
                {t.hero.titlePrefix}{' '}
                <span className="text-cyan-gradient">{t.hero.titleHighlight}</span>
              </h1>

              {/* Equation Tagline */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'rgba(0, 194, 255, 0.08)',
                  border: '1px solid rgba(0, 194, 255, 0.28)',
                  padding: '0.45rem 1.1rem',
                  borderRadius: '6px',
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(0.85rem, 2.5vw, 1rem)',
                  fontWeight: 700,
                  color: 'var(--accent-cyan)',
                  marginBottom: '1.25rem',
                }}
              >
                <span>{t.hero.equation}</span>
              </div>

              {/* Lead Description */}
              <p className="text-lead mb-8" style={{ maxWidth: '580px' }}>
                {t.hero.desc}
              </p>

              {/* Action Buttons (Mobile: full-width touch targets) */}
              <div className="flex gap-3 mb-10 w-full sm:w-auto flex-col sm:flex-row">
                <a href="#contact" className="btn-corp-primary" style={{ padding: '0.95rem 2rem', textAlign: 'center' }}>
                  {t.hero.btnPrimary}
                  <span style={{ fontSize: '1.1rem', marginLeft: '6px' }}>→</span>
                </a>
                <a href="#methodology" className="btn-corp-secondary" style={{ padding: '0.95rem 1.85rem', textAlign: 'center' }}>
                  {t.hero.btnSecondary}
                </a>
              </div>

              {/* 4 Core Pillars Bar (Directly from demo1.jpeg) */}
              <div
                className="w-full"
                style={{
                  backgroundColor: 'rgba(8, 20, 39, 0.85)',
                  border: '1px solid rgba(56, 189, 248, 0.22)',
                  borderRadius: '12px',
                  padding: '1.25rem 1rem',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.5)',
                }}
              >
                <div className="grid grid-cols-2 md:grid-cols-4 items-stretch" style={{ gap: '0.75rem' }}>
                  {t.hero.pillars.map((pillar: any, idx: number) => (
                    <div
                      key={pillar.id}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        padding: '0.5rem 0.5rem',
                        borderRight: idx < 3 ? '1px solid rgba(56, 189, 248, 0.15)' : 'none',
                      }}
                    >
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '8px',
                          backgroundColor: 'rgba(0, 194, 255, 0.12)',
                          border: '1px solid rgba(0, 194, 255, 0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--accent-cyan)',
                          marginBottom: '0.65rem',
                        }}
                      >
                        {getPillarIcon(pillar.icon)}
                      </div>
                      <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-white)', lineHeight: 1.3 }}>
                        {pillar.title}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Live Enterprise Project Delivery Cockpit (Replacing Cheesy AI Stock Photos) */}
            <div className="lg:col-span-5 flex flex-col items-center w-full">
              <div
                className="corp-card w-full"
                style={{
                  padding: 0,
                  borderRadius: '16px',
                  backgroundColor: 'rgba(6, 15, 30, 0.95)',
                  borderColor: 'rgba(0, 194, 255, 0.35)',
                  boxShadow: '0 25px 60px -10px rgba(0, 102, 255, 0.3), 0 0 35px rgba(0, 194, 255, 0.15)',
                  overflow: 'hidden',
                }}
              >
                {/* Cockpit Header Bar */}
                <div
                  style={{
                    padding: '0.9rem 1.25rem',
                    borderBottom: '1px solid rgba(56, 189, 248, 0.18)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: 'rgba(3, 7, 18, 0.8)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#EF4444' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#F59E0B' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                    <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginLeft: '0.5rem' }}>
                      3CATS DELIVERY CONSOLE
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.72rem', color: '#10B981', fontWeight: 600 }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block' }} />
                    <span>SLA 99.98%</span>
                  </div>
                </div>

                {/* Cockpit Interactive Tabs */}
                <div style={{ display: 'flex', borderBottom: '1px solid rgba(56, 189, 248, 0.12)', background: 'rgba(8, 20, 39, 0.6)' }}>
                  <button
                    onClick={() => setCockpitTab('delivery')}
                    style={{
                      flex: 1,
                      padding: '0.65rem 0.5rem',
                      background: cockpitTab === 'delivery' ? 'rgba(0, 194, 255, 0.12)' : 'transparent',
                      border: 'none',
                      borderBottom: cockpitTab === 'delivery' ? '2px solid var(--accent-cyan)' : '2px solid transparent',
                      color: cockpitTab === 'delivery' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    Sprint Tracker
                  </button>
                  <button
                    onClick={() => setCockpitTab('architecture')}
                    style={{
                      flex: 1,
                      padding: '0.65rem 0.5rem',
                      background: cockpitTab === 'architecture' ? 'rgba(0, 194, 255, 0.12)' : 'transparent',
                      border: 'none',
                      borderBottom: cockpitTab === 'architecture' ? '2px solid var(--accent-cyan)' : '2px solid transparent',
                      color: cockpitTab === 'architecture' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    Cloud Gateway
                  </button>
                  <button
                    onClick={() => setCockpitTab('sla')}
                    style={{
                      flex: 1,
                      padding: '0.65rem 0.5rem',
                      background: cockpitTab === 'sla' ? 'rgba(0, 194, 255, 0.12)' : 'transparent',
                      border: 'none',
                      borderBottom: cockpitTab === 'sla' ? '2px solid var(--accent-cyan)' : '2px solid transparent',
                      color: cockpitTab === 'sla' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    QA &amp; Governance
                  </button>
                </div>

                {/* Cockpit Interactive Content Body */}
                <div style={{ padding: '1.5rem', minHeight: '260px' }}>
                  {cockpitTab === 'delivery' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div className="flex justify-between items-center">
                        <div>
                          <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>Sprint Activo</div>
                          <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-white)' }}>Sprint 14: Core API &amp; Auth</div>
                        </div>
                        <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '4px', backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#10B981', fontWeight: 700, border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                          En Plazo (On-Track)
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div>
                        <div className="flex justify-between text-xs mb-1" style={{ color: 'var(--text-secondary)' }}>
                          <span>Avance de Entregables</span>
                          <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>88% (42/48 Hitos)</span>
                        </div>
                        <div style={{ height: '8px', backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                          <div style={{ width: '88%', height: '100%', background: 'linear-gradient(90deg, #00C2FF, #0066FF)', borderRadius: '4px' }} />
                        </div>
                      </div>

                      {/* Live Deliverables Checklist */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.82rem' }}>
                        <div className="flex items-center gap-2" style={{ color: '#E2E8F0' }}>
                          <span style={{ color: '#10B981' }}>✓</span> Microservicios autenticación mTLS completado
                        </div>
                        <div className="flex items-center gap-2" style={{ color: '#E2E8F0' }}>
                          <span style={{ color: '#10B981' }}>✓</span> Pipeline CI/CD automatizado en staging
                        </div>
                        <div className="flex items-center gap-2" style={{ color: '#E2E8F0' }}>
                          <span style={{ color: 'var(--accent-cyan)' }}>●</span> Pruebas de carga 10,000 req/sec en curso
                        </div>
                      </div>
                    </div>
                  )}

                  {cockpitTab === 'architecture' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Topología Cloud Enterprise</div>
                      <div className="grid grid-cols-2" style={{ gap: '0.65rem' }}>
                        <div style={{ padding: '0.75rem', backgroundColor: 'rgba(8, 20, 39, 0.8)', borderRadius: '8px', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                          <div style={{ fontSize: '0.72rem', color: 'var(--accent-cyan)', fontWeight: 700 }}>EDGE GATEWAY</div>
                          <div style={{ fontSize: '0.85rem', color: '#FFFFFF', fontWeight: 600 }}>Cloudflare / AWS CloudFront</div>
                        </div>
                        <div style={{ padding: '0.75rem', backgroundColor: 'rgba(8, 20, 39, 0.8)', borderRadius: '8px', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                          <div style={{ fontSize: '0.72rem', color: 'var(--accent-cyan)', fontWeight: 700 }}>ORCHESTRATION</div>
                          <div style={{ fontSize: '0.85rem', color: '#FFFFFF', fontWeight: 600 }}>Kubernetes / Docker EKS</div>
                        </div>
                        <div style={{ padding: '0.75rem', backgroundColor: 'rgba(8, 20, 39, 0.8)', borderRadius: '8px', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                          <div style={{ fontSize: '0.72rem', color: 'var(--accent-cyan)', fontWeight: 700 }}>PERSISTENCIA</div>
                          <div style={{ fontSize: '0.85rem', color: '#FFFFFF', fontWeight: 600 }}>PostgreSQL + Redis Cache</div>
                        </div>
                        <div style={{ padding: '0.75rem', backgroundColor: 'rgba(8, 20, 39, 0.8)', borderRadius: '8px', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                          <div style={{ fontSize: '0.72rem', color: 'var(--accent-cyan)', fontWeight: 700 }}>OBSERVABILITY</div>
                          <div style={{ fontSize: '0.85rem', color: '#FFFFFF', fontWeight: 600 }}>OpenTelemetry + Datadog</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {cockpitTab === 'sla' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                      <div className="flex justify-between items-center" style={{ padding: '0.5rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Uptime Garantizado</span>
                        <span style={{ fontSize: '0.9rem', color: 'var(--accent-cyan)', fontWeight: 700 }}>99.9% Mensual</span>
                      </div>
                      <div className="flex justify-between items-center" style={{ padding: '0.5rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Cobertura Pruebas QA</span>
                        <span style={{ fontSize: '0.9rem', color: '#10B981', fontWeight: 700 }}>96.4% Cobertura</span>
                      </div>
                      <div className="flex justify-between items-center" style={{ padding: '0.5rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Tiempo de Respuesta Crítico</span>
                        <span style={{ fontSize: '0.9rem', color: '#FFFFFF', fontWeight: 700 }}>&lt; 30 Minutos</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Corporate Banner from demo1.jpeg */}
                <div
                  style={{
                    padding: '1rem 1.25rem',
                    backgroundColor: 'rgba(3, 7, 18, 0.95)',
                    borderTop: '1px solid rgba(56, 189, 248, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: 700 }}>
                    {t.hero.badgeTitle}
                  </div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--accent-cyan)', letterSpacing: '0.06em' }}>
                    {t.hero.badgeHighlight}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. STRATEGIC FORMULA SECTION ──────────────────────────── */}
      <section id="about" className="section" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid rgba(56, 189, 248, 0.12)', borderBottom: '1px solid rgba(56, 189, 248, 0.12)' }}>
        <div ref={formulaRef} className="reveal container">
          
          <div className="text-center" style={{ maxWidth: '820px', margin: '0 auto 3.5rem auto' }}>
            <div className="corp-badge mb-4" style={{ margin: '0 auto 1.25rem auto' }}>
              <span>{t.equationSection.tag}</span>
            </div>
            <h2 className="heading-lg mb-4">
              {t.equationSection.title}
            </h2>
            <p className="text-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
              {t.equationSection.desc}
            </p>
          </div>

          {/* 4 Strategic Value Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '1.5rem' }}>
            {t.equationSection.items.map((item: any, i: number) => (
              <div
                key={i}
                className="corp-card"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: 'rgba(8, 20, 39, 0.75)',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div style={{ width: '32px', height: '3px', backgroundColor: 'var(--accent-cyan)', borderRadius: '2px' }} />
                    <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--accent-cyan)', fontFamily: 'var(--font-heading)' }}>
                      0{i + 1}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: 'var(--text-white)', marginBottom: '0.65rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 3. METHODOLOGY (Reference: demo2.jpeg & Mobile-First) ── */}
      <section id="methodology" className="section" style={{ position: 'relative' }}>
        <div ref={methodologyRef} className="reveal container">

          {/* Section Heading matching demo2.jpeg */}
          <div className="text-center" style={{ maxWidth: '880px', margin: '0 auto 3.5rem auto' }}>
            <div className="corp-badge mb-4" style={{ margin: '0 auto 1.25rem auto' }}>
              <span className="corp-badge-pulse" />
              <span>{t.methodology.tag}</span>
            </div>
            <h2 className="heading-xl mb-4" style={{ lineHeight: 1.15 }}>
              {t.methodology.title}{' '}
              <span className="text-cyan-gradient" style={{ borderBottom: '3px solid var(--accent-cyan)', paddingBottom: '2px' }}>
                {t.methodology.titleHighlight}
              </span>
            </h2>
            <p className="text-lead" style={{ maxWidth: '720px', margin: '0 auto' }}>
              {t.methodology.desc}
            </p>
          </div>

          {/* Interactive Stepper Pipeline (Desktop & Mobile-First Responsive) */}
          <div
            className="corp-card"
            style={{
              padding: 'clamp(1.5rem, 4vw, 3rem)',
              backgroundColor: 'rgba(6, 15, 30, 0.9)',
              borderColor: 'rgba(0, 194, 255, 0.3)',
              marginBottom: '3rem',
            }}
          >
            {/* Desktop Pipeline Laser Track */}
            <div className="hidden md:block" style={{ position: 'relative', marginBottom: '2rem' }}>
              <div
                style={{
                  position: 'absolute',
                  top: '38px',
                  left: '12%',
                  right: '12%',
                  height: '2px',
                  backgroundColor: 'rgba(0, 194, 255, 0.45)',
                  boxShadow: '0 0 12px rgba(0, 194, 255, 0.6)',
                  zIndex: 0,
                }}
              />
            </div>

            {/* Stepper Nodes */}
            <div className="grid grid-cols-1 md:grid-cols-4 items-start" style={{ gap: '2rem', position: 'relative', zIndex: 1 }}>
              {t.methodology.nodes.map((node: any, idx: number) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={node.num}
                    onClick={() => setActiveStep(idx)}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      padding: '1rem',
                      borderRadius: '12px',
                      backgroundColor: isActive ? 'rgba(0, 194, 255, 0.08)' : 'transparent',
                      border: isActive ? '1px solid rgba(0, 194, 255, 0.35)' : '1px solid transparent',
                    }}
                  >
                    {/* Circular Icon with Glow */}
                    <div
                      style={{
                        width: '74px',
                        height: '74px',
                        borderRadius: '50%',
                        backgroundColor: isActive ? 'rgba(0, 194, 255, 0.25)' : 'rgba(8, 20, 39, 0.95)',
                        border: `2px solid ${isActive ? 'var(--accent-cyan)' : 'rgba(56, 189, 248, 0.3)'}`,
                        boxShadow: isActive ? '0 0 25px rgba(0, 194, 255, 0.5)' : '0 4px 15px rgba(0, 0, 0, 0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isActive ? '#FFFFFF' : 'var(--accent-cyan)',
                        marginBottom: '1.25rem',
                        transition: 'all 0.25s ease',
                      }}
                    >
                      {getMethodologyIcon(idx)}
                    </div>

                    <div style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.14em', color: 'var(--accent-cyan)', marginBottom: '0.25rem' }}>
                      FASE {node.num}
                    </div>
                    <h3 style={{ fontSize: '1.08rem', fontWeight: 800, color: 'var(--text-white)', letterSpacing: '0.03em', marginBottom: '0.35rem' }}>
                      {node.title}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: 500, lineHeight: 1.45, marginBottom: '0.75rem' }}>
                      {node.subtitle}
                    </p>

                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                      {node.detail}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Sub-motto Strip from demo2.jpeg */}
            <div
              className="flex flex-col sm:flex-row justify-between items-center text-xs"
              style={{
                marginTop: '3rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(56, 189, 248, 0.15)',
                color: 'var(--text-secondary)',
                letterSpacing: '0.12em',
                fontWeight: 700,
                textTransform: 'uppercase',
                gap: '0.75rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--accent-cyan)', display: 'inline-block' }} />
                <span>{t.brand.bottomBarLeft}</span>
              </div>
              <div style={{ color: 'var(--accent-cyan)' }}>
                {t.brand.bottomBarRight}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 4. CORPORATE B2B SERVICES ─────────────────────────────── */}
      <section id="services" className="section" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid rgba(56, 189, 248, 0.12)' }}>
        <div ref={servicesRef} className="reveal container">

          <div className="text-center" style={{ maxWidth: '820px', margin: '0 auto 3.5rem auto' }}>
            <div className="corp-badge mb-4" style={{ margin: '0 auto 1.25rem auto' }}>
              <span>{t.services.tag}</span>
            </div>
            <h2 className="heading-lg mb-4">{t.services.title}</h2>
            <p className="text-lead">{t.services.desc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '2rem' }}>
            {t.services.items.map((srv: any, idx: number) => (
              <div
                key={srv.id}
                className="corp-card flex flex-col justify-between"
                style={{ padding: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: 'var(--accent-cyan)',
                        backgroundColor: 'rgba(0, 194, 255, 0.1)',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '4px',
                        border: '1px solid rgba(0, 194, 255, 0.25)',
                      }}
                    >
                      {srv.badge}
                    </span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600 }}>
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-white)', marginBottom: '1rem', lineHeight: 1.25 }}>
                    {srv.title}
                  </h3>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    {srv.desc}
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {srv.bullets.map((b: string, bi: number) => (
                      <li key={bi} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                        <IconCheck />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <a
                    href="#contact"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: 'var(--accent-cyan)',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    Consultar disponibilidad de squad <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 5. ENTERPRISE PROJECT SCOPE & SQUAD ESTIMATOR ─────────── */}
      <section className="section" style={{ borderTop: '1px solid rgba(56, 189, 248, 0.12)' }}>
        <div ref={estimatorRef} className="reveal container">
          
          <div className="text-center" style={{ maxWidth: '820px', margin: '0 auto 3rem auto' }}>
            <div className="corp-badge mb-4" style={{ margin: '0 auto 1.25rem auto' }}>
              <span>CONFIGURADOR ESTRATÉGICO</span>
            </div>
            <h2 className="heading-lg mb-4">Planifica el Alcance de tu Proyecto</h2>
            <p className="text-lead">
              Selecciona el tipo de solución y topología de equipo para proyectar tiempos de delivery y modelo de gobernanza.
            </p>
          </div>

          <div
            className="corp-card"
            style={{
              padding: 'clamp(1.5rem, 3.5vw, 2.75rem)',
              backgroundColor: 'rgba(6, 15, 30, 0.95)',
              borderColor: 'rgba(0, 194, 255, 0.3)',
            }}
          >
            <div className="grid lg:grid-cols-12" style={{ gap: '2.5rem', alignItems: 'center' }}>
              
              {/* Left Configuration Column */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                {/* 1. Service Type Selector */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-white)', marginBottom: '0.75rem' }}>
                    1. Categoría de Proyecto
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4" style={{ gap: '0.65rem' }}>
                    {[
                      { id: 'software', label: 'Software Enterprise' },
                      { id: 'pm', label: 'PMO & Gobernanza' },
                      { id: 'consulting', label: 'Consultoría Cloud' },
                      { id: 'custom', label: 'ERP / IA a Medida' },
                    ].map((btn) => (
                      <button
                        key={btn.id}
                        type="button"
                        onClick={() => setEstimatorService(btn.id as any)}
                        style={{
                          padding: '0.75rem 0.5rem',
                          borderRadius: '8px',
                          border: `1px solid ${estimatorService === btn.id ? 'var(--accent-cyan)' : 'rgba(56, 189, 248, 0.2)'}`,
                          backgroundColor: estimatorService === btn.id ? 'rgba(0, 194, 255, 0.15)' : 'rgba(8, 20, 39, 0.6)',
                          color: estimatorService === btn.id ? '#FFFFFF' : 'var(--text-secondary)',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          fontFamily: 'var(--font-heading)',
                        }}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Squad Topology Selector */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-white)', marginBottom: '0.75rem' }}>
                    2. Topología de Equipo Requerida
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: '0.75rem' }}>
                    {[
                      { id: 'full', title: 'Squad Completo', desc: '1 Tech Lead + 3 Devs Senior + 1 QA' },
                      { id: 'lead', title: 'Núcleo Técnico', desc: '1 Tech Lead + 2 Devs Senior' },
                      { id: 'advisory', title: 'Dirección PMO', desc: 'Project Manager PMP + Arquitecto' },
                    ].map((squad) => (
                      <div
                        key={squad.id}
                        onClick={() => setEstimatorSquad(squad.id as any)}
                        style={{
                          padding: '1rem',
                          borderRadius: '8px',
                          border: `1px solid ${estimatorSquad === squad.id ? 'var(--accent-cyan)' : 'rgba(56, 189, 248, 0.2)'}`,
                          backgroundColor: estimatorSquad === squad.id ? 'rgba(0, 194, 255, 0.12)' : 'rgba(8, 20, 39, 0.6)',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <div style={{ fontSize: '0.9rem', fontWeight: 800, color: estimatorSquad === squad.id ? '#FFFFFF' : 'var(--text-primary)', marginBottom: '0.25rem' }}>
                          {squad.title}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                          {squad.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Output Estimation Card */}
              <div className="lg:col-span-5">
                <div
                  style={{
                    padding: '2rem',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(3, 7, 18, 0.9)',
                    border: '1px solid rgba(0, 194, 255, 0.3)',
                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.12em', color: 'var(--accent-cyan)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Proyección Estratégica
                  </div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.25rem' }}>
                    {estimatorService === 'software' && 'Desarrollo Cloud-Native Enterprise'}
                    {estimatorService === 'pm' && 'Gobierno de Proyectos & Metodología'}
                    {estimatorService === 'consulting' && 'Modernización de Arquitectura'}
                    {estimatorService === 'custom' && 'Sistema a la Medida con IA'}
                  </h4>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                    <div className="flex justify-between" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.4rem' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Cadencia de Entrega</span>
                      <span style={{ color: '#FFFFFF', fontWeight: 700 }}>Sprints Quincenales (2 semanas)</span>
                    </div>
                    <div className="flex justify-between" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.4rem' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Garantía QA / Seguridad</span>
                      <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>100% Código Auditado</span>
                    </div>
                    <div className="flex justify-between" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.4rem' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Tiempo de Arranque</span>
                      <span style={{ color: '#10B981', fontWeight: 700 }}>Menos de 7 días hábiles</span>
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className="btn-corp-primary w-full"
                    style={{ textAlign: 'center', padding: '0.85rem', fontSize: '0.92rem' }}
                  >
                    Solicitar Propuesta para este Alcance →
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── 6. METRICS & TRUST SECTION ────────────────────────────── */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid rgba(56, 189, 248, 0.12)' }}>
        <div ref={governanceRef} className="reveal container">
          
          <div className="text-center" style={{ maxWidth: '820px', margin: '0 auto 3.5rem auto' }}>
            <div className="corp-badge mb-4" style={{ margin: '0 auto 1.25rem auto' }}>
              <span>{t.stats.tag}</span>
            </div>
            <h2 className="heading-lg mb-4">{t.stats.title}</h2>
            <p className="text-lead">{t.stats.desc}</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: '1.25rem' }}>
            {t.stats.items.map((stat: any, si: number) => (
              <div
                key={si}
                className="corp-card text-center"
                style={{
                  padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                  backgroundColor: 'rgba(8, 20, 39, 0.85)',
                  borderColor: 'rgba(0, 194, 255, 0.25)',
                }}
              >
                <div style={{ fontSize: 'clamp(2.2rem, 5vw, 3rem)', fontWeight: 900, color: 'var(--accent-cyan)', fontFamily: 'var(--font-heading)', lineHeight: 1, marginBottom: '0.5rem' }}>
                  {stat.num}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600, lineHeight: 1.4 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 7. SOLUTIONS SHOWCASE GRID ─────────────────────────────── */}
      <section id="solutions" className="section" style={{ borderTop: '1px solid rgba(56, 189, 248, 0.12)' }}>
        <div ref={solutionsRef} className="reveal container">

          <div className="text-center" style={{ maxWidth: '820px', margin: '0 auto 3.5rem auto' }}>
            <div className="corp-badge mb-4" style={{ margin: '0 auto 1.25rem auto' }}>
              <span>{t.solutions.tag}</span>
            </div>
            <h2 className="heading-lg mb-4">{t.solutions.title}</h2>
            <p className="text-lead">{t.solutions.desc}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '1.5rem' }}>
            {t.solutions.items.map((sol: any, idx: number) => (
              <div
                key={idx}
                className="corp-card"
                style={{
                  padding: '1.5rem',
                  backgroundColor: 'rgba(8, 20, 39, 0.75)',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(0, 194, 255, 0.12)',
                    border: '1px solid rgba(0, 194, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)',
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    marginBottom: '1rem',
                  }}
                >
                  0{idx + 1}
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-white)', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                  {sol.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {sol.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 8. CORPORATE B2B CONSULTATION & CONTACT ─────────────────── */}
      <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid rgba(56, 189, 248, 0.12)' }}>
        <div ref={contactRef} className="reveal container" style={{ maxWidth: '1080px' }}>
          
          <div className="text-center mb-10">
            <div className="corp-badge mb-4" style={{ margin: '0 auto 1.25rem auto' }}>
              <span className="corp-badge-pulse" />
              <span>{t.contact.tag}</span>
            </div>
            <h2 className="heading-lg mb-4">{t.contact.title}</h2>
            <p className="text-lead" style={{ maxWidth: '640px', margin: '0 auto' }}>
              {t.contact.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12" style={{ gap: '2rem', alignItems: 'flex-start' }}>

            {/* Left: Direct Corporate Info */}
            <div className="md:col-span-5 flex flex-col gap-5">
              <div className="corp-card" style={{ padding: 'clamp(1.5rem, 3vw, 2rem)' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-white)', marginBottom: '1.25rem' }}>
                  Canales Corporativos
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                      {t.contact.direct.emailLabel}
                    </span>
                    <a
                      href={`mailto:${t.contact.direct.emailVal}`}
                      style={{ color: 'var(--accent-cyan)', fontSize: '1.05rem', fontWeight: 700 }}
                    >
                      {t.contact.direct.emailVal}
                    </a>
                  </div>

                  <div>
                    <span style={{ display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                      {t.contact.direct.hoursLabel}
                    </span>
                    <span style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                      {t.contact.direct.hoursVal}
                    </span>
                  </div>

                  <div>
                    <span style={{ display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                      {t.contact.direct.locationLabel}
                    </span>
                    <span style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                      {t.contact.direct.locationVal}
                    </span>
                  </div>
                </div>
              </div>

              {/* Security & Confidentiality Guarantee */}
              <div
                style={{
                  padding: '1.25rem 1.5rem',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(0, 194, 255, 0.05)',
                  border: '1px solid rgba(0, 194, 255, 0.2)',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                }}
              >
                <div style={{ fontWeight: 700, color: 'var(--accent-cyan)', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span>🔒</span> Confidencialidad NDA Garantizada
                </div>
                Toda la información compartida está protegida bajo estándares estrictos de confidencialidad empresarial y acuerdos de no divulgación.
              </div>
            </div>

            {/* Right: Consultation Request Form */}
            <div className="md:col-span-7">
              <div className="corp-card" style={{ padding: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}>
                {formStatus === 'success' ? (
                  <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                    <div style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--accent-cyan)' }}>✓</div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-white)', marginBottom: '0.75rem' }}>
                      Solicitud Registrada
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
                      {t.contact.form.success}
                    </p>
                    <button
                      type="button"
                      className="btn-corp-secondary"
                      onClick={() => {
                        setFormStatus('idle');
                        setFormData({ name: '', email: '', company: '', service: '', message: '' });
                      }}
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                        {t.contact.form.name} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={t.contact.form.namePlaceholder}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                          {t.contact.form.email} *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder={t.contact.form.emailPlaceholder}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                          {t.contact.form.company} *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder={t.contact.form.companyPlaceholder}
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                        {t.contact.form.service}
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option value="">{t.contact.form.servicePlaceholder}</option>
                        <option value="software">Desarrollo de Software Enterprise</option>
                        <option value="pm">Gestión / Gerencia de Proyectos</option>
                        <option value="consulting">Consultoría &amp; Arquitectura Tecnológica</option>
                        <option value="custom">Soluciones a Medida &amp; Automatización</option>
                        <option value="squad">Asignación de Squad Senior Dedicado</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                        {t.contact.form.message} *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder={t.contact.form.messagePlaceholder}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === 'loading'}
                      className="btn-corp-primary w-full"
                      style={{ marginTop: '0.5rem', padding: '1rem', opacity: formStatus === 'loading' ? 0.7 : 1 }}
                    >
                      {formStatus === 'loading' ? t.contact.form.submitting : t.contact.form.submit}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
