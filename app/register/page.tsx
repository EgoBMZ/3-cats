"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';

export default function Register() {
  const { t, language } = useLanguage();
  const r = t.register;

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 1.5rem', background: 'var(--bg-base)' }}>
        <div style={{ maxWidth: '580px', width: '100%', textAlign: 'center' }}>
          <div className="corp-card" style={{ padding: '3.5rem 2rem', background: 'rgba(8, 20, 39, 0.95)', borderColor: 'var(--accent-cyan)' }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '1.25rem', color: 'var(--accent-cyan)' }}>✓</div>
            <h2 className="heading-lg mb-4" style={{ color: 'var(--text-white)' }}>{r.successTitle}</h2>
            <p className="text-lead mb-8" style={{ color: 'var(--text-secondary)', lineHeight: 1.75 }}>
              {r.successDesc}
            </p>
            <Link href="/" className="btn-corp-primary">
              {r.successCta} →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-base)', paddingBottom: '5rem' }}>

      {/* ── Header Banner ─── */}
      <div style={{ background: 'var(--bg-surface)', borderBottom: '1px solid rgba(56, 189, 248, 0.15)', padding: '4rem 0 3rem' }}>
        <div className="container" style={{ maxWidth: '980px', margin: '0 auto' }}>
          <div className="corp-badge mb-4">
            <span className="corp-badge-pulse" />
            <span>{r.pageTag}</span>
          </div>
          <h1 className="heading-xl mb-4" style={{ color: 'var(--text-white)' }}>
            {r.pageTitle}
          </h1>
          <p className="text-lead" style={{ maxWidth: '640px' }}>
            {r.pageDesc}
          </p>
        </div>
      </div>

      {/* ── Main Content ─── */}
      <div className="container" style={{ maxWidth: '980px', margin: '0 auto', paddingTop: '3.5rem' }}>
        <div className="grid md:grid-cols-12" style={{ gap: '2.5rem', alignItems: 'flex-start' }}>

          {/* ── Left: Value Prop & Credentials ─── */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="corp-card" style={{ padding: '2rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-white)', marginBottom: '1.5rem' }}>
                {r.leftTitle}
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                {r.leftBenefits.map((benefit: string, idx: number) => (
                  <li key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: 'rgba(0, 194, 255, 0.15)', border: '1px solid var(--accent-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px', color: 'var(--accent-cyan)' }}>
                      ✓
                    </div>
                    <span style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.92rem' }}>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Metrics */}
            <div className="corp-card" style={{ padding: '1.75rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', textAlign: 'center' }}>
              {[
                { num: '+10', label: language === 'es' ? 'Años de Trayectoria' : 'Years of Track Record' },
                { num: '100%', label: language === 'es' ? 'Entregas a Tiempo' : 'On-Time Delivery' },
                { num: 'SLA', label: language === 'es' ? 'Garantía Enterprise' : 'Enterprise SLA' },
                { num: '4', label: language === 'es' ? 'Pilares Integrados' : 'Integrated Pillars' },
              ].map((stat, i) => (
                <div key={i} style={{ padding: '1rem', background: 'rgba(6, 16, 32, 0.8)', borderRadius: '8px', border: '1px solid rgba(56, 189, 248, 0.15)' }}>
                  <p style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--accent-cyan)', lineHeight: 1 }}>{stat.num}</p>
                  <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '0.35rem', lineHeight: 1.3 }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Form ─── */}
          <div className="md:col-span-7">
            <div className="corp-card" style={{ padding: '2.5rem' }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

                <Field label={r.fields.name} htmlFor="name">
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    placeholder={r.fields.namePlaceholder}
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Field>

                <Field label={r.fields.email} htmlFor="email">
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    placeholder={r.fields.emailPlaceholder}
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Field>

                <Field label={r.fields.portfolio} htmlFor="portfolio">
                  <input
                    type="url"
                    id="portfolio"
                    name="portfolio"
                    placeholder={r.fields.portfolioPlaceholder}
                    value={formData.portfolio}
                    onChange={handleChange}
                  />
                </Field>

                <Field label={r.fields.specialization} htmlFor="specialization">
                  <select
                    required
                    id="specialization"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                  >
                    <option value="" disabled>{r.fields.specializationPlaceholder}</option>
                    {r.specializations.map((s: { value: string; label: string }) => (
                      <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                  </select>
                </Field>

                <div className="grid sm:grid-cols-2" style={{ gap: '1rem' }}>
                  <Field label={r.fields.experience} htmlFor="experience">
                    <select
                      required
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                    >
                      <option value="" disabled>{r.fields.experiencePlaceholder}</option>
                      {r.experiences.map((e: { value: string; label: string }) => (
                        <option key={e.value} value={e.value}>{e.label}</option>
                      ))}
                    </select>
                  </Field>

                  <Field label={r.fields.modality} htmlFor="modality">
                    <select
                      required
                      id="modality"
                      name="modality"
                      value={formData.modality}
                      onChange={handleChange}
                    >
                      <option value="" disabled>{r.fields.modalityPlaceholder}</option>
                      {r.modalities.map((m: { value: string; label: string }) => (
                        <option key={m.value} value={m.value}>{m.label}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label={r.fields.availability} htmlFor="availability">
                  <select
                    required
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                  >
                    <option value="" disabled>{r.fields.availabilityPlaceholder}</option>
                    {r.availabilities.map((a: { value: string; label: string }) => (
                      <option key={a.value} value={a.value}>{a.label}</option>
                    ))}
                  </select>
                </Field>

                <Field label={r.fields.bio} htmlFor="bio">
                  <textarea
                    id="bio"
                    name="bio"
                    rows={4}
                    placeholder={r.fields.bioPlaceholder}
                    value={formData.bio}
                    onChange={handleChange}
                    style={{ resize: 'vertical' }}
                  />
                </Field>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-corp-primary w-full"
                  style={{ marginTop: '0.5rem', padding: '1rem', opacity: isLoading ? 0.7 : 1 }}
                >
                  {isLoading
                    ? (language === 'es' ? 'Enviando postulación...' : 'Submitting application...')
                    : r.submit}
                </button>

                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.5 }}>
                  {language === 'es'
                    ? 'Al enviar, confirmas tu disponibilidad para participar en procesos de homologación técnica para proyectos corporativos de 3Cats.'
                    : 'By submitting, you confirm your interest in joining technical validation for enterprise client initiatives at 3Cats.'}
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
        {label}
      </label>
      {children}
    </div>
  );
}
