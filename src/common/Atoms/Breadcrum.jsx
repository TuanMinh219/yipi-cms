import React from 'react';
import { Link } from 'react-router-dom'; // remove if you don’t use react‑router

export default function Breadcrumb({ items = [] }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {items.map((item, idx) => (
          <li
            key={idx}
            className={
              'breadcrumb-item' +
              (idx === items.length - 1 ? ' active' : '')
            }
            {...(idx === items.length - 1 ? { 'aria-current': 'page' } : {})}
          >
            {item.link && idx !== items.length - 1 ? (
              <Link to={item.link}>{item.label}</Link>
            ) : (
              item.label
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}