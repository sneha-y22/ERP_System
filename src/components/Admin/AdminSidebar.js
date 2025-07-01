import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Admin/AdminSidebar.css";


const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={`admin-sidebar fixed`}>
        <nav>
          <ul>
            <li><Link to="/admin/admin-dashboard">Home</Link></li>
            <li><Link to="/admin/user-management">Students</Link></li>
            <li><Link to="/admin/academic-management">Teachers</Link></li>
            <li><Link to="/admin/admin-dashboard">Visitors</Link></li>
            <li><Link to="/admin/attendance-tracking">Attendance</Link></li>
            <li><Link to="/admin/performance">Exam Results</Link></li>
            <li><Link to="/admin/exam-timetable">Schedule & Time Table</Link></li>
            <li><Link to="/admin/finance-management">Fee & Finance</Link></li>
            <li><Link to="/admin/communication-center">Communication</Link></li>
            <li><Link to="/admin/system-settings">System Settings</Link></li>
            
          </ul>
        </nav>
      </div>
    </>
  );
};

export default AdminSidebar;