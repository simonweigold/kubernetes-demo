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
  const [error, setError] = useState<string | null>(null); // State to track errors
  const [message, setMessage] = useState<string | null>(null); // State for backend message

  // Fetch expenses
  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/expenses');
        setExpenses(response.data);
      } catch (error) {
        setError('Failed to fetch expenses. Please check your backend connection.');
        console.error('Error fetching expenses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  // Fetch the message from backend
  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get('http://localhost:5000/message');
        setMessage(response.data.message);
      } catch (error) {
        console.error('Error fetching message:', error);
        setMessage('Failed to fetch message.');
      }
    };

    fetchMessage();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
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

      {/* New section to display the message from backend */}
      <div>
        <h2>Message from Backend:</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Home;
