import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import taskRoutes from "./routes/taskRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { auth } from "./lib/auth.js";
import { toNodeHandler } from "better-auth/node";

const app = express();

// MIDDLEWARE
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

// BETTER AUTH ROUTES
app.all("/api/auth/*", toNodeHandler(auth));

app.use(express.json());

app.use("/api/tasks", taskRoutes);
app.use(errorHandler);

const port = process.env.PORT || 3000;
connectDB().then(() => {
  app.listen(port, () => console.log(`Server on port ${port}`));
});
