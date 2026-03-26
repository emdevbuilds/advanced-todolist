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

export const deleteTask = async (req, res, next) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Task deleted successfully" });
  } catch (err) {
    next(err);
  }
};

export const markTaskAsDone = async (req, res, next) => {
  try {
    const { completed } = req.body;
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      {
        completed: completed,
      },
      { new: true, runValidators: true },
    );

    if (!task) {
      return res
        .status(404)
        .json({ success: false, message: "Task not found" });
    }

    res.json({ success: true, data: task });
  } catch (err) {
    next(err);
  }
};
