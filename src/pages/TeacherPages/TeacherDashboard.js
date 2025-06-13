
import React from "react";
import { useNavigate } from "react-router-dom";
import TeacherSidebar from "../../components/Teacher/TeacherSidebar.js";
import "../../styles/Teacher/TeacherDashboard.css";

const notifications = [
  {
    id: 1,
    title: "New Assignment",
    message: "Uploaded Algebra worksheet for Class 10.",
    time: "2 hrs ago"
  },
  {
    id: 2,
    title: "Attendance Updated",
    message: "Marked attendance for Class 8 - Science.",
    time: "Today"
  },
  {
    id: 3,
    title: "New Discussion",
    message: "History topic opened for Class 9.",
    time: "Yesterday"
  }
];

const TeacherDashboard = () => {
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
        <h1>Welcome, Mr./Ms. [Name]</h1>
        <p>Here’s a snapshot of your recent activities.</p>

        <div className="notifications-panel">
          <h2>Latest Updates</h2>
          {notifications.map((note) => (
            <div className="notification-card" key={note.id}>
              <h3>{note.title}</h3>
              <p>{note.message}</p>
              <span>{note.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
