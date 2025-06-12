import React from 'react';
import AdminSidebar from '../../components/Admin/AdminSidebar';
import FeeFinanceForm from '../../components/Admin/FeeFinanceForm';
import { useNavigate } from 'react-router-dom';

const FeeFinancePage = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <header className="admin-header">
        <h2>Fee & Finance</h2>
      </header>
      <button className="logout-btn" onClick={() => navigate("/")}>LOGOUT</button>
      <AdminSidebar />
      <div className="academic-management-content">
        <FeeFinanceForm />
      </div>
    </div>
  );
};

export default FeeFinancePage;
