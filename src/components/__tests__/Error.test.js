import { render, screen } from "@testing-library/react";
import Error from "../Error";
import "@testing-library/jest-dom";

describe("error page tests", () => {
  it("should render error component", () => {
    render(<Error />);
    const errorText = screen.getByText("Oops!!");
    expect(errorText).toBeInTheDocument();
  });
});
