import React from 'react';
import {
  Navbar,
  Breadcrumb,
  Container,
} from '../../common/Atoms';
import './index.css';

export default function UserMainPage() {
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'User' },
  ];

  return (
    <div className="user-mainpage-wrapper">
      <Container>
        <Breadcrumb items={breadcrumbItems} />
        <div className="user-mainpage-content">
          <h1>User Main Page</h1>
          <p>Welcome to the user section of the application.</p>
        </div>
      </Container>
    </div>
  );
}