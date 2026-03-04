import { useState } from "react";
import "./index.css";

export default function EditInstructor() {
  // mock data để giữ layout
  const [user, setUser] = useState({
    id: 1,
    first_name: "John",
    last_name: "Doe",
    phone: "0123456789",
    roleId: 2,
  });

  const roles = [
    { id: 1, name: "ADMIN" },
    { id: 2, name: "INSTRUCTOR" },
    { id: 3, name: "STUDENT" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated instructor:", user);
  };

  return (
    <div className="edit-instructor-page">
      <div className="container">
        <h2>Edit Instructor</h2>

        <form onSubmit={handleSubmit}>
          {/* hidden id */}
          <input
            type="hidden"
            name="id"
            value={user.id}
            onChange={handleChange}
          />

          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="first_name"
              value={user.first_name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="last_name"
              value={user.last_name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full-width">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="e.g. 0123456789"
              value={user.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full-width">
            <label>Role</label>
            <select
              name="roleId"
              value={user.roleId}
              onChange={handleChange}
              required
            >
              {roles.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name}
                </option>
              ))}
            </select>
          </div>

          <div className="actions">
            <button
              type="button"
              className="btn btn-back"
              onClick={() => window.history.back()}
            >
              ← Back
            </button>

            <button type="submit" className="btn btn-save">
              💾 Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}