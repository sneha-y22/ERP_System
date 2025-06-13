// models/Message.js
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin',
    required: true,
  },
  recipientType: {
    type: String,
    enum: ['Student', 'Teacher', 'All'],
    required: true,
  },
  recipientId: {
    type: String, // admissionNumber for Student or teacherId for Teacher
    required: function () {
      return this.recipientType !== 'All';
    },
  },
  message: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Message', messageSchema);
