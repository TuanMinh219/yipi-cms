import React from 'react';
import './atoms.css';

export const Container = ({ 
  children,
  maxWidth = '1200px',
  className = '',
  ...props 
}) => {
  return (
    <div 
      className={`atom-container ${className}`}
      style={{ maxWidth, ...props.style }}
      {...props}
    >
      {children}
    </div>
  );
};

export const Row = ({ 
  children,
  gutter = [16, 16],
  className = '',
  ...props 
}) => {
  return (
    <div 
      className={`atom-row ${className}`}
      style={{ gap: `${gutter[0]}px` }}
      {...props}
    >
      {children}
    </div>
  );
};

export const Col = ({ 
  children,
  span = 12,
  className = '',
  ...props 
}) => {
  return (
    <div 
      className={`atom-col atom-col-${span} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default { Container, Row, Col };
