// UploadDocumentsPage.jsx
import React, { useState, useRef } from 'react';
import AdminSidebar from '../../components/Admin/AdminSidebar';
import { useNavigate } from 'react-router-dom';
import '../../styles/Admin/UploadDocumentsPage.css';

const UploadDocumentsPage = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState({
    examSchedule: null,
    teacherTimetable: null,
    studentTimetable: null,
  });

  const fileInputRefs = {
    examSchedule: useRef(null),
    studentTimetable: useRef(null),
    teacherTimetable: useRef(null),
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      setFiles((prev) => ({ ...prev, [type]: file }));
    }
  };

  const handleRemove = (type) => {
    setFiles((prev) => ({ ...prev, [type]: null }));
    fileInputRefs[type].current.value = null; // Clear input
  };

  const handleSubmit = () => {
    alert("Upload functionality not implemented yet.");
  };

  const renderPreview = (file) => {
    if (!file) return null;

    const fileURL = URL.createObjectURL(file);

    if (file.type.includes("image")) {
      return <img src={fileURL} alt="preview" className="file-preview-image" />;
    } else if (file.type === "application/pdf") {
      return (
        <iframe
          src={fileURL}
          title="PDF Preview"
          className="file-preview-pdf"
          frameBorder="0"
        ></iframe>
      );
    }
    return <p className="file-preview-unsupported">Unsupported format</p>;
  };

  const renderUploadSection = (label, type) => (
    <div className="upload-section">
      <h3>{label}</h3>
      <input
        type="file"
        accept="image/*,application/pdf"
        onChange={(e) => handleFileChange(e, type)}
        ref={fileInputRefs[type]}
      />
      {files[type] && (
        <>
          <p className="file-name">Selected: {files[type].name}</p>
          <div className="file-preview">
  <button
    className="file-btn preview"
    onClick={() => window.open(URL.createObjectURL(files[type]), "_blank")}
  >
    Preview
  </button>
</div>

          <div className="file-actions">
            <button onClick={() => fileInputRefs[type].current.click()} className="file-btn">Re-upload</button>
            <button onClick={() => handleRemove(type)} className="file-btn danger">Delete</button>
          </div>
        </>
      )}
    </div>
  );

  return (
    <div className="dashboard-container">
      <header className="admin-header">
        <h2>Upload Schedules</h2>
      </header>
      <button className="logout-btn" onClick={() => navigate("/")}>LOGOUT</button>
      <AdminSidebar />
      <div className="upload-documents-content">
        {renderUploadSection("Exam Schedule", "examSchedule")}
        {renderUploadSection("Student Time Table", "studentTimetable")}
        {renderUploadSection("Teacher Time Table", "teacherTimetable")}
        <div className="upload-button-wrapper">
          <button className="submit-btn" onClick={handleSubmit}>Upload</button>
        </div>
      </div>
    </div>
  );
};

export default UploadDocumentsPage;
