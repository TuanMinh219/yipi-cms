import React from 'react';
import './AppSider.css';

/**
 * AppSider - sidebar navigation UI.
 *
 * Props:
 * - items: [{ key, label, icon? }]
 * - activeKey
 * - onSelect(key)
 * - collapsed (optional)
 * - onToggleCollapsed (optional)
 */
export default function AppSider({
  items = [],
  activeKey,
  onSelect,
  collapsed = false,
  onToggleCollapsed,
}) {
  return (
    <aside className={"app-sider" + (collapsed ? ' collapsed' : '')}>
      <div className="app-sider__brand">
        <div className="app-sider__brand-mark" aria-hidden>
          Y
        </div>
        {!collapsed && <div className="app-sider__brand-title">Yipi Admin</div>}

        {onToggleCollapsed && (
          <button
            type="button"
            className="app-sider__collapse-btn"
            onClick={onToggleCollapsed}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? '›' : '‹'}
          </button>
        )}
      </div>

      <nav className="app-sider__nav" aria-label="App navigation">
        {items.map((item) => {
          const isActive = item.key === activeKey;
          return (
            <button
              key={item.key}
              type="button"
              className={"app-sider__item" + (isActive ? ' active' : '')}
              onClick={() => onSelect && onSelect(item.key)}
              title={collapsed ? item.label : undefined}
            >
              <span className="app-sider__item-icon" aria-hidden>
                {item.icon || '•'}
              </span>
              {!collapsed && <span className="app-sider__item-label">{item.label}</span>}
            </button>
          );
        })}
      </nav>

      <div className="app-sider__footer">
        <div className="app-sider__footer-item">
          <span className="app-sider__footer-icon" aria-hidden>
            ⎋
          </span>
          {!collapsed && <span className="app-sider__footer-label">Logout</span>}
        </div>
      </div>
    </aside>
  );
}

