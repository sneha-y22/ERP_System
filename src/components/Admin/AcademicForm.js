import React, { useState } from 'react';

const AcademicForm = () => {
  const [subject, setSubject] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subject "${subject}" added successfully!`);
    setSubject('');
  };

  return (
    <div className="academic-card">
      <h3>Add Subject</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Subject Name"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AcademicForm;
