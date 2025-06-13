import React, { useState } from "react";
import TeacherLayout from "../../components/Teacher/TeacherLayout";
import "../../styles/Teacher/StudentProfiles.css";
const sampleData = {
  "Class 9 - A": [
    {
      name: "Ananya Sharma",
      attendance: 92,
      assignment: 85,
      participation: 76,
      tests: 88
    },
    {
      name: "Rohan Malhotra",
      attendance: 88,
      assignment: 74,
      participation: 80,
      tests: 91
    }
  ],
  "Class 10 - B": [
    {
      name: "Meena Gupta",
      attendance: 95,
      assignment: 90,
      participation: 82,
      tests: 85
    },
    {
      name: "Arjun Singh",
      attendance: 80,
      assignment: 70,
      participation: 78,
      tests: 83
    }
  ]
};

const StudentProfiles = () => {
  const [selectedClass, setSelectedClass] = useState("Class 9 - A");

  return (
    <TeacherLayout>
      <h1>Student Profiles</h1>
      <label htmlFor="classSelect">Select Class:</label>
      <select
        id="classSelect"
        value={selectedClass}
        onChange={(e) => setSelectedClass(e.target.value)}
      >
        {Object.keys(sampleData).map((className) => (
          <option key={className} value={className}>
            {className}
          </option>
        ))}
      </select>

      <div className="student-list">
        {sampleData[selectedClass].map((student, index) => (
          <div className="student-card" key={index}>
            <h3>{student.name}</h3>
            <p>Attendance: {student.attendance}%</p>
            <p>Assignments: {student.assignment}%</p>
            <p>Participation: {student.participation}%</p>
            <p>Tests: {student.tests}%</p>
          </div>
        ))}
      </div>
    </TeacherLayout>
  );
};

export default StudentProfiles;
