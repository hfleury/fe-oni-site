// src/pages/Home.tsx
import React from 'react';

// SEO
import { Helmet } from 'react-helmet';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Your SaaS Product | Powerful Tool for Growth</title>
        <meta name="description" content="Discover how Your SaaS Product helps businesses scale faster with powerful tools." />
        <meta property="og:title" content="Your SaaS Product | Powerful Tool for Growth" />
        <meta property="og:description" content="Discover how Your SaaS Product helps businesses scale faster." />
        <meta property="og:image" content="/seo-og-image.jpg" />
        <meta property="og:url" content="https://yourcompany.com/ " />
        <link rel="canonical" href="https://yourcompany.com/ " />
      </Helmet>
    </>
  );
};

export default HomePage;