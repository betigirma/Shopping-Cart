import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="mb-2">
              <span>{item.product.title} - </span>
              <span>{item.quantity} x ${item.product.price}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
