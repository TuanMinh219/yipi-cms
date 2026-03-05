import { useState } from 'react';
import './index.css';

export default function ReportedComments({ reportedComments = [], successMessage = null, errorMessage = null }) {
  const [comments, setComments] = useState(reportedComments);

  const handleApprove = async (commentId) => {
    if (confirm('Are you sure you want to approve this comment?')) {
      try {
        const response = await fetch(`/admin/comments/${commentId}/approve`, {
          method: 'POST',
        });
        if (response.ok) {
          setComments(comments.filter((c) => c.id !== commentId));
        }
      } catch (err) {
        console.error('Error approving comment:', err);
      }
    }
  };

  const handleReject = async (commentId) => {
    if (confirm('Are you sure you want to reject this comment?')) {
      try {
        const response = await fetch(`/admin/comments/${commentId}/reject`, {
          method: 'POST',
        });
        if (response.ok) {
          setComments(comments.filter((c) => c.id !== commentId));
        }
      } catch (err) {
        console.error('Error rejecting comment:', err);
      }
    }
  };

  const formatDate = (date) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="admin-layout">
      <div className="main-content">
        <main className="dashboard-content" style={{ padding: '30px' }}>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4">
            <h1 className="fs-2 fw-bold text-dark mb-3 mb-md-0">
              <i className="fa-solid fa-flag text-danger me-2"></i>Reported Comments
            </h1>
          </div>

          <div className="alert-messages-container">
            {successMessage && (
              <div className="alert alert-success alert-dismissible fade show" role="alert">
                <i className="fa-solid fa-check-circle me-2"></i>
                <span>{successMessage}</span>
                <button
                  type="button"
                  className="btn-close"
                  onClick={(e) => e.target.parentElement.remove()}
                  aria-label="Close"
                ></button>
              </div>
            )}

            {errorMessage && (
              <div className="alert alert-danger alert-dismissible fade show" role="alert">
                <i className="fa-solid fa-exclamation-circle me-2"></i>
                <span>{errorMessage}</span>
                <button
                  type="button"
                  className="btn-close"
                  onClick={(e) => e.target.parentElement.remove()}
                  aria-label="Close"
                ></button>
              </div>
            )}
          </div>

          {comments && comments.length > 0 ? (
            <div className="card shadow-sm">
              <div className="table-responsive">
                <table className="table reported-comments-table align-middle mb-0">
                  <thead>
                    <tr>
                      <th style={{ width: '60px' }}>ID</th>
                      <th style={{ minWidth: '200px' }}>Blog</th>
                      <th style={{ minWidth: '120px' }}>Commenter</th>
                      <th style={{ minWidth: '180px' }}>Email</th>
                      <th style={{ minWidth: '250px' }}>Content</th>
                      <th style={{ minWidth: '140px' }}>Reported At</th>
                      <th className="text-center" style={{ minWidth: '220px' }}>
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {comments.map((comment) => (
                      <tr key={comment.id}>
                        <td>{comment.id}</td>
                        <td>
                          <a
                            href={`/blog/${comment.blog?.slug}`}
                            target="_blank"
                            rel="noreferrer"
                            className="blog-link"
                          >
                            <i className="fa-solid fa-external-link-alt me-1"></i>
                            <span>{comment.blog?.title}</span>
                          </a>
                        </td>
                        <td>
                          <strong>{comment.studentName}</strong>
                        </td>
                        <td>
                          <span className="text-muted">{comment.studentEmail}</span>
                        </td>
                        <td className="comment-content-cell">
                          <span>{comment.content}</span>
                        </td>
                        <td>
                          <span className="text-muted">
                            {formatDate(comment.createdAt)}
                          </span>
                        </td>
                        <td>
                          <div className="action-buttons">
                            <button
                              type="button"
                              className="btn btn-success"
                              onClick={() => handleApprove(comment.id)}
                            >
                              <i className="fa-solid fa-check me-1"></i> Approve
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => handleReject(comment.id)}
                            >
                              <i className="fa-solid fa-times me-1"></i> Reject
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="empty-state-container">
              <div className="card shadow-sm empty-state">
                <div className="card-body">
                  <i
                    className="fa-solid fa-check-circle text-success"
                    style={{ fontSize: '5rem' }}
                  ></i>
                  <h4>No comments reported</h4>
                  <p>All comments are working normally.</p>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
