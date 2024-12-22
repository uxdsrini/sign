import React from 'react';

const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`px-4 py-2 text-gray-900 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
