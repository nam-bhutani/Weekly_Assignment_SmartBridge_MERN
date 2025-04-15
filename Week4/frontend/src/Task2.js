/*Task 2: Create a product details page that displays more
information when a product or button is clicked.*/

import React, { useState } from "react";

const products = [
  { id: 1, name: "Product 1", price: "$20", image: "https://via.placeholder.com/150", description: "This is a great product." },
  { id: 2, name: "Product 2", price: "$30", image: "https://via.placeholder.com/150", description: "This product is amazing." },
  { id: 3, name: "Product 3", price: "$40", image: "https://via.placeholder.com/150", description: "You will love this product." },
];

const ProductDetails = ({ product, onClose }) => (
  <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover my-2" />
      <p className="text-lg text-gray-700">{product.price}</p>
      <p className="mt-2">{product.description}</p>
      <button onClick={onClose} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Close</button>
    </div>
  </div>
);

const Task2 = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 shadow rounded-lg text-center">
          <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-lg text-gray-700">{product.price}</p>
          <button onClick={() => setSelectedProduct(product)} className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">View Details</button>
        </div>
      ))}
      {selectedProduct && <ProductDetails product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  );
};

export default Task2;
