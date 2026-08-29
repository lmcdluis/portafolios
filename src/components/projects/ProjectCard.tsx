import React from 'react';
import GlassPanel from '../glass/GlassPanel';
import { Project } from '../../data/projects';
import { useLang } from '../../i18n/LangContext';

export interface ProjectCardProps {
  project: Project;
  onOpen: (id: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpen }) => {
  const { pick, t } = useLang();

  const open = () => onOpen(project.id);
  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      open();
    }
  };

  return (
    <GlassPanel
      as="article"
      lift
      className="project-card"
      role="button"
      tabIndex={0}
      onClick={open}
      onKeyDown={onKeyDown}
      aria-label={project.title}
    >
      <div className="project-card__shot">
        {/* catalogue plates print in black and white; colour returns on hover */}
        <img src={project.image} alt={project.title} loading="lazy" />
        <span className="project-card__hint">{t('work.viewcase')}</span>
      </div>
      <div className="project-card__body">
        <div className="d-flex align-items-center mb-3" style={{ gap: '0.625rem' }}>
          <span className="kicker">{project.num}</span>
          <span className="project-card__rule" />
          <span className="label-xs">{pick(project.platform)}</span>
        </div>
        <h3 className="h4 mb-2">{project.title}</h3>
        <p className="text-dim flex-grow-1 mb-3" style={{ fontSize: '0.84375rem' }}>
          {pick(project.description)}
        </p>
        <div className="d-flex flex-wrap" style={{ gap: '0.4375rem' }}>
          {project.tags.map((tag, index) => (
            <span key={pick(tag)} className={'chip' + (index === 0 ? ' chip--accent' : '')}>
              {pick(tag)}
            </span>
          ))}
        </div>
      </div>
    </GlassPanel>
  );
};

export default ProjectCard;
