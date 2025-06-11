import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminPages/AdminDashboard";
import TeacherDashboard from "./pages/TeacherPages/TeacherDashboard";
import StudentDashboard from "./pages/StudentPages/StudentDashboard";
import UserManagement from "./pages/AdminPages/UserManagement";
import AcademicManagement from "./pages/AdminPages/AcademicManagement";
import AttendancePage from "./pages/AdminPages/AttendancePage";
import PerformancePage from "./pages/AdminPages/PerformancePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/academic-management" element={<AcademicManagement />} />
        <Route path="/admin/attendance" element={<AttendancePage />} />
        <Route path="/admin/performance" element={<PerformancePage />} />
      </Routes>
    </Router>
  );
}

export default App;
