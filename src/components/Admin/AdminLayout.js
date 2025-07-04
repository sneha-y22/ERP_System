import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import "../../styles/Admin/AdminDashboard.css";

const AdminLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <header className="admin-header">
        <h2>EduSarthi</h2>
        <button className="logout-btn" onClick={() => navigate("/")}>LOGOUT</button>
      </header>

      <AdminSidebar />

      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
