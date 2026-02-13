import React from 'react';

export const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <div
      className={`
        rounded-xl bg-white shadow-[0px_8px_16px_#00000026] 
        ${hover ? 'hover:scale-[1.02] transition-transform duration-300' : ''} 
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '', ...props }) => {
  return (
    <div className={`p-6 md:p-8 pb-0 ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = '', ...props }) => {
  return (
    <div className={`p-6 md:p-8 ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardFooter = ({ children, className = '', ...props }) => {
  return (
    <div className={`p-6 md:p-8 pt-0 ${className}`} {...props}>
      {children}
    </div>
  );
};