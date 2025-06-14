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
           <li><Link to="/teacher/teacher-dashboard">Home</Link></li>
           <li><Link to="/teacher/class-schedule">Class Schedules</Link></li>
           <li><Link to="/teacher/student-profiles">Student Profiles</Link></li>
           <li><Link to="/teacher/assignments">Assignments Manager</Link></li>
           <li><Link to="/teacher/attendance-tracking">Attendance Register</Link></li>
           <li><Link to="/teacher/gradebook">Gradebook</Link></li>
           <li><Link to="/teacher/resources">Resource Library</Link></li>
           <li><Link to="/teacher/discussion-board">Chat & Discussion Board</Link></li>
           <li><Link to="/teacher/exam-schedule">Exam Schedule</Link></li>
           <li><Link to="/teacher/parent-communication">Parent Communication</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default TeacherSidebar;
