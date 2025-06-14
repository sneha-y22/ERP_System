import React from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../components/Admin/AdminSidebar.js";
import "../../styles/Admin/AdminDashboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <header className="admin-header">
        <h2>ADMIN</h2>
      </header>
      <button className="logout-btn" onClick={() => navigate("/")}>LOGOUT</button>
      <AdminSidebar />

      <div className="dashboard-content">
        <h1>Welcome, Name 👋</h1>
        <p>Monitor and manage administrative activities effectively!</p>

        <div className="admin-cards-container">

          <div className="admin-card user-activity">
            <h3>👥 User Activity</h3>
            <ul>
              <li>3 new students registered (2025-06-13)</li>
              <li>Teacher profile updated: Mr. Sharma (2025-06-12)</li>
            </ul>
          </div>

          <div className="admin-card academic-logs">
            <h3>🏫 Academic Logs</h3>
            <ul>
              <li>New subject added: "AI & Robotics" (2025-06-11)</li>
              <li>Physics syllabus revised (2025-06-10)</li>
            </ul>
          </div>

          <div className="admin-card reports">
            <h3>📊 Reports</h3>
            <ul>
              <li>Attendance report generated for May</li>
              <li>Fee defaulters list available</li>
            </ul>
          </div>

          <div className="admin-card system-alerts">
            <h3>⚙️ System Alerts</h3>
            <ul>
              <li>Server maintenance scheduled (2025-06-15)</li>
              <li>New system patch applied (2025-06-12)</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
