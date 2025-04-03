// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">E-Shop</Link>
        <div className="space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/cart" className="text-white">Cart</Link>
          <Link to="/account" className="text-white">Account</Link>
          <Link to="/login" className="text-white">Login</Link>
          <Link to="/register" className="text-white">Register</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
