import React from 'react';

export default function PublicHomepage() {
  return (
    <div style={{ padding: 24, fontFamily: 'system-ui, Arial' }}>
      <h1 style={{ marginBottom: 8 }}>Yipi CMS - Public Homepage</h1>
      <p style={{ marginBottom: 20 }}>
        This page is accessible without admin login.
      </p>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <a
          href="/admin/login"
          style={{
            padding: '10px 14px',
            borderRadius: 8,
            background: '#0b1220',
            color: '#fff',
            textDecoration: 'none',
          }}
        >
          Admin Login
        </a>

        <a
          href="/admin/dashboard"
          style={{
            padding: '10px 14px',
            borderRadius: 8,
            background: '#ff9800',
            color: '#0b1220',
            textDecoration: 'none',
            fontWeight: 700,
          }}
        >
          Try Admin Dashboard
        </a>

        <a
          href="/admin"
          style={{
            padding: '10px 14px',
            borderRadius: 8,
            background: '#28a745',
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 700,
          }}
        >
          Try /admin
        </a>
      </div>
    </div>
  );
}

