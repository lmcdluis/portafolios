import React from 'react';

/**
 * The five Lucide glyphs this site uses, inlined.
 * CRA 4's webpack cannot consume lucide-react's .mjs build, and pulling a
 * whole icon package for five paths is not worth the dependency.
 * Paths traced from lucide.dev (ISC) — 24×24 grid, 1.5 stroke.
 */
export interface IconProps {
  size?: number;
  strokeWidth?: number;
  className?: string;
  style?: React.CSSProperties;
}

const base = (size: number, strokeWidth: number): React.SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false
});

export const Moon: React.FC<IconProps> = ({ size = 17, strokeWidth = 1.5, ...rest }) => (
  <svg {...base(size, strokeWidth)} {...rest}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export const Sun: React.FC<IconProps> = ({ size = 17, strokeWidth = 1.5, ...rest }) => (
  <svg {...base(size, strokeWidth)} {...rest}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
);

export const X: React.FC<IconProps> = ({ size = 15, strokeWidth = 1.5, ...rest }) => (
  <svg {...base(size, strokeWidth)} {...rest}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const Search: React.FC<IconProps> = ({ size = 13, strokeWidth = 1.5, ...rest }) => (
  <svg {...base(size, strokeWidth)} {...rest}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5M11 8v6M8 11h6" />
  </svg>
);

export const Check: React.FC<IconProps> = ({ size = 18, strokeWidth = 1.5, ...rest }) => (
  <svg {...base(size, strokeWidth)} {...rest}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
