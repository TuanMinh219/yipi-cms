import React from 'react';
import { Card as AntCard } from 'antd';
import './atoms.css';

export const Card = ({ 
  title, 
  children,
  className = '',
  hoverable = true,
  ...props 
}) => {
  return (
    <AntCard
      title={title}
      hoverable={hoverable}
      className={`atom-card ${className}`}
      {...props}
    >
      {children}
    </AntCard>
  );
};

export const StatCard = ({ title, value, icon, className = '', ...props }) => (
  <Card className={`atom-stat-card ${className}`} {...props}>
    <div className="atom-stat-content">
      {icon && <div className="atom-stat-icon">{icon}</div>}
      <div className="atom-stat-info">
        <div className="atom-stat-value">{value}</div>
        <div className="atom-stat-title">{title}</div>
      </div>
    </div>
  </Card>
);

export default Card;
