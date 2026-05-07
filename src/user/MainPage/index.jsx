import React from 'react';
import { Breadcrumb, Container, AppSider } from '../../common/Atoms';
import './index.css';

const PAGES = {
  dashboard: { title: 'Dashboard (Mock)' },
  payments: { title: 'Payments (Mock)' },
  reports: { title: 'Reports (Mock)' },
  users: { title: 'Users (Mock)' },
};

export default function UserMainPage() {
  const [activeKey, setActiveKey] = React.useState('dashboard');

  const navItems = Object.keys(PAGES).map((key) => ({
    key,
    label: PAGES[key].title,
    icon: '•',
  }));

  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: PAGES[activeKey].title },
  ];

  return (
    <div className="user-app-shell">
      <AppSider
        items={navItems}
        activeKey={activeKey}
        onSelect={setActiveKey}
      />

      <div className="user-app-shell__main">
        <Container>
          <Breadcrumb items={breadcrumbItems} />
          <div className="user-mainpage-content">
            <h1>{PAGES[activeKey].title}</h1>
            <p>This is a mock page to test AppSider in the user area.</p>
          </div>
        </Container>
      </div>
    </div>
  );
}

