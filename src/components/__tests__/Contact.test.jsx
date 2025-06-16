
import React from 'react'
import { render, screen } from '@testing-library/react';
import Contact from "../HeaderSubRoutes/Contact";
import '@testing-library/jest-dom';

test("check contact page text", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  // Assertion
  expect(heading).toBeInTheDocument();
});
