import React from "react";
import { useNavigate } from "react-router-dom";
import TeacherSidebar from "../../components/TeacherSidebar.js";
import "../../styles/TeacherDashboard.css";


const TeacherDashboard = () => {
    const navigate = useNavigate();
  return (
    <div className = "dashboard-container">
        <header className='teacher-header'>
            <h2>TEACHER</h2>
        </header>
        <button className = "logout-btn" onClick = {()=> navigate("/")}>LOGOUT</button>
        <TeacherSidebar/>
        <div className = "tdashboard-content">
            <h1>Welcome, Name</h1>
            <p>Manage users, academics, and system settings.</p>
        </div>
    </div>
  );
};

export default TeacherDashboard;
