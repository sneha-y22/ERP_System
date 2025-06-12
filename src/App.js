import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

// Lazy-load your route components
const AdminRoutes = lazy(() => import("./Routes/AdminRoutes"));
const StudentRoutes = lazy(() => import("./Routes/StudentRoutes"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
         
          <Route path="/" element={<Login />} />
          {/* Nest admin and student route trees */}
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="/student/*" element={<StudentRoutes />} />
           <Route path="*" element={<div>404 – Page Not Found</div>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
