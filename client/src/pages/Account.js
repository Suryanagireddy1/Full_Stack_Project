// src/pages/Account.js
import React from 'react';

const Account = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Your Account</h1>
      <div className="bg-gray-100 p-6 rounded-md">
        <h2 className="text-xl font-semibold">User Info</h2>
        <p>Name: John Doe</p>
        <p>Email: johndoe@example.com</p>
        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md">Edit Profile</button>
      </div>
    </div>
  );
};

export default Account;
