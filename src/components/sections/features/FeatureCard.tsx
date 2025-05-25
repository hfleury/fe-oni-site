import React from 'react';

interface FeatureCardProps {
  icon?: React.ReactNode;
  iconBgColor?: string;
  iconColor?: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, iconBgColor = "bg-green-100", iconColor = "text-green-600", title, description }) => {
  return (
    <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Left-aligned icon */}
      <div className={`flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full ${iconBgColor} ${iconColor}`}>
        {icon}
      </div>

      {/* Text content */}
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;