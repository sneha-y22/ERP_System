import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "../components/Admin/AdminLayout";

import AdminDashboard from "../pages/AdminPages/AdminDashboard";
import UserManagement from "../pages/AdminPages/UserManagement";
import AcademicManagement from "../pages/AdminPages/AcademicManagement";
import AttendancePage from "../pages/AdminPages/AttendancePage";
import PerformancePage from "../pages/AdminPages/PerformancePage";

// Stub components for routes that don't exist yet
const FeeManagement = () => <div>Fee & Finance - Coming Soon</div>;
const CommunicationCenter = () => <div>Communication Center - Coming Soon</div>;
const SystemSettings = () => <div>System Settings - Coming Soon</div>;

console.log("✅ AdminRoutes rendered");

const AdminRoutes = () => (
  <Routes>
    <Route element={<AdminLayout />}>
      <Route path="admin-dashboard" element={<AdminDashboard />} />
      <Route path="user-management" element={<UserManagement />} />
      <Route path="academic-management" element={<AcademicManagement />} />
      <Route path="attendance-tracking" element={<AttendancePage />} />
      <Route path="performance" element={<PerformancePage />} />
      <Route path="finance-management" element={<FeeManagement />} />
      <Route path="communication-center" element={<CommunicationCenter />} />
      <Route path="system-settings" element={<SystemSettings />} />
    </Route>
  </Routes>
);

export default AdminRoutes;





