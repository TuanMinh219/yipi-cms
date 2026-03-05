import React from 'react';
import './atoms.css';

export const Avatar = ({ 
  src,
  size = 'large',
  name = '',
  className = '',
  ...props 
}) => {
  return (
    <div 
      className={`atom-avatar atom-avatar-${size} ${className}`}
      title={name}
      {...props}
    >
      {src ? (
        <img src={src} alt={name} />
      ) : (
        <span className="atom-avatar-initials">
          {name.split(' ').map(n => n[0]).join('').toUpperCase()}
        </span>
      )}
    </div>
  );
};

export default Avatar;
