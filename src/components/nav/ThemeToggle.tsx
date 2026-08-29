import React from 'react';
import { Moon, Sun } from '../icons/Icon';
import { useTheme } from '../../theme/ThemeContext';
import { useLang } from '../../i18n/LangContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggle } = useTheme();
  const { t } = useLang();

  return (
    <button type="button" className="icon-btn" onClick={toggle} aria-label={t('theme.toggle')} data-magnet>
      {theme === 'dark' ? <Sun size={17} strokeWidth={1.5} /> : <Moon size={17} strokeWidth={1.5} />}
    </button>
  );
};

export default ThemeToggle;
