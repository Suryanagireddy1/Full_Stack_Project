import React, { useState, useEffect } from 'react';
import CartItem from '../components/CartItem';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();  // Initialize navigate

  // Load cart items from localStorage on mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const removeItem = (itemIndex) => {
    const updatedCart = cartItems.filter((_, index) => index !== itemIndex);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate('/checkout');  // Navigate to checkout page
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>
      <div className="space-y-4">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <CartItem key={index} item={item} removeItem={() => removeItem(index)} />
          ))
        )}
      </div>
      <div className="flex justify-between items-center font-semibold text-xl mt-6">
        <span>Total</span>
        <span>₹{total}</span>
      </div>
      {cartItems.length > 0 && (
        <button
          onClick={handleCheckout}
          className="w-full bg-blue-600 text-white py-3 rounded-md mt-6 hover:bg-blue-700 transition duration-300"
        >
          Proceed to Checkout
        </button>
      )}
    </div>
  );
};

export default Cart;
