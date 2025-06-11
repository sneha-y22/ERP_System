import React from 'react';

const dummySubjects = [
  { id: 1, subject: "Mathematics", teacher: "Mr. Sharma" },
  { id: 2, subject: "Science", teacher: "Ms. Gupta" },
];

const SubjectList = () => {
  return (
    <div className="academic-card">
      <h3>Subjects & Assigned Teachers</h3>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Assigned Teacher</th>
          </tr>
        </thead>
        <tbody>
          {dummySubjects.map((item) => (
            <tr key={item.id}>
              <td>{item.subject}</td>
              <td>{item.teacher}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubjectList;