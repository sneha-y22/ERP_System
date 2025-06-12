// src/pages/Admin/CommunicationPage.js
import React from "react";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import CommunicationModule from "../../components/Admin/CommunicationModule";
import { useNavigate } from "react-router-dom";
import "../../styles/Admin/Communication.css";

const CommunicationPage = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <header className="admin-header">
        <h2>Communication Management</h2>
      </header>
      <button className="logout-btn" onClick={() => navigate("/")}>
        LOGOUT
      </button>
      <AdminSidebar />
      <div className="academic-management-content">
        <CommunicationModule />
      </div>
    </div>
  );
};

export default CommunicationPage;
