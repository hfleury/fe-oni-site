// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4 text-center text-gray-600">
        &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;