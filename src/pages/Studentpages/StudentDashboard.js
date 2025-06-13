import React from "react";
import { useNavigate } from "react-router-dom";
import StudentSidebar from "../../components/Student/StudentSidebar.js";
import "../../styles/Student/StudentDashboard.css";

const StudentDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <header className="student-header">
        <h2>STUDENT PORTAL</h2>
      </header>

      <button className="logout-btn" onClick={() => navigate("/")}>
        LOGOUT
      </button>

      <StudentSidebar />

      <main className="sdashboard-content">
        {/* Welcome Section */}
        <section className="welcome-panel">
          <h1>Welcome, Name 👋</h1>
          <p>Check your latest updates below and stay on top of your academics!</p>
        </section>

        {/* Notification Section */}
        <section className="dashboard-notification-group">
          <div className="notification-bar assignments">
            <h3>📘 Assignments</h3>
            <ul>
              <li>New assignment uploaded in Physics (2025-06-13)</li>
              <li>Chemistry assignment deadline extended (2025-06-10)</li>
            </ul>
          </div>

          <div className="notification-bar timetable">
            <h3>🗓️ Timetable</h3>
            <ul>
              <li>Class schedule updated for next Monday (2025-06-11)</li>
            </ul>
          </div>

          <div className="notification-bar discussions">
            <h3>💬 Discussions</h3>
            <ul>
              <li>You’ve been mentioned in ‘Electric Circuits’ topic (2025-06-12)</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StudentDashboard;
