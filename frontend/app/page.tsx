"use client"; // Ensure this is a client component

import { useEffect, useState } from 'react';
import axios from 'axios';

// Define the type for Expense
type Expense = {
  id: number;
  [key: string]: any; // This allows for dynamic keys like "one" or "two"
};

const Home = () => {
  // Explicitly define the type for the state
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get('http://localhost:8080/expenses'); // Use the correct backend URL
        setExpenses(response.data);
      } catch (error) {
        console.error('Error fetching expenses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Expenses</h1>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>
            {JSON.stringify(expense)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
