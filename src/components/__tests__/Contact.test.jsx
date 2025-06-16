import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "../HeaderSubRoutes/Contact";
import "@testing-library/jest-dom";

describe("Contact component testing", () => {
  beforeEach(() => {
    return render(<Contact />);
  });

  it("Should render contact component", () => {
    const heading = screen.getByRole("heading");
    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside contact component", () => {
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("shoul load two input fields from contact component", () => {
    const input = screen.getAllByRole("textbox");
    expect(input.length).toBe(2);
  });
});
