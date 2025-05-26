import React from 'react';
import CTAButton from '../../ui/buttons/CTAButton';
import { useTranslation } from '../../../hooks/useTranslation';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 overflow-hidden">
      {/* Decorative Blurred Circles */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-96 h-96 bg-cyan-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/3 w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {t('hero.title', 'Grow Your Business Faster With Web Officer')}
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0 text-white/90">
              {t('hero.description', 'Powerful tools and services to help startups scale with confidence.')}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <CTAButton text={t('ctaButton.getStarted', 'Get Started')} variant="primary" />
              <CTAButton text={t('ctaButton.learnMore', 'Learn More')} variant="secondary" />
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-2 rounded-lg shadow-2xl w-[300px] h-[200px] flex items-center justify-center text-gray-800 font-semibold">
              {t('hero.banner.text', 'Your Business, Our Expertise')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;