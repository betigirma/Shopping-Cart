import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white">
      <div>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/shop" className="mr-4">Shop</Link>
      </div>
      <div>
        <span>Cart Items: {cartCount}</span>
        <button className="ml-4 p-2 bg-blue-500">Go to Cart</button>
      </div>
    </nav>
  );
}

export default Navbar;
