const Habit = require('../models/Habit');

exports.createHabit = async (req, res, next) => {
  const { name, description } = req.body;
  try {
    const habit = new Habit({ name, description, userId: req.user.id });
    await habit.save();
    res.status(201).json(habit);
  } catch (error) {
    next(error);
  }
};

exports.getHabits = async (req, res, next) => {
  try {
    const habits = req.user.role === 'admin'
      ? await Habit.find().populate('userId', 'username')
      : await Habit.find({ userId: req.user.id });
    res.json(habits);
  } catch (error) {
    next(error);
  }
};

exports.getHabitById = async (req, res, next) => {
  try {
    const habit = await Habit.findById(req.params.id);
    if (!habit || (habit.userId.toString() !== req.user.id && req.user.role !== 'admin')) {
      return res.status(403).json({ message: 'Unauthorized' });
    }
    res.json(habit);
  } catch (error) {
    next(error);
  }
};

exports.updateHabit = async (req, res, next) => {
  const { name, description, streak } = req.body;
  try {
    const habit = await Habit.findById(req.params.id);
    if (!habit || (habit.userId.toString() !== req.user.id && req.user.role !== 'admin')) {
      return res.status(403).json({ message: 'Unauthorized' });
    }
    habit.name = name || habit.name;
    habit.description = description || habit.description;
    habit.streak = streak || habit.streak;
    await habit.save();
    res.json(habit);
  } catch (error) {
    next(error);
  }
};

exports.deleteHabit = async (req, res, next) => {
    try {
      const habit = await Habit.findById(req.params.id);
      if (!habit || (habit.userId.toString() !== req.user.id && req.user.role !== 'admin')) {
        return res.status(403).json({ message: 'Unauthorized' });
      }
      await habit.deleteOne(); 
      res.json({ message: 'Habit deleted' });
    } catch (error) {
      next(error);
    }
  };