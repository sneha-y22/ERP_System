// models/Teacher.js
const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  teacherId: {
    type: String,
    required: true,
    unique: true
  },
  fullName: String,
  email: {
    type: String,
    unique: true
  },
  phone: String,
  subject: String,
  department: String,
  dateOfJoining: Date,
  address: String,
  isMarried: Boolean,
  spouseName: String,
  fathersName: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

teacherSchema.virtual('guardianName').get(function () {
  return this.isMarried ? this.spouseName : this.fathersName;
});

module.exports = mongoose.model('Teacher', teacherSchema);
