require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Habit = require('./models/Habit');
const app = express();

app.use(express.json()); // ЧИТАЕТ ДАННЫЕ ИЗ ТЕЛА ЗАПРОСА (JSON)
app.use(express.static('public')); // Если твой index.html лежит в папке public

// ПОДКЛЮЧЕНИЕ К БАЗЕ
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Connection error:', err));

// МАРШРУТ ПОЛУЧЕНИЯ С ФИЛЬТРАМИ И СОРТИРОВКОЙ
app.get('/api/habits', async (req, res) => {
  try {
    const { frequency, sortBy, order, fields } = req.query;
    let query = Habit.find(frequency ? { frequency } : {});

    // Сортировка
    if (sortBy) {
      const sortOrder = order === 'desc' ? -1 : 1;
      query = query.sort({ [sortBy]: sortOrder });
    }

    // Проекция (выбор полей)
    if (fields) {
      const projection = fields.split(',').join(' ');
      query = query.select(projection);
    }

    const habits = await query;
    res.json(habits);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ОСТАЛЬНЫЕ CRUD ОПЕРАЦИИ
app.post('/api/habits', async (req, res) => {
  const habit = new Habit(req.body);
  await habit.save();
  res.status(201).json(habit);
});

app.put('/api/habits/:id', async (req, res) => {
  const updated = await Habit.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

app.delete('/api/habits/:id', async (req, res) => {
  await Habit.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));