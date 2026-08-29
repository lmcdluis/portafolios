import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Check } from '../icons/Icon';
import GlassPanel from '../glass/GlassPanel';
import Reveal from '../motion/Reveal';
import { useLang } from '../../i18n/LangContext';

const EMAIL = 'carazodesign@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/luis-manuel-carazo-d%C3%A1vila-80a6a0153/';
const GITHUB = 'https://github.com/lmcdluis';
const MAX = 600;

type Field = 'name' | 'email' | 'message';
type Errors = Partial<Record<Field, string>>;

export const ContactSection: React.FC = () => {
  const { t } = useLang();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<'idle' | 'sending' | 'sent'>('idle');

  const validate = (field: Field, value: string): string | undefined => {
    const v = value.trim();
    if (field === 'name') return v.length < 2 ? t('form.err.name') : undefined;
    if (field === 'email') {
      if (!v) return t('form.err.email');
      return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? undefined : t('form.err.emailBad');
    }
    return v.length < 10 ? t('form.err.message') : undefined;
  };

  const change = (field: Field) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = event.target;
    setForm((f) => ({ ...f, [field]: value }));
    // only re-check a field that is already showing an error
    if (errors[field]) setErrors((e) => ({ ...e, [field]: validate(field, value) }));
  };

  const blur = (field: Field) => () =>
    setErrors((e) => ({ ...e, [field]: validate(field, form[field]) }));

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    const next: Errors = {
      name: validate('name', form.name),
      email: validate('email', form.email),
      message: validate('message', form.message)
    };
    setErrors(next);
    const firstBad = (['name', 'email', 'message'] as Field[]).find((field) => next[field]);
    if (firstBad) {
      document.getElementById('contact-' + firstBad)?.focus();
      return;
    }

    setState('sending');
    // No backend in this repo: hand the composed message to the mail client.
    window.setTimeout(() => {
      const subject = encodeURIComponent('Portafolio · ' + form.name);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      setState('sent');
    }, 900);
  };

  const rows: Array<{ term: string; node: React.ReactNode }> = [
    { term: 'Email', node: <a href={'mailto:' + EMAIL}>{EMAIL}</a> },
    { term: 'LinkedIn', node: <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">luis-manuel-carazo-dávila</a> },
    { term: 'GitHub', node: <a href={GITHUB} target="_blank" rel="noopener noreferrer">github.com/lmcdluis</a> },
    { term: t('contact.based'), node: <span className="text-dim">Managua, Nicaragua · GMT-6</span> }
  ];

  const fields: Array<{ field: Field; label: string; type: 'text' | 'email' | 'area'; placeholder: string }> = [
    { field: 'name', label: t('contact.name'), type: 'text', placeholder: 'Luis Carazo' },
    { field: 'email', label: 'Email', type: 'email', placeholder: 'tu@empresa.com' },
    { field: 'message', label: t('contact.project'), type: 'area', placeholder: t('contact.project.ph') }
  ];

  return (
    <section id="contacto" className="py-5">
      <Container>
        <Reveal>
          <GlassPanel variant="tint" specular>
            <Row noGutters>
              <Col lg={6} className="p-5">
                <div className="kicker mb-3">05 · {t('contact.kicker')}</div>
                <h2 className="mb-3" style={{ fontSize: 'clamp(32px, 3.6vw, 48px)' }}>{t('contact.title')}</h2>
                <p className="text-dim mb-4" style={{ maxWidth: '46ch' }}>{t('contact.lead')}</p>

                <dl className="mb-0">
                  {rows.map((row) => (
                    <div
                      key={row.term}
                      className="d-flex pb-3 mb-3"
                      style={{ gap: '0.875rem', borderBottom: '2px solid var(--rule)' }}
                    >
                      <dt className="label-xs mb-0" style={{ width: 84, flex: 'none' }}>{row.term}</dt>
                      <dd className="mb-0">{row.node}</dd>
                    </div>
                  ))}
                </dl>
              </Col>

              <Col lg={6} className="p-5" style={{ borderLeft: '2px solid var(--rule)', background: 'var(--inset)' }}>
                <form onSubmit={submit} noValidate>
                  {fields.map(({ field, label, type, placeholder }) => (
                    <div className="mb-3" key={field}>
                      <div className="d-flex justify-content-between align-items-baseline mb-2">
                        <label className="label-xs mb-0" htmlFor={'contact-' + field}>{label}</label>
                        {field === 'message' && (
                          <span className="text-dimmer" style={{ fontSize: '0.6875rem' }}>
                            {form.message.length} / {MAX}
                          </span>
                        )}
                      </div>
                      {type === 'area' ? (
                        <textarea
                          id={'contact-' + field}
                          className={'ink-input' + (errors[field] ? ' is-invalid' : '')}
                          rows={4}
                          maxLength={MAX}
                          placeholder={placeholder}
                          value={form[field]}
                          onChange={change(field)}
                          onBlur={blur(field)}
                          aria-invalid={!!errors[field]}
                        />
                      ) : (
                        <input
                          id={'contact-' + field}
                          className={'ink-input' + (errors[field] ? ' is-invalid' : '')}
                          type={type}
                          placeholder={placeholder}
                          value={form[field]}
                          onChange={change(field)}
                          onBlur={blur(field)}
                          aria-invalid={!!errors[field]}
                        />
                      )}
                      {errors[field] && <div className="field-error" role="alert">{errors[field]}</div>}
                    </div>
                  ))}

                  {state === 'sent' ? (
                    <div
                      className="d-flex p-3"
                      style={{ gap: '0.75rem', background: 'var(--acc-tint)', border: '2px solid var(--acc)' }}
                    >
                      <Check size={18} strokeWidth={1.5} style={{ flex: 'none', color: 'var(--acc)' }} />
                      <div className="text-dim" style={{ fontSize: '0.875rem' }}>{t('form.success')}</div>
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-ink btn-block btn-lg"
                      disabled={state === 'sending'}
                      data-magnet
                    >
                      {state === 'sending' && (
                        <span
                          aria-hidden="true"
                          style={{
                            width: 15,
                            height: 15,
                            borderRadius: '50%',
                            border: '2px solid currentColor',
                            borderTopColor: 'transparent',
                            animation: 'spin .8s linear infinite'
                          }}
                        />
                      )}
                      {state === 'sending' ? t('form.sending') : t('contact.send')}
                    </button>
                  )}
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
