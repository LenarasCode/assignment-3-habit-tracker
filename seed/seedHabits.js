require('dotenv').config();
const mongoose = require('mongoose');
const Habit = require('../models/Habit'); // путь к твоей модели Habit

// Подключение к MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected for seeding'))
  .catch(err => console.error(err));

// Массив из 55 привычек
const habits = [
  { "title": "Drink water", "frequency": "daily", "priority": 2 },
  { "title": "Morning walk", "frequency": "daily", "priority": 1 },
  { "title": "Read a book", "frequency": "weekly", "priority": 3 },
  { "title": "Drink green tea", "frequency": "daily", "priority": 4 },
  { "title": "Cook healthy meal", "frequency": "daily", "priority": 5 },
  { "title": "Morning stretching", "frequency": "weekly", "priority": 6 },
  { "title": "Prepare clothes for tomorrow", "frequency": "daily", "priority": 7 },
  { "title": "Smile consciously", "frequency": "daily", "priority": 8 },
  { "title": "Spend time outdoors", "frequency": "weekly", "priority": 9 },
  { "title": "Read before sleep", "frequency": "daily", "priority": 10 },

  { "title": "Evening reflection", "frequency": "weekly", "priority": 12 },
  { "title": "Do pilates", "frequency": "weekly", "priority": 13 },
  { "title": "Stretch after workout", "frequency": "daily", "priority": 14 },
  { "title": "Go to gym", "frequency": "daily", "priority": 15 },
  { "title": "Write summary of the day", "frequency": "weekly", "priority": 16 },

  { "title": "Learn algorithms", "frequency": "daily", "priority": 17 },
  { "title": "Solve coding problems", "frequency": "daily", "priority": 18 },
  { "title": "Revise lecture notes", "frequency": "daily", "priority": 19 },
  { "title": "Practice speaking English", "frequency": "weekly", "priority": 20 },
  { "title": "Learn new English words", "frequency": "daily", "priority": 21 },

  { "title": "Practice positive affirmations", "frequency": "daily", "priority": 22 },
  { "title": "Digital detox day", "frequency": "weekly", "priority": 23 },
  { "title": "Listen to calm music", "frequency": "daily", "priority": 24 },
  { "title": "Practice mindfulness", "frequency": "weekly", "priority": 25 },
  { "title": "Read motivational quotes", "frequency": "daily", "priority": 26 },

  { "title": "Breathing exercises", "frequency": "daily", "priority": 27 },
  { "title": "Eat vegetables", "frequency": "weekly", "priority": 28 },
  { "title": "Avoid sugar", "frequency": "daily", "priority": 29 },
  { "title": "Sleep before 11 PM", "frequency": "daily", "priority": 30 },
  { "title": "Take vitamins", "frequency": "weekly", "priority": 31 },

  { "title": "Do yoga", "frequency": "daily", "priority": 32 },
  { "title": "Walk 30 minutes", "frequency": "daily", "priority": 33 },
  { "title": "10 minutes meditation", "frequency": "weekly", "priority": 34 },
  { "title": "Avoid social media for 1 hour", "frequency": "daily", "priority": 35 },
  { "title": "Journal thoughts", "frequency": "daily", "priority": 36 },

  { "title": "Write gratitude list", "frequency": "weekly", "priority": 37 },
  { "title": "Watch educational video", "frequency": "daily", "priority": 38 },
  { "title": "Read 20 pages", "frequency": "daily", "priority": 39 },
  { "title": "Study programming", "frequency": "weekly", "priority": 40 },

  { "title": "Morning planning", "frequency": "daily", "priority": 41 },
  { "title": "Weekly review", "frequency": "weekly", "priority": 42 },
  { "title": "Time tracking", "frequency": "daily", "priority": 43 },
  { "title": "Clean workspace", "frequency": "daily", "priority": 44 },
  { "title": "Avoid procrastination", "frequency": "weekly", "priority": 45 },

  { "title": "Complete top 3 tasks", "frequency": "daily", "priority": 46 },
  { "title": "Review goals", "frequency": "daily", "priority": 47 },
  { "title": "Plan daily tasks", "frequency": "weekly", "priority": 48 },
  { "title": "Avoid negative talk", "frequency": "daily", "priority": 49 },
  { "title": "Help someone", "frequency": "daily", "priority": 50 },

  { "title": "Express gratitude to others", "frequency": "weekly", "priority": 51 },
  { "title": "Message a friend", "frequency": "daily", "priority": 52 },
  { "title": "Call family", "frequency": "daily", "priority": 53 },
  { "title": "Maintain posture", "frequency": "weekly", "priority": 54 },
  { "title": "Reduce caffeine", "frequency": "daily", "priority": 55 }
];

// Функция для вставки привычек
const seedDB = async () => {
  try {
    await Habit.deleteMany({}); // удаляем старые привычки
    await Habit.insertMany(habits); // добавляем новые 55 привычек
    console.log('✅ 55 habits inserted successfully!');
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
    mongoose.connection.close();
  }
};

seedDB();
