import { useState } from 'react';
import './index.css';

export default function AdminReports({ reports = [], currentPage = 1 }) {
  const [searchInput, setSearchInput] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [filteredReports, setFilteredReports] = useState(reports);

  const filterReports = (searchTerm, status) => {
    let filtered = reports;

    if (searchTerm) {
      filtered = filtered.filter((report) => {
        const searchLower = searchTerm.toLowerCase();
        return (
          report.lesson?.title?.toLowerCase().includes(searchLower) ||
          report.user?.first_name?.toLowerCase().includes(searchLower) ||
          report.user?.last_name?.toLowerCase().includes(searchLower) ||
          report.issueType?.toLowerCase().includes(searchLower)
        );
      });
    }

    if (status !== 'all') {
      filtered = filtered.filter((report) => report.status === status.toUpperCase());
    }

    setFilteredReports(filtered);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    filterReports(value, statusFilter);
  };

  const handleStatusFilterChange = (e) => {
    const value = e.target.value;
    setStatusFilter(value);
    filterReports(searchInput, value);
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'PENDING':
        return 'bg-warning text-dark';
      case 'REVIEWED':
        return 'bg-info text-white';
      case 'RESOLVED':
        return 'bg-success text-white';
      default:
        return 'bg-secondary text-white';
    }
  };

  const formatDate = (date) => {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
  };

  const formatTime = (date) => {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="admin-layout d-flex">
      <div className="main-content flex-grow-1">
        <main className="dashboard-content p-4">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4">
            <h1 className="fw-bold text-dark mb-3 mb-md-0" style={{ fontSize: '2rem' }}>
              <i className="fas fa-flag text-danger me-2"></i>Lesson Reports
            </h1>
          </div>

          <div className="d-flex flex-column flex-md-row gap-3 mb-4">
            <input
              id="searchInput"
              type="text"
              className="form-control shadow-sm"
              placeholder="Search by lesson, user, or issue type..."
              style={{ maxWidth: '350px' }}
              value={searchInput}
              onChange={handleSearchChange}
            />

            <select
              id="statusFilter"
              className="form-select shadow-sm"
              style={{ maxWidth: '220px' }}
              value={statusFilter}
              onChange={handleStatusFilterChange}
            >
              <option value="all">All Status</option>
              <option value="PENDING">Pending</option>
              <option value="REVIEWED">Reviewed</option>
              <option value="RESOLVED">Resolved</option>
            </select>
          </div>

          <div className="card shadow-lg rounded-4">
            <div className="table-responsive">
              <table id="reportTable" className="table table-hover align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th>ID</th>
                    <th>Lesson</th>
                    <th>Course</th>
                    <th>User</th>
                    <th>Issue Type</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>

                <tbody id="reportTableBody">
                  {filteredReports.length > 0 ? (
                    filteredReports.map((report) => (
                      <tr key={report.id}>
                        <td className="text-center fw-bold text-muted">{report.id}</td>
                        <td>
                          <span className="fw-semibold text-dark">{report.lesson?.title}</span>
                        </td>
                        <td>
                          <span className="text-primary fw-medium">{report.lesson?.course?.title}</span>
                        </td>
                        <td>
                          <span className="fw-medium">
                            {report.user?.first_name} {report.user?.last_name}
                          </span>
                          <small className="text-muted d-block mt-1">{report.user?.email}</small>
                        </td>
                        <td>
                          <span className="badge bg-info text-white">{report.issueType}</span>
                        </td>
                        <td>
                          <span className="description-text">{report.description}</span>
                        </td>
                        <td>
                          <span className={`badge ${getStatusBadgeClass(report.status)}`}>
                            {report.status === 'PENDING' && 'Pending'}
                            {report.status === 'REVIEWED' && 'Reviewed'}
                            {report.status === 'RESOLVED' && 'Resolved'}
                          </span>
                        </td>
                        <td>
                          <small className="text-muted">{formatDate(report.createdAt)}</small>
                          <br />
                          <small className="text-muted">{formatTime(report.createdAt)}</small>
                        </td>
                        <td className="text-center">
                          <button
                            type="button"
                            className="btn btn-sm btn-primary px-3"
                            onClick={() => {
                              alert(
                                `Report ID: ${report.id}\nLesson: ${report.lesson?.title}\nStatus: ${report.status}`
                              );
                            }}
                          >
                            <i className="fas fa-eye me-1"></i>View
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="9" className="text-center text-muted py-4">
                        <i className="fas fa-inbox fa-2x mb-2"></i>
                        <p className="mb-0">No reports found</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
