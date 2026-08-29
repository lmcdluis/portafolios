import React from 'react';
import useSpecular from '../../hooks/useSpecular';

export interface GlassPanelProps {
  /** tint = accent-washed plate, quiet = flat inner plate (no blur). */
  variant?: 'default' | 'tint' | 'quiet';
  /** Adds the pointer-tracked specular highlight. */
  specular?: boolean;
  /** Adds the hover lift + accent edge used by project cards. */
  lift?: boolean;
  as?: 'div' | 'article' | 'blockquote';
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  children?: React.ReactNode;
  [key: string]: unknown;
}

const variantClass: Record<string, string> = {
  default: '',
  tint: 'glass--tint',
  quiet: 'glass--quiet'
};

export const GlassPanel: React.FC<GlassPanelProps> = ({
  variant = 'default',
  specular = false,
  lift = false,
  as: Tag = 'div',
  className = '',
  children,
  ...rest
}) => {
  const ref = useSpecular<HTMLDivElement>(specular);
  const classes = ['glass', variantClass[variant], lift ? 'glass-lift' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag ref={ref as never} className={classes} {...rest}>
      {specular && <span className="glass__specular" aria-hidden="true" />}
      {specular ? <div className="glass__body">{children}</div> : children}
    </Tag>
  );
};

export default GlassPanel;
