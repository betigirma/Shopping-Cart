import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

test('renders cart items text', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
  
  const cartItemsElement = screen.getByText(/Cart Items:/i); // Use the exact text you expect
  expect(cartItemsElement).toBeInTheDocument();
});
