"use client";

import { useLanguage } from '../context/LanguageContext';
import { useState, useEffect, useRef } from 'react';

// ── Scroll-reveal hook ──────────────────────────────────────────────
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); } },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

// ── SVG Icons ───────────────────────────────────────────────────────
const IconTeam = () => (
  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 7a4 4 0 11-8 0 4 4 0 018 0zM21 10a3 3 0 11-6 0 3 3 0 016 0zM3 10a3 3 0 116 0 3 3 0 01-6 0z" />
  </svg>
);
const IconTarget = () => (
  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
);
const IconRocket = () => (
  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09zM12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/>
  </svg>
);

// ── Value card ───────────────────────────────────────────────────────
const VALUE_ICONS = [<IconTeam key="team" />, <IconTarget key="target" />, <IconRocket key="rocket" />];
const VALUE_IMAGES = ['/images/team_doodle.jpg', '/images/commitment.jpg', '/images/custom_solution.jpg'];

export default function Home() {
  const { t } = useLanguage();
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const [expandedSolution, setExpandedSolution] = useState<number | null>(null);

  // Section refs for reveal
  const heroRef = useReveal();
  const aboutRef = useReveal();
  const servicesRef = useReveal();
  const customRef = useReveal();
  const valueRef = useReveal();
  const processRef = useReveal();
  const solutionsRef = useReveal();
  const talentRef = useReveal();

  const renderProcessCard = (step: any, originalIdx: number) => {
    const isExpanded = expandedStep === originalIdx;
    return (
      <div
        key={originalIdx}
        className="solid-panel icon-card flex flex-col justify-between w-full"
        style={{ padding: '1.5rem', backgroundColor: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
        onClick={() => setExpandedStep(isExpanded ? null : originalIdx)}
      >
        <div style={{ position: 'absolute', right: '-8px', top: '-8px', fontSize: '5.5rem', fontWeight: 900, color: 'var(--border-color)', opacity: 0.25, lineHeight: 1, zIndex: 0, userSelect: 'none' }}>
          {originalIdx + 1}
        </div>
        <div style={{ zIndex: 1, position: 'relative' }}>
          <div className="flex justify-between items-center" style={{ marginBottom: isExpanded ? '1rem' : '0.5rem', marginTop: '0.75rem' }}>
            <h4 style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '1.1rem', margin: 0 }}>{step.title}</h4>
            <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: isExpanded ? 'var(--accent-yellow)' : 'var(--bg-primary)', border: '2px solid var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isExpanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }}>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
          <div style={{ width: '36px', height: '3px', backgroundColor: 'var(--accent-green)', borderRadius: '2px', marginBottom: isExpanded ? '0.75rem' : 0 }}></div>
          {isExpanded && (
            <p style={{ fontSize: '0.92rem', marginTop: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{step.desc}</p>
          )}
        </div>
      </div>
    );
  };

  const renderSolutionCard = (item: any, originalIdx: number) => {
    const colors = ['bg-pink', 'bg-lavender', 'bg-yellow', 'bg-blue', 'bg-secondary'];
    const bgColor = colors[originalIdx % colors.length];
    const isExpanded = expandedSolution === originalIdx;
    return (
      <div
        key={originalIdx}
        className={`solid-panel icon-card ${bgColor} flex flex-col w-full`}
        style={{ padding: '1.25rem 1.5rem', cursor: 'pointer' }}
        onClick={() => setExpandedSolution(isExpanded ? null : originalIdx)}
      >
        <div className="flex items-start gap-4 w-full">
          <div style={{ backgroundColor: 'white', border: '2px solid var(--text-primary)', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '2px 2px 0px var(--text-primary)' }}>
            <span style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>✦</span>
          </div>
          <div className="flex-1 flex items-center justify-between gap-2 w-full">
            <span style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '1rem', lineHeight: '1.4' }}>{item.title}</span>
            <div style={{ width: '26px', height: '26px', borderRadius: '50%', border: '2px solid var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginLeft: 'auto' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isExpanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }}>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </div>
        {isExpanded && (
          <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '2px dashed rgba(0,0,0,0.2)' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>{item.desc}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      {/* ── 1. HERO ───────────────────────────────── */}
      <section id="home" className="section" style={{ minHeight: '88vh', display: 'flex', alignItems: 'center' }}>
        <div ref={heroRef} className="reveal container grid md:grid-cols-2 items-center" style={{ gap: '3rem' }}>
          <div className="animate-fade-left">
            <div style={{ display: 'inline-block', backgroundColor: 'var(--accent-yellow)', border: '2px solid var(--text-primary)', borderRadius: '999px', padding: '0.3rem 1rem', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1.5rem', boxShadow: '2px 2px 0 var(--text-primary)' }}>
              3Cats — Tech & Strategy Hub
            </div>
            <h1 className="heading-xl mb-6">{t.hero.title}</h1>
            <p className="text-lead mb-8" style={{ maxWidth: '460px', lineHeight: 1.7 }}>
              {t.hero.desc}
            </p>
            <div className="flex gap-4" style={{ flexWrap: 'wrap' }}>
              <a href="#contact" className="btn btn-primary animate-pulse-ring">
                {t.hero.btnPrimary}
              </a>
              <a href="#services" className="btn btn-secondary">
                {t.hero.btnSecondary}
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-center animate-fade-right">
            <img
              src="/images/hero_img.png"
              alt="3Cats Hero"
              className="animate-float"
              style={{ width: '100%', height: 'auto', maxHeight: '520px', objectFit: 'contain' }}
            />
          </div>
        </div>
      </section>

      {/* ── 2. ABOUT ───────────────────────────────── */}
      <section id="about" className="section bg-yellow" style={{ borderTop: '2px solid var(--text-primary)', borderBottom: '2px solid var(--text-primary)' }}>
        <div ref={aboutRef} className="reveal container text-center" style={{ maxWidth: '760px' }}>
          <p style={{ color: 'var(--accent-green)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{t.about.tag}</p>
          <h2 className="heading-lg mb-6" style={{ color: 'var(--text-primary)' }}>{t.about.title}</h2>
          <p className="text-lead" style={{ color: 'var(--text-primary)', lineHeight: 1.8 }}>{t.about.desc}</p>
        </div>
      </section>

      {/* ── 3. SERVICES ───────────────────────────── */}
      <section id="services" className="section">
        <div ref={servicesRef} className="reveal container">
          <div className="text-center" style={{ marginBottom: '3.5rem' }}>
            <p style={{ color: 'var(--accent-green)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{t.services.tag}</p>
            <h2 className="heading-lg">{t.services.title}</h2>
          </div>

          <div className="grid md:grid-cols-3" style={{ gap: '2.5rem' }}>
            {t.services.items.map((item: any, idx: number) => {
              const images = ['/images/tech.jpg', '/images/marketing.jpg', '/images/strategy.jpg'];
              return (
                <div key={idx} className={`solid-panel icon-card flex flex-col items-center text-center animate-fade-up delay-${(idx + 1) * 200}`}>
                  <img
                    src={images[idx]}
                    alt={item.title}
                    style={{ width: '140px', height: '140px', objectFit: 'contain', marginBottom: '1.5rem', mixBlendMode: 'multiply' }}
                  />
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: 'var(--accent-green)' }}>{item.title}</h3>
                  <p className="text-lead" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. CUSTOM BANNER ───────────────────────── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div ref={customRef} className="reveal container">
          <div className="grid md:grid-cols-2 items-center" style={{ gap: '3rem' }}>
            <div className="solid-panel" style={{ padding: 0, overflow: 'hidden', height: '340px', backgroundColor: 'var(--accent-blue)' }}>
              <img
                src="/images/custom_solution.jpg"
                alt="Soluciones a medida"
                style={{ width: '100%', height: '100%', objectFit: 'cover', mixBlendMode: 'multiply' }}
              />
            </div>
            <div>
              <p style={{ color: 'var(--accent-green)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{t.custom.tag}</p>
              <h2 className="heading-lg" style={{ lineHeight: 1.25 }}>{t.custom.title}</h2>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. VALUE PROPOSITION ───────────────────── */}
      <section id="value" className="section" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '2px solid var(--border-color)' }}>
        <div ref={valueRef} className="reveal container">
          <div className="text-center" style={{ marginBottom: '3.5rem' }}>
            <h2 className="heading-lg">{t.value.title}</h2>
          </div>

          <div className="grid md:grid-cols-3" style={{ gap: '1.5rem', marginBottom: '2rem' }}>
            {t.value.items.map((item: any, idx: number) => {
              const bgColors = ['bg-green', 'bg-blue', 'bg-yellow'];
              const textColors: string[] = ['white', 'var(--text-primary)', 'var(--text-primary)'];
              const subColors: string[] = ['rgba(255,255,255,0.82)', 'var(--text-secondary)', 'var(--text-secondary)'];
              const iconBgs: string[] = ['rgba(255,255,255,0.15)', 'var(--accent-green)', 'var(--accent-green)'];
              const iconColors: string[] = ['var(--accent-yellow)', 'white', 'white'];
              return (
                <div key={idx} className={`solid-panel icon-card ${bgColors[idx]} flex flex-col animate-fade-up delay-${(idx + 1) * 200}`} style={{ color: textColors[idx] }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '12px', backgroundColor: iconBgs[idx], display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: iconColors[idx], flexShrink: 0 }}>
                    {VALUE_ICONS[idx]}
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <img src={VALUE_IMAGES[idx]} alt="" style={{ width: '64px', height: '64px', objectFit: 'contain', flexShrink: 0, mixBlendMode: idx === 0 ? 'luminosity' : 'multiply', borderRadius: '8px' }} />
                    <div>
                      <h4 style={{ fontWeight: 800, fontSize: '1.15rem', marginBottom: '0.6rem', color: textColors[idx] }}>{item.title}</h4>
                      <p style={{ color: subColors[idx], fontSize: '0.95rem', lineHeight: 1.65 }}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Commitment Banner */}
          <div className="solid-panel bg-pink" style={{ padding: '2.5rem 3rem' }}>
            <div className="grid md:grid-cols-2 items-center" style={{ gap: '3rem' }}>
              <div>
                <h2 className="heading-lg" style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--accent-green)' }}>{t.value.stats.title}</h2>
                <p className="text-lead" style={{ fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>{t.value.stats.desc}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                  {[
                    { num: '100%', label: 'Proyectos entregados a tiempo' },
                    { num: '10+', label: 'Años de experiencia combinada' },
                    { num: '3', label: 'Pilares de servicio integrados' },
                    { num: '∞', label: 'Soporte post-lanzamiento' },
                  ].map((stat, i) => (
                    <div key={i} style={{ background: 'white', border: '2px solid var(--text-primary)', borderRadius: '10px', padding: '1rem', textAlign: 'center', boxShadow: '3px 3px 0 var(--text-primary)' }}>
                      <p style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--accent-green)', lineHeight: 1 }}>{stat.num}</p>
                      <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '0.25rem', lineHeight: 1.3 }}>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src="/images/commitment.jpg" alt="Compromiso" className="animate-float" style={{ maxWidth: '280px', width: '100%', mixBlendMode: 'multiply' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. PROCESS ─────────────────────────────── */}
      <section id="process" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div ref={processRef} className="reveal container">
          <div className="text-center" style={{ marginBottom: '3.5rem' }}>
            <h2 className="heading-lg" style={{ marginBottom: '0.75rem' }}>{t.process.title}</h2>
            <p className="text-lead">{t.process.desc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '1.5rem', alignItems: 'flex-start' }}>
            <div className="flex flex-col" style={{ gap: '1.5rem' }}>
              {t.process.steps.filter((_: any, i: number) => i % 2 === 0).map((step: any, idx: number) => renderProcessCard(step, idx * 2))}
            </div>
            <div className="flex flex-col" style={{ gap: '1.5rem' }}>
              {t.process.steps.filter((_: any, i: number) => i % 2 !== 0).map((step: any, idx: number) => renderProcessCard(step, idx * 2 + 1))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. SOLUTIONS ────────────────────────────── */}
      <section id="solutions" className="section" style={{ borderTop: '2px solid var(--border-color)' }}>
        <div ref={solutionsRef} className="reveal container">
          <div className="text-center" style={{ marginBottom: '3.5rem' }}>
            <h2 className="heading-lg">{t.solutions.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '1.5rem', maxWidth: '900px', margin: '0 auto', alignItems: 'flex-start' }}>
            <div className="flex flex-col" style={{ gap: '1.5rem' }}>
              {t.solutions.items.filter((_: any, i: number) => i % 2 === 0).map((item: any, idx: number) => renderSolutionCard(item, idx * 2))}
            </div>
            <div className="flex flex-col" style={{ gap: '1.5rem' }}>
              {t.solutions.items.filter((_: any, i: number) => i % 2 !== 0).map((item: any, idx: number) => renderSolutionCard(item, idx * 2 + 1))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. TALENT CTA ───────────────────────────── */}
      <section id="talent" className="section bg-lavender" style={{ borderTop: '2px solid var(--text-primary)' }}>
        <div ref={talentRef} className="reveal container">
          <div className="grid md:grid-cols-2 items-center" style={{ gap: '3rem' }}>
            <div>
              <p style={{ color: 'var(--accent-green)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{t.talent.tag}</p>
              <h2 className="heading-lg mb-6" style={{ color: 'var(--text-primary)' }}>{t.talent.title}</h2>
              <p className="text-lead mb-8" style={{ color: 'var(--text-primary)', lineHeight: 1.75 }}>{t.talent.desc}</p>
              <a href="/register" className="btn btn-primary" style={{ display: 'inline-flex', gap: '0.5rem', alignItems: 'center' }}>
                {t.talent.cta} <span>→</span>
              </a>
            </div>
            <div className="flex flex-col" style={{ gap: '1rem' }}>
              {t.talent.benefits.map((b: any, idx: number) => (
                <div key={idx} className="solid-panel icon-card" style={{ padding: '1.25rem 1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start', backgroundColor: 'white' }}>
                  <span style={{ fontSize: '1.8rem', lineHeight: 1, flexShrink: 0 }}>{b.icon}</span>
                  <div>
                    <h4 style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '0.2rem', color: 'var(--accent-green)' }}>{b.title}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
