import React from 'react';
import { Form as AntForm } from 'antd';
import './atoms.css';

export const Form = ({ 
  layout = 'vertical',
  children,
  className = '',
  ...props 
}) => {
  return (
    <AntForm
      layout={layout}
      className={`atom-form ${className}`}
      {...props}
    >
      {children}
    </AntForm>
  );
};

export const FormItem = ({ 
  label,
  name,
  rules = [],
  children,
  className = '',
  ...props 
}) => {
  return (
    <AntForm.Item
      label={label}
      name={name}
      rules={rules}
      className={`atom-form-item ${className}`}
      {...props}
    >
      {children}
    </AntForm.Item>
  );
};

export default Form;
