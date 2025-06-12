import React, { useState } from "react";
import StudentSidebar from "../../components/Student/StudentSidebar";
import "../../styles/Student/ClassManagement.css";

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const timeSlots = [
  "08:00 AM", "08:40 AM", "09:20 AM", "10:00 AM", "10:40 AM", "11:20 AM",
  "12:00 PM", "12:40 PM", "01:20 PM", "02:00 PM"
];

const classData = {
  "Class 10A": {
    "Monday": {
      "08:00 AM": { subject: "Math", room: "Room 101" },
      "08:40 AM": { subject: "Math", room: "Room 101" },
      "10:00 AM": { subject: "English", room: "Room 102" }
    },
    "Tuesday": {
      "08:00 AM": { subject: "Physics", room: "Room 103" },
      "10:00 AM": { subject: "Art", room: "Room 105" }
    }
  },
  // Add other classes and days as needed...
};


const ClassManagement = () => {
  const [selectedClass, setSelectedClass] = useState("Class 10A");

  const currentSchedule = classData[selectedClass] || {};

  return (
    <div className="dashboard-container">
      <StudentSidebar />
      <div className="sdashboard-content">
        <h2>📅 Class Schedule</h2>
        <div className="class-selector">
  <label>Select Class:</label>
  <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
    {Object.keys(classData).map((classKey) => (
      <option key={classKey} value={classKey}>{classKey}</option>
    ))}
  </select>
</div>

        <div className="schedule-table-wrapper">
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Time</th>
                {weekdays.map((day) => (
                  <th key={day}>{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
  {timeSlots.map((time) => (
    <tr key={time}>
      <td><strong>{time}</strong></td> {/* Time column (left edge) */}
      {weekdays.map((day) => (
        <td key={day + time}>
          {currentSchedule[day]?.[time]?.subject && (
            <>
              <strong>{currentSchedule[day][time].subject}</strong><br />
              <small>{currentSchedule[day][time].room}</small>
            </>
          )}
        </td>
      ))}
    </tr>
  ))}
</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClassManagement;
