// src/components/footer/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-auto">
      <div className="container mx-auto px-4 text-center text-gray-600">
        &copy; {new Date().getFullYear()} Web Officer — Part of the Oni group
      </div>
    </footer>
  );
};

export default Footer;