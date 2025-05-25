import React, { useState } from 'react';

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="md:hidden p-2 text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 z-50">
          <ul className="flex flex-col space-y-4">
            <li>
              <a href="/" className="block text-gray-700 hover:text-blue-600 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="block text-gray-700 hover:text-blue-600 transition">
                About
              </a>
            </li>
            <li>
              <a href="/features" className="block text-gray-700 hover:text-blue-600 transition">
                Features
              </a>
            </li>
            <li>
              <a href="/pricing" className="block text-gray-700 hover:text-blue-600 transition">
                Pricing
              </a>
            </li>
            <li>
              <a href="/contact" className="block text-gray-700 hover:text-blue-600 transition">
                Contact
              </a>
            </li>
            <li>
              <button className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
                Get Started
              </button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default MobileNav;