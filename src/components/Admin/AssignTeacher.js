import React, { useState } from 'react';

const AssignTeacher = () => {
  const [teacher, setTeacher] = useState('');
  const [subject, setSubject] = useState('');

  const handleAssign = (e) => {
    e.preventDefault();
    alert(`Assigned ${teacher} to ${subject}`);
    setTeacher('');
    setSubject('');
  };

  return (
    <div className="academic-card">
      <h3>Assign Subject to Teacher</h3>
      <form onSubmit={handleAssign}>
        <input
          type="text"
          placeholder="Teacher Name"
          value={teacher}
          onChange={(e) => setTeacher(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Subject Name"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <button type="submit">Assign</button>
      </form>
    </div>
  );
};

export default AssignTeacher;
