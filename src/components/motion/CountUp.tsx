import React, { useEffect, useState } from 'react';
import useInView from '../../hooks/useInView';

export interface CountUpProps {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export const CountUp: React.FC<CountUpProps> = ({ to, suffix = '', duration = 1100, className }) => {
  const [ref, inView] = useInView<HTMLSpanElement>(0.5, '0px');
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(to * eased));
      if (progress < 1) frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {value}
      {value === to ? suffix : ''}
    </span>
  );
};

export default CountUp;
