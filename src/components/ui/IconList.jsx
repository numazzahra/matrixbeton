import React from 'react';

const IconList = ({ 
  items = [], 
  icon = '✓', 
  iconColor = 'text-secondary-green',
  textColor = 'text-gray-medium',
  textSize = 'text-base md:text-lg',
  className = '' 
}) => {
  return (
    <ul className={`space-y-4 ${className}`}>
      {items.map((item, index) => (
        <li 
          key={index} 
          className="flex items-start gap-3 animate-fade-in"
          style={{ animationDelay: `${400 + index * 100}ms` }}
        >
          <span className={`${iconColor} text-xl md:text-2xl flex-shrink-0`}>
            {icon}
          </span>
          <span className={`font-poppins ${textColor} ${textSize}`}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default IconList;