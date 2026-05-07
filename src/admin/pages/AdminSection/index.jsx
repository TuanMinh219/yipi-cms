import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Breadcrumb, Container, AppSider } from '../../../common/Atoms';
import useAppController from '../../../common/hooks/useAppController.js';


import AdminLogin from '../../components/admin-login';
import AdminPayments from '../../components/AdminPayments';
import AdminReports from '../../components/AdminReports';
import AdminUserCourses from '../../components/AdminUserCourses';
import AdminUsers from '../../components/AdminUsers';
import './index.css';

import ContactList from '../../components/ContactList';
import ContactReply from '../../components/ContactReply';
import Feedbacks from '../../components/Feedbacks';
import HomepageBanner from '../../components/HomepageBanner';
import ReportedComments from '../../components/ReportedComments';

const PAGES = {
  banner: { title: 'Homepage Banner', component: HomepageBanner },
  payments: { title: 'Payments', component: AdminPayments },
  reports: { title: 'Reports', component: AdminReports },
  userCourses: { title: 'User–Courses', component: AdminUserCourses },
  users: { title: 'Users', component: AdminUsers },
  contacts: { title: 'Contact List', component: ContactList },
  reply: { title: 'Contact Reply', component: ContactReply },
  feedbacks: { title: 'Feedbacks', component: Feedbacks },
  reported: { title: 'Reported Comments', component: ReportedComments },
};

export default function AdminSection() {
  const { section } = useParams();
  const navigate = useNavigate();

  const key = PAGES[section] ? section : 'banner';
  const ActiveComponent = PAGES[key].component;

  const navItems = Object.keys(PAGES).map((k) => ({
    key: k,
    label: PAGES[k].title,
  }));

  const breadcrumbItems = [
    { label: 'Admin', link: '/admin' },
    { label: PAGES[key].title },
  ];

  const { activeKey, setActiveKey, collapsed, toggleCollapsed } = useAppController({
    initialKey: key,
    keys: navItems.map((i) => i.key),
  });

  return (
    <div className="admin-layout-app">
      <AppSider
        items={navItems}
        activeKey={activeKey}
        collapsed={collapsed}
        onToggleCollapsed={toggleCollapsed}
        onSelect={(nextKey) => {
          setActiveKey(nextKey);
          navigate(`/admin/${nextKey}`);
        }}
      />
      <div className="admin-layout-app__content">
        <Container>
          <Breadcrumb items={breadcrumbItems} />
          <div style={{ paddingTop: '2rem' }}>
            <ActiveComponent />
          </div>
        </Container>
      </div>
    </div>
  );
}


