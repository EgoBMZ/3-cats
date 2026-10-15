"use client";

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import Logo3Cats from './Logo3Cats';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer style={{ backgroundColor: 'var(--bg-base)', borderTop: '1px solid rgba(56, 189, 248, 0.16)', position: 'relative' }}>
      {/* Top laser border glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '85%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(0, 194, 255, 0.6), transparent)',
        }}
      />

      {/* Pre-footer Executive CTA Banner */}
      <div className="section" style={{ paddingBottom: '3.5rem', paddingTop: '4.5rem' }}>
        <div className="container">
          <div
            className="corp-card text-center"
            style={{
              padding: '3.5rem 1.5rem',
              background: 'radial-gradient(circle at 50% 0%, rgba(0, 102, 255, 0.22) 0%, rgba(8, 20, 39, 0.9) 75%)',
              borderColor: 'rgba(0, 194, 255, 0.35)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 194, 255, 0.15)',
            }}
          >
            <div className="corp-badge mb-4" style={{ margin: '0 auto 1.5rem auto' }}>
              <span className="corp-badge-pulse" />
              <span>IDEAS · PROYECTOS · RESULTADOS</span>
            </div>
            <h2 className="heading-lg mb-4" style={{ maxWidth: '820px', margin: '0 auto 1.25rem auto' }}>
              {t.footer.title}
            </h2>
            <p className="text-lead mb-8" style={{ maxWidth: '640px', margin: '0 auto 2.25rem auto' }}>
              {t.footer.desc}
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="#contact" className="btn-corp-primary" style={{ padding: '0.95rem 2.5rem', fontSize: '1rem' }}>
                {t.footer.cta} →
              </a>
              <a href="#methodology" className="btn-corp-secondary" style={{ padding: '0.95rem 2rem' }}>
                {t.hero.btnSecondary}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="container" style={{ padding: '3rem 1.5rem 2rem 1.5rem' }}>
        <div className="grid grid-cols-1 md:grid-cols-4" style={{ gap: '2.5rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
          {/* Brand Column with Pure Vector SVG Logo */}
          <div className="md:col-span-1" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Link href="/" style={{ display: 'inline-block' }}>
              <Logo3Cats variant="horizontal" height={38} showTagline={true} />
            </Link>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, marginTop: '0.5rem' }}>
              {t.brand.slogan}. {t.brand.equation}.
            </p>
            <div style={{ fontSize: '0.75rem', letterSpacing: '0.14em', color: 'var(--accent-cyan)', fontWeight: 700 }}>
              {t.brand.tagline}
            </div>
          </div>

          {/* Service Links */}
          <div>
            <h4 style={{ fontSize: '0.92rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-white)', marginBottom: '1.25rem' }}>
              {t.footer.aboutUs}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {t.footer.links.map((link: any, i: number) => (
                <li key={i}>
                  <a
                    href={link.href}
                    style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent-cyan)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Talent & Strategic Partners */}
          <div>
            <h4 style={{ fontSize: '0.92rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-white)', marginBottom: '1.25rem' }}>
              {t.footer.hiring}
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              {t.talent.desc}
            </p>
            <Link
              href="/register"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'var(--accent-cyan)',
                fontSize: '0.88rem',
                fontWeight: 600,
              }}
            >
              {t.footer.hiringLink} <span>→</span>
            </Link>
          </div>

          {/* Direct Corporate Inquiries */}
          <div>
            <h4 style={{ fontSize: '0.92rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-white)', marginBottom: '1.25rem' }}>
              {t.footer.contactInfo}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              <div>
                <span style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase' }}>{t.contact.direct.emailLabel}</span>
                <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>{t.contact.direct.emailVal}</span>
              </div>
              <div>
                <span style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase' }}>{t.contact.direct.hoursLabel}</span>
                <span>{t.contact.direct.hoursVal}</span>
              </div>
              <div>
                <span style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase' }}>{t.contact.direct.locationLabel}</span>
                <span>{t.contact.direct.locationVal}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Sub-Mottos */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs" style={{ padding: '1.75rem 0 0.5rem 0', color: 'var(--text-muted)' }}>
          <p>© {new Date().getFullYear()} 3Cats Software Development &amp; Project Delivery. {t.footer.rights}</p>
          <div className="flex items-center gap-3 text-center" style={{ letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>
            <span>{t.brand.bottomBarLeft}</span>
            <span>·</span>
            <span style={{ color: 'var(--accent-cyan)' }}>{t.brand.bottomBarRight}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
