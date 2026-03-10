import Task from "../models/Task.js";

export const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json({ success: true, data: tasks });
  } catch (err) {
    next(err);
  }
};

export const createTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    const task = await Task.create({ title, description });
    res.status(201).json({ success: true, data: task });
  } catch (err) {
    next(err);
  }
};
