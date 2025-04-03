// src/pages/Login.js
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logged in with', email, password);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-sm font-semibold">Email</label>
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold">Password</label>
          <input
            type="password"
            className="w-full p-3 border border-gray-300 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="w-full bg-blue-600 text-white py-3 rounded-md mt-6 hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
