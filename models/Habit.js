const mongoose = require('mongoose');

const HabitSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    frequency: {
      type: String,
      enum: ['daily', 'weekly'],
      required: true
    },
    priority: {
      type: Number,
      required: true
    },
    completed: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Habit', HabitSchema);
