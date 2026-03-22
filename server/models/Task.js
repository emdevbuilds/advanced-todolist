import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a title for the task"],
      trim: true,
      minLength: [3, "Title must be at least 3 characters."],
      maxLength: [50, "Title must be at most 50 characters."],
    },
    description: {
      type: String,
      maxLength: [200, "Description must be at most 200 characters."],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Task", TaskSchema);
