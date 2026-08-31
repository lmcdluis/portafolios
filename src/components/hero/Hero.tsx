import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import GlassPanel from '../glass/GlassPanel';
import Reveal from '../motion/Reveal';
import CountUp from '../motion/CountUp';
import { useLang } from '../../i18n/LangContext';

const stack = ['React', 'Bootstrap', 'TypeScript', 'Sass', 'Figma', 'Adobe XD', 'React Router', 'Git'];

export const Hero: React.FC = () => {
  const { t } = useLang();

  const stats = [
    { value: 13, suffix: '+', label: t('hero.stat.years') },
    { value: 9, suffix: '', label: t('hero.stat.ships') },
    { value: 2, suffix: '', label: t('hero.stat.geos') }
  ];

  return (
    <section id="top" className="pt-5 pb-4">
      <Container>
        <Row className="align-items-stretch">
          <Col lg={8} className="mb-4">
            <Reveal>
              <GlassPanel specular className="h-100 p-5">
                <div className="d-flex align-items-center mb-4" style={{ gap: '0.625rem' }}>
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: 'var(--acc)',
                      boxShadow: '0 0 14px var(--acc)'
                    }}
                  />
                  <span className="kicker">Luis Carazo Davila</span>
                </div>

                <h1 className="mb-4" style={{ fontSize: 'clamp(44px, 5.6vw, 74px)', lineHeight: 0.96 }}>
                  {t('hero.title.1')}
                  <br />
                  {t('hero.title.2')}
                  <br />
                  {/* the one place the full accent runs at display size */}
                  <span style={{ color: 'var(--acc)' }}>{t('hero.title.3')}</span>
                </h1>

                <p className="text-dim mb-3" style={{ fontSize: '1.0625rem', maxWidth: '56ch' }}>
                  {t('hero.lead')}
                </p>
                <p className="text-dimmer mb-4" style={{ maxWidth: '56ch' }}>
                  {t('hero.sub')}
                </p>

                <div className="d-flex flex-wrap" style={{ gap: '0.875rem' }}>
                  <a href="#trabajo" className="btn btn-accent btn-lg" data-magnet>
                    {t('hero.cta.work')}
                  </a>
                  <a href="/cv-luis-carazo.pdf" download className="btn btn-outline-ink btn-lg" data-magnet>
                    {t('hero.cta.cv')}
                  </a>
                </div>
              </GlassPanel>
            </Reveal>
          </Col>

          <Col lg={4}>
            <Reveal delay={140} className="h-100">
              <Row noGutters style={{ margin: '-0.4375rem' }}>
                {stats.map((stat) => (
                  <Col xs={6} key={stat.label} style={{ padding: '0.4375rem' }}>
                    <GlassPanel className="h-100 p-3">
                      <div className="h1 mb-2" style={{ fontSize: '2.625rem' }}>
                        <CountUp to={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="label-xs">{stat.label}</div>
                    </GlassPanel>
                  </Col>
                ))}
                <Col xs={6} style={{ padding: '0.4375rem' }}>
                  <GlassPanel className="h-100 p-3">
                    <div className="h2 mb-2" style={{ lineHeight: 1.1 }}>
                      iOS
                      <br />
                      Android
                    </div>
                    <div className="label-xs">{t('hero.stat.apps')}</div>
                  </GlassPanel>
                </Col>
                <Col xs={12} style={{ padding: '0.4375rem' }}>
                  <GlassPanel variant="tint" className="p-3">
                    <div className="kicker mb-3">Stack</div>
                    <div className="d-flex flex-wrap" style={{ gap: '0.5rem' }}>
                      {stack.map((item) => (
                        <span key={item} className="chip">{item}</span>
                      ))}
                    </div>
                  </GlassPanel>
                </Col>
              </Row>
            </Reveal>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
