import React from 'react';

export default function Navbar({ items = [], activeKey, onSelect }) {
  return (
    <nav className="admin-navbar">
      <ul className="nav flex-column">
        {items.map((item) => (
          <li key={item.key} className="nav-item">
            <button
              type="button"
              className={
                'nav-link btn btn-link' +
                (item.key === activeKey ? ' active' : '')
              }
              onClick={() => onSelect && onSelect(item.key)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}