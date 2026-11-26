import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations';

export function useTranslation() {
  const { lang, toggleLanguage, setLanguage } = useLanguage();

  const t = (path) => {
    const keys = path.split('.');
    let value = translations[lang];
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        return path;
      }
    }
    return value;
  };

  return { t, lang, toggleLanguage, setLanguage };
}

export default useTranslation;
