import React from "react";
import { useNavigate } from "react-router-dom";
import StudentSidebar from "../../components/StudentSidebar.js";
import "../../styles/StudentDashboard.css";


const StudentDashboard = () => {
    const navigate = useNavigate();
  return (
    <div className = "dashboard-container">
        <header className='student-header'>
            <h2>STUDENT</h2>
        </header>
        <button className = "logout-btn" onClick = {()=> navigate("/")}>LOGOUT</button>
        <StudentSidebar/>
        <div className = "dashboard-content">
            <h1>Welcome, Admin</h1>
            <p>Manage users, academics, and system settings.</p>
        </div>
    </div>
  );
};

export default StudentDashboard;