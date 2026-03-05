import { useState } from 'react';
import {
  Alert,
  StatCard,
  Button,
  Typography,
  Container,
  Row,
  Col
} from '../../../common/Atoms';
import './index.css';

export default function AdminPayments({
  pendingPayments = [],
  allPayments = [],
  pendingCount = 0,
  approvedCount = 0,
  totalPayments = 0,
  refundCount = 0,
  success = null,
  error = null
}) {
  const formatVND = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(amount || 0);
  };

  const formatDate = (date) => {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleDateString('vi-VN') + ' ' + d.toLocaleTimeString('vi-VN');
  };

  return (
    <div className="admin-layout">
      <div className="dashboard-content">

        {/* ALERTS */}
        {success && (
          <Alert type="success" message="Success" description={success} />
        )}
        {error && (
          <Alert type="error" message="Error" description={error} />
        )}

        {/* STATS */}
        <Container>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              <StatCard
                title="Pending approvals"
                value={pendingCount}
                icon={<i className="fas fa-clock"></i>}
              />
            </Col>

            <Col span={6}>
              <StatCard
                title="Approved"
                value={approvedCount}
                icon={<i className="fas fa-check-circle"></i>}
              />
            </Col>

            <Col span={6}>
              <StatCard
                title="Total payments"
                value={totalPayments}
                icon={<i className="fas fa-list"></i>}
              />
            </Col>

            <Col span={6}>
              <StatCard
                title="Total refunds"
                value={refundCount}
                icon={<i className="fas fa-undo"></i>}
              />
            </Col>
          </Row>
        </Container>

        {/* PENDING PAYMENTS */}
        <div className="payment-card">
          <h2>
            <i className="fas fa-hourglass-half me-2"></i>
            Pending Payments
          </h2>

          {pendingPayments.length === 0 ? (
            <div className="empty-state">
              <i className="fas fa-inbox"></i>
              <h3>No pending payments</h3>
              <p>There are currently no payments awaiting approval.</p>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Student</th>
                    <th>Course</th>
                    <th>Amount</th>
                    <th>Method</th>
                    <th>Payment Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingPayments.map((item) => {
                    const isBatch = item.courseCount !== undefined;

                    return (
                      <tr
                        key={item.id || item.transactionCode}
                        style={{
                          backgroundColor: isBatch ? '#f8f9fa' : 'white'
                        }}
                      >
                        <td>{isBatch ? 'BATCH' : item.id}</td>
                        <td>{item.user?.first_name || 'N/A'}</td>
                        <td>
                          {isBatch
                            ? `${item.courseCount} courses`
                            : item.course?.title}
                        </td>
                        <td>
                          {formatVND(
                            isBatch ? item.totalAmount : item.amount
                          )}
                        </td>
                        <td>{item.paymentMethod || item.method}</td>
                        <td>{formatDate(item.paymentDate)}</td>
                        <td>
                          <span className="badge-status badge-pending">
                            Pending
                          </span>
                        </td>
                        <td>
                          <button className="btn-action btn-approve">
                            Approve
                          </button>
                          <button className="btn-action btn-reject">
                            Reject
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* PAYMENT HISTORY */}
        <div className="payment-card">
          <h2>
            <i className="fas fa-history me-2"></i>
            Payment History
          </h2>

          {allPayments.length === 0 ? (
            <div className="empty-state">
              <i className="fas fa-inbox"></i>
              <h3>No payments recorded</h3>
              <p>There are no payments in the system yet.</p>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Transaction ID</th>
                    <th>Course</th>
                    <th>Payment Date</th>
                    <th>Method</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {allPayments.map((item) => {
                    const isBatch = item.courseCount !== undefined;

                    return (
                      <tr
                        key={item.id || item.transactionCode}
                        style={{
                          backgroundColor: isBatch ? '#f8f9fa' : 'white'
                        }}
                      >
                        <td>
                          {isBatch ? item.transactionCode : item.id}
                        </td>
                        <td>
                          {isBatch
                            ? `${item.courseCount} courses`
                            : item.course?.title}
                        </td>
                        <td>{formatDate(item.paymentDate)}</td>
                        <td>
                          <span className="method-chip">
                            <i className="fas fa-wallet"></i>
                            <span>
                              {item.paymentMethod || item.method}
                            </span>
                          </span>
                        </td>
                        <td>
                          {formatVND(
                            isBatch ? item.totalAmount : item.amount
                          )}
                        </td>
                        <td>
                          <span className="badge-status badge-success">
                            {item.status || 'Completed'}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}