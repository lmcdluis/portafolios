import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import GlassPanel from '../glass/GlassPanel';
import Reveal from '../motion/Reveal';
import SkillBar from './SkillBar';
import { useLang } from '../../i18n/LangContext';

export const SkillsSection: React.FC = () => {
  const { t, lang } = useLang();

  const design = [
    { es: 'Diseño de interfaz y sistemas visuales', en: 'Interface design and visual systems', value: 95, level: t('level.expert') },
    { es: 'Arquitectura de información y flujos', en: 'Information architecture and flows', value: 88, level: t('level.advanced') },
    { es: 'Prototipado e interacción', en: 'Prototyping and interaction', value: 86, level: t('level.advanced') },
    { es: 'Investigación y pruebas con usuarios', en: 'Research and user testing', value: 74, level: t('level.solid') }
  ];

  const front = [
    { es: 'React · TypeScript', en: 'React · TypeScript', value: 87, level: t('level.advanced') },
    { es: 'Bootstrap · Sass', en: 'Bootstrap · Sass', value: 94, level: t('level.expert') },
    { es: 'Maquetación responsiva', en: 'Responsive layout', value: 92, level: t('level.expert') },
    { es: 'Accesibilidad y rendimiento', en: 'Accessibility and performance', value: 78, level: t('level.solid') }
  ];

  return (
    <section id="capacidades" className="py-5">
      <Container>
        <Reveal>
          <div className="mb-4">
            <div className="kicker mb-2">02 · {t('skills.kicker')}</div>
            <h2 style={{ fontSize: 'clamp(34px, 4.2vw, 54px)', letterSpacing: '-0.02em' }}>{t('skills.title')}</h2>
          </div>
        </Reveal>

        <Row>
          <Col lg={6} className="mb-4">
            <Reveal delay={60} className="h-100">
              <GlassPanel className="h-100 p-4">
                <h4 className="mb-1">{t('skills.design')}</h4>
                <p className="text-dimmer mb-4" style={{ fontSize: '0.8125rem' }}>{t('skills.design.sub')}</p>
                {design.map((skill, index) => (
                  <SkillBar key={skill.en} label={skill[lang]} level={skill.level} value={skill.value} delay={index * 90} />
                ))}
              </GlassPanel>
            </Reveal>
          </Col>
          <Col lg={6} className="mb-4">
            <Reveal delay={140} className="h-100">
              <GlassPanel className="h-100 p-4">
                <h4 className="mb-1">FRONT-END</h4>
                <p className="text-dimmer mb-4" style={{ fontSize: '0.8125rem' }}>{t('skills.front.sub')}</p>
                {front.map((skill, index) => (
                  <SkillBar key={skill.en} label={skill[lang]} level={skill.level} value={skill.value} delay={index * 90} />
                ))}
              </GlassPanel>
            </Reveal>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SkillsSection;
