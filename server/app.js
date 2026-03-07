import "dotenv/config";
import express from "express";
import { connectDB } from "./config/db.js";

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World! This is home page");
});

app.post("/", (req, res) => {
  res.send("Got a POST request");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
