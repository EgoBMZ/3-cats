"use client";

import React from 'react';

interface LogoProps {
  variant?: 'horizontal' | 'mark' | 'stacked';
  height?: number | string;
  className?: string;
  showTagline?: boolean;
}

export default function Logo3Cats({
  variant = 'horizontal',
  height = 42,
  className = '',
  showTagline = false,
}: LogoProps) {
  if (variant === 'mark') {
    return (
      <svg
        viewBox="0 0 160 160"
        style={{ height, width: 'auto', display: 'inline-block' }}
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="markCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" />
            <stop offset="60%" stopColor="#00C2FF" />
            <stop offset="100%" stopColor="#0066FF" />
          </linearGradient>
          <filter id="markGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g transform="translate(20, 16) scale(0.75)">
          {/* 3rd Cat (Back - Silver/White) */}
          <g transform="translate(54, 10)" opacity="0.38" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12,42 L24,6 L38,28 C45,30 56,40 60,50 C63,57 61,65 56,71 C51,76 45,82 45,92 C45,104 53,115 50,128 C48,135 43,142 38,148" />
            <path d="M24,6 L12,25" />
          </g>

          {/* 2nd Cat (Middle - Ice Blue) */}
          <g transform="translate(27, 5)" opacity="0.75" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12,42 L24,6 L38,28 C45,30 56,40 60,50 C63,57 61,65 56,71 C51,76 45,82 45,92 C45,104 53,115 50,128 C48,135 43,142 38,148" />
            <path d="M24,6 L12,25" />
          </g>

          {/* 1st Cat (Front - Electric Cyan with Number 3 contour) */}
          <g stroke="url(#markCyanGrad)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" filter="url(#markGlow)">
            <path d="M24,6 L38,28 C45,30 56,40 60,50 C63,57 61,65 56,71 C51,76 45,82 45,92 C45,104 53,115 50,128 C48,135 43,142 38,148" />
            <path d="M24,6 L12,25" />
            <path d="M12,25 C-4,35 -6,52 6,66 C14,75 25,78 35,78" />
            <path d="M35,78 C18,78 -4,88 -6,110 C-8,132 10,148 32,148 C40,148 48,145 54,140" />
            <line x1="16" y1="78" x2="35" y2="78" strokeWidth="4.5" />
          </g>
        </g>
      </svg>
    );
  }

  // Horizontal variant (default)
  return (
    <svg
      viewBox="0 0 540 120"
      style={{ height, width: 'auto', display: 'inline-block' }}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E5FF" />
          <stop offset="60%" stopColor="#00C2FF" />
          <stop offset="100%" stopColor="#0077FE" />
        </linearGradient>
        <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ISOTYPE: 3 LAYERED CAT SILHOUETTES */}
      <g transform="translate(6, 6) scale(0.68)">
        {/* 3rd Cat (Back - Crisp Silver/White) */}
        <g transform="translate(64, 10)" opacity="0.38" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12,42 L24,6 L38,28 C45,30 56,40 60,50 C63,57 61,65 56,71 C51,76 45,82 45,92 C45,104 53,115 50,128 C48,135 43,142 38,148" />
          <path d="M24,6 L12,25" />
        </g>

        {/* 2nd Cat (Middle - Ice Cyan) */}
        <g transform="translate(32, 5)" opacity="0.75" stroke="#38BDF8" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12,42 L24,6 L38,28 C45,30 56,40 60,50 C63,57 61,65 56,71 C51,76 45,82 45,92 C45,104 53,115 50,128 C48,135 43,142 38,148" />
          <path d="M24,6 L12,25" />
        </g>

        {/* 1st Cat (Front - Electric Cyan with Number 3 contour) */}
        <g stroke="url(#logoCyanGrad)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#logoGlow)">
          <path d="M24,6 L38,28 C45,30 56,40 60,50 C63,57 61,65 56,71 C51,76 45,82 45,92 C45,104 53,115 50,128 C48,135 43,142 38,148" />
          <path d="M24,6 L12,25" />
          <path d="M12,25 C-4,35 -6,52 6,66 C14,75 25,78 35,78" />
          <path d="M35,78 C18,78 -4,88 -6,110 C-8,132 10,148 32,148 C40,148 48,145 54,140" />
          <line x1="16" y1="78" x2="35" y2="78" strokeWidth="4" />
        </g>
      </g>

      {/* WORDMARK: 3 C Λ T S */}
      <g transform="translate(155, 16)">
        {/* Number 3 in Electric Cyan */}
        <g fill="none" stroke="url(#logoCyanGrad)" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#logoGlow)">
          <path d="M6,14 L40,14 C48,14 52,18 52,25 C52,34 44,38 36,38 C46,38 54,43 54,54 C54,63 46,70 36,70 L6,70" />
          <line x1="24" y1="38" x2="36" y2="38" strokeWidth="5" />
        </g>

        {/* C in Crisp White */}
        <g transform="translate(80, 0)" fill="none" stroke="#FFFFFF" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M52,18 C45,13 36,11 27,11 C12,11 2,23 2,40 C2,57 12,69 27,69 C36,69 45,67 52,62" />
        </g>

        {/* Λ (Inverted chevron A) in Crisp White */}
        <g transform="translate(155, 0)" fill="none" stroke="#FFFFFF" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2,70 L28,14 L54,70" />
          <circle cx="28" cy="42" r="2.8" fill="#00E5FF" stroke="none" />
        </g>

        {/* T in Crisp White */}
        <g transform="translate(230, 0)" fill="none" stroke="#FFFFFF" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="2" y1="14" x2="52" y2="14" />
          <line x1="27" y1="14" x2="27" y2="70" />
        </g>

        {/* S in Crisp White */}
        <g transform="translate(305, 0)" fill="none" stroke="#FFFFFF" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M48,20 C42,14 33,12 24,12 C11,12 5,20 5,29 C5,40 16,44 29,48 C42,51 51,56 51,65 C51,73 42,78 26,78 C15,78 6,73 2,67" />
        </g>

        {/* SUBTITLE: SOFTWARE DEVELOPMENT & PROJECT DELIVERY */}
        <text
          x="3"
          y="98"
          fill="#94A3B8"
          fontFamily="'Outfit', 'Inter', -apple-system, sans-serif"
          fontSize="11.5"
          fontWeight="700"
          letterSpacing="0.22em"
          textAnchor="start"
        >
          SOFTWARE DEVELOPMENT &amp; PROJECT DELIVERY
        </text>

        {showTagline && (
          <text
            x="3"
            y="114"
            fill="#00C2FF"
            fontFamily="'Outfit', 'Inter', -apple-system, sans-serif"
            fontSize="9"
            fontWeight="700"
            letterSpacing="0.16em"
            textAnchor="start"
          >
            IDEAS | PROYECTOS | RESULTADOS
          </text>
        )}
      </g>
    </svg>
  );
}
