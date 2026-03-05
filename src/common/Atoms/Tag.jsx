import React from 'react';
import { Tag as AntTag } from 'antd';
import './atoms.css';

export const Tag = ({ 
  children,
  color = 'orange',
  className = '',
  ...props 
}) => {
  return (
    <AntTag
      color={color}
      className={`atom-tag ${className}`}
      {...props}
    >
      {children}
    </AntTag>
  );
};

export const PrimaryTag = (props) => <Tag color="#ff9800" {...props} />;
export const SuccessTag = (props) => <Tag color="#28a745" {...props} />;
export const ErrorTag = (props) => <Tag color="#dc3545" {...props} />;
export const WarningTag = (props) => <Tag color="#ffc107" {...props} />;

export default Tag;
