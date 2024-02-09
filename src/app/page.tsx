'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user, password }),
    });

    if (response.ok) {
      const data = await response.json();
    } else {
      console.error('Login failed');
    }
  }

  async function checkFlag(event: React.FormEvent) {
    event.preventDefault();

    const response = await fetch('/api/check-flag', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.error('Flag not found');
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="w-full">
          <h1 className="text-4xl font-bold mb-8">
            Welcome to the CODE founder platform
          </h1>
          <p className="mb-8">
            Try finding the flag! Maybe these credentials will help you:
            <br />
            <br />
            <strong>Username:</strong> code_manuel
            <br />
            <strong>Password:</strong> sts_is_awesome
            <br />
            <br />
            <strong>Username:</strong> code_jonathan
            <br />
            <strong>Password:</strong> party_animal
            <br />
            <br />
            <strong>Username:</strong> code_tom
            <br />
            <strong>Password:</strong> new_campus
            <br />
            <br />
          </p>
          <div className="flex space-x-4">
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              placeholder="Username"
              className="border border-gray-300 rounded px-4 py-2 text-black placeholder-black"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="border border-gray-300 rounded px-4 py-2 text-black placeholder-black"
            />
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
            <div className="flex space-x-4">
              <button
                onClick={checkFlag}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Get Flag
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
