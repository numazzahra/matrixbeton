import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';  
import FloatingWhatsApp from './FloatingWhatsApp';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 md:pt-24">
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default MainLayout;