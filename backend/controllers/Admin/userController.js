// controllers/userController.js
const User = require('../models/Admin/User');

exports.addUser = async (req, res) => {
  try {
    const { role, rollNumber, teacherId } = req.body;

    if (role === 'Student' && rollNumber) {
      const existingStudent = await User.findOne({ rollNumber });
      if (existingStudent) {
        return res.status(400).json({ error: 'Duplicate Roll Number' });
      }
    }

    if (role === 'Teacher' && teacherId) {
      const existingTeacher = await User.findOne({ teacherId });
      if (existingTeacher) {
        return res.status(400).json({ error: 'Duplicate Teacher ID' });
      }
    }

    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: 'User added', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
