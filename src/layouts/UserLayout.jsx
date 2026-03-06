import React from "react";
import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <div>
      <header style={{ padding: 16, borderBottom: '1px solid #eee' }}>
        <h2>User Area</h2>
      </header>

      <main style={{ padding: 16 }}>
        <Outlet />
      </main>
    </div>
  );
}
