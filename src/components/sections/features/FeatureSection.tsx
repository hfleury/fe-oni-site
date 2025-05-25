import React from 'react';
import FeatureCard from './FeatureCard';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Fast Deployment',
      description: 'Deploy your product quickly with our automated CI/CD pipelines.'
    },
    {
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Track usage, monitor performance, and get actionable insights.'
    },
    {
      icon: '🔐',
      title: 'Secure Infrastructure',
      description: 'Built with security-first principles and enterprise-grade encryption.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Choose Web Officer?</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Powerful tools and services to help startups and enterprises scale with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
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