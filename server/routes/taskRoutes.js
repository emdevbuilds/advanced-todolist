import { Router } from "express";
import { getTasks, createTask } from "../controllers/TaskController.js";

const router = Router();

router.get("/", getTasks);
router.post("/", createTask);

export default router;
