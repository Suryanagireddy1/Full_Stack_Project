// src/pages/ProductPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const productData = [
  {
    id: 1,
    name: 'Indian Spices',
    description: 'High-quality spices sourced from across India. A perfect blend of flavor and aroma.',
    price: '₹299',
    image: '/assets/images/spices.jpg',
  },
  {
    id: 2,
    name: 'Handcrafted Pottery',
    description: 'Beautiful hand-painted pottery from Rajasthan. Each piece is unique.',
    price: '₹899',
    image: '/assets/images/pottery.jpg',
  },
  // Add more products...
];

function ProductPage() {
  const { id } = useParams();
  const product = productData.find((item) => item.id == id);

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={product.image} alt={product.name} className="rounded-md shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl text-gray-600 mt-2">{product.description}</p>
          <div className="flex items-center mt-4">
            <span className="text-xl font-bold text-green-600">{product.price}</span>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md mt-6 hover:bg-blue-700 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
