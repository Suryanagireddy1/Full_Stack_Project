import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!address.trim()) {
      alert('Please enter your shipping address.');
      return;
    }

    // Simulate payment & order confirmation
    setOrderConfirmed(true);

    // Optionally clear the cart
    localStorage.removeItem('cart');

    // Redirect after 3 seconds
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Checkout</h1>

      {!orderConfirmed ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold">Shipping Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter your address"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Payment Method</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md"
            >
              <option>Credit Card</option>
              <option>Debit Card</option>
              <option>Net Banking</option>
              <option>UPI</option>
              <option>Cash on Delivery</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-md mt-6 hover:bg-green-700 transition duration-300"
          >
            Confirm Order & Pay
          </button>
        </form>
      ) : (
        <div className="text-center mt-8">
          <h2 className="text-2xl font-bold text-green-600 mb-4">🎉 Order Confirmed!</h2>
          <p className="text-gray-700">Your payment via <strong>{paymentMethod}</strong> was successful.</p>
          <p className="text-gray-600 mt-2">Redirecting to homepage...</p>
        </div>
      )}
    </div>
  );
};

export default Checkout;
