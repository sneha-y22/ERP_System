// ExamScheduleUploadPage.jsx
import React from 'react';
import AdminSidebar from '../../components/Admin/AdminSidebar';
import { useNavigate } from 'react-router-dom';
import ExamUploadModule from '../../components/Admin/ExamUploadModule';
import '../../styles/Admin/UploadDocumentsPage.css';

const ExamScheduleUploadPage = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <header className="admin-header">
        <h2>Upload Exam Schedule</h2>
      </header>
      <button className="logout-btn" onClick={() => navigate("/")}>LOGOUT</button>
      <AdminSidebar />
      <div className="upload-documents-content">
        <ExamUploadModule />
      </div>
    </div>
  );
};

export default ExamScheduleUploadPage;