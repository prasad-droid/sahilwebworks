import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import translations from './translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('lang') || 'en'; } catch { return 'en'; }
  });

  useEffect(() => {
    try { localStorage.setItem('lang', lang); } catch {}
    document.documentElement.lang = lang === 'hi' ? 'hi' : 'en';
  }, [lang]);

  const t = useMemo(() => {
    return (path) => {
      const keys = path.split('.');
      let value = translations[lang];
      for (const key of keys) {
        if (value === undefined || value === null) return path;
        value = value[key];
      }
      return value !== undefined ? value : path;
    };
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
