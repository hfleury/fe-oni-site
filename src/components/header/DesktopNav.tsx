import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

const DesktopNav: React.FC = () => {
  const { t } = useTranslation();
  return (
    <nav className="hidden md:flex space-x-8">
      <a href="/" className="text-gray-700 hover:text-blue-600 transition duration-300">
        {t('nav.home', 'Home')}
      </a>
      <a href="/about" className="text-gray-700 hover:text-blue-600 transition duration-300">
        {t('nav.about', 'About Us')}
      </a>
      <a href="/features" className="text-gray-700 hover:text-blue-600 transition duration-300">
        {t('nav.features', 'Features')}
      </a>
      <a href="/pricing" className="text-gray-700 hover:text-blue-600 transition duration-300">
        {t('nav.pricing', 'Pricing')}
      </a>
      <a href="/contact" className="text-gray-700 hover:text-blue-600 transition duration-300">
        {t('nav.contact', 'Contact')}
      </a>
    </nav>
  );
};

export default DesktopNav;