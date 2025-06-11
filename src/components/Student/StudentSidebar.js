import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Student/StudentSidebar.css";

const StudentSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>☰</button>
      <div className={`student-sidebar ${isOpen ? "open" : ""}`}>
        <nav>
          <ul>
            <li><Link to="/student-dashboard">Home</Link></li>
            <li><Link to="/class-management">Class Schedule</Link></li>
            <li><Link to="/student-profiles">Assignment Tracker</Link></li>
            <li><Link to="/assignments">Attendance Record</Link></li>
            <li><Link to="/attendance-tracking">Grade Report</Link></li>
            <li><Link to="/gradebook">Exam Schedule</Link></li>
            <li><Link to="/announcements">Announcements & Notifications</Link></li>
            <li><Link to="/resources">Resource Library</Link></li>
            <li><Link to="/discussion-board">Discussion Board</Link></li>
            <li><Link to="/exam-planner">Fee & Finance</Link></li>
            <li><Link to="/parent-communication">Teacher Feedback & Communication</Link></li>
            <li><Link to="/performance-analytics">Performance Analytics</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default StudentSidebar;