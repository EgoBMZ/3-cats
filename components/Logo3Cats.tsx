"use client";

import React from 'react';

// Exact mathematical bezier vectors of the 3Cats Corporate Identity (demo1.jpeg & demo2.jpeg)
// Front cat in Electric Cyan with the integrated "3", Middle cat in Ice Cyan, Rear cat in Pure White

const CAT_HEAD = "M 16,50 C 20,32 34,18 52,10 C 60,7 68,8 72,13 L 72,28 C 78,37 84,45 88,51 C 84,55 81,57 78,58 C 73,61 70,66 69,72 C 68,80 71,90 77,98 L 80,104";
const CAT_INNER_EAR = "M 76,27 L 83,18 L 83,26";
const CAT_THREE_INTEGRATED = "M 16,50 L 46,50 C 58,50 60,60 54,67 C 49,72 38,73 24,73 M 24,73 C 44,73 60,78 58,91 C 56,101 44,105 26,104 C 18,103 12,100 8,96";

interface LogoProps {
  variant?: 'horizontal' | 'mark' | 'stacked';
  height?: number;
  theme?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function Logo3Cats({
  variant = 'horizontal',
  height = 38,
  className = '',
  style = {},
}: LogoProps) {
  // 1. ISOTYPE ONLY (App icon, mobile header mark)
  if (variant === 'mark') {
    const width = Math.round((height * 150) / 115);
    return (
      <svg
        viewBox="0 0 150 115"
        width={width}
        height={height}
        className={className}
        style={{ display: 'inline-block', verticalAlign: 'middle', overflow: 'visible', ...style }}
        aria-label="3Cats Logo Isotype"
      >
        <defs>
          <linearGradient id="markCyanGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" />
            <stop offset="100%" stopColor="#0077FF" />
          </linearGradient>
          <filter id="markGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Cat 3 (Rear - Crisp White) */}
        <g transform="translate(54, 0)" stroke="#FFFFFF" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.6">
          <path d={CAT_HEAD} />
          <path d={CAT_INNER_EAR} />
        </g>

        {/* Cat 2 (Middle - Ice Cyan) */}
        <g transform="translate(27, 0)" stroke="#38BDF8" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.8">
          <path d={CAT_HEAD} />
          <path d={CAT_INNER_EAR} />
        </g>

        {/* Cat 1 (Front - Electric Cyan with Number 3) */}
        <g stroke="url(#markCyanGlow)" strokeWidth="3.6" fill="none" strokeLinecap="round" strokeLinejoin="round" filter="url(#markGlow)">
          <path d={CAT_HEAD} />
          <path d={CAT_INNER_EAR} />
          <path d={CAT_THREE_INTEGRATED} />
        </g>
      </svg>
    );
  }

  // 2. STACKED LOGO (Hero, centered sections, footer)
  if (variant === 'stacked') {
    return (
      <div
        className={`flex flex-col items-center text-center ${className}`}
        style={{ ...style }}
        aria-label="3Cats - Software Development & Project Delivery"
      >
        <svg
          viewBox="0 0 150 115"
          width={Math.round(height * 1.6)}
          height={Math.round((height * 1.6 * 115) / 150)}
          style={{ overflow: 'visible', marginBottom: '0.6rem' }}
        >
          <defs>
            <linearGradient id="stackedCyanGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00E5FF" />
              <stop offset="100%" stopColor="#0077FF" />
            </linearGradient>
            <filter id="stackedGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Cat 3 */}
          <g transform="translate(54, 0)" stroke="#FFFFFF" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.6">
            <path d={CAT_HEAD} />
            <path d={CAT_INNER_EAR} />
          </g>
          {/* Cat 2 */}
          <g transform="translate(27, 0)" stroke="#38BDF8" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.8">
            <path d={CAT_HEAD} />
            <path d={CAT_INNER_EAR} />
          </g>
          {/* Cat 1 */}
          <g stroke="url(#stackedCyanGlow)" strokeWidth="3.6" fill="none" strokeLinecap="round" strokeLinejoin="round" filter="url(#stackedGlow)">
            <path d={CAT_HEAD} />
            <path d={CAT_INNER_EAR} />
            <path d={CAT_THREE_INTEGRATED} />
          </g>
        </svg>

        {/* Wordmark: 3 C Λ T S */}
        <div style={{ display: 'flex', alignItems: 'baseline', lineHeight: 1 }}>
          <span
            style={{
              fontFamily: 'var(--font-heading, system-ui, sans-serif)',
              fontWeight: 800,
              fontSize: `${height * 0.8}px`,
              color: 'var(--accent-cyan, #00C2FF)',
              textShadow: '0 0 12px rgba(0, 194, 255, 0.6)',
              marginRight: '0.2em',
            }}
          >
            3
          </span>
          <span
            style={{
              fontFamily: 'var(--font-heading, system-ui, sans-serif)',
              fontWeight: 700,
              fontSize: `${height * 0.8}px`,
              color: '#FFFFFF',
              letterSpacing: '0.22em',
            }}
          >
            C Λ T S
          </span>
        </div>

        <span
          style={{
            fontFamily: 'var(--font-heading, system-ui, sans-serif)',
            fontSize: `${Math.max(9, height * 0.2)}px`,
            fontWeight: 700,
            letterSpacing: '0.14em',
            color: 'var(--text-secondary, #94A3B8)',
            marginTop: '0.35rem',
            textTransform: 'uppercase',
            opacity: 0.9,
          }}
        >
          Software Development &amp; Project Delivery
        </span>
      </div>
    );
  }

  // 3. HORIZONTAL LOGO (Default: Navbar, Header, Corporate B2B lockup)
  const isoHeight = height;
  const isoWidth = Math.round((isoHeight * 150) / 115);

  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.75rem',
        userSelect: 'none',
        ...style,
      }}
      aria-label="3Cats Logo"
    >
      {/* 3Cats Vector Line Isotype */}
      <svg
        viewBox="0 0 150 115"
        width={isoWidth}
        height={isoHeight}
        style={{ flexShrink: 0, overflow: 'visible' }}
      >
        <defs>
          <linearGradient id="horizCyanGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" />
            <stop offset="100%" stopColor="#0077FF" />
          </linearGradient>
          <filter id="horizGlow" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="1.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Cat 3 (Rear - Crisp White) */}
        <g transform="translate(54, 0)" stroke="#FFFFFF" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.6">
          <path d={CAT_HEAD} />
          <path d={CAT_INNER_EAR} />
        </g>

        {/* Cat 2 (Middle - Ice Cyan) */}
        <g transform="translate(27, 0)" stroke="#38BDF8" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.8">
          <path d={CAT_HEAD} />
          <path d={CAT_INNER_EAR} />
        </g>

        {/* Cat 1 (Front - Electric Cyan with Number 3) */}
        <g stroke="url(#horizCyanGlow)" strokeWidth="3.6" fill="none" strokeLinecap="round" strokeLinejoin="round" filter="url(#horizGlow)">
          <path d={CAT_HEAD} />
          <path d={CAT_INNER_EAR} />
          <path d={CAT_THREE_INTEGRATED} />
        </g>
      </svg>

      {/* Corporate Typography: 3 C Λ T S */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', lineHeight: 1 }}>
          <span
            style={{
              fontFamily: 'var(--font-heading, system-ui, sans-serif)',
              fontWeight: 800,
              fontSize: `${Math.max(16, height * 0.58)}px`,
              color: 'var(--accent-cyan, #00C2FF)',
              textShadow: '0 0 10px rgba(0, 194, 255, 0.55)',
              marginRight: '0.18em',
              letterSpacing: '0.04em',
            }}
          >
            3
          </span>
          <span
            style={{
              fontFamily: 'var(--font-heading, system-ui, sans-serif)',
              fontWeight: 700,
              fontSize: `${Math.max(16, height * 0.58)}px`,
              color: '#FFFFFF',
              letterSpacing: '0.22em',
            }}
          >
            C Λ T S
          </span>
        </div>

        <span
          style={{
            fontFamily: 'var(--font-heading, system-ui, sans-serif)',
            fontSize: `${Math.max(8.5, height * 0.22)}px`,
            fontWeight: 700,
            letterSpacing: '0.14em',
            color: 'var(--text-secondary, #94A3B8)',
            marginTop: '2px',
            textTransform: 'uppercase',
            opacity: 0.9,
            lineHeight: 1,
            whiteSpace: 'nowrap',
          }}
        >
          Software Development &amp; Project Delivery
        </span>
      </div>
    </div>
  );
}
