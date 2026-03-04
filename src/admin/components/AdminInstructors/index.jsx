import React, { useEffect, useState } from "react";
import "./index.css";

const InstructorManagement = () => {
  const [instructors, setInstructors] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchInstructors();
  }, [currentPage]);

  const fetchInstructors = async () => {
    try {
      const res = await fetch(
        `/api/admin/instructors?page=${currentPage}&keyword=${keyword}`
      );
      const data = await res.json();
      setInstructors(data.content);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchInstructors();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this instructor?"))
      return;

    await fetch(`/api/admin/instructors/${id}`, {
      method: "DELETE",
    });

    fetchInstructors();
  };

  const handleToggleStatus = async (id) => {
    await fetch(`/api/admin/instructors/${id}/toggle`, {
      method: "POST",
    });

    fetchInstructors();
  };

  return (
    <div className="admin-layout">
      <div className="main-content">
        <main className="dashboard-content">
          <h2>Instructor Management</h2>

          {/* SEARCH */}
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Search by name or email"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>

          {/* TABLE */}
          <table className="inst-table">
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
              {instructors.map((inst) => (
                <tr key={inst.id}>
                  <td>{inst.id}</td>
                  <td>{inst.username}</td>
                  <td>{inst.email}</td>
                  <td>
                    {inst.first_name} {inst.last_name}
                  </td>
                  <td>
                    {inst.roles?.map((role) => (
                      <span key={role.id} className="role-badge">
                        {role.name}
                      </span>
                    ))}
                  </td>
                  <td>
                    <span
                      className={
                        inst.active
                          ? "status-active"
                          : "status-inactive"
                      }
                    >
                      {inst.active ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-edit">
                        Edit
                      </button>

                      <button
                        className="btn-delete"
                        onClick={() => handleDelete(inst.id)}
                      >
                        Delete
                      </button>

                      <button
                        className={
                          inst.active
                            ? "btn-deactivate"
                            : "btn-activate"
                        }
                        onClick={() =>
                          handleToggleStatus(inst.id)
                        }
                      >
                        {inst.active
                          ? "Deactivate"
                          : "Activate"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="pagination-wrapper">
              <button
                className="pagination-btn"
                disabled={currentPage === 1}
                onClick={() =>
                  setCurrentPage(currentPage - 1)
                }
              >
                Previous
              </button>

              <span className="pagination-info">
                Page {currentPage} / {totalPages}
              </span>

              <button
                className="pagination-btn"
                disabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage(currentPage + 1)
                }
              >
                Next
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default InstructorManagement;