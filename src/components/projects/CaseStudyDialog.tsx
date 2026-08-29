import React, { useEffect, useRef, useState } from 'react';
import { Search, X } from '../icons/Icon';
import { Project } from '../../data/projects';
import { useLang } from '../../i18n/LangContext';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import GlassPanel from '../glass/GlassPanel';

export interface CaseStudyDialogProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyDialog: React.FC<CaseStudyDialogProps> = ({ project, onClose }) => {
  const { t, pick, lang } = useLang();
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState<{ x: number; y: number } | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useLockBodyScroll(!!project);

  // one frame of the closed state so the transition has something to run from
  useEffect(() => {
    if (!project) { setOpen(false); setZoom(null); return; }
    const frame = window.requestAnimationFrame(() => setOpen(true));
    const focus = window.setTimeout(() => closeRef.current?.focus(), 60);
    return () => { window.cancelAnimationFrame(frame); window.clearTimeout(focus); };
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [project, onClose]);

  if (!project) return null;

  const origin = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    return {
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100
    };
  };

  const sections = project.caseStudy;

  return (
    <div className={'case' + (open ? ' is-open' : '')} role="dialog" aria-modal="true" aria-label={project.title}>
      <div className="case__scrim" onClick={onClose} />
      <GlassPanel className="case__sheet">
        <div
          className={'case__figure' + (zoom ? ' is-zoomed' : '')}
          onClick={(event) => setZoom(zoom ? null : origin(event))}
          onMouseMove={(event) => { if (zoom) setZoom(origin(event)); }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={
              zoom
                ? { transform: 'scale(2.4)', transformOrigin: `${zoom.x.toFixed(1)}% ${zoom.y.toFixed(1)}%` }
                : undefined
            }
          />
          {!zoom && (
            <span className="case__zoomhint">
              <Search size={13} strokeWidth={1.5} />
              {t('case.zoom')}
            </span>
          )}
        </div>

        <div className="case__panel">
          <button
            ref={closeRef}
            type="button"
            className="icon-btn case__close"
            onClick={onClose}
            aria-label={t('case.close')}
          >
            <X size={15} strokeWidth={1.5} />
          </button>

          <div className="d-flex align-items-center mb-3" style={{ gap: '0.625rem', paddingRight: 44 }}>
            <span className="kicker">{t('case.label')} {project.num}</span>
            <span className="project-card__rule" />
            <span className="label-xs">{pick(project.platform)}</span>
          </div>

          <h3 className="mb-4" style={{ fontSize: 'clamp(28px, 3vw, 38px)' }}>{project.title}</h3>

          <div className="d-flex flex-wrap mb-4" style={{ gap: '0.4375rem' }}>
            {project.tags.map((tag, index) => (
              <span key={pick(tag)} className={'chip' + (index === 0 ? ' chip--accent' : '')}>
                {pick(tag)}
              </span>
            ))}
          </div>

          {sections ? (
            <div className="d-flex flex-column" style={{ gap: '1.375rem' }}>
              {sections.map((section) => (
                <div key={pick(section.heading)}>
                  <div className="kicker mb-2">{pick(section.heading)}</div>
                  <p className="text-dim mb-0" style={{ fontSize: '0.9375rem', lineHeight: 1.68 }}>
                    {pick(section.body)}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <div className="kicker mb-2">{t('case.pending.h')}</div>
              <p className="text-dim" style={{ fontSize: '0.9375rem', lineHeight: 1.68 }}>
                {lang === 'en'
                  ? `I have not written this one up in full yet. Tell me what interests you about ${project.title} and I will walk you through it.`
                  : `Todavía no he escrito este caso a fondo. Cuéntame qué te interesa de ${project.title} y te lo explico en detalle.`}
              </p>
              <a href="mailto:carazodesign@gmail.com">{t('case.pending.cta')}</a>
            </div>
          )}
        </div>
      </GlassPanel>
    </div>
  );
};

export default CaseStudyDialog;
