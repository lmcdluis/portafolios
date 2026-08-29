import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import GlassPanel from '../glass/GlassPanel';
import Reveal from '../motion/Reveal';
import { useLang } from '../../i18n/LangContext';

/**
 * TODO: replace with real quotes (LinkedIn recommendations work well).
 * Keep the same shape: { quote: {es, en}, author, role }.
 */
const testimonials = [
  {
    id: 't1',
    quote: {
      es: 'Texto de testimonio pendiente. Sustituye por una cita real de un product owner o líder técnico con quien trabajaste.',
      en: 'Placeholder testimonial. Replace with a real quote from a product owner or tech lead you worked with.'
    }
  },
  {
    id: 't2',
    quote: {
      es: 'Texto de testimonio pendiente. Una cita sobre cómo el diseño y la implementación llegaron juntos funciona muy bien aquí.',
      en: 'Placeholder testimonial. A quote about design and implementation arriving together works well here.'
    }
  },
  {
    id: 't3',
    quote: {
      es: 'Texto de testimonio pendiente. Si tienes una recomendación de LinkedIn, puedes citarla tal cual.',
      en: 'Placeholder testimonial. If you have a LinkedIn recommendation, quote it verbatim here.'
    }
  }
];

export const TestimonialsSection: React.FC = () => {
  const { t, pick } = useLang();

  return (
    <section id="voces" className="py-5">
      <Container>
        <Reveal>
          <div className="mb-4">
            <div className="kicker mb-2">04 · {t('voices.kicker')}</div>
            <h2 style={{ fontSize: 'clamp(34px, 4.2vw, 54px)' }}>{t('voices.title')}</h2>
          </div>
        </Reveal>
        <Row>
          {testimonials.map((item, index) => (
            <Col lg={4} md={6} key={item.id} className="mb-4">
              <Reveal delay={index * 60} className="h-100">
                <GlassPanel className="h-100 p-4">
                  <blockquote className="mb-0">
                    <div className="h1 mb-3" style={{ lineHeight: 0.6, color: 'var(--acc)' }}>&ldquo;</div>
                    <p className="mb-4">{pick(item.quote)}</p>
                    <footer className="label-xs">{t('voices.attribution')}</footer>
                  </blockquote>
                </GlassPanel>
              </Reveal>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
