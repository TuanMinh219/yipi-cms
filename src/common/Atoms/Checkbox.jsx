import React from 'react';
import { Checkbox as AntCheckbox } from 'antd';
import './atoms.css';

export const Checkbox = ({ 
  label,
  className = '',
  ...props 
}) => {
  return (
    <AntCheckbox className={`atom-checkbox ${className}`} {...props}>
      {label}
    </AntCheckbox>
  );
};

export default Checkbox;
