import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

const AdminRoutes = lazy(() => import("./Routes/AdminRoutes"));
const StudentRoutes = lazy(() => import("./Routes/StudentRoutes"));
const TeacherRoutes = lazy(()=> import("./Routes/TeacherRoutes"));
function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="/student/*" element={<StudentRoutes />} />
          <Route path="/teacher/*" element={<TeacherRoutes />} />
          <Route path="*" element={<div style={{ textAlign: "center", padding: "2rem" }}>404 – Page Not Found</div>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;



