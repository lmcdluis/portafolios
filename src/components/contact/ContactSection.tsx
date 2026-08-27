import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import GlassPanel from '../glass/GlassPanel';
import Reveal from '../motion/Reveal';
import { useLang } from '../../i18n/LangContext';

const EMAIL = 'carazodesign@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/luis-manuel-carazo-d%C3%A1vila-80a6a0153/';
const GITHUB = 'https://github.com/lmcdluis';

export const ContactSection: React.FC = () => {
  const { t } = useLang();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const change = (field: keyof typeof form) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [field]: event.target.value });

  // No backend in this repo: hand the message to the user's mail client.
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    const subject = encodeURIComponent('Portafolio · ' + (form.name || 'Nuevo mensaje'));
    const body = encodeURIComponent(form.message + '\n\n' + form.name + ' — ' + form.email);
    window.location.href = 'mailto:' + EMAIL + '?subject=' + subject + '&body=' + body;
  };

  return (
    <section id="contacto" className="py-5">
      <Container>
        <Reveal>
          <GlassPanel variant="tint" specular className="glass--xl">
            <Row noGutters>
              <Col lg={6} className="p-5">
                <div className="kicker mb-3" style={{ color: 'var(--steel-200)' }}>05 · {t('contact.kicker')}</div>
                <h2 className="mb-3" style={{ fontSize: 'clamp(32px, 3.6vw, 48px)', letterSpacing: '-0.02em' }}>
                  {t('contact.title')}
                </h2>
                <p className="text-dim mb-4" style={{ maxWidth: '46ch' }}>{t('contact.lead')}</p>

                <dl className="mb-0">
                  {[
                    { term: 'Email', node: <a href={'mailto:' + EMAIL}>{EMAIL}</a> },
                    { term: 'LinkedIn', node: <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">luis-manuel-carazo-dávila</a> },
                    { term: 'GitHub', node: <a href={GITHUB} target="_blank" rel="noopener noreferrer">github.com/lmcdluis</a> },
                    { term: t('contact.based'), node: <span className="text-dim">Managua, Nicaragua · GMT-6</span> }
                  ].map((row) => (
                    <div
                      key={row.term}
                      className="d-flex pb-3 mb-3"
                      style={{ gap: '0.875rem', borderBottom: '1px solid rgba(255,255,255,.16)' }}
                    >
                      <dt className="label-xs mb-0" style={{ width: 84, flex: 'none' }}>{row.term}</dt>
                      <dd className="mb-0">{row.node}</dd>
                    </div>
                  ))}
                </dl>
              </Col>

              <Col
                lg={6}
                className="p-5"
                style={{ borderLeft: '1px solid rgba(255,255,255,.16)', background: 'rgba(13,21,28,.22)' }}
              >
                <form onSubmit={submit}>
                  <div className="mb-3">
                    <label className="label-xs d-block mb-2" htmlFor="contact-name">{t('contact.name')}</label>
                    <input
                      id="contact-name"
                      className="glass-input"
                      type="text"
                      placeholder="Luis Carazo"
                      value={form.name}
                      onChange={change('name')}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="label-xs d-block mb-2" htmlFor="contact-email">Email</label>
                    <input
                      id="contact-email"
                      className="glass-input"
                      type="email"
                      placeholder="tu@empresa.com"
                      value={form.email}
                      onChange={change('email')}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="label-xs d-block mb-2" htmlFor="contact-message">{t('contact.project')}</label>
                    <textarea
                      id="contact-message"
                      className="glass-input"
                      rows={4}
                      placeholder={t('contact.project.ph')}
                      value={form.message}
                      onChange={change('message')}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-glass-light btn-block btn-lg">
                    {t('contact.send')}
                  </button>
                </form>
              </Col>
            </Row>
          </GlassPanel>
        </Reveal>
      </Container>
    </section>
  );
};

export default ContactSection;
