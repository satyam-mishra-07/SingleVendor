import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { gsap } from 'gsap';
import { FaShoppingCart, FaTruck, FaUndo, FaShieldAlt } from 'react-icons/fa';

const App = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    // Fetching FakeStore products
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error fetching products", error));

    // GSAP animation for hero section
    gsap.fromTo(".hero-section", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });
  }, []);

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="p-6 bg-white flex justify-between items-center shadow">
        <div className="text-2xl font-bold">Cariana</div>
        <nav>
          <ul className="flex space-x-8 text-lg">
            <li>Home</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="text-xl">
          <FaShoppingCart />
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section bg-gray-50 py-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">The Winter Hotlist</h1>
          <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-700 transition duration-300">View Collection</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div>
          <FaTruck className="text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Free Delivery</h3>
          <p>On orders over $250</p>
        </div>
        <div>
          <FaUndo className="text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Money Back Guaranteed</h3>
          <p>Easy refunds within 30 days</p>
        </div>
        <div>
          <FaShieldAlt className="text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Secure Payment</h3>
          <p>Your data is safe with us</p>
        </div>
      </section>

      {/* Product Section */}
      <section className="product-section py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Shop the Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="product-card border p-4 rounded-lg hover:shadow-lg transition duration-300">
              <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-4" />
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-500">${product.price}</p>
              <button className="bg-black text-white py-2 px-4 mt-4 block w-full text-center rounded-full hover:bg-gray-700 transition duration-300">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>&copy; 2024 Cariana. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
