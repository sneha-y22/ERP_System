import React, { useState } from 'react';
import '../../styles/Admin/Attendance.css';

const AttendanceForm = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [studentName, setStudentName] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('Present');

  const addAttendance = () => {
    if (studentName && date) {
      setAttendanceData([
        ...attendanceData,
        { student: studentName, date, status }
      ]);
      setStudentName('');
      setDate('');
      setStatus('Present');
    }
  };

  return (
    <div className="form-card">
      <h3>Mark Attendance</h3>
      <input type="text" placeholder="Student Name" value={studentName} onChange={(e) => setStudentName(e.target.value)} />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Present">Present</option>
        <option value="Absent">Absent</option>
      </select>
      <button onClick={addAttendance}>Add</button>

      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((entry, idx) => (
            <tr key={idx}>
              <td>{entry.student}</td>
              <td>{entry.date}</td>
              <td>{entry.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceForm;
