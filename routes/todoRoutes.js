const express = require("express");

const router = express.Router();

const {
  getALLTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controller/todoController");

// Routes
router.get("/getalltodos", getALLTodos);

router.post("/createtodos", createTodo);

router.patch("/updatetodos/:id", updateTodo);

router.delete("/deletetodos/:id", deleteTodo);

module.exports = router;