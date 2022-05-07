import React from 'react';
import { render, screen } from '@testing-library/react';
import MyLibraryTitle from '../MyLibraryTitle';
import "@testing-library/jest-dom"

test('renders my library', () => {
  render(<MyLibraryTitle />);
  const titleName = screen.getByText(/My Library/i);
  expect(titleName).toBeInTheDocument();
});




