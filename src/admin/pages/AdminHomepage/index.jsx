import React, { useState } from 'react';
import { Breadcrumb, Container, AppSider } from '../../../common/Atoms';

import AdminLogin from '../../components/admin-login';
import AdminPayments from '../../components/AdminPayments';
import AdminReports from '../../components/AdminReports';
import AdminUserCourses from '../../components/AdminUserCourses';
import AdminUsers from '../../components/AdminUsers';
import ContactList from '../../components/ContactList';
import ContactReply from '../../components/ContactReply';
import Feedbacks from '../../components/Feedbacks';
import HomepageBanner from '../../components/HomepageBanner';
import ReportedComments from '../../components/ReportedComments';
import './index.css';

const PAGES = {
  banner: { title: 'Homepage Banner', component: HomepageBanner },
  login: { title: 'Admin Login', component: AdminLogin },
  payments: { title: 'Payments', component: AdminPayments },
  reports: { title: 'Reports', component: AdminReports },
  userCourses: { title: 'User‑Courses', component: AdminUserCourses },
  users: { title: 'Users', component: AdminUsers },
  contacts: { title: 'Contact List', component: ContactList },
  reply: { title: 'Contact Reply', component: ContactReply },
  feedbacks: { title: 'Feedbacks', component: Feedbacks },
  reported: { title: 'Reported Comments', component: ReportedComments },
};

export default function AdminHomepage() {
  const [activePage, setActivePage] = useState('banner');


  const navItems = Object.keys(PAGES).map((key) => ({
    key,
    label: PAGES[key].title,
  }));

  const breadcrumbItems = [
    { label: 'Admin', link: '/admin' },        // adjust link to your router
    { label: PAGES[activePage].title },
  ];

  const ActiveComponent = PAGES[activePage].component;


  const appSiderItems = navItems.map((it) => ({
    key: it.key,
    label: it.label,
    icon: '•',
  }));

  return (
    <div className="admin-app-shell">
      <AppSider
        items={appSiderItems}
        activeKey={activePage}
        onSelect={setActivePage}
      />

      <div className="admin-app-shell__main">
        <Container>
          <Breadcrumb items={breadcrumbItems} />
          <div style={{ paddingTop: '1.5rem' }}>
            <ActiveComponent />
          </div>
        </Container>
      </div>
    </div>
  );
}
