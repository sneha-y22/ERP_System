import React from 'react';
import AdminSidebar from '../../components/Admin/AdminSidebar';
import PerformanceForm from '../../components/Admin/PerformanceForm';
import { useNavigate } from 'react-router-dom';

const PerformancePage = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <header className="admin-header">
        <h2>Performance Management</h2>
      </header>
      <button className="logout-btn" onClick={() => navigate("/")}>LOGOUT</button>
      <AdminSidebar />
      <div className="academic-management-content">
        <PerformanceForm />
      </div>
    </div>
  );
};

export default PerformancePage;
