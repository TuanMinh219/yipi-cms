import { useEffect, useState } from "react";
import { Table, Input, Button, Space, Pagination } from "antd";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import "./index.css";

const CourseManagementPage = () => {
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // MOCK DATA (sau này gọi API)
  useEffect(() => {
    const mockData = [
      {
        id: 1,
        title: "React for Beginners",
        instructor: "John Doe",
        price: 49.99,
        averageRating: 4.5,
        ratingCount: 120,
        createdAt: "2025-01-01",
      },
      {
        id: 2,
        title: "Spring Boot Mastery",
        instructor: "Anna Smith",
        price: 79.99,
        averageRating: 4.8,
        ratingCount: 200,
        createdAt: "2025-02-10",
      },
    ];

    setCourses(mockData);
    setTotalPages(3);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      setCourses((prev) => prev.filter((c) => c.id !== id));
    }
  };

  const columns = [
    { title: "ID", dataIndex: "id" },
    { title: "Title", dataIndex: "title" },
    { title: "Instructor", dataIndex: "instructor" },
    {
      title: "Price",
      dataIndex: "price",
      render: (value) => `$${value.toFixed(2)}`,
    },
    {
      title: "Average Rating",
      render: (_, record) =>
        `${record.averageRating.toFixed(1)} (${record.ratingCount} ratings)`,
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
    },
    {
      title: "Actions",
      render: (_, record) => (
        <div className="action-buttons">
          <button
            className="btn-edit"
            onClick={() => navigate(`/admin/courses/edit/${record.id}`)}
          >
            Edit
          </button>

          <button
            className="btn-delete"
            onClick={() => handleDelete(record.id)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <AdminLayout>
      <div className="content-area">
        {/* Search + Add */}
        <div className="search-form">
          <Input
            placeholder="Search by course title"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            style={{ width: 250 }}
          />

          <Button type="primary" icon={<SearchOutlined />}>
            Search
          </Button>

          <button
            className="btn-add"
            onClick={() => navigate("/admin/courses/add")}
          >
            <PlusOutlined /> Add Course
          </button>
        </div>

        {/* Table */}
        <Table
          columns={columns}
          dataSource={courses}
          rowKey="id"
          pagination={false}
        />

        {/* Pagination */}
        <div className="pagination-wrapper">
          <Pagination
            current={currentPage}
            total={totalPages * 10}
            pageSize={10}
            onChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </AdminLayout>
  );
};

export default CourseManagementPage;