import React from "react";
import StudentSidebar from "./StudentSidebar";
import "../../styles/Student/StudentLayout.css";
import { Outlet, useNavigate } from "react-router-dom";

const StudentLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="student-layout">
      <StudentSidebar />
      <div className="student-main-content">
        <header className="student-header">
          <h2>STUDENT </h2>
          <button className="logout-btn" onClick={() => navigate("/")}>LOGOUT</button>
        </header>
        <div className="student-page-body">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default StudentLayout;
