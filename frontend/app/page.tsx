// app/page.tsx

"use client";

import React, { useState, useEffect } from "react";

type Expense = {
  id: number;
  name: string;
  amount: number;
  description: string;
};

export default function Home() {
  const [expense, setExpense] = useState({ name: "", amount: 0, description: "" });
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch expenses when the component mounts
    const fetchExpenses = async () => {
      const response = await fetch("/api/expenses");
      const data = await response.json();
      setExpenses(data);
    };

    fetchExpenses();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.name === "amount" ? +e.target.value : e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/expenses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(expense),
      });

      if (response.ok) {
        setMessage("Expense added successfully!");
        setExpense({ name: "", amount: 0, description: "" });

        // Fetch the updated expenses after submission
        const updatedExpenses = await fetch("/api/expenses");
        const updatedData = await updatedExpenses.json();
        setExpenses(updatedData);
      } else {
        setMessage("Error adding expense.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Error adding expense.");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold">Add Expense</h1>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        {/* Input form */}
        {/* (Same code as above) */}
      </form>

      {message && <p className="mt-4">{message}</p>}

      <h2 className="mt-8 text-xl font-bold">Accumulated Expenses</h2>
      <ul className="mt-4">
        {expenses.map((expense) => (
          <li key={expense.id} className="border-b py-2">
            {expense.name} - ${expense.amount} ({expense.description})
          </li>
        ))}
      </ul>
    </div>
  );
}
