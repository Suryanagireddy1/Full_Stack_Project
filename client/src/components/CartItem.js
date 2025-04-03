// src/components/CartItem.js
import React from 'react';

const CartItem = ({ item, removeItem }) => {
  return (
    <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-md mb-4">
      <div className="flex items-center space-x-4">
        <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
        <div>
          <h3 className="font-semibold text-xl">{item.name}</h3>
          <p className="text-gray-600">{item.description}</p>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <span className="font-bold text-lg text-green-600">₹{item.price}</span>
        <div className="flex items-center space-x-2 mt-2">
          <span className="font-semibold">Qty:</span>
          <span className="text-lg">{item.quantity}</span>
        </div>
        <button
          onClick={removeItem}
          className="text-red-600 hover:text-red-800 font-semibold mt-4"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
