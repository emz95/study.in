import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white p-4">
        <h1>study.in</h1>
      </header>

      {/* Main content area */}
      <main className="pt-16 pb-16 px-4">
        <Outlet /> {/* This is where your page content appears */}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-white p-4">
        <div className="flex justify-around">
          <button>Home</button>
          <button>Search</button>
          <button>Explore</button>
          <button>Review</button>
        </div>
      </nav>
    </div>
  );
};

export default Layout;