import React from 'react';


const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Welcome to Our Mock Shopping Store!</h1>
      <p className="mt-4">
        Browse our shop to find the best deals on a variety of products.
      </p>
      <img
        src="/assets/images/shopping.jpg"
 // Shopping-related image
        alt="Shopping"
        className="mt-4 w-full h-auto"
      />
    </div>
  );
};

export default Home;
