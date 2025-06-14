import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Student/StudentSidebar.css";

const StudentSidebar = () => {
  return (
    <div className="student-sidebar fixed">
      <nav>
        <ul>
          <li><Link to="/student/dashboard">Home</Link></li>
          <li><Link to="/student/class-management">Class Schedule</Link></li>
          <li><Link to="/student/assignments">Assignment Tracker</Link></li>
          <li><Link to="/student/attendance-tracking">Attendance Record</Link></li>
          <li><Link to="/student/gradebook">Grade Report</Link></li>
          <li><Link to="/student/sem-schedule">Semester Schedule</Link></li>
          <li><Link to="/student/resources">Resource Library</Link></li>
          <li><Link to="/student/discussion-board">Discussion Board</Link></li>
          <li><Link to="/student/fee-planner">Fee & Finance</Link></li>
          <li><Link to="/student/teacher-communication">Teacher Feedback & Communication</Link></li>
          <li><Link to="/student/performance-analytics">Performance Analytics</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default StudentSidebar;