// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">
          YourCompany
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-gray-700 hover:text-blue-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-700 hover:text-blue-500 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-gray-700 hover:text-blue-500 transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-700 hover:text-blue-500 transition">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;