import React, { createContext, useContext, useState, useEffect } from 'react';
import i18n from 'i18next';

interface TranslationContextType {
  lang: string;
  setLang: (lang: string) => void;
}

const LanguageContext = createContext<TranslationContextType>({
  lang: 'en',
  setLang: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState(i18n.language);

  useEffect(() => {
    const handleLanguageChange = () => {
      setLang(i18n.language);
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }

  const t = (key: string, fallback: string): string => {
    return i18n.t(key, { defaultValue: fallback });
  };

  return {
    t,
    lang: context.lang,
    setLang: context.setLang
  };
};