import React, { useState } from 'react';

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(Math.max(1, quantity - 1));

  return (
    <div className="p-4 border rounded">
      <h3 className="font-bold">{product.title}</h3>
      <p>{product.price} USD</p>
      <div className="flex items-center">
        <button onClick={decrement} className="px-2">-</button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          className="w-12 text-center border"
        />
        <button onClick={increment} className="px-2">+</button>
      </div>
      <button
        onClick={() => addToCart(product, quantity)}
        className="mt-4 p-2 bg-blue-500 text-white"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
