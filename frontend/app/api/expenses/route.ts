// app/api/expenses/route.ts

import { NextResponse } from 'next/server';

// Define the Flask backend URL
const BACKEND_URL = "http://backend-service:5000/expenses";

export async function POST(request: Request) {
  const data = await request.json();

  // Forward the data to the Flask backend
  const response = await fetch(BACKEND_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  return NextResponse.json(result);
}

export async function GET() {
  const response = await fetch(BACKEND_URL);
  const expenses = await response.json();
  return NextResponse.json(expenses);
}
