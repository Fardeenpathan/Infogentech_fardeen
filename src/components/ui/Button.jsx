import React from 'react';

const Button = ({ text, className }) => {
  return (
    <button className={`bg-[#9747FF] text-white  py-5 px-12.5 rounded-[10px] items-center ${className}`}>
      {text}
    </button>
  );
};

export default Button