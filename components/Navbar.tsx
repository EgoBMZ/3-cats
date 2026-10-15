"use client";

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { useState, useEffect } from 'react';
import Logo3Cats from './Logo3Cats';

export default function Navbar() {
  const { language, t, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  const navLinks = [
    { href: '#services', label: t.nav.services },
    { href: '#methodology', label: t.nav.methodology },
    { href: '#solutions', label: t.nav.solutions },
    { href: '#about', label: t.nav.about },
    { href: '/register', label: t.nav.talent },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(3, 7, 18, 0.94)' : 'rgba(3, 7, 18, 0.82)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${scrolled ? 'rgba(0, 194, 255, 0.28)' : 'rgba(56, 189, 248, 0.12)'}`,
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.7)' : 'none',
      }}
    >
      <div className="container flex justify-between items-center" style={{ height: '68px' }}>
        {/* Vector SVG Brand Logo */}
        <Link
          href="/"
          style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
          onClick={() => setMenuOpen(false)}
        >
          {/* Desktop & Tablet: Full Horizontal SVG Logo */}
          <div className="hidden sm:block">
            <Logo3Cats variant="horizontal" height={36} />
          </div>
          {/* Mobile Phone: Clean mark + stylized name */}
          <div className="sm:hidden flex items-center gap-2">
            <Logo3Cats variant="mark" height={34} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.15rem', color: '#FFFFFF', letterSpacing: '0.04em', lineHeight: 1 }}>
                <span style={{ color: 'var(--accent-cyan)' }}>3</span>CATS
              </span>
              <span style={{ fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--text-muted)' }}>
                SOFTWARE &amp; DELIVERY
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center" style={{ gap: '2rem' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.92rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                letterSpacing: '0.01em',
                transition: 'all 0.2s ease',
                padding: '0.4rem 0',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.textShadow = '0 0 10px rgba(0, 194, 255, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.textShadow = 'none';
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Language Switcher Button */}
          <button
            onClick={toggleLanguage}
            aria-label="Cambiar idioma / Toggle language"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              background: 'rgba(8, 20, 39, 0.7)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              borderRadius: '6px',
              padding: '0.38rem 0.75rem',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.8rem',
              fontWeight: 700,
              cursor: 'pointer',
              minHeight: '38px',
              minWidth: '44px',
              transition: 'all 0.2s ease',
            }}
          >
            <span style={{ color: language === 'es' ? 'var(--accent-cyan)' : 'var(--text-muted)' }}>ES</span>
            <span style={{ color: 'var(--text-muted)', opacity: 0.6 }}>/</span>
            <span style={{ color: language === 'en' ? 'var(--accent-cyan)' : 'var(--text-muted)' }}>EN</span>
          </button>

          {/* Primary CTA (Desktop & Tablet) */}
          <a
            href="#contact"
            className="btn-corp-primary hidden sm:inline-flex"
            style={{ padding: '0.55rem 1.35rem', fontSize: '0.88rem' }}
          >
            {t.nav.cta}
            <span style={{ marginLeft: '4px' }}>→</span>
          </a>

          {/* Mobile Hamburger Toggle (Touch-friendly 44x44px) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'rgba(8, 20, 39, 0.7)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              borderRadius: '6px',
              width: '42px',
              height: '42px',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '5px',
              padding: 0,
            }}
            className="lg:hidden"
            aria-label="Abrir menú"
          >
            <span
              style={{
                width: '20px',
                height: '2px',
                backgroundColor: '#FFFFFF',
                transition: 'all 0.25s ease',
                transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
              }}
            />
            <span
              style={{
                width: '20px',
                height: '2px',
                backgroundColor: 'var(--accent-cyan)',
                transition: 'all 0.25s ease',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                width: '20px',
                height: '2px',
                backgroundColor: '#FFFFFF',
                transition: 'all 0.25s ease',
                transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
              }}
            />
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Drawer */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '68px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(3, 7, 18, 0.98)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '2rem 1.5rem',
            zIndex: 99,
            overflowY: 'auto',
          }}
          className="lg:hidden"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.14em', color: 'var(--accent-cyan)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              Navegación
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: 'var(--text-white)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-heading)',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span>{link.label}</span>
                <span style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem' }}>→</span>
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
            <a
              href="#contact"
              className="btn-corp-primary w-full"
              onClick={() => setMenuOpen(false)}
              style={{ textAlign: 'center', padding: '1rem', fontSize: '1rem' }}
            >
              {t.nav.cta} →
            </a>
            <div style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-muted)', letterSpacing: '0.12em' }}>
              IDEAS | PROYECTOS | RESULTADOS
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
