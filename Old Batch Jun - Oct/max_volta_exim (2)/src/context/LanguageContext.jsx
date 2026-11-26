import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { languages, translations, localizedProducts } from '../translations/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const saved = localStorage.getItem('maxvolta_lang');
    return saved && languages[saved] ? saved : 'en';
  });

  const isRTL = useMemo(() => {
    return languages[currentLanguage]?.dir === 'rtl';
  }, [currentLanguage]);

  useEffect(() => {
    localStorage.setItem('maxvolta_lang', currentLanguage);
    
    // Update HTML attributes for SEO and accessibility
    document.documentElement.setAttribute('lang', currentLanguage);
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    
    if (isRTL) {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
  }, [currentLanguage, isRTL]);

  // Helper translation getter e.g. t('nav.home')
  const t = (path) => {
    if (!path) return '';
    const keys = path.split('.');
    
    // Try current language first
    let result = translations[currentLanguage];
    for (const key of keys) {
      if (result && result[key] !== undefined) {
        result = result[key];
      } else {
        result = undefined;
        break;
      }
    }

    if (result !== undefined) {
      return result;
    }

    // Fallback to English
    let fallback = translations.en;
    for (const key of keys) {
      if (fallback && fallback[key] !== undefined) {
        fallback = fallback[key];
      } else {
        return path;
      }
    }
    return fallback;
  };

  const changeLanguage = (langCode) => {
    if (languages[langCode]) {
      setCurrentLanguage(langCode);
    }
  };

  const products = useMemo(() => {
    return localizedProducts[currentLanguage] || localizedProducts.en;
  }, [currentLanguage]);

  const value = {
    currentLanguage,
    setLanguage: changeLanguage,
    t,
    isRTL,
    languages,
    products,
    currentLangMeta: languages[currentLanguage] || languages.en
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
