import "@testing-library/jest-dom";
import "@testing-library/dom";
import { render, screen } from "@testing-library/react";
import Shimmer from "../Shimmer";

it("should render shimmer component", () => {
  render(<Shimmer />);
  const shimmerText = screen.getByTestId("shimmer-page");
  expect(shimmerText).toBeInTheDocument();
});
