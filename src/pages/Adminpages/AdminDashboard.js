import React from "react";
import { useNavigate } from "react-router-dom";
<<<<<<<< HEAD:src/pages/AdminPages/AdminDashboard.js
import AdminSidebar from "../../components/Admin/AdminSidebar.js";
========
import AdminSidebar from "../../components/Admincomponents/AdminSidebar.js";
>>>>>>>> 98ca6a4670e48faeadb3d1cf5a0a5b5e5cd27586:src/pages/Adminpages/AdminDashboard.js
import "../../styles/Admin/AdminDashboard.css";
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
            <h1>Welcome, Name</h1>
            <p>Manage users, academics, and system settings.</p>
        </div>
    </div>
  );
};

export default AdminDashboard;
