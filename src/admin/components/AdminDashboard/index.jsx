import { useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";

const monthLabels = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec"
];

export default function Dashboard() {

  // mock data tạm thời
  const dummyData = [12, 19, 3, 5, 2, 3, 8, 15, 6, 9, 10, 4];

  const chartData = {
    labels: monthLabels,
    datasets: [
      {
        data: dummyData,
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="admin-layout">

      {/* Sidebar placeholder */}
      <aside>{/* Sidebar */}</aside>

      <div className="main-content">

        {/* Topbar placeholder */}
        <header>
          <h2>Dashboard Overview</h2>
        </header>

        <main className="dashboard-content">

          {/* ================= STATS ================= */}
          <div className="stats-grid">

            <div className="stat-card">
              <div className="stat-details">
                <p className="stat-label">Total Users</p>
                <h3 className="stat-value">1200</h3>
                <span className="positive">↑ 12% from last month</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-details">
                <p className="stat-label">Total Instructor</p>
                <h3 className="stat-value">85</h3>
                <span className="positive">↑ 4% from last month</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-details">
                <p className="stat-label">Total Courses</p>
                <h3 className="stat-value">230</h3>
                <span className="negative">↓ 2% from last month</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-details">
                <p className="stat-label">Enrollments</p>
                <h3 className="stat-value">5400</h3>
                <span className="positive">↑ 8% from last month</span>
              </div>
            </div>

          </div>

          {/* ================= CHARTS ================= */}
          <div className="charts-row">

            <div className="chart-card">
              <div className="chart-header">
                <h3>User Growth</h3>
                <select>
                  <option>2024</option>
                  <option>2025</option>
                </select>
              </div>

              <Line data={chartData} />
            </div>

            <div className="chart-card">
              <div className="chart-header">
                <h3>Course Enrollments</h3>
                <select>
                  <option>2024</option>
                  <option>2025</option>
                </select>
              </div>

              <Bar data={chartData} />
            </div>

          </div>

          {/* ================= BOTTOM ROW ================= */}
          <div className="bottom-row">

            <div className="chart-card">
              <div className="chart-header">
                <h3>Revenue per Month</h3>
                <select>
                  <option>2024</option>
                  <option>2025</option>
                </select>
              </div>

              <Bar data={chartData} />
            </div>

            <div className="top-courses-card">
              <div className="card-header">
                <h3>Top Courses</h3>
                <a href="#">View All</a>
              </div>

              <div className="courses-list">
                <div className="course-item">
                  <div>
                    <h4>React Mastery</h4>
                    <span>1200 students</span>
                  </div>
                  <div>⭐ 4.8</div>
                </div>

                <div className="course-item">
                  <div>
                    <h4>Spring Boot Advanced</h4>
                    <span>980 students</span>
                  </div>
                  <div>⭐ 4.7</div>
                </div>
              </div>
            </div>

          </div>

        </main>
      </div>
    </div>
  );
}