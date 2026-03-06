import React from 'react';
import { Outlet } from 'react-router-dom';

export default function UserLayout() {
  return (
    <div>
      <header style={{ padding: 12, borderBottom: '1px solid #eee' }}>
        <h3>User Area</h3>
      </header>
      <main style={{ padding: 12 }}>
        <Outlet />
      </main>
    </div>
  );
}
