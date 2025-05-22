// src/components/Layout.tsx
import React from 'react';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;