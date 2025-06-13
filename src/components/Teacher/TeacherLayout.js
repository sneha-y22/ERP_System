import React from "react";
import { useNavigate } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import "../../styles/Teacher/TeacherDashboard.css";

const TeacherLayout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <header className="teacher-header">
        <h2>TEACHER</h2>
        <button className="logout-btn" onClick={() => navigate("/")}>
          LOGOUT
        </button>
      </header>

      <TeacherSidebar />

      <div className="tdashboard-content">
        {children}
      </div>
    </div>
  );
};

export default TeacherLayout;
