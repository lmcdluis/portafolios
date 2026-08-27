import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import Reveal from '../motion/Reveal';
import projects, { Category } from '../../data/projects';
import { useLang } from '../../i18n/LangContext';

type Filter = 'all' | Category;

const filters: Filter[] = ['all', 'movil', 'web'];

export const ProjectsSection: React.FC = () => {
  const { t } = useLang();
  const [filter, setFilter] = useState<Filter>('all');

  return (
    <section id="trabajo" className="py-5">
      <Container>
        <Reveal>
          <div className="d-flex flex-wrap align-items-end justify-content-between mb-4" style={{ gap: '1.5rem' }}>
            <div>
              <div className="kicker mb-2">01 · {t('work.kicker')}</div>
              <h2 style={{ fontSize: 'clamp(34px, 4.2vw, 54px)', letterSpacing: '-0.02em' }}>{t('work.title')}</h2>
            </div>
            <div className="switch switch--glass" role="group" aria-label={t('work.kicker')}>
              {filters.map((option) => (
                <button
                  key={option}
                  type="button"
                  aria-pressed={filter === option}
                  className={'switch__opt' + (filter === option ? ' is-active' : '')}
                  onClick={() => setFilter(option)}
                >
                  {t('work.filter.' + option)}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <Row>
          {projects.map((project, index) => {
            const hidden = filter !== 'all' && project.category !== filter;
            return (
              <Col
                key={project.id}
                lg={4}
                md={6}
                className="mb-4"
                style={hidden ? { display: 'none' } : undefined}
              >
                <Reveal delay={(index % 3) * 60} className="h-100">
                  <ProjectCard project={project} />
                </Reveal>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default ProjectsSection;
