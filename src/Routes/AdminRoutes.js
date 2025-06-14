import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "../components/Admin/AdminLayout";

import AdminDashboard from "../pages/AdminPages/AdminDashboard";
import UserManagement from "../pages/AdminPages/UserManagement";
import AcademicManagement from "../pages/AdminPages/AcademicManagement";
import AttendancePage from "../pages/AdminPages/AttendancePage";
import PerformancePage from "../pages/AdminPages/PerformancePage";
import UploadDocumentsPage from "../pages/AdminPages/UploadDocumentsPage";
import FeeFinancePage from '../pages/AdminPages/FeeFinancePage';
import CommunicationPage from "../pages/AdminPages/CommunicationPage";
import SystemSettings from "../pages/AdminPages/SystemSettingsPage";

console.log("✅ AdminRoutes rendered");

const AdminRoutes = () => (
  <Routes>
    <Route element={<AdminLayout />}>
      <Route path="admin-dashboard" element={<AdminDashboard />} />
      <Route path="user-management" element={<UserManagement />} />
      <Route path="academic-management" element={<AcademicManagement />} />
      <Route path="attendance-tracking" element={<AttendancePage />} />
      <Route path="performance" element={<PerformancePage />} />
      <Route path="exam-timetable" element={<UploadDocumentsPage />} />
      <Route path="finance-management" element={<FeeFinancePage />} />
      <Route path="communication-center" element={<CommunicationPage />} />
      <Route path="system-settings" element={<SystemSettings />} />
    </Route>
  </Routes>
);

export default AdminRoutes;





