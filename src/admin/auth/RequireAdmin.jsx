import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { getAdminAuth } from './auth';

export default function RequireAdmin({ children }) {
  const location = useLocation();
  const auth = getAdminAuth();

  const isAuthed = Boolean(auth && auth.isAdmin);

  if (!isAuthed) {
    return (
      <div style={{ padding: 24, fontFamily: 'system-ui, Arial' }}>
        <h2 style={{ marginBottom: 8 }}>RequireAdmin: not authenticated</h2>
        <div style={{ marginBottom: 8 }}>
          Auth value: <code>{auth ? JSON.stringify(auth) : 'null'}</code>
        </div>
        <div style={{ marginBottom: 8 }}>
          Redirecting to: <code>/admin/login</code>
        </div>
        <Navigate
          to="/admin/login"
          replace
          state={{ from: location }}
        />
      </div>
    );
  }

  return children ? children : <Outlet />;
}

