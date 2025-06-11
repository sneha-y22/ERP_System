import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Teacher/TeacherSidebar.css";

const TeacherSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>☰</button>
      <div className={`teacher-sidebar ${isOpen ? "open" : ""}`}>
        <nav>
          <ul>
            <li><Link to="/teacher-dashboard">Home</Link></li>
            <li><Link to="/class-management">Class Management</Link></li>
            <li><Link to="/student-profiles">Student Profiles</Link></li>
            <li><Link to="/assignments">Assignments Manager</Link></li>
            <li><Link to="/attendance-tracking">Attendance Tracking</Link></li>
            <li><Link to="/gradebook">Gradebook</Link></li>
            <li><Link to="/timetable">Timetable & Schedules</Link></li>
            <li><Link to="/announcements">Announcements & Notifications</Link></li>
            <li><Link to="/resources">Resource Library</Link></li>
            <li><Link to="/discussion-board">Chat & Discussion Board</Link></li>
            <li><Link to="/exam-planner">Exam Planner</Link></li>
            <li><Link to="/parent-communication">Parent Communication</Link></li>
            <li><Link to="/performance-analytics">Performance Analytics</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default TeacherSidebar;
