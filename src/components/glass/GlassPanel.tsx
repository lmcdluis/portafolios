import React from 'react';
import useSpecular from '../../hooks/useSpecular';

export interface GlassPanelProps {
  /** Rounded pill, extra-large radius, tinted, or a flat inner plate. */
  variant?: 'default' | 'pill' | 'xl' | 'tint' | 'quiet';
  /** Adds the pointer-tracking specular highlight. */
  specular?: boolean;
  /** Adds the hover lift used by project cards. */
  lift?: boolean;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  children?: React.ReactNode;
}

const variantClass: Record<string, string> = {
  default: '',
  pill: 'glass--pill',
  xl: 'glass--xl',
  tint: 'glass--tint',
  quiet: 'glass--quiet'
};

export const GlassPanel: React.FC<GlassPanelProps> = ({
  variant = 'default',
  specular = false,
  lift = false,
  className = '',
  style,
  id,
  children
}) => {
  const ref = useSpecular<HTMLDivElement>(specular);
  const classes = ['glass', variantClass[variant], lift ? 'glass-lift' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={ref} id={id} className={classes} style={style}>
      {specular && <span className="glass__specular" aria-hidden="true" />}
      {specular ? <div className="glass__body">{children}</div> : children}
    </div>
  );
};

export default GlassPanel;
