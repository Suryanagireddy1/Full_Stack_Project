import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    const storedEmail = localStorage.getItem('userEmail');

    if (!storedName || !storedEmail) {
      // No user logged in — redirect to login
      navigate('/login');
      return;
    }

    setName(storedName);
    setEmail(storedEmail);
  }, [navigate]);

  const handleSave = () => {
    if (!name.trim() || !email.trim()) {
      alert('Please fill out both fields.');
      return;
    }

    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    setIsEditing(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('cart');
    navigate('/');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Your Account</h1>

      <div className="bg-gray-100 p-6 rounded-md space-y-4">
        <h2 className="text-xl font-semibold">User Info</h2>

        <div>
          <label className="block font-medium">Name:</label>
          {isEditing ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          ) : (
            <p className="text-gray-700">{name}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Email:</label>
          {isEditing ? (
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          ) : (
            <p className="text-gray-700">{email}</p>
          )}
        </div>

        <div className="flex space-x-4">
          {isEditing ? (
            <button
              onClick={handleSave}
              className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Edit Profile
            </button>
          )}

          <button
            onClick={handleLogout}
            className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
