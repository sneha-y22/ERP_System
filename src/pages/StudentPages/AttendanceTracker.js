import React, { useState } from "react";
import "../../styles/Student/AttendanceTracker.css";

const attendanceData = {
  "Class 10A": {
    Math: { attended: 18, total: 24 },
    Science: { attended: 20, total: 25 },
    English: { attended: 22, total: 26 },
    Hindi: { attended: 19, total: 25 },
    "Social Studies": { attended: 16, total: 22 },
    Physics: { attended: 21, total: 28 }
  }
};

const AttendanceTracker = () => {
  const className = "Class 10A";
  const subjects = Object.entries(attendanceData[className]);

  const getAttendanceStatus = (percentage) => {
    if (percentage >= 75) return "good";
    if (percentage >= 50) return "average";
    return "poor";
  };

  return (
    <div className="attendance-wrapper">
      <h2 className="attendance-title">📋 Attendance Tracker</h2>
      <div className="attendance-grid">
        {subjects.map(([subject, { attended, total }]) => {
          const percent = total ? ((attended / total) * 100).toFixed(1) : 0;
          const status = getAttendanceStatus(percent);

          return (
            <div key={subject} className={`attendance-card ${status}`}>
              <h3>{subject}</h3>
              <p><strong>Attended:</strong> {attended}</p>
              <p><strong>Total Classes:</strong> {total}</p>
              <p><strong>Attendance:</strong> {percent}%</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AttendanceTracker;
