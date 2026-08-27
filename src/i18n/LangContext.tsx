import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { dictionary, Lang } from './dictionary';

const STORAGE_KEY = 'lc-portfolio-lang';

interface LangValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Translate a dictionary key. */
  t: (key: string) => string;
  /** Pick the current side of a bilingual pair coming from data files. */
  pick: (pair: Record<Lang, string>) => string;
}

const LangContext = createContext<LangValue>({
  lang: 'es',
  setLang: () => undefined,
  t: (key) => key,
  pick: (pair) => pair.es
});

export const LangProvider: React.FC = ({ children }) => {
  const [lang, setLangState] = useState<Lang>('es');

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === 'es' || saved === 'en') setLangState(saved);
    } catch (err) {
      /* storage unavailable — keep the default */
    }
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try { window.localStorage.setItem(STORAGE_KEY, next); } catch (err) { /* no-op */ }
    document.documentElement.setAttribute('lang', next);
  }, []);

  const value = useMemo<LangValue>(() => ({
    lang,
    setLang,
    t: (key) => dictionary[key] ? dictionary[key][lang] : key,
    pick: (pair) => pair[lang]
  }), [lang, setLang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export const useLang = (): LangValue => useContext(LangContext);
