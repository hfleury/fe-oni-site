// src/components/header/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600">Web Officer</div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="text-gray-700 hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-700 hover:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="text-gray-700 hover:text-blue-600">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-700 hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;