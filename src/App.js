import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import TeacherDashboard from "./pages/dashboards/TeacherDashboard";
import StudentDashboard from "./pages/dashboards/StudentDashboard";
import UserManagement from "./pages/Admin/UserManagement";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/user-management" element={<UserManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
