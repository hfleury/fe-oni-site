import React from 'react';

const DesktopNav: React.FC = () => {
  return (
    <nav className="hidden md:flex space-x-8">
      <a href="/" className="text-gray-700 hover:text-blue-600 transition duration-300">
        Home
      </a>
      <a href="/about" className="text-gray-700 hover:text-blue-600 transition duration-300">
        About
      </a>
      <a href="/features" className="text-gray-700 hover:text-blue-600 transition duration-300">
        Features
      </a>
      <a href="/pricing" className="text-gray-700 hover:text-blue-600 transition duration-300">
        Pricing
      </a>
      <a href="/contact" className="text-gray-700 hover:text-blue-600 transition duration-300">
        Contact
      </a>
    </nav>
  );
};

export default DesktopNav;