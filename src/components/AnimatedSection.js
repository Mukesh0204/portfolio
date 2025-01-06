import React from 'react';

const AnimatedSection = ({ children }) => {
  return (
    <div className="transition-all duration-500 ease-in-out">
      {children}
    </div>
  );
};

export default AnimatedSection; 