import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy-loaded pages
const TeacherDashboard = lazy(() => import("../pages/TeacherPages/TeacherDashboard"));
const ClassSchedule = lazy(() => import("../pages/TeacherPages/ClassSchedule"));
const StudentProfiles = lazy(() => import("../pages/TeacherPages/StudentProfiles"));
const AssignmentManager = lazy(() => import("../pages/TeacherPages/AssignmentManager"));
const AttendanceRegister = lazy(() => import("../pages/TeacherPages/AttendanceRegister"));
const Gradebook = lazy(() => import("../pages/TeacherPages/Gradebook"));
const ResourceLibrary = lazy(() => import("../pages/TeacherPages/ResourceLibrary"));
const DiscussionBoard = lazy(() => import("../pages/TeacherPages/DiscussionBoard"));
const ExamSchedule = lazy(() => import("../pages/TeacherPages/ExamSchedule"));
const ParentCommunication = lazy(() => import("../pages/TeacherPages/ParentCommunication"));

const TeacherRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="class-schedule" element={<ClassSchedule />} />
        <Route path="student-profiles" element={<StudentProfiles />} />
        <Route path="assignments" element={<AssignmentManager />} />
        <Route path="attendance-tracking" element={<AttendanceRegister />} />
        <Route path="gradebook" element={<Gradebook />} />
        <Route path="resources" element={<ResourceLibrary />} />
        <Route path="discussion-board" element={<DiscussionBoard />} />
        <Route path="exam-schedule" element={<ExamSchedule />} />
        <Route path="parent-communication" element={<ParentCommunication />} />
      </Routes>
    </Suspense>
  );
};

export default TeacherRoutes;
