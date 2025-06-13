import React, { useState } from "react";
import TeacherLayout from "../../components/Teacher/TeacherLayout";
import "../../styles/Teacher/AttendanceRegister.css"
const classes = ["Class 9 - A", "Class 10 - B"];
const subjects = ["Math", "Science", "History"];

const sampleStudents = {
  "Class 9 - A": ["Ananya Sharma", "Rohan Malhotra"],
  "Class 10 - B": ["Meena Gupta", "Arjun Singh"]
};

const AttendanceRegister = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [attendance, setAttendance] = useState({});

  const handleAttendanceChange = (student, status) => {
    setAttendance((prev) => ({
      ...prev,
      [student]: status
    }));
  };

  const studentList = sampleStudents[selectedClass] || [];

  return (
    <TeacherLayout>
      <h1>Attendance Register</h1>

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
        <div className="attendance-table">
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Present</th>
                <th>Absent</th>
              </tr>
            </thead>
            <tbody>
              {studentList.map((student) => (
                <tr key={student}>
                  <td>{student}</td>
                  <td>
                    <input
                      type="radio"
                      name={student}
                      value="Present"
                      onChange={() => handleAttendanceChange(student, "Present")}
                      checked={attendance[student] === "Present"}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name={student}
                      value="Absent"
                      onChange={() => handleAttendanceChange(student, "Absent")}
                      checked={attendance[student] === "Absent"}
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

export default AttendanceRegister;
