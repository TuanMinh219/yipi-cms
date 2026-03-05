import React from 'react';
import { Alert as AntAlert } from 'antd';
import './atoms.css';

export const Alert = ({ 
  type = 'info',
  message,
  description,
  className = '',
  ...props 
}) => {
  return (
    <AntAlert
      type={type}
      message={message}
      description={description}
      className={`atom-alert atom-alert-${type} ${className}`}
      {...props}
    />
  );
};

export const SuccessAlert = (props) => <Alert type="success" {...props} />;
export const ErrorAlert = (props) => <Alert type="error" {...props} />;
export const WarningAlert = (props) => <Alert type="warning" {...props} />;
export const InfoAlert = (props) => <Alert type="info" {...props} />;

export default Alert;
