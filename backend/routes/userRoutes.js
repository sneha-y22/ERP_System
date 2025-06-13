const express = require('express');
const router = express.Router();
const User = require('../models/User');
const verifyToken = require('../middleware/authMiddleware'); // Middleware to check JWT

// Add User (Only for authenticated admins)
router.post('/add', verifyToken, async (req, res) => {
  try {
    const { role, rollNumber, teacherId } = req.body;

    // Duplicate validation
    if (role === "Student" && rollNumber) {
      const existingStudent = await User.findOne({ rollNumber });
      if (existingStudent) {
        return res.status(400).json({ error: "Roll Number already exists" });
      }
    }

    if (role === "Teacher" && teacherId) {
      const existingTeacher = await User.findOne({ teacherId });
      if (existingTeacher) {
        return res.status(400).json({ error: "Teacher ID already exists" });
      }
    }

    // Add user to DB
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: "User added successfully", user });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
