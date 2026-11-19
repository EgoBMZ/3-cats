"use client";

import { useLanguage } from '../context/LanguageContext';
import { useState, useEffect, useRef } from 'react';

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

const IconFlow = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="6" height="6" rx="1.5" />
    <rect x="15" y="15" width="6" height="6" rx="1.5" />
    <path d="M9 6h5a3 3 0 0 1 3 3v6" />
  </svg>
);

const IconAI = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="5" width="14" height="14" rx="2" />
    <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
    <circle cx="12" cy="12" r="2.5" />
  </svg>
);

const IconData = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
    <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
  </svg>
);

const IconCloud = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 19H7a5 5 0 1 1 1.02-9.9A6 6 0 0 1 19.5 11a4 4 0 0 1-2 8z" />
  </svg>
);

const IconCompass = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

const IconLayers = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const IconCalendar = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const IconShield = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const IconCheck = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function Home() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [cockpitTab, setCockpitTab] = useState<'delivery' | 'architecture' | 'sla'>('delivery');
  const [estimatorService, setEstimatorService] = useState<string>('automation');
  const [estimatorSquad, setEstimatorSquad] = useState<string>('full');
  const [expandedServices, setExpandedServices] = useState<string[]>([]);
  const BULLETS_PREVIEW = 4;
  const selectedService = t.services.items.find((s) => s.id === estimatorService) ?? t.services.items[0];
  const selectedSquad = t.estimator.squads.find((s) => s.id === estimatorSquad) ?? t.estimator.squads[0];
  const toggleService = (id: string) =>
    setExpandedServices((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

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

  // Content renders after the language provider initializes, so the browser's
  // native hash scroll (e.g. arriving from /register via "/#services") fires
  // before the target exists. Scroll manually once mounted.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView();
    });
    return () => cancelAnimationFrame(frame);
  }, []);

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
      case 'flow': return <IconFlow />;
      case 'ai': return <IconAI />;
      case 'data': return <IconData />;
      case 'cloud': return <IconCloud />;
      case 'compass': return <IconCompass />;
      default: return <IconCode />;
    }
  };

  const getMethodologyIcon = (index: number) => {
    switch (index) {
      case 0: return <IconTarget />;
      case 1: return <IconLayers />;
      case 2: return <IconCalendar />;
      case 3: return <IconGear />;
      case 4: return <IconShield />;
      case 5: return <IconChart />;
      default: return <IconTarget />;
    }
  };

  return (
    <div className="tech-grid-bg" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* ── 1. HERO SECTION (Reference: demo1.jpeg & Mobile-First) ── */}
      <section id="home" className="section hero-section">
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
                  backgroundColor: 'rgba(var(--rgb-cyan), 0.08)',
                  border: '1px solid rgba(var(--rgb-cyan), 0.28)',
                  padding: '0.45rem 1.1rem',
                  borderRadius: '6px',
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(0.85rem, 2.5vw, 1rem)',
                  fontWeight: 700,
                  color: 'var(--accent-cyan)',
                  marginBottom: '1.25rem',
                  maxWidth: '100%',
                  lineHeight: 1.4,
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
                  backgroundColor: 'rgba(var(--rgb-surface), 0.85)',
                  border: '1px solid rgba(var(--rgb-steel), 0.22)',
                  borderRadius: '12px',
                  padding: '0.75rem',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.5)',
                }}
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 items-stretch" style={{ gap: '1px', background: 'rgba(var(--rgb-steel), 0.12)', borderRadius: '8px', overflow: 'hidden' }}>
                  {t.hero.pillars.map((pillar) => (
                    <div
                      key={pillar.id}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        padding: '0.85rem 0.5rem',
                        background: 'var(--bg-surface)',
                      }}
                    >
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '8px',
                          backgroundColor: 'rgba(var(--rgb-cyan), 0.12)',
                          border: '1px solid rgba(var(--rgb-cyan), 0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--accent-cyan)',
                          marginBottom: '0.65rem',
                        }}
                      >
                        {getPillarIcon(pillar.icon)}
                      </div>
                      <h4 style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-white)', lineHeight: 1.3 }}>
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
                  backgroundColor: 'rgba(var(--rgb-surface), 0.95)',
                  borderColor: 'rgba(var(--rgb-cyan), 0.35)',
                  boxShadow: '0 25px 60px -10px rgba(var(--rgb-blue), 0.3), 0 0 35px rgba(var(--rgb-cyan), 0.15)',
                  overflow: 'hidden',
                }}
              >
                {/* Cockpit Header Bar */}
                <div
                  style={{
                    padding: '0.9rem 1.25rem',
                    borderBottom: '1px solid rgba(var(--rgb-steel), 0.18)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    backgroundColor: 'rgba(var(--rgb-base), 0.8)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', minWidth: 0 }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#EF4444' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#F59E0B' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--success)' }} />
                    <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginLeft: '0.5rem' }}>
                      {t.cockpit.title}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.72rem', color: 'var(--success)', fontWeight: 600 }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--success)', display: 'inline-block' }} />
                    <span>{t.cockpit.status}</span>
                  </div>
                </div>

                {/* Cockpit Interactive Tabs */}
                <div style={{ display: 'flex', borderBottom: '1px solid rgba(var(--rgb-steel), 0.12)', background: 'rgba(var(--rgb-surface), 0.6)' }}>
                  <button
                    onClick={() => setCockpitTab('delivery')}
                    style={{
                      flex: 1,
                      padding: '0.65rem 0.5rem',
                      background: cockpitTab === 'delivery' ? 'rgba(var(--rgb-cyan), 0.12)' : 'transparent',
                      border: 'none',
                      borderBottom: cockpitTab === 'delivery' ? '2px solid var(--accent-cyan)' : '2px solid transparent',
                      color: cockpitTab === 'delivery' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    {t.cockpit.tabs.delivery}
                  </button>
                  <button
                    onClick={() => setCockpitTab('architecture')}
                    style={{
                      flex: 1,
                      padding: '0.65rem 0.5rem',
                      background: cockpitTab === 'architecture' ? 'rgba(var(--rgb-cyan), 0.12)' : 'transparent',
                      border: 'none',
                      borderBottom: cockpitTab === 'architecture' ? '2px solid var(--accent-cyan)' : '2px solid transparent',
                      color: cockpitTab === 'architecture' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    {t.cockpit.tabs.architecture}
                  </button>
                  <button
                    onClick={() => setCockpitTab('sla')}
                    style={{
                      flex: 1,
                      padding: '0.65rem 0.5rem',
                      background: cockpitTab === 'sla' ? 'rgba(var(--rgb-cyan), 0.12)' : 'transparent',
                      border: 'none',
                      borderBottom: cockpitTab === 'sla' ? '2px solid var(--accent-cyan)' : '2px solid transparent',
                      color: cockpitTab === 'sla' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    {t.cockpit.tabs.governance}
                  </button>
                </div>

                {/* Cockpit Interactive Content Body */}
                <div style={{ padding: 'clamp(1.1rem, 4vw, 1.5rem)', minHeight: '240px' }}>
                  {cockpitTab === 'delivery' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div className="flex justify-between items-start" style={{ gap: '0.75rem' }}>
                        <div>
                          <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>{t.cockpit.sprintLabel}</div>
                          <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-white)', lineHeight: 1.35 }}>{t.cockpit.sprintName}</div>
                        </div>
                        <span style={{ flexShrink: 0, fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '4px', backgroundColor: 'rgba(var(--rgb-success), 0.15)', color: 'var(--success)', fontWeight: 700, border: '1px solid rgba(var(--rgb-success), 0.3)' }}>
                          {t.cockpit.onTrack}
                        </span>
                      </div>

                      <div>
                        <div className="flex justify-between mb-2" style={{ color: 'var(--text-secondary)', fontSize: '0.78rem', gap: '0.5rem' }}>
                          <span>{t.cockpit.progressLabel}</span>
                          <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>{t.cockpit.progressVal}</span>
                        </div>
                        <div style={{ height: '8px', backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                          <div style={{ width: '88%', height: '100%', background: 'linear-gradient(90deg, var(--brand-cyan), var(--brand-cyan-bright))', borderRadius: '4px' }} />
                        </div>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.82rem' }}>
                        {t.cockpit.tasksDone.map((task: string) => (
                          <div key={task} className="flex items-start gap-2" style={{ color: 'var(--brand-silver)' }}>
                            <span style={{ color: 'var(--success)' }}>✓</span> {task}
                          </div>
                        ))}
                        <div className="flex items-start gap-2" style={{ color: 'var(--brand-silver)' }}>
                          <span style={{ color: 'var(--accent-cyan)' }}>●</span> {t.cockpit.taskPending}
                        </div>
                      </div>
                    </div>
                  )}

                  {cockpitTab === 'architecture' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{t.cockpit.archLabel}</div>
                      <div className="grid grid-cols-2" style={{ gap: '0.65rem' }}>
                        {t.cockpit.arch.map((item) => (
                          <div key={item.k} style={{ padding: '0.75rem', backgroundColor: 'rgba(var(--rgb-surface), 0.8)', borderRadius: '8px', border: '1px solid rgba(var(--rgb-steel), 0.2)' }}>
                            <div style={{ fontSize: '0.68rem', color: 'var(--accent-cyan)', fontWeight: 700, letterSpacing: '0.04em' }}>{item.k}</div>
                            <div style={{ fontSize: '0.84rem', color: '#FFFFFF', fontWeight: 600, lineHeight: 1.35 }}>{item.v}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {cockpitTab === 'sla' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                      {t.cockpit.governance.map((row, i) => (
                        <div key={row.k} className="flex justify-between items-center" style={{ padding: '0.5rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', gap: '0.75rem' }}>
                          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{row.k}</span>
                          <span style={{ fontSize: '0.88rem', color: i === 0 ? 'var(--accent-cyan)' : i === 1 ? 'var(--success)' : '#FFFFFF', fontWeight: 700, textAlign: 'right' }}>{row.v}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Corporate Banner from demo1.jpeg */}
                <div
                  style={{
                    padding: '1rem 1.25rem',
                    backgroundColor: 'rgba(var(--rgb-base), 0.95)',
                    borderTop: '1px solid rgba(var(--rgb-steel), 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.25rem 0.75rem',
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
      <section id="about" className="section" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid rgba(var(--rgb-steel), 0.12)', borderBottom: '1px solid rgba(var(--rgb-steel), 0.12)' }}>
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
            {t.equationSection.items.map((item, i) => (
              <div
                key={i}
                className="corp-card"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: 'rgba(var(--rgb-surface), 0.75)',
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
              backgroundColor: 'rgba(var(--rgb-surface), 0.9)',
              borderColor: 'rgba(var(--rgb-cyan), 0.3)',
              marginBottom: '3rem',
            }}
          >
            {/* Desktop Pipeline Laser Track */}
            <div className="hidden lg:block" style={{ position: 'relative', marginBottom: '2rem' }}>
              <div
                style={{
                  position: 'absolute',
                  top: '32px',
                  left: '8%',
                  right: '8%',
                  height: '2px',
                  backgroundColor: 'rgba(var(--rgb-cyan), 0.45)',
                  boxShadow: '0 0 12px rgba(var(--rgb-cyan), 0.6)',
                  zIndex: 0,
                }}
              />
            </div>

            {/* Stepper Nodes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 items-start method-grid">
              {t.methodology.nodes.map((node, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={node.num}
                    onClick={() => setActiveStep(idx)}
                    className="method-node"
                    style={{
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      borderRadius: '12px',
                      backgroundColor: isActive ? 'rgba(var(--rgb-cyan), 0.08)' : 'transparent',
                      border: isActive ? '1px solid rgba(var(--rgb-cyan), 0.35)' : '1px solid transparent',
                    }}
                  >
                    {/* Circular Icon with Glow */}
                    <div
                      className="method-icon"
                      style={{
                        borderRadius: '50%',
                        backgroundColor: isActive ? 'rgba(var(--rgb-cyan), 0.25)' : 'rgba(var(--rgb-surface), 0.95)',
                        border: `2px solid ${isActive ? 'var(--accent-cyan)' : 'rgba(var(--rgb-steel), 0.3)'}`,
                        boxShadow: isActive ? '0 0 25px rgba(var(--rgb-cyan), 0.5)' : '0 4px 15px rgba(0, 0, 0, 0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isActive ? '#FFFFFF' : 'var(--accent-cyan)',
                        transition: 'all 0.25s ease',
                      }}
                    >
                      {getMethodologyIcon(idx)}
                    </div>
                    <div>

                    <div style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.14em', color: 'var(--accent-cyan)', marginBottom: '0.25rem' }}>
                      {t.methodology.phase} {node.num}
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-white)', letterSpacing: '0.03em', marginBottom: '0.35rem' }}>
                      {node.title}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: 500, lineHeight: 1.45, marginBottom: '0.5rem' }}>
                      {node.subtitle}
                    </p>

                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                      {node.detail}
                    </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Sub-motto Strip from demo2.jpeg */}
            <div
              className="flex flex-col sm:flex-row justify-between items-center text-center"
              style={{
                fontSize: '0.72rem',
                marginTop: '2.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(var(--rgb-steel), 0.15)',
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
      <section id="services" className="section" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid rgba(var(--rgb-steel), 0.12)' }}>
        <div ref={servicesRef} className="reveal container">

          <div className="text-center" style={{ maxWidth: '820px', margin: '0 auto 3.5rem auto' }}>
            <div className="corp-badge mb-4" style={{ margin: '0 auto 1.25rem auto' }}>
              <span>{t.services.tag}</span>
            </div>
            <h2 className="heading-lg mb-4">{t.services.title}</h2>
            <p className="text-lead">{t.services.desc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '1.5rem' }}>
            {t.services.items.map((srv, idx) => {
              const expanded = expandedServices.includes(srv.id);
              const bullets: string[] = expanded ? srv.bullets : srv.bullets.slice(0, BULLETS_PREVIEW);
              const hiddenCount = srv.bullets.length - BULLETS_PREVIEW;
              return (
              <div
                key={srv.id}
                className="corp-card flex flex-col justify-between"
                style={{ padding: 'clamp(1.5rem, 3vw, 2rem)' }}
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
                        backgroundColor: 'rgba(var(--rgb-cyan), 0.1)',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '4px',
                        border: '1px solid rgba(var(--rgb-cyan), 0.25)',
                      }}
                    >
                      {srv.badge}
                    </span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600 }}>
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.3rem)', fontWeight: 800, color: 'var(--text-white)', marginBottom: '0.6rem', lineHeight: 1.25 }}>
                    {srv.title}
                  </h3>

                  <p style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-cyan-light)', fontSize: '0.92rem', fontWeight: 600, lineHeight: 1.45, marginBottom: '0.85rem' }}>
                    {srv.focus}
                  </p>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                    {srv.desc}
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {bullets.map((b: string, bi: number) => (
                      <li key={bi} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: 1.45 }}>
                        <IconCheck />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  {hiddenCount > 0 && (
                    <button
                      type="button"
                      onClick={() => toggleService(srv.id)}
                      aria-expanded={expanded}
                      style={{ marginTop: '0.75rem', background: 'none', border: 'none', padding: '0.35rem 0', color: 'var(--text-secondary)', fontSize: '0.82rem', fontWeight: 600, cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                    >
                      {expanded ? t.services.less : `${t.services.more} (+${hiddenCount})`}
                    </button>
                  )}
                </div>

                <div style={{ marginTop: '1.5rem', paddingTop: '1.1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
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
                    {t.services.cta} <span>→</span>
                  </a>
                </div>
              </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 5. ENTERPRISE PROJECT SCOPE & SQUAD ESTIMATOR ─────────── */}
      <section className="section" style={{ borderTop: '1px solid rgba(var(--rgb-steel), 0.12)' }}>
        <div ref={estimatorRef} className="reveal container">
          
          <div className="text-center" style={{ maxWidth: '820px', margin: '0 auto 3rem auto' }}>
            <div className="corp-badge mb-4" style={{ margin: '0 auto 1.25rem auto' }}>
              <span>{t.estimator.tag}</span>
            </div>
            <h2 className="heading-lg mb-4">{t.estimator.title}</h2>
            <p className="text-lead">{t.estimator.desc}</p>
          </div>

          <div
            className="corp-card"
            style={{
              padding: 'clamp(1.5rem, 3.5vw, 2.75rem)',
              backgroundColor: 'rgba(var(--rgb-surface), 0.95)',
              borderColor: 'rgba(var(--rgb-cyan), 0.3)',
            }}
          >
            <div className="grid lg:grid-cols-12" style={{ gap: '2.5rem', alignItems: 'center' }}>
              
              {/* Left Configuration Column */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                {/* 1. Service Type Selector */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-white)', marginBottom: '0.75rem' }}>
                    {t.estimator.step1}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3" style={{ gap: '0.65rem' }}>
                    {t.hero.pillars.map((p) => ({ id: p.id, label: p.title })).map((btn: { id: string; label: string }) => (
                      <button
                        key={btn.id}
                        type="button"
                        aria-pressed={estimatorService === btn.id}
                        onClick={() => setEstimatorService(btn.id)}
                        style={{
                          minHeight: '48px',
                          lineHeight: 1.3,
                          padding: '0.75rem 0.5rem',
                          borderRadius: '8px',
                          border: `1px solid ${estimatorService === btn.id ? 'var(--accent-cyan)' : 'rgba(var(--rgb-steel), 0.2)'}`,
                          backgroundColor: estimatorService === btn.id ? 'rgba(var(--rgb-cyan), 0.15)' : 'rgba(var(--rgb-surface), 0.6)',
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
                    {t.estimator.step2}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: '0.75rem' }}>
                    {t.estimator.squads.map((squad) => (
                      <button
                        type="button"
                        key={squad.id}
                        aria-pressed={estimatorSquad === squad.id}
                        onClick={() => setEstimatorSquad(squad.id)}
                        style={{
                          textAlign: 'left',
                          fontFamily: 'inherit',
                          padding: '1rem',
                          borderRadius: '8px',
                          border: `1px solid ${estimatorSquad === squad.id ? 'var(--accent-cyan)' : 'rgba(var(--rgb-steel), 0.2)'}`,
                          backgroundColor: estimatorSquad === squad.id ? 'rgba(var(--rgb-cyan), 0.12)' : 'rgba(var(--rgb-surface), 0.6)',
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
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Output Estimation Card */}
              <div className="lg:col-span-5">
                <div
                  style={{
                    padding: 'clamp(1.25rem, 4vw, 2rem)',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(var(--rgb-base), 0.9)',
                    border: '1px solid rgba(var(--rgb-cyan), 0.3)',
                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.12em', color: 'var(--accent-cyan)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    {t.estimator.outputLabel}
                  </div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                    {selectedService.title}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--accent-cyan-light)', fontWeight: 600, marginBottom: '1.25rem', lineHeight: 1.45 }}>
                    {selectedService.focus}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                    {[...t.estimator.rows, { k: t.estimator.teamLabel, v: selectedSquad.title }].map((row) => (
                      <div key={row.k} className="flex justify-between" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.4rem', gap: '1rem' }}>
                        <span style={{ color: 'var(--text-secondary)' }}>{row.k}</span>
                        <span style={{ color: '#FFFFFF', fontWeight: 700, textAlign: 'right' }}>{row.v}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="btn-corp-primary w-full"
                    style={{ textAlign: 'center', padding: '0.85rem', fontSize: '0.92rem' }}
                  >
                    {t.estimator.cta} →
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── 6. METRICS & TRUST SECTION ────────────────────────────── */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid rgba(var(--rgb-steel), 0.12)' }}>
        <div ref={governanceRef} className="reveal container">
          
          <div className="text-center" style={{ maxWidth: '820px', margin: '0 auto 3.5rem auto' }}>
            <div className="corp-badge mb-4" style={{ margin: '0 auto 1.25rem auto' }}>
              <span>{t.stats.tag}</span>
            </div>
            <h2 className="heading-lg mb-4">{t.stats.title}</h2>
            <p className="text-lead">{t.stats.desc}</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: '1.25rem' }}>
            {t.stats.items.map((stat, si) => (
              <div
                key={si}
                className="corp-card text-center"
                style={{
                  padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                  backgroundColor: 'rgba(var(--rgb-surface), 0.85)',
                  borderColor: 'rgba(var(--rgb-cyan), 0.25)',
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
      <section id="model" className="section" style={{ borderTop: '1px solid rgba(var(--rgb-steel), 0.12)' }}>
        <div ref={solutionsRef} className="reveal container">

          <div className="text-center" style={{ maxWidth: '820px', margin: '0 auto 3.5rem auto' }}>
            <div className="corp-badge mb-4" style={{ margin: '0 auto 1.25rem auto' }}>
              <span>{t.solutions.tag}</span>
            </div>
            <h2 className="heading-lg mb-4">{t.solutions.title}</h2>
            <p className="text-lead">{t.solutions.desc}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '1.5rem' }}>
            {t.solutions.items.map((sol, idx) => (
              <div
                key={idx}
                className="corp-card"
                style={{
                  padding: '1.5rem',
                  backgroundColor: 'rgba(var(--rgb-surface), 0.75)',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(var(--rgb-cyan), 0.12)',
                    border: '1px solid rgba(var(--rgb-cyan), 0.3)',
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

          {/* Cross-cutting control bar */}
          <div
            className="flex flex-col sm:flex-row items-center justify-between text-center"
            style={{
              marginTop: '1.5rem',
              gap: '0.5rem 1.5rem',
              padding: '1.1rem 1.5rem',
              borderRadius: '12px',
              background: 'linear-gradient(90deg, rgba(var(--rgb-blue), 0.16), rgba(var(--rgb-royal), 0.06))',
              border: '1px solid rgba(var(--rgb-cyan), 0.3)',
            }}
          >
            <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent-cyan)' }}>
              {t.solutions.controlLabel}
            </span>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--text-white)' }}>
              {t.solutions.controlTitle}
            </span>
          </div>

        </div>
      </section>

      {/* ── 8. CORPORATE B2B CONSULTATION & CONTACT ─────────────────── */}
      <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid rgba(var(--rgb-steel), 0.12)' }}>
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

          <div className="grid grid-cols-1 md:grid-cols-12" style={{ gap: '1.5rem', alignItems: 'flex-start' }}>

            {/* Left: Direct Corporate Info */}
            <div className="md:col-span-5 flex flex-col contact-info" style={{ gap: '1.25rem' }}>
              <div className="corp-card" style={{ padding: 'clamp(1.5rem, 3vw, 2rem)' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-white)', marginBottom: '1.25rem' }}>
                  {t.contact.channelsTitle}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                      {t.contact.direct.emailLabel}
                    </span>
                    <a
                      href={`mailto:${t.contact.direct.emailVal}`}
                      style={{ color: 'var(--accent-cyan)', fontSize: '1.05rem', fontWeight: 700, wordBreak: 'break-word' }}
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
                  backgroundColor: 'rgba(var(--rgb-cyan), 0.05)',
                  border: '1px solid rgba(var(--rgb-cyan), 0.2)',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                }}
              >
                <div style={{ fontWeight: 700, color: 'var(--accent-cyan)', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span>🔒</span> {t.contact.nda.title}
                </div>
                {t.contact.nda.desc}
              </div>
            </div>

            {/* Right: Consultation Request Form */}
            <div className="md:col-span-7 contact-form">
              <div className="corp-card" style={{ padding: 'clamp(1.25rem, 3.5vw, 2.5rem)' }}>
                {formStatus === 'success' ? (
                  <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                    <div style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--accent-cyan)' }}>✓</div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-white)', marginBottom: '0.75rem' }}>
                      {t.contact.form.successTitle}
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
                      {t.contact.form.reset}
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
                        {t.services.items.map((srv) => (
                          <option key={srv.id} value={srv.id}>{srv.title}</option>
                        ))}
                        <option value="undefined">{t.contact.form.serviceOther}</option>
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
