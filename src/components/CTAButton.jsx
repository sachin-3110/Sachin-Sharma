import React from 'react';

const CTAButton = ({ text, link, onClick, className = "" }) => {
  // Base styles for consistency
  const baseStyles = `inline-block px-6 py-3 text-white font-semibold bg-blue-600 
                      rounded-lg shadow-md hover:bg-blue-700 transition-colors 
                      duration-200 text-center cursor-pointer ${className}`;

  // If a link is provided, render as an anchor tag
  if (link) {
    return (
      <a href={link} className={baseStyles} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    );
  }

  // Otherwise, render as a button for function execution
  return (
    <button onClick={onClick} className={baseStyles}>
      {text}
    </button>
  );
};

export default CTAButton;