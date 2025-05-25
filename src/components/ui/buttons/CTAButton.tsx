import React from 'react';

interface CTAButtonProps {
  href?: string;
  text: string;
  variant?: 'primary' | 'secondary';
}

const CTAButton: React.FC<CTAButtonProps> = ({ href = '#', text, variant = 'primary' }) => {
  const baseClasses = "px-6 py-3 rounded-md font-semibold transition-all duration-300";

  const variantClasses =
    variant === 'primary'
      ? 'bg-white text-blue-700 hover:bg-gray-100 shadow-lg hover:shadow-xl'
      : 'border border-white hover:bg-white/10 shadow-lg hover:shadow-xl';

  return (
    <a href={href} className={`${baseClasses} ${variantClasses}`}>
      {text}
    </a>
  );
};

export default CTAButton;