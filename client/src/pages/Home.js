// src/pages/Home.js
import React from 'react';
import ProductCard from '../components/ProductCard';
import ProductCarousel from '../components/ProductCarousel';

const products = [
  { id: 1, name: 'Indian Spices', description: 'Spices for your kitchen', price: '₹299', image: `${process.env.PUBLIC_URL}/images/spices.jpg` },
  { id: 2, name: 'Handcrafted Pottery', description: 'Handmade pottery from Rajasthan', price: '₹899', image: `${process.env.PUBLIC_URL}/images/pottery.jpg`},
  { id: 3, name: 'Saree Collection', description: 'Beautiful sarees with intricate designs', price: '₹1499', image: `${process.env.PUBLIC_URL}/images/saree.jpg` },
  { id: 4, name: 'Laptop', description: 'High-performance laptop', price: '₹40000', image: `${process.env.PUBLIC_URL}/images/laptop.jpg` },
  { id: 5, name: 'Wooden Furniture', description: 'Handmade wooden furniture from Kerala', price: '₹5000', image: `${process.env.PUBLIC_URL}/images/furniture.jpg`},
];

function Home() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Discover Indian Products</h1>

      <ProductCarousel />
      <h2 className="text-2xl font-semibold mt-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
