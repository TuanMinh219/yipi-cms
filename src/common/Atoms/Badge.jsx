import React from 'react';
import { Badge as AntBadge } from 'antd';
import './atoms.css';

export const Badge = ({ 
  count, 
  color = 'orange',
  children,
  className = '',
  ...props 
}) => {
  return (
    <AntBadge
      count={count}
      style={{ backgroundColor: color }}
      className={`atom-badge ${className}`}
      {...props}
    >
      {children}
    </AntBadge>
  );
};

export const StatusBadge = ({ status, className = '', ...props }) => {
  const statusColor = {
    active: '#28a745',
    inactive: '#dc3545',
    pending: '#ffc107',
    approved: '#28a745',
    rejected: '#dc3545'
  };
  
  return (
    <span 
      className={`atom-status-badge atom-status-${status} ${className}`}
      style={{ backgroundColor: statusColor[status] || '#ff9800' }}
      {...props}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export default Badge;
