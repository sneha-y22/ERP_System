import React, { useState } from "react";
import "../../styles/Student/TeacherCommunication.css";

const teacherData = [
  {
    name: "Mrs. Sharma",
    subject: "Biology",
    feedback: "Great progress in practical work, keep participating actively.",
    email: "mrs.sharma@school.edu"
  },
  {
    name: "Mr. Mehra",
    subject: "Mathematics",
    feedback: "Consistent with problem-solving, focus more on logical proofs.",
    email: "mr.mehra@school.edu"
  },
  {
    name: "Ms. Rao",
    subject: "Physics",
    feedback: "Excellent participation in discussions, keep asking questions!",
    email: "ms.rao@school.edu"
  }
];

const TeacherCommunication = () => {
  const [visibleEmail, setVisibleEmail] = useState(null);

  const handleEmailReveal = (index) => {
    setVisibleEmail(visibleEmail === index ? null : index);
  };

  return (
    <div className="teacher-comm-container">
      <h2>🧑‍🏫 Teacher Feedback</h2>
      <p className="teacher-comm-subtext">See how your teachers think you're doing and reach out if needed.</p>

      <div className="teacher-card-wrapper">
        {teacherData.map((teacher, index) => (
          <div className="teacher-card" key={index}>
            <h3>{teacher.name} — <span>{teacher.subject}</span></h3>
            <p className="feedback">"{teacher.feedback}"</p>

            <button className="contact-btn" onClick={() => handleEmailReveal(index)}>
              {visibleEmail === index ? "Hide Email" : "Contact Teacher"}
            </button>

            {visibleEmail === index && (
              <p className="email-show">📧 {teacher.email}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherCommunication;
