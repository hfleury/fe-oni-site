// src/pages/Home.tsx
import React from 'react';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline text-center mt-10">
        Welcome to Web Officer
      </h1>
      <p className="text-center mt-4">Your SaaS product starts here.</p>
    </Layout>
  );
};

export default Home;