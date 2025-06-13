const Admin = require('../models/Admin/Admin.js');
const Student = require('../models/Student/Student.js');
const Teacher = require('../models/Teacher/Teacher.js');

const addUser = async (req, res) => {
  try {
    const { role, data } = req.body;

    if (role === 'student') {
      const student = new Student(data);
      await student.save();
      return res.status(201).json({ message: 'Student created', student });
    } else if (role === 'teacher') {
      const teacher = new Teacher(data);
      await teacher.save();
      return res.status(201).json({ message: 'Teacher created', teacher });
    } else {
      return res.status(400).json({ message: 'Invalid role' });
    }
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const students = await Student.find();
    const teachers = await Teacher.find();
    res.json({ students, teachers });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users' });
  }
};

module.exports = { addUser, getAllUsers };