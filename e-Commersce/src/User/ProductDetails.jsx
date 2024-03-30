import React from 'react';

const ProductDetails = ({ product }) => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img className="w-full h-auto" src={product.image} alt={product.title} />
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Price: ${product.price}</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
