import React, { useState } from "react";
import TeacherLayout from "../../components/Teacher/TeacherLayout";
import "../../styles/Teacher/Gradebook.css"
const classes = ["Class 9 - A", "Class 10 - B"];
const subjects = ["Math", "Science", "History"];

const sampleStudents = {
  "Class 9 - A": ["Ananya Sharma", "Rohan Malhotra"],
  "Class 10 - B": ["Meena Gupta", "Arjun Singh"]
};

const Gradebook = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [marks, setMarks] = useState({});

  const handleMarkChange = (student, category, value) => {
    setMarks((prev) => ({
      ...prev,
      [student]: {
        ...prev[student],
        [category]: value
      }
    }));
  };

  const studentList = sampleStudents[selectedClass] || [];

  return (
    <TeacherLayout>
      <h1>Gradebook</h1>

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

      {studentList.length > 0 && (
        <div className="gradebook-table">
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Assignments</th>
                <th>Participation</th>
                <th>Unit Tests</th>
                <th>Final Tests</th>
              </tr>
            </thead>
            <tbody>
              {studentList.map((student) => (
                <tr key={student}>
                  <td>{student}</td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={marks[student]?.Assignments || ""}
                      onChange={(e) => handleMarkChange(student, "Assignments", e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={marks[student]?.Participation || ""}
                      onChange={(e) => handleMarkChange(student, "Participation", e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={marks[student]?.UnitTests || ""}
                      onChange={(e) => handleMarkChange(student, "UnitTests", e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={marks[student]?.FinalTests || ""}
                      onChange={(e) => handleMarkChange(student, "FinalTests", e.target.value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </TeacherLayout>
  );
};

export default Gradebook;
