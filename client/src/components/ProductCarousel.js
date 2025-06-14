import React from 'react';
import { Link } from 'react-router-dom';

function ProductCarousel() {
  // Category data with name and image paths
  const categories = [
    { id: 1, name: 'Furniture', image: `${process.env.PUBLIC_URL}/images/furniture.jpg` },
    { id: 2, name: 'Laptop', image: `${process.env.PUBLIC_URL}/images/laptop.jpg` },
    { id: 3, name: 'Pottery', image: `${process.env.PUBLIC_URL}/images/pottery.jpg` },
    { id: 4, name: 'Saree', image: `${process.env.PUBLIC_URL}/images/saree.jpg` },
    { id: 5, name: 'Spices', image: `${process.env.PUBLIC_URL}/images/spices.jpg` },
  ];

  return (
    <div className="overflow-x-auto whitespace-nowrap py-4">
      {/* Display categories if there are any */}
      {categories.length > 0 ? (
        <div className="flex space-x-4">
          {categories.map((category) => (
            <div key={category.id} className="inline-block w-60">
              <Link to={`/category/${category.name}`} className="block rounded-lg overflow-hidden">
                {/* Image for the category */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-40 object-cover transition-all duration-300 transform hover:scale-105"
                />
                {/* Category name below image */}
                <div className="mt-2 text-center">
                  <h3 className="text-lg font-semibold">{category.name}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div>No categories available</div>
      )}
    </div>
  );
}

export default ProductCarousel;
