import React, { useState } from "react";
import TeacherLayout from "../../components/Teacher/TeacherLayout";
import "../../styles/Teacher/AssignmentManager.css"
const classes = ["Class 9 - A", "Class 10 - B"];
const subjects = ["Math", "Science", "History"];

const AssignmentManager = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [assignmentFile, setAssignmentFile] = useState(null);

  const handleFileChange = (e) => {
    setAssignmentFile(e.target.files[0]);
  };

  return (
    <TeacherLayout>
      <h1>Assignments Manager</h1>

      <label>Select Class:</label>
      <select
        value={selectedClass}
        onChange={(e) => setSelectedClass(e.target.value)}
      >
        <option value="">-- Select Class --</option>
        {classes.map((cls) => (
          <option key={cls} value={cls}>
            {cls}
          </option>
        ))}
      </select>

      <label>Select Subject:</label>
      <select
        value={selectedSubject}
        onChange={(e) => setSelectedSubject(e.target.value)}
      >
        <option value="">-- Select Subject --</option>
        {subjects.map((subj) => (
          <option key={subj} value={subj}>
            {subj}
          </option>
        ))}
      </select>

      <label>Upload Assignment (PDF):</label>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />

      {assignmentFile && (
        <div className="upload-preview">
          <p>📄 Uploaded File: {assignmentFile.name}</p>
        </div>
      )}
    </TeacherLayout>
  );
};

export default AssignmentManager;
