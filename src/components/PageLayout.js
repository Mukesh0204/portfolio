import React from 'react';

const PageLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] relative">
      {/* Consistent background gradients */}
      <div className="fixed inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-500 rounded-full filter blur-[100px] opacity-[0.02]" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-500 rounded-full filter blur-[100px] opacity-[0.02]" />
      </div>

      {/* Content wrapper with better visibility */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default PageLayout; 