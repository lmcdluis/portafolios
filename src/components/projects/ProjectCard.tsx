import React from 'react';
import GlassPanel from '../glass/GlassPanel';
import { Project } from '../../data/projects';
import { useLang } from '../../i18n/LangContext';

export interface ProjectCardProps {
  project: Project;
  hidden?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, hidden = false }) => {
  const { pick } = useLang();

  return (
    <GlassPanel
      lift
      className={'project-card filter-fade' + (hidden ? ' is-hidden' : '')}
    >
      <div className="project-card__shot">
        <img src={project.image} alt={project.title} loading="lazy" />
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
