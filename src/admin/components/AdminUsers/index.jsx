import { useState } from 'react';
import { Button, Input, Table, Typography, Container, Row, Col } from '../../../common/Atoms';
import './index.css';

export default function AdminUsers({ users = [], keyword = '' }) {
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = users.filter((user) => {
      const searchLower = searchKeyword.toLowerCase();
      return (
        user.username?.toLowerCase().includes(searchLower) ||
        user.first_name?.toLowerCase().includes(searchLower) ||
        user.last_name?.toLowerCase().includes(searchLower) ||
        user.email?.toLowerCase().includes(searchLower)
      );
    });
    setFilteredUsers(filtered);
  };

  const handleInputChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const displayUsers = searchKeyword ? filteredUsers : users;

  const handleStatusToggle = async (userId, currentStatus) => {
    const action = currentStatus ? 'deactivate' : 'activate';
    if (confirm(`Are you sure you want to ${action} this user?`)) {
      try {
        const response = await fetch(`/admin/users/${userId}/${action}`, {
          method: 'POST',
        });
        if (response.ok) {
          window.location.reload();
        }
      } catch (err) {
        console.error(`Error ${action}ing user:`, err);
      }
    }
  };

  return (
    <div className="admin-layout">
      <div className="main-content">
        <main className="dashboard-content" style={{ padding: '30px' }}>
          <Container>
            <Row>
              <Col span={24}>
                <Typography.H2>User Management</Typography.H2>
              </Col>
            </Row>

            <Row gutter={[16, 16]} style={{ marginBottom: '20px' }}>
              <Col span={16}>
                <Input
                  type="text"
                  placeholder="Search by name or username"
                  value={searchKeyword}
                  onChange={handleInputChange}
                  className="atom-input-search"
                />
              </Col>
              <Col span={8}>
                <Button type="primary" onClick={handleSearch}>
                  <i className="fas fa-search"></i> Search
                </Button>
              </Col>
            </Row>
          </Container>

          <table className="user-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Full Name</th>
                <th>Roles</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {displayUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.first_name} {user.last_name}</td>

                  <td>
                    {user.roles?.map((role, idx) => (
                      <span key={idx}>{role.name} </span>
                    ))}
                  </td>

                  <td>
                    <span
                      className={user.active ? 'status-active' : 'status-inactive'}
                    >
                      {user.active ? 'Active' : 'Inactive'}
                    </span>
                  </td>

                  <td>
                    <div className="action-buttons">
                      <Button type="primary" size="small" title="View Courses">
                        <i className="fas fa-graduation-cap"></i> Courses
                      </Button>

                      <Button type="default" size="small" title="Edit User">
                        <i className="fas fa-edit"></i> Edit
                      </Button>

                      {user.active ? (
                        <Button 
                          danger 
                          size="small"
                          onClick={() => handleStatusToggle(user.id, true)}
                          title="Deactivate User"
                        >
                          <i className="fas fa-ban"></i> Deactivate
                        </Button>
                      ) : (
                        <Button 
                          type="primary"
                          size="small"
                          onClick={() => handleStatusToggle(user.id, false)}
                          title="Activate User"
                        >
                          <i className="fas fa-check-circle"></i> Activate
                        </Button>
                      )}

                      <Button 
                        danger
                        size="small"
                        onClick={() => {
                          if (confirm('Are you sure you want to delete this user?')) {
                            // Handle delete
                          }
                        }}
                        title="Delete User"
                      >
                        <i className="fas fa-trash"></i> Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {displayUsers.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px', color: '#999' }}>
              <p>No users found</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
