import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      
      {/* Background gradients that appear on all pages */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#6366F1] rounded-full filter blur-[100px] opacity-10 animate-float-slow" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#EC4899] rounded-full filter blur-[100px] opacity-10 animate-float-slow-reverse" />
      </div>

      {/* Main content */}
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
};

export default Layout; 