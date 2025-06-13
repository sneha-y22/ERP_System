import React, { useState } from "react";
import TeacherLayout from "../../components/Teacher/TeacherLayout";
import "../../styles/Teacher/ParentCommunication.css"
const classOptions = ["Class 9 - A", "Class 10 - B"];

const sampleContacts = {
  "Class 9 - A": [
    {
      student: "Ananya Sharma",
      parent: "Mr. Raj Sharma",
      phone: "9876543210",
      email: "raj.sharma@example.com"
    },
    {
      student: "Rohan Malhotra",
      parent: "Mrs. Kavita Malhotra",
      phone: "9123456780",
      email: "kavita.m@example.com"
    }
  ],
  "Class 10 - B": [
    {
      student: "Meena Gupta",
      parent: "Mr. Arvind Gupta",
      phone: "9812345678",
      email: "arvind.gupta@example.com"
    },
    {
      student: "Arjun Singh",
      parent: "Mrs. Sunita Singh",
      phone: "9954321000",
      email: "sunita.singh@example.com"
    }
  ]
};

const ParentCommunication = () => {
  const [selectedClass, setSelectedClass] = useState("");

  return (
    <TeacherLayout>
      <h1>Parent Communication</h1>

      <label>Select Class:</label>
      <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
        <option value="">-- Select Class --</option>
        {classOptions.map((cls) => (
          <option key={cls} value={cls}>{cls}</option>
        ))}
      </select>

      {selectedClass && (
        <div className="parent-table">
          <table>
            <thead>
              <tr>
                <th>Student</th>
                <th>Parent</th>
                <th>Phone</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {sampleContacts[selectedClass].map((entry, index) => (
                <tr key={index}>
                  <td>{entry.student}</td>
                  <td>{entry.parent}</td>
                  <td>{entry.phone}</td>
                  <td>{entry.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </TeacherLayout>
  );
};

export default ParentCommunication;
