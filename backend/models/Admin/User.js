// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  role: { type: String, enum: ['Student', 'Teacher'], required: true },
  email: { type: String, required: true },
  rollNumber: { type: String, unique: true, sparse: true },   // Only for Students
  teacherId: { type: String, unique: true, sparse: true },     // Only for Teachers
  fatherName: String,
  spouseOrFather: String,
  isMarried: Boolean,
});

module.exports = mongoose.model('User', userSchema);
