"use client";

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer>
      {/* Big Footer CTA */}
      <div className="bg-yellow" style={{ padding: '6rem 0' }}>
        <div className="container text-center">
          <h2 className="heading-xl mb-4" style={{ color: 'var(--accent-green)' }}>{t.footer.title}</h2>
          <p className="text-lead mb-8" style={{ color: 'var(--text-primary)', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            {t.footer.desc}
          </p>
          <Link href="#contact" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>
            {t.footer.cta}
          </Link>
        </div>
      </div>
      
      {/* Bottom Footer Links */}
      <div style={{ backgroundColor: 'white', padding: '3rem 0', borderTop: '2px solid var(--text-primary)' }}>
        <div className="container grid md:grid-cols-3 text-center md:text-left" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '2rem', marginBottom: '2rem' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{t.footer.contactInfo}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>hello@3cats.com</p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{t.footer.aboutUs}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{t.about.tag}</p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{t.footer.hiring}</h3>
            <Link href="/register" style={{ color: 'var(--text-secondary)' }}>{t.footer.hiringLink}</Link>
          </div>
        </div>
        <div className="container flex flex-col md:flex-row justify-between items-center text-sm" style={{ color: 'var(--text-secondary)' }}>
          <p>&copy; {new Date().getFullYear()} 3Cats. {t.footer.rights}</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img 
              src="/images/demo1.png" 
              alt="3Cats Logo" 
              style={{ height: '140px', width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }} 
            />
          </div>
          <p>LinkedIn</p>
        </div>
      </div>
    </footer>
  );
}
