const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema({
  split: String,
  content: [String],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Workout", WorkoutSchema);
