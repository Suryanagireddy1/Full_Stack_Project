import React from 'react';
import { useParams } from 'react-router-dom';

const productData = [
  {
    id: 1,
    name: "Indian Spices",
    description: "High-quality spices sourced from across India.",
    price: "₹299",
    image: `${process.env.PUBLIC_URL}/images/spices.jpg`,
  },
  {
    id: 2,
    name: "Handcrafted Pottery",
    description: "Beautiful hand-painted pottery from Rajasthan.",
    price: "₹899",
    image: `${process.env.PUBLIC_URL}/images/pottery.jpg`,
  },
  {
    id: 3,
    name: "Traditional Saree",
    description: "Elegant handwoven sarees with rich designs.",
    price: "₹1,499",
    image: `${process.env.PUBLIC_URL}/images/saree.jpg`,
  },
  {
    id: 4,
    name: "Wooden Furniture",
    description: "Handcrafted wooden furniture for your home.",
    price: "₹7,999",
    image: `${process.env.PUBLIC_URL}/images/furniture.jpg`,
  },
  {
    id: 5,
    name: "Laptop",
    description: "Powerful and lightweight laptop for work and play.",
    price: "₹59,999",
    image: `${process.env.PUBLIC_URL}/images/laptop.jpg`,
  },
];

function ProductPage() {
  const { id } = useParams();
  const product = productData.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold text-red-600">Product not found</h2>
        <p className="text-gray-600 mt-2">Sorry, we couldn't find the product you were looking for.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={product.image} alt={product.name} className="rounded-md shadow-lg w-full" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl text-gray-600 mt-2">{product.description}</p>
          <div className="flex items-center mt-4">
            <span className="text-xl font-bold text-green-600">{product.price}</span>
            <span className="ml-4 text-sm text-gray-500">{product.reviews} / 5 ⭐</span>
          </div>
          <div className="mt-4">
            <p><strong>Material:</strong> {product.material}</p>
            <p><strong>Dimensions:</strong> {product.dimensions}</p>
            <p><strong>Stock:</strong> {product.stock} available</p>
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
