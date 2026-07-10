const mongoose = require("mongoose");

const BudgetSchema = mongoose.Schema({
  now: {
    type: Date,
    default: Date.now(),
  },
  year: {
    type: Number,
    required: true,
  },
  month: {
    type: Number,
    required: true,
  },
  day: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Budget", BudgetSchema);
