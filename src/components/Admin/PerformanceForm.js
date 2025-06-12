import React, { useState } from 'react';
import '../../styles/Admin/Performance.css';

const PerformanceForm = () => {
  const [performanceData, setPerformanceData] = useState([]);
  const [studentName, setStudentName] = useState('');
  const [subject, setSubject] = useState('');
  const [marks, setMarks] = useState('');
  const [editIndex, setEditIndex] = useState(null); // Tracks which row is being edited

  const handleSubmit = () => {
    if (studentName && subject && marks) {
      if (editIndex !== null) {
        // Update existing
        const updatedData = [...performanceData];
        updatedData[editIndex] = { student: studentName, subject, marks };
        setPerformanceData(updatedData);
        setEditIndex(null);
      } else {
        // Add new
        setPerformanceData([...performanceData, { student: studentName, subject, marks }]);
      }

      setStudentName('');
      setSubject('');
      setMarks('');
    }
  };

  const handleEdit = (index) => {
    const entry = performanceData[index];
    setStudentName(entry.student);
    setSubject(entry.subject);
    setMarks(entry.marks);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedData = performanceData.filter((_, i) => i !== index);
    setPerformanceData(updatedData);
    setEditIndex(null);
  };

  return (
    <div className="form-card">
      <h3>{editIndex !== null ? 'Edit Performance' : 'Record Performance'}</h3>

      <input
        type="text"
        placeholder="Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <input
        type="number"
        placeholder="Marks"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
      />
      <button onClick={handleSubmit}>{editIndex !== null ? 'Update' : 'Add'}</button>

      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Subject</th>
            <th>Marks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {performanceData.map((entry, idx) => (
            <tr key={idx}>
              <td>{entry.student}</td>
              <td>{entry.subject}</td>
              <td>{entry.marks}</td>
              <td>
                <button onClick={() => handleEdit(idx)}>Edit</button>
                <button onClick={() => handleDelete(idx)} style={{ marginLeft: '6px' }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PerformanceForm;
