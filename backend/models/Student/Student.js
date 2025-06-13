// models/Student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  admissionNumber: {
    type: String,
    required: true,
    unique: true
  },
  fullName: String,
  email: {
    type: String,
    unique: true
  },
  dateOfBirth: Date,
  gender: String,
  fathersName: String,
  spouseName: {
    type: String,
    default: null
  },
  isMarried: {
    type: Boolean,
    default: false
  },
  grade: String,
  section: String,
  phone: String,
  address: String,
  rollNumber: {
    type: String,
    required: true,
    unique: true
  },
  guardianName: String, // dynamic use-case if not father/spouse
  createdAt: {
    type: Date,
    default: Date.now
  }
});

studentSchema.pre('save', function (next) {
  this.guardianName = this.isMarried ? this.spouseName : this.fathersName;
  next();
});

module.exports = mongoose.model('Student', studentSchema);
