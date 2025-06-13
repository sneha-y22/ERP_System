import React, { useState } from "react";
import "../../styles/Admin/UserManagement.css";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    role: "",
    email: "",
    rollNumber: "",
    teacherId: "",
    isMarried: false,
    guardianName: "",
  });
  const [filter, setFilter] = useState("All");
  const [editingUserId, setEditingUserId] = useState(null);

  const handleAddUser = () => {
    const isStudent = newUser.role === "Student";
    const isTeacher = newUser.role === "Teacher";

    if (!newUser.name || !newUser.role || !newUser.email) return;

    const userToAdd = {
      id: editingUserId || users.length + 1,
      name: newUser.name,
      role: newUser.role,
      email: newUser.email,
      ...(isStudent && {
        rollNumber: newUser.rollNumber,
        fatherName: newUser.guardianName,
      }),
      ...(isTeacher && {
        teacherId: newUser.teacherId,
        isMarried: newUser.isMarried,
        spouseOrFather: newUser.guardianName,
      }),
    };

    if (editingUserId !== null) {
      setUsers(users.map((u) => (u.id === editingUserId ? userToAdd : u)));
      setEditingUserId(null);
    } else {
      setUsers([...users, userToAdd]);
    }

    setNewUser({
      name: "",
      role: "",
      email: "",
      rollNumber: "",
      teacherId: "",
      isMarried: false,
      guardianName: "",
    });
  };

  const handleEditUser = (user) => {
    setNewUser({
      name: user.name,
      role: user.role,
      email: user.email,
      rollNumber: user.rollNumber || "",
      teacherId: user.teacherId || "",
      isMarried: user.isMarried || false,
      guardianName: user.fatherName || user.spouseOrFather || "",
    });
    setEditingUserId(user.id);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const filteredUsers = filter === "All" ? users : users.filter((u) => u.role === filter);

  const isStudent = newUser.role === "Student";
  const isTeacher = newUser.role === "Teacher";

  return (
    <div className="user-management-container">
      <h2>User Management</h2>

      <div className="filter-container">
        <label>Filter by Role:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Student">Student</option>
          <option value="Teacher">Teacher</option>
        </select>
      </div>

      <div className="add-user-form">
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <select
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        >
          <option value="">Select Role</option>
          <option value="Student">Student</option>
          <option value="Teacher">Teacher</option>
        </select>

        {isStudent && (
          <>
            <input
              type="text"
              placeholder="Roll Number"
              value={newUser.rollNumber}
              onChange={(e) => setNewUser({ ...newUser, rollNumber: e.target.value })}
            />
            <input
              type="text"
              placeholder="Father's Name"
              value={newUser.guardianName}
              onChange={(e) => setNewUser({ ...newUser, guardianName: e.target.value })}
            />
          </>
        )}

        {isTeacher && (
          <>
            <input
              type="text"
              placeholder="Teacher ID"
              value={newUser.teacherId}
              onChange={(e) => setNewUser({ ...newUser, teacherId: e.target.value })}
            />

            <label>
              <input
                type="checkbox"
                checked={newUser.isMarried}
                onChange={(e) => setNewUser({ ...newUser, isMarried: e.target.checked })}
              />
              Married
            </label>

            <input
              type="text"
              placeholder={newUser.isMarried ? "Spouse Name" : "Father's Name"}
              value={newUser.guardianName}
              onChange={(e) => setNewUser({ ...newUser, guardianName: e.target.value })}
            />
          </>
        )}

        <button onClick={handleAddUser}>
          {editingUserId ? "Update User" : "Add User"}
        </button>
      </div>

      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
            <th>Extra Info</th>
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
                {u.role === "Student" ? (
                  <>
                    Roll: {u.rollNumber}, Father: {u.fatherName}
                  </>
                ) : u.role === "Teacher" ? (
                  <>
                    ID: {u.teacherId}, {u.isMarried ? "Spouse" : "Father"}: {u.spouseOrFather}
                  </>
                ) : null}
              </td>
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
  );
};

export default UserManagement;
