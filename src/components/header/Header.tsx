import React, { useState } from 'react';
import Logo from './Logo';
import DesktopNav from './DesktopNav';
import CTAButton from './CTAButton';
import LanguageSwitcher from './Languages';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left: Logo */}
        <Logo />

        {/* Center: Desktop Nav */}
        <DesktopNav />

        {/* Right: CTA + Language Switcher Dropdown */}
        <div className="hidden md:flex items-center gap-6">
          <CTAButton />
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {/* Hamburger Icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-inner py-2 px-4">
          <ul className="flex flex-col space-y-3">
            <li><a href="/" className="block py-2 text-gray-700">Home</a></li>
            <li><a href="/about" className="block py-2 text-gray-700">About</a></li>
            <li><a href="/features" className="block py-2 text-gray-700">Features</a></li>
            <li><a href="/pricing" className="block py-2 text-gray-700">Pricing</a></li>
            <li><a href="/contact" className="block py-2 text-gray-700">Contact</a></li>
            <li><CTAButton /></li>
            <li><LanguageSwitcher /></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;