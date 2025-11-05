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
  const baseClasses = 'font-medium rounded-lg cursor-pointer transition-colors duration-200 inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-[#9747FF] hover:bg-purple-700 text-white',
    outline: 'border border-gray-600 text-gray-300 hover:text-white hover:bg-gray-700 bg-transparent',
    ghost: 'text-gray-300 hover:text-white hover:bg-gray-700',
    destructive: 'bg-red-600 hover:bg-red-700 text-white'
  };
  
  const sizes = {
   sm: 'py-1.5 px-3 text-lg',
   md: 'py-2 px-4 text-lg',       
   lg: 'py-2.5 px-6 text-lg'

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