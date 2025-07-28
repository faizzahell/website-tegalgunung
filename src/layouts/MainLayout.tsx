import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="pt-20 lg:pt-20">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
