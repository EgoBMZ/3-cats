"use client";

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const { language, t, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#solutions', label: language === 'es' ? 'Soluciones' : 'Solutions' },
    { href: '#talent', label: language === 'es' ? 'Talento' : 'Talent' },
  ];

  return (
    <nav
      className={scrolled ? 'nav-scrolled' : ''}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: 'var(--bg-primary)',
        borderBottom: `2px solid ${scrolled ? 'var(--text-primary)' : 'var(--border-color)'}`,
        padding: '0.9rem 0',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <div className="container flex justify-between items-center">
        {/* Logo + Nav Links */}
        <div className="flex items-center gap-8">
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/images/demo2.png"
              alt="3Cats Logo"
              style={{ height: '68px', width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }}
            />
          </Link>

          {/* Desktop nav links */}
          <div style={{ gap: '1.75rem', fontWeight: 600, fontSize: '0.95rem' }} className="hidden md:flex">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s ease', padding: '0.25rem 0', borderBottom: '2px solid transparent' }}
                onMouseEnter={e => {
                  (e.target as HTMLElement).style.color = 'var(--accent-green)';
                  (e.target as HTMLElement).style.borderBottomColor = 'var(--accent-green)';
                }}
                onMouseLeave={e => {
                  (e.target as HTMLElement).style.color = 'var(--text-secondary)';
                  (e.target as HTMLElement).style.borderBottomColor = 'transparent';
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            style={{
              background: 'transparent',
              border: '2px solid var(--border-color)',
              borderRadius: '8px',
              padding: '0.4rem 0.9rem',
              fontWeight: 700,
              cursor: 'pointer',
              color: 'var(--text-secondary)',
              fontSize: '0.85rem',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={e => {
              (e.target as HTMLElement).style.borderColor = 'var(--accent-green)';
              (e.target as HTMLElement).style.color = 'var(--accent-green)';
            }}
            onMouseLeave={e => {
              (e.target as HTMLElement).style.borderColor = 'var(--border-color)';
              (e.target as HTMLElement).style.color = 'var(--text-secondary)';
            }}
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>

          {/* CTA Button */}
          <a href="#contact" className="btn btn-secondary hidden md:inline-flex" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>
            {t.nav.cta}
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem' }}
            className="md:hidden flex flex-col justify-center items-center"
            aria-label="Menu"
          >
            <div style={{ width: '22px', height: '2px', backgroundColor: 'var(--text-primary)', marginBottom: '5px', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <div style={{ width: '22px', height: '2px', backgroundColor: 'var(--text-primary)', marginBottom: '5px', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.3s' }} />
            <div style={{ width: '22px', height: '2px', backgroundColor: 'var(--text-primary)', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)', padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '1rem', textDecoration: 'none' }}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" style={{ textAlign: 'center', marginTop: '0.5rem' }}>
            {t.nav.cta}
          </a>
        </div>
      )}
    </nav>
  );
}
