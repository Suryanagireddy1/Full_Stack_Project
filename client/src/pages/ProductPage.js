import React from 'react';
import { useParams } from 'react-router-dom';

const productData = [
  {
    id: 1,
    name: "Indian Spices",
    description: "High-quality spices sourced from across India.",
    price: 299,
    image: `${process.env.PUBLIC_URL}/images/spices.jpg`,
  },
  {
    id: 2,
    name: "Handcrafted Pottery",
    description: "Beautiful hand-painted pottery from Rajasthan.",
    price: 899,
    image: `${process.env.PUBLIC_URL}/images/pottery.jpg`,
  },
  {
    id: 3,
    name: "Traditional Saree",
    description: "Elegant handwoven sarees with rich designs.",
    price: 1499,
    image: `${process.env.PUBLIC_URL}/images/saree.jpg`,
  },
  {
    id: 4,
    name: "Laptop",
    description: "Powerful and lightweight laptop for work and play.",
    price: 59999,
    image: `${process.env.PUBLIC_URL}/images/laptop.jpg`,
  },
  {
    id: 5,
    name: "Wooden Furniture",
    description: "Handcrafted wooden furniture for your home.",
    price: 7999,
    image: `${process.env.PUBLIC_URL}/images/furniture.jpg`,
  },
];

function ProductPage() {
  const { id } = useParams();
  const product = productData.find((item) => item.id === Number(id));

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product already exists in cart
    const existingItemIndex = existingCart.findIndex((item) => item.id === product.id);

    if (existingItemIndex >= 0) {
      // If already in cart, increase quantity
      existingCart[existingItemIndex].quantity += 1;
    } else {
      // Otherwise, add new item with quantity 1
      existingCart.push({ ...product, quantity: 1 });
    }

    // Save updated cart
    localStorage.setItem('cart', JSON.stringify(existingCart));
    alert(`${product.name} added to cart`);
  };

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
            <span className="text-xl font-bold text-green-600">₹{product.price}</span>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md mt-6 hover:bg-blue-700 transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
