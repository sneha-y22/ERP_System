import React, { useState } from "react";
import TeacherLayout from "../../components/Teacher/TeacherLayout";
import "../../styles/Teacher/DiscussionBoard.css"
const classes = ["Class 9 - A", "Class 10 - B"];
const subjects = ["Math", "Science", "History"];

const DiscussionBoard = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [discussions, setDiscussions] = useState([]);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setDiscussions((prev) => [
        ...prev,
        {
          class: selectedClass,
          subject: selectedSubject,
          fileName: file.name
        }
      ]);
    }
  };

  return (
    <TeacherLayout>
      <h1>Chat & Discussion Board</h1>

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

      <label>Upload Discussion Form (PDF/Image):</label>
      <input type="file" accept="application/pdf,image/*" onChange={handleUpload} />

      {discussions.length > 0 && (
        <div className="discussion-list">
          <h3>Uploaded Prompts:</h3>
          <ul>
            {discussions.map((entry, idx) => (
              <li key={idx}>
                💬 <strong>{entry.fileName}</strong> ({entry.class} - {entry.subject})
              </li>
            ))}
          </ul>
        </div>
      )}
    </TeacherLayout>
  );
};

export default DiscussionBoard;
