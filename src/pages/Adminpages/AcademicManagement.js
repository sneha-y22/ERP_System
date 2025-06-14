import React, { useState } from 'react';
import '../../styles/Admin/AcademicManagement.css';
import AdminSidebar from '../../components/Admin/AdminSidebar';
import { useNavigate } from 'react-router-dom';

const AcademicManagement = () => {
  const [subjects, setSubjects] = useState([]);
  const [subjectInput, setSubjectInput] = useState('');
  const [teacherInput, setTeacherInput] = useState('');
  const [assignSubjectInput, setAssignSubjectInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editSubjectInput, setEditSubjectInput] = useState('');
  const [editTeacherInput, setEditTeacherInput] = useState('');
  const navigate = useNavigate();

  const addSubject = () => {
    if (subjectInput.trim() && !subjects.some(s => s.subject === subjectInput.trim())) {
      setSubjects([...subjects, { subject: subjectInput.trim(), teacher: '' }]);
      setSubjectInput('');
    }
  };

  const assignTeacher = () => {
    setSubjects(prev =>
      prev.map(item =>
        item.subject === assignSubjectInput.trim()
          ? { ...item, teacher: teacherInput.trim() }
          : item
      )
    );
    setTeacherInput('');
    setAssignSubjectInput('');
  };

  const deleteSubject = (index) => {
    setSubjects(subjects.filter((_, i) => i !== index));
  };

  const startEdit = (index) => {
  setEditIndex(index);
  setEditSubjectInput(subjects[index].subject);
  setEditTeacherInput(subjects[index].teacher);
};

  const saveEdit = (index) => {
  if (editSubjectInput.trim()) {
    const updated = [...subjects];
    updated[index].subject = editSubjectInput.trim();
    updated[index].teacher = editTeacherInput.trim();  // Save teacher too
    setSubjects(updated);
    setEditIndex(null);
    setEditSubjectInput('');
    setEditTeacherInput('');
  }
};

  return (
    <div className="dashboard-container">
      <header className="admin-header">
        <h2>Academic Management</h2>
      </header>
      <button className="logout-btn" onClick={() => navigate("/")}>LOGOUT</button>
      <AdminSidebar />

      <div className="academic-management-content">
        <div className="left-section">
          <div className="form-card left">
            <h3>Add Subject</h3>
            <input
              type="text"
              placeholder="Enter Subject Name"
              value={subjectInput}
              onChange={(e) => setSubjectInput(e.target.value)}
            />
            <button onClick={addSubject}>Add</button>
          </div>

          <div className="form-card left">
  <h3>Assign Subject to Teacher</h3>
  <input
    type="text"
    placeholder="Teacher Name"
    value={teacherInput}
    onChange={(e) => setTeacherInput(e.target.value)}
  />
  <select
    value={assignSubjectInput}
    onChange={(e) => setAssignSubjectInput(e.target.value)}
  >
    <option value="">Select Subject</option>
    {subjects.map((item, index) => (
      <option key={index} value={item.subject}>
        {item.subject}
      </option>
    ))}
  </select>
  <button onClick={assignTeacher} disabled={!teacherInput || !assignSubjectInput}>
    Assign
  </button>
</div>
        </div>

        <div className="right-section">
          <div className="form-card right">
            <h3>Subjects & Assigned Teachers</h3>
            <table>
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Assigned Teacher</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
  {subjects.map((item, index) => (
    <tr key={index}>
      <td>
        {editIndex === index ? (
          <input
            type="text"
            value={editSubjectInput}
            onChange={(e) => setEditSubjectInput(e.target.value)}
            className="edit-input"
          />
        ) : (
          item.subject
        )}
      </td>
      <td>
        {editIndex === index ? (
          <input
            type="text"
            value={editTeacherInput}
            onChange={(e) => setEditTeacherInput(e.target.value)}
            className="edit-input"
          />
        ) : (
          item.teacher || '-'
        )}
      </td>
      <td>
        {editIndex === index ? (
          <>
            <button className="action-btn save" onClick={() => saveEdit(index)}>Save</button>
            <button className="action-btn delete" onClick={() => setEditIndex(null)}>Cancel</button>
          </>
        ) : (
          <>
            <button className="action-btn edit" onClick={() => startEdit(index)}>Edit</button>
            <button className="action-btn delete" onClick={() => deleteSubject(index)}>Delete</button>
          </>
        )}
      </td>
    </tr>
  ))}
</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicManagement;
