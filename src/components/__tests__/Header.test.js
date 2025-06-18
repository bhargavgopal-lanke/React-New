import { screen, render, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../store";
import { BrowserRouter } from "react-router";

describe("Header component", () => {
  beforeEach(() => {
    return render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  });
  it("should render the header button component", () => {
    const loginbutton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginbutton);
    const logoutbutton = screen.getByRole("button", { name: "Logout" });
    expect(logoutbutton).toBeInTheDocument();
  });
  it("should render the header youtube image", () => {
    const image = screen.getByRole("presentation");
    expect(image).toBeInTheDocument();
  });
});
