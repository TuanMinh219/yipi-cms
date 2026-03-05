import React from 'react';
import { Button as AntButton } from 'antd';
import './atoms.css';

export const Button = ({ 
  children, 
  type = 'primary', 
  size = 'middle', 
  loading = false,
  className = '',
  ...props 
}) => {
  return (
    <AntButton
      type={type}
      size={size}
      loading={loading}
      className={`atom-button atom-button-${type} ${className}`}
      {...props}
    >
      {children}
    </AntButton>
  );
};

export const PrimaryButton = (props) => <Button type="primary" {...props} />;
export const SecondaryButton = (props) => <Button type="default" {...props} />;
export const DangerButton = (props) => <Button danger type="primary" {...props} />;
export const SuccessButton = (props) => <Button type="primary" className="atom-button-success" {...props} />;

export default Button;
