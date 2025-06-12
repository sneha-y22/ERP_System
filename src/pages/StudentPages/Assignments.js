import React, { useState } from "react";
import Calendar from "react-calendar";
import "../../styles/Student/Assignment.css";


const assignments = [
  {
    subject: "Math",
    title: "Integration Worksheet",
    dueDate: new Date(2024, 6, 10),
    description: "Complete all integration questions from the PDF."
  },
  {
    subject: "Science",
    title: "Physics Lab Report",
    dueDate: new Date(2024, 6, 12),
    description: "Document the pendulum experiment findings."
  }
];

const Assignment = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const filteredAssignments = selectedDate
    ? assignments.filter(
        (a) => a.dueDate.toDateString() === selectedDate.toDateString()
      )
    : [];

  return (
    <div className="assignment-wrapper">
      <h2 className="assignment-title">📚 Assignment Tracker</h2>

      <div className="calendar-section">
        <Calendar onClickDay={(date) => setSelectedDate(date)} />
      </div>

      <div className="assignment-list">
        {filteredAssignments.length ? (
          filteredAssignments.map((assignment, idx) => (
            <div className="assignment-card" key={idx}>
              <h3>{assignment.title}</h3>
              <p><strong>Subject:</strong> {assignment.subject}</p>
              <p>{assignment.description}</p>
              <p><strong>Due Date:</strong> {assignment.dueDate.toDateString()}</p>
              <button className="submit-btn">Submit Assignment</button>
            </div>
          ))
        ) : (
          <p className="empty">No assignment due on this date.</p>
        )}
      </div>
    </div>
  );
};

export default Assignment;
