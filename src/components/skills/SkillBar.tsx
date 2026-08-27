import React from 'react';
import useInView from '../../hooks/useInView';

export interface SkillBarProps {
  label: string;
  level: string;
  /** 0-100 */
  value: number;
  delay?: number;
}

export const SkillBar: React.FC<SkillBarProps> = ({ label, level, value, delay = 0 }) => {
  const [ref, inView] = useInView<HTMLDivElement>(0.35, '0px');

  return (
    <div ref={ref} className="skill mb-3">
      <div className="d-flex justify-content-between mb-2" style={{ fontSize: '0.8125rem' }}>
        <span>{label}</span>
        <span className="text-dimmer">{level}</span>
      </div>
      <div className="skill__track">
        <div
          className="skill__fill"
          style={{ width: inView ? value + '%' : 0, transitionDelay: delay + 'ms' }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
