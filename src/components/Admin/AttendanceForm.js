import React, { useState } from 'react';
import '../../styles/Admin/Attendance.css';

const AttendanceForm = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [studentName, setStudentName] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('Present');
  const [editingIndex, setEditingIndex] = useState(null); // For edit

  const addOrUpdateAttendance = () => {
    if (studentName && date) {
      const newEntry = { student: studentName, date, status };

      if (editingIndex !== null) {
        // Update existing
        const updatedData = [...attendanceData];
        updatedData[editingIndex] = newEntry;
        setAttendanceData(updatedData);
        setEditingIndex(null);
      } else {
        // Add new
        setAttendanceData([...attendanceData, newEntry]);
      }

      // Reset form
      setStudentName('');
      setDate('');
      setStatus('Present');
    }
  };

  const handleEdit = (index) => {
    const entry = attendanceData[index];
    setStudentName(entry.student);
    setDate(entry.date);
    setStatus(entry.status);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updated = attendanceData.filter((_, i) => i !== index);
    setAttendanceData(updated);
    if (editingIndex === index) {
      // Reset edit mode if the deleted row was being edited
      setEditingIndex(null);
      setStudentName('');
      setDate('');
      setStatus('Present');
    }
  };

  return (
    <div className="form-card">
      <h3>Mark Attendance</h3>
      <input
        type="text"
        placeholder="Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Present">Present</option>
        <option value="Absent">Absent</option>
      </select>
      <button onClick={addOrUpdateAttendance}>
        {editingIndex !== null ? 'Update' : 'Add'}
      </button>

      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((entry, idx) => (
            <tr key={idx}>
              <td>{entry.student}</td>
              <td>{entry.date}</td>
              <td>{entry.status}</td>
              <td>
                <button onClick={() => handleEdit(idx)}>Edit</button>
                <button onClick={() => handleDelete(idx)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceForm;
