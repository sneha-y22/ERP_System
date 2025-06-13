import React from "react";
import TeacherLayout from "../../components/Teacher/TeacherLayout";
import "../../styles/Student/ExamSchedule.css"
const ExamSchedule = () => {
  return (
    <TeacherLayout>
      <h1>Exam Schedule</h1>
      <p>This section will display the exam timetable uploaded by the admin.</p>

      <div className="exam-schedule-box">
        <p><em>📄 The exam schedule PDF will appear here once uploaded.</em></p>
        <div className="exam-schedule-placeholder">
          <p>No exam timetable uploaded yet.</p>
        </div>
      </div>
    </TeacherLayout>
  );
};

export default ExamSchedule;
