import React from 'react';
import useInView from '../../hooks/useInView';

export interface RevealProps {
  /** Stagger in ms. */
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const Reveal: React.FC<RevealProps> = ({ delay = 0, className = '', style, children }) => {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={['reveal', inView ? 'is-in' : '', className].filter(Boolean).join(' ')}
      style={{ transitionDelay: delay + 'ms', ...style }}
    >
      {children}
    </div>
  );
};

export default Reveal;
