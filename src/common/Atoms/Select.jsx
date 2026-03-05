import React from 'react';
import { Select as AntSelect } from 'antd';
import './atoms.css';

export const Select = ({ 
  options = [],
  placeholder = 'Select...',
  className = '',
  ...props 
}) => {
  return (
    <AntSelect
      placeholder={placeholder}
      options={options}
      className={`atom-select ${className}`}
      {...props}
    />
  );
};

export default Select;
