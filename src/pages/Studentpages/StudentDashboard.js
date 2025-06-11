import React from "react";
import { useNavigate } from "react-router-dom";
<<<<<<<< HEAD:src/pages/StudentPages/StudentDashboard.js
import StudentSidebar from "../../components/Student/StudentSidebar.js";
========
import StudentSidebar from "../../components/Studentcomponents/StudentSidebar.js";
>>>>>>>> 98ca6a4670e48faeadb3d1cf5a0a5b5e5cd27586:src/pages/Studentpages/StudentDashboard.js
import "../../styles/Student/StudentDashboard.css";


const StudentDashboard = () => {
    const navigate = useNavigate();
  return (
    <div className = "dashboard-container">
        <header className='student-header'>
            <h2>STUDENT</h2>
        </header>
        <button className = "logout-btn" onClick = {()=> navigate("/")}>LOGOUT</button>
        <StudentSidebar/>
        <div className = "sdashboard-content">
            <h1>Welcome, Name</h1>
            <p>Manage users, academics, and system settings.</p>
        </div>
    </div>
  );
};

export default StudentDashboard;