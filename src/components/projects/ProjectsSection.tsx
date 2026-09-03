import React, { useMemo, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import CaseStudyDialog from './CaseStudyDialog';
import Reveal from '../motion/Reveal';
import projects, { Category, TECHS, Tech } from '../../data/projects';
import { useLang } from '../../i18n/LangContext';

type Filter = 'all' | Category;

const filters: Filter[] = ['all', 'movil', 'web'];

export const ProjectsSection: React.FC = () => {
  const { t } = useLang();
  const [filter, setFilter] = useState<Filter>('all');
  const [techs, setTechs] = useState<Tech[]>([]);
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleTech = (tech: Tech) =>
    setTechs((current) => (current.includes(tech) ? current.filter((x) => x !== tech) : [...current, tech]));

  // category AND every selected technology
  const visible = useMemo(
    () =>
      projects.filter(
        (project) =>
          (filter === 'all' || project.category === filter) &&
          techs.every((tech) => project.techs.includes(tech))
      ),
    [filter, techs]
  );

  const openProject = projects.find((project) => project.id === openId) || null;
  const countWord = visible.length === 1 ? t('work.count.one') : t('work.count.many');

  return (
    <section id="trabajo" className="py-5">
      <Container>
        <Reveal>
          <div className="d-flex flex-wrap align-items-end justify-content-between mb-4" style={{ gap: '1.5rem' }}>
            <div>
              <div className="kicker mb-2">{t('work.kicker')}</div>
              <h2 style={{ fontSize: 'clamp(34px, 4.2vw, 54px)' }}>{t('work.title')}</h2>
            </div>
            <div className="switch" role="group" aria-label={t('work.kicker')}>
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

        <Reveal delay={60}>
          <div
            className="d-flex flex-wrap align-items-center mb-4 pb-3"
            style={{ gap: '0.625rem', borderBottom: '2px solid var(--rule)' }}
          >
            <span className="label-xs mr-2">{t('work.tech')}</span>
            {TECHS.map((tech) => (
              <button
                key={tech}
                type="button"
                aria-pressed={techs.includes(tech)}
                className={'chip chip--button' + (techs.includes(tech) ? ' chip--on' : '')}
                onClick={() => toggleTech(tech)}
              >
                {tech}
              </button>
            ))}
            {techs.length > 0 && (
              <button
                type="button"
                className="chip chip--button"
                style={{ borderStyle: 'dashed', background: 'transparent' }}
                onClick={() => setTechs([])}
              >
                {t('work.clear')}
              </button>
            )}
            <span className="text-dimmer ml-auto" style={{ fontSize: '0.75rem' }}>
              {visible.length} {countWord}
            </span>
          </div>
        </Reveal>

        {visible.length === 0 ? (
          <div className="text-dimmer text-center py-5">{t('work.empty')}</div>
        ) : (
          <Row>
            {visible.map((project, index) => (
              <Col key={project.id} lg={4} md={6} className="mb-4">
                <Reveal delay={(index % 3) * 60} className="h-100">
                  <ProjectCard project={project} onOpen={setOpenId} />
                </Reveal>
              </Col>
            ))}
          </Row>
        )}
      </Container>

      <CaseStudyDialog project={openProject} onClose={() => setOpenId(null)} />
    </section>
  );
};

export default ProjectsSection;
