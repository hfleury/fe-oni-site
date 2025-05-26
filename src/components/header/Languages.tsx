// src/components/header/LanguageSwitcher.tsx
import React, { useState } from 'react';
import i18n from '../../i18n/i18n';
import { useTranslation } from '../../hooks/useTranslation';

const LanguageSwitcher: React.FC = () => {
  const { lang } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', flag: '🇬🇧' },
    { code: 'pt-BR', flag: '🇧🇷' },
    { code: 'sv', flag: '🇸🇪' }
  ];

  const changeLang = (newLang: string) => {
    i18n.changeLanguage(newLang);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-100 focus:outline-none"
      >
        {languages.find((l) => l.code === lang)?.flag || '🌐'}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ml-2 h-5 w-5 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => changeLang(language.code)}
              >
                {language.flag} {language.code === 'pt-BR' ? 'Português' : language.code === 'sv' ? 'Svenska' : 'English'}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;