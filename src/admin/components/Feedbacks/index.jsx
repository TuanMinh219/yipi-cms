import { useState, useEffect } from 'react';
import { Input, Select, Button, Typography, Container, Row, Col } from '../../../common/Atoms';
import './index.css';

export default function Feedbacks({ feedbacks = [] }) {
  const [searchInput, setSearchInput] = useState('');
  const [ratingFilter, setRatingFilter] = useState('all');
  const [dateSort, setDateSort] = useState('newest');
  const [filteredFeedbacks, setFilteredFeedbacks] = useState(feedbacks);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    filterFeedbacks();
  }, [feedbacks, searchInput, ratingFilter, dateSort]);

  const filterFeedbacks = () => {
    let filtered = [...feedbacks];

    if (searchInput) {
      const searchLower = searchInput.toLowerCase();
      filtered = filtered.filter(
        (fb) =>
          fb.userName?.toLowerCase().includes(searchLower) ||
          fb.courseTitle?.toLowerCase().includes(searchLower)
      );
    }

    if (ratingFilter !== 'all') {
      filtered = filtered.filter((fb) => fb.rating === parseInt(ratingFilter));
    }

    filtered.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateSort === 'newest' ? dateB - dateA : dateA - dateB;
    });

    setFilteredFeedbacks(filtered);
  };

  const handleDelete = async (feedbackId) => {
    if (confirm('Are you sure you want to delete this feedback?')) {
      try {
        const response = await fetch(`/admin/feedbacks/${feedbackId}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          window.location.reload();
        }
      } catch (err) {
        console.error('Error deleting feedback:', err);
      }
    }
  };

  const renderStars = (rating) => {
    return (
      <>
        {[1, 2, 3, 4, 5].map((i) => (
          <svg
            key={i}
            className={`me-1 ${i <= rating ? 'text-warning' : 'text-secondary'}`}
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.561-.955L10 0l2.95 5.955 6.561.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </>
    );
  };

  const formatDate = (date) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="admin-layout d-flex">
      <div className="flex-grow-1">
        <Container>
          <div style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
            <Typography.H2 style={{ marginBottom: '24px' }}>Course Feedbacks</Typography.H2>
            
            <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
              <Col span={12}>
                <Input
                  id="searchInput"
                  type="text"
                  placeholder="Search by user or course..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </Col>
              <Col span={6}>
                <Select
                  id="ratingFilter"
                  value={ratingFilter}
                  onChange={(e) => setRatingFilter(e.target.value)}
                  options={[
                    { label: 'All Ratings', value: 'all' },
                    { label: '5 Stars', value: '5' },
                    { label: '4 Stars', value: '4' },
                    { label: '3 Stars', value: '3' },
                    { label: '2 Stars', value: '2' },
                    { label: '1 Star', value: '1' },
                  ]}
                />
              </Col>
              <Col span={6}>
                <Select
                  id="dateSort"
                  value={dateSort}
                  onChange={(e) => setDateSort(e.target.value)}
                  options={[
                    { label: 'Newest', value: 'newest' },
                    { label: 'Oldest', value: 'oldest' },
                  ]}
                />
              </Col>
            </Row>

            <div className="card shadow-sm" style={{ borderRadius: '8px', overflow: 'hidden' }}>
              <div className="table-responsive">
                <table id="feedbackTable" className="table table-hover align-middle mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>ID</th>
                      <th>User</th>
                      <th>Course</th>
                      <th>Rating</th>
                      <th>Comment</th>
                      <th>Created At</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody id="feedbackTableBody">
                    {filteredFeedbacks.map((fb) => (
                      <tr key={fb.feedbackId}>
                        <td>{fb.feedbackId}</td>
                        <td>{fb.userName}</td>
                        <td>{fb.courseTitle}</td>
                        <td data-rating={fb.rating}>
                          <span className="star-rating">{renderStars(fb.rating)}</span>
                        </td>
                        <td>{fb.comment}</td>
                        <td data-date={new Date(fb.createdAt).toISOString()}>
                          {formatDate(fb.createdAt)}
                        </td>
                        <td className="text-center">
                          <Button
                            danger
                            size="small"
                            onClick={() => handleDelete(fb.feedbackId)}
                            title="Delete Feedback"
                          >
                            <i className="fas fa-trash"></i> Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {filteredFeedbacks.length === 0 && (
                <div className="p-4 text-center text-muted">
                  <p>No feedbacks found</p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}