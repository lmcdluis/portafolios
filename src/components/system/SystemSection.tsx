import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import GlassPanel from '../glass/GlassPanel';
import Reveal from '../motion/Reveal';
import { useLang } from '../../i18n/LangContext';

const ramp = ['#1d2d3d', '#2c455d', '#416180', '#5980a6', '#749dc4', '#94bce3', '#b5d9fd'];

export const SystemSection: React.FC = () => {
  const { t } = useLang();

  return (
    <section id="sistema" className="py-5">
      <Container>
        <Reveal>
          <GlassPanel variant="xl" specular className="p-5">
            <Row>
              <Col lg={5} className="mb-4 mb-lg-0">
                <div className="kicker mb-2">03 · {t('system.kicker')}</div>
                <h2 className="mb-3" style={{ fontSize: 'clamp(30px, 3.4vw, 44px)', letterSpacing: '-0.02em' }}>
                  {t('system.title')}
                </h2>
                <p className="text-dim">{t('system.p1')}</p>
                <p className="text-dim mb-0">{t('system.p2')}</p>
              </Col>
              <Col lg={7}>
                <GlassPanel variant="quiet" className="p-3 mb-3">
                  <div className="label-xs mb-3">{t('system.color')}</div>
                  <Row noGutters style={{ margin: '-3px' }}>
                    {ramp.map((hex) => (
                      <Col key={hex} style={{ padding: 3 }}>
                        <div className="swatch" style={{ background: hex }} title={hex} />
                      </Col>
                    ))}
                  </Row>
                </GlassPanel>
                <Row>
                  <Col sm={6} className="mb-3 mb-sm-0">
                    <GlassPanel variant="quiet" className="p-3 h-100">
                      <div className="label-xs mb-3">{t('system.type')}</div>
                      <div className="h2 mb-1">Aa</div>
                      <div className="text-dimmer" style={{ fontSize: '0.75rem' }}>Barlow Condensed · Barlow</div>
                    </GlassPanel>
                  </Col>
                  <Col sm={6}>
                    <GlassPanel variant="quiet" className="p-3 h-100">
                      <div className="label-xs mb-3">{t('system.components')}</div>
                      <div className="d-flex flex-column" style={{ gap: '0.5rem' }}>
                        <span className="chip text-center" style={{ background: 'var(--steel-300)', color: 'var(--steel-900)', border: 0 }}>
                          {t('system.primary')}
                        </span>
                        <span className="chip text-center">{t('system.secondary')}</span>
                      </div>
                    </GlassPanel>
                  </Col>
                </Row>
              </Col>
            </Row>
          </GlassPanel>
        </Reveal>
      </Container>
    </section>
  );
};

export default SystemSection;
