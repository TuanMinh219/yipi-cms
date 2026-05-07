import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import RequireAdmin from '../auth/RequireAdmin.jsx';

import AdminLogin from '../components/admin-login/index.jsx';
import AdminDashboard from '../pages/AdminDashboard/index.jsx';
import AdminSection from '../pages/AdminSection/index.jsx';
import { clearAdminAuth } from '../auth/auth.js';

function LogoutRoute() {
  clearAdminAuth();
  return <Navigate to="/admin/login?logout=1" replace />;
}

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/logout" element={<LogoutRoute />} />

      <Route
        path="/admin"
        element={
          <RequireAdmin>
            <Routes>
              <Route index element={<AdminDashboard />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path=":section" element={<AdminSection />} />
              <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
            </Routes>
          </RequireAdmin>
        }
      />

      {/* IMPORTANT: public routes are handled in src/App.jsx */}

    </Routes>
  );
}

