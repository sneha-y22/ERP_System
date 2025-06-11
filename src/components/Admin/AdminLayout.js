import React from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import "../../styles/Admin/AdminDashboard.css";

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <header className="admin-header">
        <h2>ADMIN</h2>
      </header>
      <button className="logout-btn" onClick={() => navigate("/")}>LOGOUT</button>
      <AdminSidebar />
      <div className="dashboard-content">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;