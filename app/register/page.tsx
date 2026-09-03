"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';

export default function Register() {
  const { t, language } = useLanguage();
  const r = t.register;

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    portfolio: '',
    specialization: '',
    experience: '',
    modality: '',
    availability: '',
    bio: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // TODO: Integrate with Firebase Firestore
    // Example:
    // import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
    // import { db } from '@/lib/firebase';
    // await addDoc(collection(db, 'talent'), {
    //   ...formData,
    //   createdAt: serverTimestamp(),
    //   language,
    // });

    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 1.5rem', background: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: '560px', width: '100%', textAlign: 'center' }}>
          <div style={{ fontSize: '5rem', marginBottom: '1rem', animation: 'fadeInUp 0.5s ease both' }}>🎉</div>
          <div className="solid-panel bg-yellow animate-fade-up" style={{ padding: '3rem' }}>
            <h2 className="heading-lg mb-4" style={{ color: 'var(--accent-green)' }}>{r.successTitle}</h2>
            <p className="text-lead mb-8" style={{ color: 'var(--text-primary)', lineHeight: 1.75 }}>
              {r.successDesc}
            </p>
            <Link href="/" className="btn btn-primary">
              {r.successCta}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>

      {/* ── Hero strip ─── */}
      <div style={{ background: 'var(--accent-green)', borderBottom: '2px solid var(--text-primary)', padding: '3.5rem 0 2.5rem' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'var(--accent-yellow)', border: '2px solid var(--text-primary)', borderRadius: '999px', padding: '0.25rem 1rem', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1rem', boxShadow: '2px 2px 0 rgba(0,0,0,0.4)', color: 'var(--text-primary)' }}>
            {r.pageTag}
          </div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: 'white', lineHeight: 1.15, marginBottom: '0.75rem' }}>
            {r.pageTitle}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '520px' }}>
            {r.pageDesc}
          </p>
        </div>
      </div>

      {/* ── Main content ─── */}
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div className="grid md:grid-cols-2" style={{ gap: '2.5rem', alignItems: 'flex-start' }}>

          {/* ── Left: Value Prop ─── */}
          <div>
            {/* Benefits */}
            <div className="solid-panel" style={{ padding: '2rem', marginBottom: '1.25rem', backgroundColor: 'white' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 800, color: 'var(--accent-green)', marginBottom: '1.5rem' }}>{r.leftTitle}</h2>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {r.leftBenefits.map((benefit: string, idx: number) => (
                  <li key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: 'var(--accent-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats */}
            <div className="solid-panel bg-yellow" style={{ padding: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { num: '10+', label: language === 'es' ? 'Años de experiencia' : 'Years of experience' },
                { num: '3', label: language === 'es' ? 'Pilares de servicio' : 'Service pillars' },
                { num: '100%', label: language === 'es' ? 'Compromiso real' : 'Real commitment' },
                { num: '∞', label: language === 'es' ? 'Proyectos posibles' : 'Projects possible' },
              ].map((stat, i) => (
                <div key={i} style={{ textAlign: 'center', background: 'white', border: '2px solid var(--text-primary)', borderRadius: '10px', padding: '0.875rem', boxShadow: '2px 2px 0 var(--text-primary)' }}>
                  <p style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--accent-green)', lineHeight: 1 }}>{stat.num}</p>
                  <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '0.25rem', lineHeight: 1.3 }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Form ─── */}
          <div className="solid-panel" style={{ padding: '2.5rem', backgroundColor: 'white' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>

              <Field label={r.fields.name} htmlFor="name">
                <input required type="text" id="name" name="name"
                  placeholder={r.fields.namePlaceholder}
                  value={formData.name} onChange={handleChange} style={input} />
              </Field>

              <Field label={r.fields.email} htmlFor="email">
                <input required type="email" id="email" name="email"
                  placeholder={r.fields.emailPlaceholder}
                  value={formData.email} onChange={handleChange} style={input} />
              </Field>

              <Field label={r.fields.portfolio} htmlFor="portfolio">
                <input type="url" id="portfolio" name="portfolio"
                  placeholder={r.fields.portfolioPlaceholder}
                  value={formData.portfolio} onChange={handleChange} style={input} />
              </Field>

              <Field label={r.fields.specialization} htmlFor="specialization">
                <select required id="specialization" name="specialization"
                  value={formData.specialization} onChange={handleChange} style={input}>
                  <option value="" disabled>{r.fields.specializationPlaceholder}</option>
                  {r.specializations.map((s: { value: string; label: string }) => (
                    <option key={s.value} value={s.value}>{s.label}</option>
                  ))}
                </select>
              </Field>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <Field label={r.fields.experience} htmlFor="experience">
                  <select required id="experience" name="experience"
                    value={formData.experience} onChange={handleChange} style={input}>
                    <option value="" disabled>{r.fields.experiencePlaceholder}</option>
                    {r.experiences.map((e: { value: string; label: string }) => (
                      <option key={e.value} value={e.value}>{e.label}</option>
                    ))}
                  </select>
                </Field>
                <Field label={r.fields.modality} htmlFor="modality">
                  <select required id="modality" name="modality"
                    value={formData.modality} onChange={handleChange} style={input}>
                    <option value="" disabled>{r.fields.modalityPlaceholder}</option>
                    {r.modalities.map((m: { value: string; label: string }) => (
                      <option key={m.value} value={m.value}>{m.label}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label={r.fields.availability} htmlFor="availability">
                <select required id="availability" name="availability"
                  value={formData.availability} onChange={handleChange} style={input}>
                  <option value="" disabled>{r.fields.availabilityPlaceholder}</option>
                  {r.availabilities.map((a: { value: string; label: string }) => (
                    <option key={a.value} value={a.value}>{a.label}</option>
                  ))}
                </select>
              </Field>

              <Field label={r.fields.bio} htmlFor="bio">
                <textarea id="bio" name="bio" rows={4}
                  placeholder={r.fields.bioPlaceholder}
                  value={formData.bio} onChange={handleChange}
                  style={{ ...input, resize: 'vertical', fontFamily: 'var(--font-body)' }} />
              </Field>

              <button
                type="submit"
                disabled={isLoading}
                className="btn btn-primary"
                style={{ marginTop: '0.5rem', fontSize: '1rem', padding: '0.9rem', width: '100%', opacity: isLoading ? 0.7 : 1, cursor: isLoading ? 'wait' : 'pointer' }}
              >
                {isLoading
                  ? (language === 'es' ? 'Enviando...' : 'Sending...')
                  : r.submit}
              </button>

              <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', textAlign: 'center', lineHeight: 1.5 }}>
                {language === 'es'
                  ? 'Al enviar, aceptas ser contactado por el equipo de 3Cats sobre oportunidades de proyecto.'
                  : 'By submitting, you agree to be contacted by the 3Cats team about project opportunities.'}
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

// ── Field wrapper ───────────────────────────────────────────────────
function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.35rem', color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}>
        {label}
      </label>
      {children}
    </div>
  );
}

// ── Shared input style ───────────────────────────────────────────────
const input: React.CSSProperties = {
  width: '100%',
  padding: '0.7rem 0.9rem',
  border: '2px solid var(--border-color)',
  borderRadius: '8px',
  backgroundColor: 'var(--bg-primary)',
  color: 'var(--text-primary)',
  fontSize: '0.93rem',
  fontFamily: 'var(--font-body)',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
};
