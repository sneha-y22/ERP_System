import React from "react";
import TeacherLayout from "../../components/Teacher/TeacherLayout";
import "../../styles/Teacher/ClassSchedule.css";
const ClassSchedule = () => {
  return (
    <TeacherLayout>
      <h1>Class Schedule</h1>
      <p>This section will display your class timetable uploaded by the Admin.</p>

      <div className="timetable-box">
        <p><em>📄 Timetable PDF will appear here once uploaded by admin.</em></p>
        <div className="timetable-placeholder">
          <p>No timetable uploaded yet.</p>
        </div>
      </div>
    </TeacherLayout>
  );
};

export default ClassSchedule;
