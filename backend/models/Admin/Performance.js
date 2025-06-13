// models/Performance.js
const mongoose = require('mongoose');

const performanceSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  marksObtained: {
    type: Number,
    required: true,
    min: 0,
    max: 100, // or adjust based on your grading system
  },
  examType: {
    type: String,
    enum: ['Unit Test', 'Mid Term', 'Final', 'Other'],
    default: 'Other',
  },
  dateRecorded: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Performance', performanceSchema);
