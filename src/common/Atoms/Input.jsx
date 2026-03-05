import React from 'react';
import { Input as AntInput } from 'antd';
import './atoms.css';

export const Input = ({ 
  placeholder = '', 
  type = 'text',
  className = '',
  ...props 
}) => {
  return (
    <AntInput
      type={type}
      placeholder={placeholder}
      className={`atom-input ${className}`}
      {...props}
    />
  );
};

export const SearchInput = (props) => (
  <Input 
    placeholder="Search..." 
    className="atom-input-search"
    {...props}
  />
);

export const PasswordInput = (props) => (
  <Input 
    type="password"
    placeholder="Enter password"
    className="atom-input-password"
    {...props}
  />
);

export default Input;
