import React from "react";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import SettingsModule from "../../components/Admin/SettingsModule";
import { useNavigate } from "react-router-dom";
import "../../styles/Admin/SystemSettings.css";

const SystemSettingsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <header className="admin-header">
        <h2>System Settings</h2>
      </header>
      <button className="logout-btn" onClick={() => navigate("/")}>
        LOGOUT
      </button>
      <AdminSidebar />
      <div className="academic-management-content">
        <SettingsModule />
      </div>
    </div>
  );
};

export default SystemSettingsPage;