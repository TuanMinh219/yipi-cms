import { useState } from 'react';
import './index.css';

export default function AdminUserCourses({ user = null, enrollments = [], success = null, error = null, currentPage = 1 }) {
  const [refundingId, setRefundingId] = useState(null);

  const handleRefund = async (enrollmentId) => {
    if (confirm('Are you sure you want to refund this course?')) {
      setRefundingId(enrollmentId);
      try {
        const response = await fetch(`/admin/enrollments/${enrollmentId}/refund`, {
          method: 'POST',
        });
        if (response.ok) {
          window.location.reload();
        }
      } catch (err) {
        console.error('Error refunding:', err);
        setRefundingId(null);
      }
    }
  };

  const canRefund = (enrollment) => {
    if (enrollment.refunded) return false;
    if (enrollment.course?.price === 0) return false;
    // Check if refund period is still valid (example: 30 days)
    const enrollDate = new Date(enrollment.enrolledAt);
    const now = new Date();
    const daysElapsed = (now - enrollDate) / (1000 * 60 * 60 * 24);
    return daysElapsed <= 30;
  };

  const formatDate = (date) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price || 0);
  };

  return (
    <div className="admin-layout">
      <div className="main-content">
        <main className="dashboard-content" style={{ padding: '30px' }}>
          {success && (
            <div className="alert alert-success">
              <i className="fas fa-check-circle"></i>
              <span>{success}</span>
            </div>
          )}

          {error && (
            <div className="alert alert-error">
              <i className="fas fa-exclamation-circle"></i>
              <span>{error}</span>
            </div>
          )}

          <div className="page-header">
            <h1 className="page-title">
              <i className="fas fa-graduation-cap"></i> Enrolled Courses
            </h1>
            <a href="/admin/users" className="btn-back">
              <i className="fas fa-arrow-left"></i> Back to Users
            </a>
          </div>

          {user && (
            <div className="user-card">
              <div className="user-name">
                <i className="fas fa-user-circle" style={{ color: '#007bff' }}></i>
                <span>{user.first_name} {user.last_name}</span>
              </div>

              <div className="user-email">
                <i className="fas fa-envelope"></i>
                <span>{user.email}</span>
              </div>

              <span className="badge-count">
                {enrollments?.length || 0} Course(s)
              </span>
            </div>
          )}

          {enrollments && enrollments.length > 0 ? (
            <div className="courses-section">
              <table className="courses-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Course Title</th>
                    <th>Price</th>
                    <th>Enrolled Date</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {enrollments.map((enrollment, idx) => (
                    <tr key={enrollment.id}>
                      <td>
                        <span className="course-number">
                          {(currentPage - 1) * 10 + idx + 1}
                        </span>
                      </td>

                      <td>
                        <div className="course-title">{enrollment.course?.title}</div>
                      </td>

                      <td>
                        {enrollment.course?.price === 0 ? (
                          <span className="price-badge price-free">Free</span>
                        ) : (
                          <span className="price-badge price-paid">
                            {formatPrice(enrollment.course?.price)}
                          </span>
                        )}
                      </td>

                      <td>{formatDate(enrollment.enrolledAt)}</td>

                      <td>
                        {!enrollment.refunded ? (
                          <span className="status-enrolled">
                            <i className="fas fa-check-circle"></i> Active
                          </span>
                        ) : (
                          <span className="status-refunded">
                            <i className="fas fa-times-circle"></i> Refunded
                          </span>
                        )}
                      </td>

                      <td>
                        {canRefund(enrollment) ? (
                          <a
                            href="#"
                            className="btn-refund"
                            onClick={(e) => {
                              e.preventDefault();
                              handleRefund(enrollment.id);
                            }}
                          >
                            <i className="fas fa-undo"></i> Refund
                          </a>
                        ) : !enrollment.refunded ? (
                          <span className="refund-info">
                            {enrollment.course?.price > 0
                              ? 'Refund period expired'
                              : 'Free course'}
                          </span>
                        ) : (
                          <div className="refund-info" style={{ color: '#dc3545' }}>
                            <i className="fas fa-undo"></i> Refunded
                            <br />
                            Refunded on:
                            <span>{formatDate(enrollment.refundedAt)}</span>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="courses-section">
              <div className="empty-state">
                <i className="fas fa-inbox"></i>
                <h3>No Courses Yet</h3>
                <p>This user hasn't enrolled in any courses yet.</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
