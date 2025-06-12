import React,{lazy} from "react";
import { Route , Routes } from "react-router-dom";
import StudentLayout from "../components/Student/StudentLayout";


const StudentDashboard = lazy(() => import("../pages/StudentPages/StudentDashboard"));
const ClassManagement = lazy(() => import("../pages/StudentPages/ClassManagement"));
const Assignments = lazy(() => import("../pages/StudentPages/Assignments"));
const AttendanceTracking = lazy(() => import("../pages/StudentPages/AttendanceTracking"));
const GradeBook = lazy(() => import("../pages/StudentPages/GradeBook"));
const ExamSchedule = lazy(() => import("../pages/StudentPages/ExamSchedule"));
const Announcements = lazy(() => import("../pages/StudentPages/Announcements"));
const Resources = lazy(() => import("../pages/StudentPages/Resources"));
const DiscussionBoard = lazy(() => import("../pages/StudentPages/DiscussionBoard"));
const FeeTracker = lazy(() => import("../pages/StudentPages/FeeTracker"));
const TeacherCommunication = lazy(() => import("../pages/StudentPages/TeacherCommunication"));
const PerformanceAnalytics = lazy(() => import("../pages/StudentPages/PerformanceAnalytics"));

const StudentRoutes = () => (
  <Routes>
    <Route element = {<StudentLayout />}>
    <Route path="dashboard" element={<StudentDashboard />} />
    <Route path="class-management" element={<ClassManagement />} />
    <Route path="assignments" element={<Assignments />} />
    <Route path="attendance-tracking" element={<AttendanceTracking />} />
    <Route path="gradebook" element={<GradeBook />} />
    <Route path="exam-schedule" element={<ExamSchedule />} />
    <Route path="announcements" element={<Announcements />} />
    <Route path="resources" element={<Resources />} />
    <Route path="discussion-board" element={<DiscussionBoard />} />
    <Route path="fee-planner" element={<FeeTracker />} />
    <Route path="teacher-communication" element={<TeacherCommunication />} />
    <Route path="performance-analytics" element={<PerformanceAnalytics />} />
    </Route>
  </Routes>
);

export default StudentRoutes;