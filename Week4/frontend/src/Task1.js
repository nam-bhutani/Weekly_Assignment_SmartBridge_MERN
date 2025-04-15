/*Task 1: Build a landing page with a product display using
React.js and Tailwind CSS, including:
• Hero section with a title and description.
• Product section displaying multiple products
with images, names, and prices.
• Responsive navbar.
• Footer with social media links.*/

import React from "react";

const products = [
  { id: 1, name: "Product 1", price: "$20", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Product 2", price: "$30", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Product 3", price: "$40", image: "https://via.placeholder.com/150" },
];

const Task1 = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 p-4 text-white text-center text-xl font-bold">My Store</nav>
      
      {/* Hero Section */}
      <header className="text-center py-10 bg-blue-500 text-white">
        <h1 className="text-4xl font-bold">Welcome to My Store</h1>
        <p className="text-lg mt-2">Find the best products at the best prices</p>
      </header>
      
      {/* Product Section */}
      <section className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow rounded-lg text-center">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-lg text-gray-700">{product.price}</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">View Details</button>
          </div>
        ))}
      </section>
      
      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center p-4 mt-6">
        <p>Follow us on social media</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default Task1;
