import React from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar.js";
import "../../styles/AdminDashboard.css";
const AdminDashboard = () => {
    const navigate = useNavigate();
  return (
    <div className = "dashboard-container">
        <header className='admin-header'>
            <h2>ADMIN</h2>
        </header>
        <button className = "logout-btn" onClick = {()=> navigate("/")}>LOGOUT</button>
        <AdminSidebar/>
        <div className = "dashboard-content">
            <h1>Welcome, Admin</h1>
            <p>Manage users, academics, and system settings.</p>
        </div>
    </div>
  );
};

export default AdminDashboard;
