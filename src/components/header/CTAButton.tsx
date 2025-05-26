import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

const CTAButton: React.FC = () => {
  const { t } = useTranslation();
  return (
    <button className="hidden md:block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
      {t('ctaButton.getStarted', 'Get Started')}
    </button>
  );
};

export default CTAButton;