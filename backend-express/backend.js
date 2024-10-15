// backend.js

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json()); // Middleware to parse JSON request bodies

// Mock database for storing expenses
let expenses = [{ id: 1, one: 1 }, { id: 3, two: 3 }];
let idCounter = 1;
let message = "You did it you child with undefined gender of a biscuit";

// POST route to add an expense
app.post('/expenses', (req, res) => {
  const expense = req.body;
  expense.id = idCounter;
  idCounter += 1;
  expenses.push(expense);
  res.status(201).json(expense);
});

// GET route to retrieve all expenses
app.get('/expenses', (req, res) => {
  res.status(200).json(expenses);
});

// GET route to retrieve the message
app.get('/message', (req, res) => {
  res.status(200).json({ message });
});

// Start the server on port 8080
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
