import React from 'react';
import { Divider as AntDivider } from 'antd';
import './Divider.css';

export const Divider = ({ 
  children,
  orientation = 'center',
  className = '',
  ...props 
}) => {
  return (
    <AntDivider
      orientation={orientation}
      className={`atom-divider ${className}`}
      {...props}
    >
      {children}
    </AntDivider>
  );
};

export default Divider;
