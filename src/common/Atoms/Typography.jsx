import React from 'react';
import './atoms.css';

export const Typography = {
  H1: ({ children, className = '' }) => (
    <h1 className={`atom-h1 ${className}`}>{children}</h1>
  ),
  H2: ({ children, className = '' }) => (
    <h2 className={`atom-h2 ${className}`}>{children}</h2>
  ),
  H3: ({ children, className = '' }) => (
    <h3 className={`atom-h3 ${className}`}>{children}</h3>
  ),
  H4: ({ children, className = '' }) => (
    <h4 className={`atom-h4 ${className}`}>{children}</h4>
  ),
  H5: ({ children, className = '' }) => (
    <h5 className={`atom-h5 ${className}`}>{children}</h5>
  ),
  H6: ({ children, className = '' }) => (
    <h6 className={`atom-h6 ${className}`}>{children}</h6>
  ),
  Paragraph: ({ children, className = '' }) => (
    <p className={`atom-paragraph ${className}`}>{children}</p>
  ),
  Text: ({ children, className = '' }) => (
    <span className={`atom-text ${className}`}>{children}</span>
  ),
};

export default Typography;
