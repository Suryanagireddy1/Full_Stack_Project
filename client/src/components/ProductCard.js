// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-md shadow-md hover:shadow-lg transition duration-300">
      <img src={product.image} alt={product.name} className="rounded-t-md w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-semibold text-lg">{product.name}</h2>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="font-bold text-xl text-green-600">{product.price}</span>
          <Link to={`/product/${product.id}`} className="text-blue-600 hover:underline">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
