import React, { useEffect, useState } from "react";
import { Layout, Menu, Drawer, Button, Breadcrumb, Dropdown, Avatar } from "antd";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./index.css";
import useMediaQuery, { mediaQueryPoints } from "@/hooks/useMediaQuery";
// no auth required yet
import PATH from "@/configs/paths/PATH";

const { Header, Sider, Content } = Layout;

const menuItems = [
  { key: "/admin", label: "Dashboard" },
  { key: "/admin/homepage-banner", label: "Homepage Banner" },
  { key: "/admin/courses", label: "Courses" },
  { key: "/admin/instructors", label: "Instructors" },
  { key: "/admin/users", label: "Users" },
  { key: "/admin/payments", label: "Payments" },
  { key: "/admin/reports", label: "Reports" },
  { key: "/admin/user-courses", label: "User Courses" },
  { key: "/admin/contacts", label: "Contact List" },
  { key: "/admin/contacts/reply", label: "Contact Reply" },
  { key: "/admin/feedbacks", label: "Feedbacks" },
  { key: "/admin/reported-comments", label: "Reported Comments" },
];

export default function AdminMainLayout() {
  // auth disabled for now
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery(`(max-width: ${mediaQueryPoints.md}px)`);
  const [drawerOpen, setDrawerOpen] = useState(false);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const onMenuClick = ({ key }) => {
    navigate(key);
    setDrawerOpen(false);
  };

  const pathToBreadcrumb = (pathname) => {
    const parts = pathname.replace(/^\/|\/$/g, "").split("/");
    const crumbs = [{ path: "/admin", label: "Admin" }];
    if (parts.length > 1 || (parts.length === 1 && parts[0] !== "admin")) {
      let cumulative = "/admin";
      for (let i = 1; i < parts.length; i++) {
        cumulative += `/${parts[i]}`;
        crumbs.push({ path: cumulative, label: parts[i].replace(/-/g, " ") });
      }
    }
    return crumbs;
  };

  const accountMenuItems = [
    { key: 'profile', label: 'Account Settings' },
  ];

  const onAccountMenuClick = ({ key }) => {
    if (key === 'profile') navigate('/admin/profile');
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {!isMobile && (
        <Sider breakpoint="md" collapsedWidth="0">
          <div className="admin-logo" style={{ height: 64, margin: 16 }} />
          <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]} items={menuItems} onClick={onMenuClick} />
        </Sider>
      )}

      <Layout>
        <Header className="site-layout-header" style={{ padding: "0 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {isMobile && (
              <Button type="text" icon={<MenuOutlined />} onClick={() => setDrawerOpen(true)} />
            )}
            <div className="header-title">Admin Console</div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Breadcrumb items={pathToBreadcrumb(location.pathname).map(c => ({ title: c.label }))} />
            <Dropdown menu={{ items: accountMenuItems, onClick: onAccountMenuClick }} placement="bottomRight">
              <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                <Avatar icon={<UserOutlined />} />
                <span>Admin</span>
              </div>
            </Dropdown>
          </div>
        </Header>

        <Content style={{ margin: 16 }}>
          <div className="site-layout-content">
            <Outlet />
          </div>
        </Content>
      </Layout>

      <Drawer placement="left" onClose={() => setDrawerOpen(false)} open={drawerOpen} bodyStyle={{ padding: 0 }}>
        <Menu mode="inline" selectedKeys={[location.pathname]} items={menuItems} onClick={onMenuClick} />
      </Drawer>
    </Layout>
  );
}