import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Chart from "chart.js/auto";
import AdminSidebar from "../../components/Admin/AdminSidebar.js";
import "../../styles/Admin/AdminDashboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const feeCtx = document.getElementById("feeChart");
    const attendanceCtx = document.getElementById("attendanceChart");

    if (feeCtx && attendanceCtx) {
      new Chart(feeCtx, {
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May"],
          datasets: [
            {
              label: "Fees (₹)",
              data: [240000, 120000, 160000, 220000, 195000],
              borderColor: "#2f80ed",
              backgroundColor: "rgba(47, 128, 237, 0.2)",
              fill: true,
              tension: 0.3,
            },
          ],
        },
      });

      new Chart(attendanceCtx, {
        type: "line",
        data: {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
          datasets: [
            {
              label: "Attendance (%)",
              data: [93, 91, 95, 90, 88],
              borderColor: "#4caf50",
              backgroundColor: "rgba(76, 175, 80, 0.2)",
              fill: true,
              tension: 0.3,
            },
          ],
        },
      });
    }
  }, []);

  return (
    <div className="dashboard-container">
      <header className="admin-header">
        <h2>EduSarthi</h2>
      </header>

      <button className="logout-btn" onClick={() => navigate("/")}>
        LOGOUT
      </button>

      <AdminSidebar />

      <div className="dashboard-content">
        {/* Welcome Section */}
        <div className="welcome-header">
          <h1>Welcome to EduSarthi Dashboard</h1>
          <p>Manage admissions, attendance, fees, and more with AI-powered insights.</p>
        </div>

        {/* Dashboard Panels */}
        <div className="dashboard-panels">
          <div className="panel blue-panel">AI Alerts & Summary</div>
          <div className="panel yellow-panel">Today's Schedule</div>
        </div>

        {/* Metric Tiles */}
        <div className="admin-metric-grid">
          <div className="metric-box students">
            <div className="metric-icon">👨‍🎓</div>
            <div className="metric-value">1,204</div>
            <div className="metric-label">Total Students</div>
          </div>
          <div className="metric-box fees">
            <div className="metric-icon">💰</div>
            <div className="metric-value">₹2,15,000</div>
            <div className="metric-label">Pending Fees</div>
          </div>
          <div className="metric-box attendance">
            <div className="metric-icon">📅</div>
            <div className="metric-value">92%</div>
            <div className="metric-label">Attendance Today</div>
          </div>
          <div className="metric-box exams">
            <div className="metric-icon">📝</div>
            <div className="metric-value">3</div>
            <div className="metric-label">Upcoming Exams</div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="dashboard-graph-grid">
          <div className="graph-box">
            <h3>📊 Fee Collection Trend</h3>
            <canvas id="feeChart"></canvas>
          </div>
          <div className="graph-box">
            <h3>📈 Attendance Trend</h3>
            <canvas id="attendanceChart"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
