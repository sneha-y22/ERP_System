import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Admin/AdminSidebar.css";


const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>☰</button>
      <div className={`admin-sidebar ${isOpen ? "open" : ""}`}>
        <nav>
          <ul>
            <li><Link to="/admin-dashboard">Home</Link></li>
            <li><Link to="/user-management">User Management</Link></li>
            <li><Link to="/academic-management">Academic Management</Link></li>
            <li><Link to="/attendance-tracking">Attendance & Performance</Link></li>
            <li><Link to="/finance-management">Fee & Finance</Link></li>
            <li><Link to="/communication-center">Communication</Link></li>
            <li><Link to="/system-settings">System Settings</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default AdminSidebar;