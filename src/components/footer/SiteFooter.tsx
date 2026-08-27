import React from 'react';
import { Container } from 'react-bootstrap';
import { useLang } from '../../i18n/LangContext';

export const SiteFooter: React.FC = () => {
  const { t } = useLang();

  return (
    <footer className="pb-5">
      <Container>
        <div
          className="d-flex flex-wrap justify-content-between align-items-center text-dimmer"
          style={{ gap: '1.25rem', fontSize: '0.75rem' }}
        >
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.16em', textTransform: 'uppercase' }}>
            Luis Carazo · {t('footer.portfolio')} 2026
          </span>
          <span>{t('footer.made')}</span>
        </div>
      </Container>
    </footer>
  );
};

export default SiteFooter;
