import React from 'react';
import { Container } from 'react-bootstrap';
import GlassPanel from '../glass/GlassPanel';
import { useLang } from '../../i18n/LangContext';
import { Lang } from '../../i18n/dictionary';

const links = [
  { href: '#trabajo', key: 'nav.work' },
  { href: '#capacidades', key: 'nav.skills' },
  { href: '#sistema', key: 'nav.system' },
  { href: '#voces', key: 'nav.voices' }
];

export const NavBar: React.FC = () => {
  const { lang, setLang, t } = useLang();
  const options: Lang[] = ['es', 'en'];

  return (
    <header className="site-nav">
      <Container>
        <GlassPanel variant="pill" className="site-nav__bar">
          <a href="#top" className="site-nav__brand">
            <span className="h4 mb-0">LUIS CARAZO</span>
            <span className="kicker">UI/UX · FRONT-END</span>
          </a>

          <nav className="d-none d-lg-flex align-items-center" style={{ gap: '1.5rem' }}>
            {links.map((link) => (
              <a key={link.href} href={link.href} className="site-nav__link">
                {t(link.key)}
              </a>
            ))}
          </nav>

          <div className="switch" role="group" aria-label="Language">
            {options.map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={lang === option}
                className={'switch__opt' + (lang === option ? ' is-active' : '')}
                onClick={() => setLang(option)}
              >
                {option.toUpperCase()}
              </button>
            ))}
          </div>

          <a href="#contacto" className="btn btn-glass-primary d-none d-md-inline-flex">
            {t('nav.cta')}
          </a>
        </GlassPanel>
      </Container>
    </header>
  );
};

export default NavBar;
