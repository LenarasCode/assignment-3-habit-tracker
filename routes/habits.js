const express = require('express');
const router = express.Router();
const Habit = require('../models/Habit');

// READ
router.get('/', async (req, res) => {
    const habits = await Habit.find();
    res.json(habits);
});

// CREATE
router.post('/', async (req, res) => {
    const habit = new Habit(req.body);
    await habit.save();
    res.status(201).json(habit);
});

// UPDATE
router.put('/:id', async (req, res) => {
    const updated = await Habit.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(updated);
});

// DELETE
router.delete('/:id', async (req, res) => {
    await Habit.findByIdAndDelete(req.params.id);
    res.json({ message: 'Habit deleted' });
});

module.exports = router;
