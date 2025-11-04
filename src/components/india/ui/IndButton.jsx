import React from 'react';

const Button = ({ 
  children, 
  text, 
  className = '', 
  variant = 'primary', 
  size = 'md',
  disabled = false,
  type = 'button',
  onClick,
  ...props 
}) => {
  const baseClasses = 'px-11 py-3.5 bg-primary rounded-4xl cursor-pointer hover:opacity-90 transition text-white font-montserrat font-medium leading-6 md:text-xl';
  
  const variants = {
    primary: 'bg-primary hover:bg-purple-800 text-white',
    outline: 'bg-gray-400 rounded-full border-8 border-gray-100',
    ghost: 'text-gray-300 hover:text-white hover:bg-gray-700',
    destructive: 'bg-red-600 hover:bg-red-700 text-white'
  };
  
  const sizes = {
   sm: 'py-1.5 px-3 text-sm',
   md: 'py-2 px-4 text-sm',       
   lg: 'py-2.5 px-6 text-base'

  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className}`;

  return (
    <button 
      className={buttonClasses}
      disabled={disabled}
      type={type}
      onClick={onClick}
      {...props}
    >
      {children || text}
    </button>
  );
};

export default Button;