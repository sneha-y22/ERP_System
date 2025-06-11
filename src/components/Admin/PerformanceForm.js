import React, { useState } from 'react';
import '../../styles/Admin/Performance.css';

const PerformanceForm = () => {
  const [performanceData, setPerformanceData] = useState([]);
  const [studentName, setStudentName] = useState('');
  const [subject, setSubject] = useState('');
  const [marks, setMarks] = useState('');

  const addPerformance = () => {
    if (studentName && subject && marks) {
      setPerformanceData([
        ...performanceData,
        { student: studentName, subject, marks }
      ]);
      setStudentName('');
      setSubject('');
      setMarks('');
    }
  };

  return (
    <div className="form-card">
      <h3>Record Performance</h3>
      <input type="text" placeholder="Student Name" value={studentName} onChange={(e) => setStudentName(e.target.value)} />
      <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
      <input type="number" placeholder="Marks" value={marks} onChange={(e) => setMarks(e.target.value)} />
      <button onClick={addPerformance}>Add</button>

      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Subject</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {performanceData.map((entry, idx) => (
            <tr key={idx}>
              <td>{entry.student}</td>
              <td>{entry.subject}</td>
              <td>{entry.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PerformanceForm;
