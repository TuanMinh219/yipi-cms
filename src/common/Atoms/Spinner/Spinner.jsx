import React from 'react';
import { Spin as AntSpin } from 'antd';
import './Spinner.css';

export const Spinner = ({ 
  size = 'large',
  className = '',
  tip = 'Loading...',
  ...props 
}) => {
  return (
    <AntSpin
      size={size}
      tip={tip}
      className={`atom-spinner ${className}`}
      {...props}
    />
  );
};

export default Spinner;
