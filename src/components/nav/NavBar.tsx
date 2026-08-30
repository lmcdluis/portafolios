import React from 'react';
import { Container } from 'react-bootstrap';
import GlassPanel from '../glass/GlassPanel';
import ThemeToggle from './ThemeToggle';
import { useLang } from '../../i18n/LangContext';
import useScrollSpy from '../../hooks/useScrollSpy';
import { Lang } from '../../i18n/dictionary';
import logo from '../../assets/images/projects/favicon.png'

const links = [
  { id: 'trabajo', key: 'nav.work' },
  { id: 'capacidades', key: 'nav.skills' },
  { id: 'sistema', key: 'nav.system' },
  { id: 'voces', key: 'nav.voices' }
];

const sectionIds = links.map((link) => link.id);

export const NavBar: React.FC = () => {
  const { lang, setLang, t } = useLang();
  const active = useScrollSpy(sectionIds);
  const options: Lang[] = ['es', 'en'];

  return (
    <header className="site-nav">
      <Container>
        <GlassPanel className="site-nav__bar">
          <a href="#top" className="site-nav__brand" data-magnet aria-label="Go to top">
            <img src={logo} className="site-nav__brand-logo" height="50" width="50" alt="Luis Carazo || UI/UX Developer || Wordpress Specialist" />
          </a>

          <nav className="site-nav__links">
            {links.map((link) => (
              <a
                key={link.id}
                href={'#' + link.id}
                className={'site-nav__link' + (active === link.id ? ' is-active' : '')}
                aria-current={active === link.id ? 'true' : undefined}
              >
                {t(link.key)}
              </a>
            ))}
          </nav>

          <ThemeToggle />

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

          <a href="#contacto" className="btn btn-accent site-nav__cta d-none d-md-inline-flex" data-magnet>
            {t('nav.cta')}
          </a>
        </GlassPanel>
      </Container>
    </header>
  );
};

export default NavBar;
