import "dotenv/config";
import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World! This is home page");
});

app.post("/", (req, res) => {
  res.send("Got a POST request");
});

app.put("/user", (req, res) => {
  res.send("Got a PUT request at /user");
});

app.get("/users/:userId/books/:bookId", (req, res) => {
  res.send(req.params);
});

// app.get("/user", (req, res) => {
//   res.send("Got a GET request at /user");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
