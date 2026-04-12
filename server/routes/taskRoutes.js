import { Router } from "express";
import { requireAuth } from "../middleware/requireAuth.js";
import {
  getTasks,
  createTask,
  deleteTask,
  markTaskAsDone,
} from "../controllers/TaskController.js";

const router = Router();

router.use(requireAuth);

router.route("/").get(getTasks).post(createTask);
router.route("/:id").delete(deleteTask).patch(markTaskAsDone);

export default router;
