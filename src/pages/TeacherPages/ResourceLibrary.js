import React, { useState } from "react";
import TeacherLayout from "../../components/Teacher/TeacherLayout";
import "../../styles/Teacher/ResourceLibrary.css"
const classes = ["Class 9 - A", "Class 10 - B"];
const subjects = ["Math", "Science", "History"];

const ResourceLibrary = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [resources, setResources] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResources((prev) => [
        ...prev,
        { class: selectedClass, subject: selectedSubject, fileName: file.name }
      ]);
    }
  };

  return (
    <TeacherLayout>
      <h1>Resource Library</h1>

      <label>Select Class:</label>
      <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
        <option value="">-- Select Class --</option>
        {classes.map((cls) => (
          <option key={cls} value={cls}>{cls}</option>
        ))}
      </select>

      <label>Select Subject:</label>
      <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
        <option value="">-- Select Subject --</option>
        {subjects.map((subj) => (
          <option key={subj} value={subj}>{subj}</option>
        ))}
      </select>

      <label>Upload Resource (PDF or Image):</label>
      <input type="file" accept="application/pdf,image/*" onChange={handleFileUpload} />

      {resources.length > 0 && (
        <div className="resource-list">
          <h3>Uploaded Resources:</h3>
          <ul>
            {resources.map((res, index) => (
              <li key={index}>
                📁 <strong>{res.fileName}</strong> ({res.class} - {res.subject})
              </li>
            ))}
          </ul>
        </div>
      )}
    </TeacherLayout>
  );
};

export default ResourceLibrary;
