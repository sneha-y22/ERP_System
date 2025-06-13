// models/Fee.js
const mongoose = require('mongoose');

const feeSchema = new mongoose.Schema({
  admissionNumber: {
    type: String,
    required: true,
    ref: 'Student',
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['Paid', 'Unpaid'],
    default: 'Unpaid',
  },
  dueDate: {
    type: Date,
    required: true,
  },
  paidDate: {
    type: Date,
  },
  modeOfPayment: {
    type: String,
    enum: ['Cash', 'Online', 'Cheque'],
  },
  remarks: {
    type: String,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Fee', feeSchema);
