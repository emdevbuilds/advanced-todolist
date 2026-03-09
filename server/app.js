import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import taskRoutes from "./routes/taskRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

// MIDDLEWARE
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());

// ROUTES
app.use("/api/tasks", taskRoutes);

// ERROR HANDLER
app.use(errorHandler);

const port = process.env.PORT || 3000;
connectDB().then(() => {
  app.listen(port, () => console.log(`Server on port ${port}`));
});
