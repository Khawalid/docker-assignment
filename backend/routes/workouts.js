const express = require("express");
const router = express.Router();
const Workout = require("../models/Workout");

// POST workout
router.post("/", async (req, res) => {
  const { split, content } = req.body;
  try {
    const workout = new Workout({ split, content });
    await workout.save();
    res.status(201).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET workouts
router.get("/", async (req, res) => {
  const { split } = req.query;
  try {
    const workouts = await Workout.find({ split }).sort({ date: -1 });
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
