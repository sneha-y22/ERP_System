import React from 'react';
import AdminSidebar from '../../components/Admin/AdminSidebar';
import AttendanceForm from '../../components/Admin/AttendanceForm';
import { useNavigate } from 'react-router-dom';

const AttendancePage = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <header className="admin-header">
        <h2>Attendance Management</h2>
      </header>
      <button className="logout-btn" onClick={() => navigate("/")}>LOGOUT</button>
      <AdminSidebar />
      <div className="academic-management-content">
        <AttendanceForm />
      </div>
    </div>
  );
};

export default AttendancePage;
