import React from 'react';

const Button = ({ color, text, onClick, link }) => {
  return (
    <button
      href={link}
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

export default Button;
