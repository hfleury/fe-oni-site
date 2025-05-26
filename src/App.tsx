// src/App.tsx
import React from 'react';
import { LanguageProvider } from './hooks/useTranslation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;