const todoMode = require("../model/todoModel");

// Get All Todos
const getALLTodos = async (req, res) => {
  try {
    const todo = await todoMode.find();
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create Todo
const createTodo = async (req, res) => {
  const todo = new todoMode({
    title: req.body.title,
    details: req.body.details,
  });

  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update Todo
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedTodo = await todoMode.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Todo
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    await todoMode.findByIdAndDelete(id);

    res.status(200).json({
      message: "Todo deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getALLTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};