import React from 'react';
import Logo from './Logo';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import CTAButton from './CTAButton';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        <DesktopNav />
        <CTAButton />
      </div>
      <MobileNav />
    </header>
  );
};

export default Header;