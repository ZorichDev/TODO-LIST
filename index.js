const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const todoRoutes = require("./routes/todoRoutes");

const app = express();

const PORT = 7777;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const Live_url =
  "mongodb://Franzor:Franzor2929@ac-qilthkv-shard-00-00.cgpgoxc.mongodb.net:27017,ac-qilthkv-shard-00-01.cgpgoxc.mongodb.net:27017,ac-qilthkv-shard-00-02.cgpgoxc.mongodb.net:27017/tododb?ssl=true&replicaSet=atlas-svachj-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose
  .connect(Live_url)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(error));

// Routes
app.use("/api/todos", todoRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Todo API");
});

// Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});