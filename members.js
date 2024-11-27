const express = require('express');
const router = express.Router();
const Loan = require('../models/loan');

// Apply for a Loan
router.post('/loans', async (req, res) => {
  try {
    const loan = new Loan(req.body);
    await loan.save();
    res.status(201).json(loan);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
