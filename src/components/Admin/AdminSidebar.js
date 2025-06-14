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
            <li><Link to="/admin/user-management">User Management</Link></li>
            <li><Link to="/admin/academic-management">Academic Management</Link></li>
            <li><Link to="/admin/attendance-tracking">Attendance</Link></li>
            <li><Link to="/admin/performance">Performance</Link></li>
            <li><Link to="/admin/exam-timetable">Examination Planning</Link></li>
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