import Layout from "../Layout";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom"

describe("Layout page test case", () => {
  it("should render layout component", () => {
    const component = render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
    console.log(component);
    const userName = screen.getByText("Bhargav Gopal");
    expect(userName).toBeInTheDocument();
  });
});
