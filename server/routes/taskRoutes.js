import { Router } from "express";
import {
  getTasks,
  createTask,
  deleteTask,
  markTaskAsDone,
} from "../controllers/TaskController.js";

const router = Router();

router.route("/").get(getTasks).post(createTask);
router.route("/:id").delete(deleteTask).patch(markTaskAsDone);

export default router;
