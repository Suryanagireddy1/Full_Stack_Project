// src/pages/Checkout.js
import React from 'react';

const Checkout = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Checkout</h1>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-semibold">Shipping Address</label>
          <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Enter your address" />
        </div>
        <div>
          <label className="block text-sm font-semibold">Payment Method</label>
          <select className="w-full p-3 border border-gray-300 rounded-md">
            <option>Credit Card</option>
            <option>Debit Card</option>
            <option>Net Banking</option>
          </select>
        </div>
        <button className="w-full bg-green-600 text-white py-3 rounded-md mt-6 hover:bg-green-700">
          Confirm Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
