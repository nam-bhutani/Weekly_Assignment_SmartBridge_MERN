import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Task1 from "./Task1"; // Landing Page
import Task2 from "./Task2"; // Product Details Page

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar with Navigation Links */}
        <nav className="bg-blue-600 p-4 text-white text-center">
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/products">Products</Link>
        </nav>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Task1 />} /> {/* Landing Page */}
          <Route path="/products" element={<Task2 />} /> {/* Product Details Page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;



