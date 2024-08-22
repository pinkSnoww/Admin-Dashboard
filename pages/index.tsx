
import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div>
     
      <Link legacyBehavior href="/settings">
        <a>Go to Settings</a>
      </Link>
    </div>
  );
};

export default HomePage;