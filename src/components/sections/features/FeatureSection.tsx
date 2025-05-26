// src/components/sections/features/FeaturesSection.tsx
import React from 'react';
import FeatureCard from './FeatureCard';
import { ChartBarIcon, LockClosedIcon, Cog8ToothIcon } from '@heroicons/react/24/solid';
import { useTranslation } from '../../../hooks/useTranslation';

const FeaturesSection: React.FC = () => {
  const { t } = useTranslation();
  const features = [
    {
      icon: <ChartBarIcon className="w-10 h-10" />,
      iconBgColor: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
      title: t("feature.section.icon.chartBar.title", "Analytics Dashboard"),
      description: t("feature.section.icon.chartBar.description", "Track usage, monitor performance, and get actionable insights.")
    },
    {
      icon: <LockClosedIcon className="w-10 h-10" />,
      iconBgColor: 'bg-indigo-100',
      iconColor: "text-red-500",
      title: t('feature.section.icon.lockClosed.title', 'Secure Infrastructure'),
      description: t('feature.section.icon.lockClosed.description', 'Built with security-first principles and enterprise-grade encryption')
    },
    {
      icon: <Cog8ToothIcon className="w-10 h-10" />,
      iconBgColor: 'bg-indigo-100',
      iconColor: "text-emerald-500",
      title: t('feature.section.icon.cog8Tooth.title', 'Custom Workflows'),
      description: t('feature.section.icon.cog8Tooth.description', 'Tailor your setup to fit your team’s needs.')
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{t('feature.section.title', "Why Choose Web Officer?")}</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            {t('feature.section.subtitle', "Powerful tools and services to help startups and enterprises scale with confidence.")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              iconColor={feature.iconColor}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;