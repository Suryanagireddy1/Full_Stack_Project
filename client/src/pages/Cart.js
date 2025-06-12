// src/pages/Cart.js
import React, { useState } from 'react';
import CartItem from '../components/CartItem';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Indian Spices', price: 299, quantity: 1, image: `${process.env.PUBLIC_URL}/images/saree.jpg` },
    { id: 2, name: 'Handcrafted Pottery', price: 899, quantity: 2, image: `${process.env.PUBLIC_URL}/images/pottery.jpg` },
  ]);

  const removeItem = (itemIndex) => {
    setCartItems(cartItems.filter((_, index) => index !== itemIndex));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>
      <div className="space-y-4">
        {cartItems.map((item, index) => (
          <CartItem key={index} item={item} removeItem={() => removeItem(index)} />
        ))}
      </div>
      <div className="flex justify-between items-center font-semibold text-xl mt-6">
        <span>Total</span>
        <span>₹{total}</span>
      </div>
      <button className="w-full bg-blue-600 text-white py-3 rounded-md mt-6 hover:bg-blue-700">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
