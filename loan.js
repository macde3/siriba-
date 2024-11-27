const mongoose = require('mongoose');

const LoanSchema = new mongoose.Schema({
  memberId: { type: mongoose.Schema.Types.ObjectId, ref: 'Member' },
  amount: { type: Number, required: true },
  status: { type: String, default: 'Pending' }, // Pending, Approved, Rejected
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Loan', LoanSchema);
