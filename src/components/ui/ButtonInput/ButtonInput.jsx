import React from 'react';

const ButtonInput = ({ label, classes, children }) => {
  return (
    <button
      className={`cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-full ${classes}`}
      aria-label={label}
    >
      {children}
    </button>
  );
};

export default ButtonInput;
