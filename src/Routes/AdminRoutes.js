import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

// Lazy-loaded admin components
const AdminDashboard = lazy(() => import("../pages/AdminPages/AdminDashboard"));
const UserManagement = lazy(() => import("../pages/AdminPages/UserManagement"));
const AcademicManagement = lazy(() => import("../pages/AdminPages/AcademicManagement"));
const AttendancePage = lazy(() => import("../pages/AdminPages/AttendancePage"));
const PerformancePage = lazy(() => import("../pages/AdminPages/PerformancePage"));

const AdminRoutes = () => (
  <Routes>
    <Route path="dashboard" element={<AdminDashboard />} />
    <Route path="user-management" element={<UserManagement />} />
    <Route path="academic-management" element={<AcademicManagement />} />
    <Route path="attendance" element={<AttendancePage />} />
    <Route path="performance" element={<PerformancePage />} />
  </Routes>
);

export default AdminRoutes;
