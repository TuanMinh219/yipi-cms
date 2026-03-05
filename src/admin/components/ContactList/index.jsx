import { useState, useEffect } from 'react';
import { Input, Select, Button, Typography, Container, Row, Col } from '../../../common/Atoms';
import './index.css';

export default function ContactList({ messages = [] }) {
  const [searchInput, setSearchInput] = useState('');
  const [repliedFilter, setRepliedFilter] = useState('all');
  const [filteredMessages, setFilteredMessages] = useState(messages);

  useEffect(() => {
    filterMessages(searchInput, repliedFilter);
  }, [messages]);

  const filterMessages = (searchTerm, replied) => {
    let filtered = messages;

    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter((msg) => {
        return (
          msg.name?.toLowerCase().includes(searchLower) ||
          msg.email?.toLowerCase().includes(searchLower) ||
          msg.subject?.toLowerCase().includes(searchLower)
        );
      });
    }

    if (replied !== 'all') {
      const isReplied = replied === 'yes';
      filtered = filtered.filter((msg) => msg.replied === isReplied);
    }

    setFilteredMessages(filtered);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    filterMessages(value, repliedFilter);
  };

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setRepliedFilter(value);
    filterMessages(searchInput, value);
  };

  return (
    <div className="admin-layout d-flex">
      <div className="main-content flex-grow-1">
        <main className="dashboard-content p-4">
          <Container>
            <Row style={{ marginBottom: '24px' }}>
              <Col span={24}>
                <Typography.H2>All Contact Messages</Typography.H2>
              </Col>
            </Row>

            <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
              <Col span={16}>
                <Input
                  id="searchInput"
                  type="text"
                  placeholder="Search by name, email, or subject..."
                  value={searchInput}
                  onChange={handleSearchChange}
                  className="atom-input-search"
                />
              </Col>
              <Col span={8}>
                <Select
                  id="repliedFilter"
                  value={repliedFilter}
                  onChange={handleFilterChange}
                  options={[
                    { label: 'All', value: 'all' },
                    { label: 'Replied', value: 'yes' },
                    { label: 'Not Replied', value: 'no' },
                  ]}
                />
              </Col>
            </Row>

            <div className="card shadow-lg rounded-4">
              <div className="table-responsive">
                <table id="messageTable" className="table table-hover align-middle mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Subject</th>
                      <th>Message</th>
                      <th>Replied</th>
                      <th className="text-center">Action</th>
                  </tr>
                </thead>

                <tbody id="messageTableBody">
                  {filteredMessages.map((msg) => (
                    <tr key={msg.id}>
                      <td>{msg.id}</td>
                      <td>{msg.name}</td>
                      <td className="text-primary fw-semibold">{msg.email}</td>
                      <td>{msg.subject}</td>
                      <td className="text-break" style={{ maxWidth: '280px' }}>
                        {msg.message}
                      </td>

                      <td>
                        {msg.replied ? (
                          <span className="text-success fw-semibold">Yes</span>
                        ) : (
                          <span className="text-danger fw-semibold">No</span>
                        )}
                      </td>

                      <td className="text-center">
                        {!msg.replied ? (
                          <Button
                            type="primary"
                            size="small"
                            onClick={() => window.location.href = `/admin/contact/reply/${msg.id}`}
                          >
                            Reply
                          </Button>
                        ) : (
                          <span className="text-muted fst-italic">Replied</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </div>

            {filteredMessages.length === 0 && (
              <div className="text-center p-4 text-muted">
                <p>No messages found</p>
              </div>
            )}
          </Container>
        </main>
      </div>
    </div>
  );
}
