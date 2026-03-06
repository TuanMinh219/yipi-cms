import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ items = [] }) {
  return (
    <nav className="admin-navbar">
      <ul className="nav flex-column">
        {items.map((item) => (
          <li key={item.key} className="nav-item">
            <NavLink
              to={`/admin/${item.key}`}
              className={({ isActive }) =>
                "nav-link btn btn-link" + (isActive ? " active" : "")
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}