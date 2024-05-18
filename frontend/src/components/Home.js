// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl mb-8">Welcome to User Authentication with CRUD Operations</h1>
      <div className="space-x-4">
        <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
        <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
      </div>
    </div>
  );
}

export default Home;
