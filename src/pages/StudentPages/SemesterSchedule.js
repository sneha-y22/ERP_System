import React from "react";
import "../../styles/Student/SemesterSchedule.css";

const SemesterSchedule = () => {
  // Replace this link with the actual uploaded PDF path when ready
  const schedulePDF = "/assets/semester-schedule.pdf";

  return (
    <div className="semester-schedule-container">
      <h2>📅 Semester Schedule</h2>
      <p className="subtext">Keep track of important academic dates and milestones</p>

      <div className="pdf-card">
        <iframe
          src={schedulePDF}
          title="Semester Schedule PDF"
          className="pdf-viewer"
        >
          Your browser does not support PDF viewing.
        </iframe>
      </div>
    </div>
  );
};

export default SemesterSchedule;
