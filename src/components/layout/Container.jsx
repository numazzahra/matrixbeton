import React from 'react';

const Container = ({ 
  children, 
  className = '', 
  size = 'default',
  as: Component = 'div',
  ...props 
}) => {

    const sizes = {
    sm: 'px-4 md:px-8 lg:px-16',
    default: 'px-4 md:px-8 lg:px-32',
    lg: 'px-4 md:px-16 lg:px-48',
    fluid: 'px-4 md:px-8 lg:px-16 xl:px-32',
  };

  return (
    <Component 
      className={`max-w-7xl mx-auto w-full ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Container;