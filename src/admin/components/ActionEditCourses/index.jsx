import { useState } from "react";
import "./index.css"; // nếu bạn muốn tách CSS ra file riêng

export default function EditCourse() {
  // mock data tạm để giữ layout
  const [course, setCourse] = useState({
    title: "React Mastery",
    price: 49.99,
    description: "Learn React from zero to hero.",
    syllabus: "Introduction\nComponents\nHooks\nRouting",
    instructorId: 1,
  });

  const instructors = [
    { id: 1, first_name: "John", last_name: "Doe" },
    { id: 2, first_name: "Jane", last_name: "Smith" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", course);
  };

  return (
    <div className="edit-course-page">
      <h2>
        <i className="fas fa-edit"></i> Edit Course
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div>
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={course.title}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Price</label>
            <input
              type="number"
              step="0.01"
              name="price"
              value={course.price}
              onChange={handleChange}
            />
          </div>

          <div style={{ gridColumn: "span 2" }}>
            <label>Description</label>
            <textarea
              name="description"
              rows="3"
              value={course.description}
              onChange={handleChange}
            />
          </div>

          <div style={{ gridColumn: "span 2" }}>
            <label>Syllabus</label>
            <textarea
              name="syllabus"
              rows="4"
              value={course.syllabus}
              onChange={handleChange}
            />
          </div>

          <div style={{ gridColumn: "span 2" }}>
            <label>Instructor</label>
            <select
              name="instructorId"
              value={course.instructorId}
              onChange={handleChange}
              required
            >
              {instructors.map((inst) => (
                <option key={inst.id} value={inst.id}>
                  {inst.first_name} {inst.last_name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="actions">
          <button type="submit" className="btn btn-save">
            <i className="fas fa-save"></i> Save Changes
          </button>

          <button
            type="button"
            className="btn btn-cancel"
            onClick={() => window.history.back()}
          >
            <i className="fas fa-times"></i> Cancel
          </button>
        </div>
      </form>
    </div>
  );
}