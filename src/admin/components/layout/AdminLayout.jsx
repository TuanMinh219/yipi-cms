import React from "react";

export default function AdminLayout({ title, children }) {
  return (
    <div className="admin-page">
      {title && (
        <div className="admin-page-header">
          <h2>{title}</h2>
        </div>
      )}

      <div className="admin-page-body">{children}</div>
    </div>
  );
}
