import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin"); // Default role: Admin
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login Attempt:", { email, password, role });

    // Redirect user based on role
    if (role === "admin") {
      navigate("/admin/admin-dashboard");
    } else if (role === "teacher") {
      navigate("/teacher/teacher-dashboard");
    } else if (role === "student") {
      navigate("/student/dashboard");
    }
  };

  return (
    <div className="login-page">
      <header className="header">
        <h1>ERP System</h1>
      </header>
      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
  <div className="input-group">
    
    <select value={role} onChange={(e) => setRole(e.target.value)} required>
      <option value="admin">Admin</option>
      <option value="teacher">Teacher</option>
      <option value="student">Student</option>
    </select>
  </div>
  
  <div className="input-group">
    <label>Email</label>
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
  </div>
  
  <div className="input-group">
    <label>Password</label>
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
  </div>

  <button type="submit" className="login-button">Sign in</button>
</form>

        </div>
      </div>
    </div>
  );
};

export default Login;
