import React from 'react';

// Colors
const colors = {
  background: '#0A0A0A',
  text: {
    primary: '#E5E7EB',
    secondary: '#D1D5DB',
  },
  accent: {
    primary: '#6366F1',    // Indigo
    secondary: '#8B5CF6',  // Purple
    tertiary: '#EC4899',   // Pink
  }
};

// Common gradient classes
const gradients = {
  primary: 'bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899]',
  secondary: 'bg-gradient-to-r from-[#EC4899] via-[#8B5CF6] to-[#6366F1]',
};

const PageTemplate = () => {
  return (
    <section className="min-h-screen pt-16 px-4">
      <div className="max-w-7xl mx-auto py-20">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 opacity-0 animate-fade-in-up">
          <span className="bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
            Page Title
          </span>
        </h1>

        {/* Page Content */}
        <div className="text-[#D1D5DB] space-y-8 opacity-0 animate-fade-in-up-delay-1">
          {/* Content goes here */}
        </div>
      </div>
    </section>
  );
};

export default PageTemplate; 