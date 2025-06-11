import React from "react";
import { useNavigate } from "react-router-dom";
<<<<<<<< HEAD:src/pages/TeacherPages/TeacherDashboard.js
import TeacherSidebar from "../../components/Teacher/TeacherSidebar.js";
========
import TeacherSidebar from "../../components/Teachercomponents/TeacherSidebar.js";
>>>>>>>> 98ca6a4670e48faeadb3d1cf5a0a5b5e5cd27586:src/pages/Teacherpages/TeacherDashboard.js
import "../../styles/Teacher/TeacherDashboard.css";


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
