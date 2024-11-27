const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  contributions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Contribution' }],
  loans: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Loan' }]
});

module.exports = mongoose.model('Member', MemberSchema);
