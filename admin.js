const express = require('express');
const router = express.Router();
const Member = require('../models/member');
const Loan = require('../models/loan');
const Contribution = require('../models/contribution');

// Add a Member
router.post('/members', async (req, res) => {
  try {
    const member = new Member(req.body);
    await member.save();
    res.status(201).json(member);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Approve/Reject Loan
router.put('/loans/:id', async (req, res) => {
  try {
    const loan = await Loan.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    res.json(loan);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
