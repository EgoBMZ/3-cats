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
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: scrolled ? 'rgba(3, 7, 18, 0.95)' : 'rgba(3, 7, 18, 0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: `1px solid ${scrolled ? 'rgba(0, 194, 255, 0.28)' : 'rgba(56, 189, 248, 0.12)'}`,
          transition: 'all 0.3s ease',
          boxShadow: scrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.7)' : 'none',
        }}
      >
        <div className="container flex justify-between items-center" style={{ height: '68px' }}>
          {/* Official 3Cats Vector Brand Logo */}
          <Link
            href="/"
            style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
            onClick={() => setMenuOpen(false)}
          >
            {/* Desktop & Tablet: Full Horizontal Vector Logo */}
            <div className="hidden sm:block">
              <Logo3Cats variant="horizontal" height={36} theme="dark" />
            </div>
            {/* Mobile Phone: Compact Horizontal Vector Logo */}
            <div className="sm:hidden">
              <Logo3Cats variant="horizontal" height={32} theme="dark" />
            </div>
          </Link>

          {/* Desktop Navigation Links (>= 1024px) */}
          <nav className="navbar-desktop-nav" style={{ gap: '2rem' }}>
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

            {/* Mobile Hamburger Toggle: Strictly HIDDEN on Desktop (>= 1024px) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="navbar-hamburger-btn"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
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
      </header>

      {/* Fullscreen Mobile Drawer (Rendered outside <header> to avoid stacking context clipping) */}
      {menuOpen && (
        <div
          id="mobile-nav-drawer"
          style={{
            position: 'fixed',
            inset: 0,
            width: '100vw',
            height: '100dvh',
            backgroundColor: 'rgba(3, 7, 18, 0.98)',
            backdropFilter: 'blur(28px)',
            WebkitBackdropFilter: 'blur(28px)',
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
          }}
        >
          {/* Top Bar inside Drawer */}
          <div
            className="container"
            style={{
              height: '68px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(56, 189, 248, 0.15)',
              flexShrink: 0,
            }}
          >
            <Logo3Cats variant="horizontal" height={32} theme="dark" />

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <button
                onClick={toggleLanguage}
                style={{
                  background: 'rgba(8, 20, 39, 0.8)',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  borderRadius: '6px',
                  padding: '0.35rem 0.65rem',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                <span style={{ color: language === 'es' ? 'var(--accent-cyan)' : 'var(--text-muted)' }}>ES</span>
                <span style={{ color: 'var(--text-muted)', opacity: 0.6, margin: '0 3px' }}>/</span>
                <span style={{ color: language === 'en' ? 'var(--accent-cyan)' : 'var(--text-muted)' }}>EN</span>
              </button>

              <button
                onClick={() => setMenuOpen(false)}
                style={{
                  background: 'rgba(8, 20, 39, 0.8)',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  borderRadius: '6px',
                  width: '42px',
                  height: '42px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#FFFFFF',
                  fontSize: '1.3rem',
                  fontWeight: 400,
                }}
                aria-label="Cerrar menú"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Links & Navigation Content */}
          <div
            className="container"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flex: 1,
              padding: '2rem 1.5rem',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  color: 'var(--accent-cyan)',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                }}
              >
                Navegación
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    color: '#FFFFFF',
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-heading)',
                    padding: '1rem 0',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textDecoration: 'none',
                  }}
                >
                  <span>{link.label}</span>
                  <span style={{ color: 'var(--accent-cyan)', fontSize: '1.1rem' }}>→</span>
                </a>
              ))}
            </div>

            {/* Bottom Actions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2.5rem' }}>
              <a
                href="#contact"
                className="btn-corp-primary w-full"
                onClick={() => setMenuOpen(false)}
                style={{ textAlign: 'center', padding: '1rem', fontSize: '1rem' }}
              >
                {t.nav.cta} →
              </a>
              <div style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.14em' }}>
                IDEAS | PROYECTOS | RESULTADOS
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
