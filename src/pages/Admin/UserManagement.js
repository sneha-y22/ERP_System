// src/pages/Admin/UserManagement.js
import React, { useState } from "react";
import AdminLayout from "../../components/Admin/AdminLayout";
import "../../styles/UserManagement.css";

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Amit Sharma", role: "Student", email: "amit@student.com" },
    { id: 2, name: "Priya Verma", role: "Teacher", email: "priya@school.com" },
  ]);

  const [newUser, setNewUser] = useState({ name: "", role: "", email: "" });
  const [filter, setFilter] = useState("All");
  const [editingUserId, setEditingUserId] = useState(null);

  const handleAddUser = () => {
    if (!newUser.name || !newUser.role || !newUser.email) return;
    if (editingUserId !== null) {
      // Edit user
      const updatedUsers = users.map((u) =>
        u.id === editingUserId ? { ...newUser, id: editingUserId } : u
      );
      setUsers(updatedUsers);
      setEditingUserId(null);
    } else {
      // Add user
      const id = users.length + 1;
      setUsers([...users, { ...newUser, id }]);
    }
    setNewUser({ name: "", role: "", email: "" });
  };

  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const handleEditUser = (user) => {
    setNewUser({ name: user.name, role: user.role, email: user.email });
    setEditingUserId(user.id);
  };

  const filteredUsers =
    filter === "All" ? users : users.filter((u) => u.role === filter);

  return (
    <AdminLayout>
      <div className="user-management-container">
        <h2>User Management</h2>

        {/* Role Filter */}
        <div className="filter-container">
          <label>Filter by Role:</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
          </select>
        </div>

        {/* Add / Edit Form */}
        <div className="add-user-form">
          <input
            type="text"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Role"
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <button onClick={handleAddUser}>
            {editingUserId ? "Update User" : "Add User"}
          </button>
        </div>

        {/* User Table */}
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.role}</td>
                <td>{u.email}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEditUser(u)}>
                    Edit
                  </button>
                  <button className="delete-btn" onClick={() => handleDeleteUser(u.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default UserManagement;
