import "@testing-library/jest-dom";
import "@testing-library/dom";
import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantCategory from "../RestaurantCategory";
import CATEGORY_LIST_ITEMS from "../mocks/RestoCard.json";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import store from "../../store";

const mockSetShowIndex = jest.fn();

describe("Restaurent category test cases", () => {
  it("should render restaurent category component", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <RestaurantCategory
            categoryList={CATEGORY_LIST_ITEMS}
            showItems={""}
            setShowIndex=""
          />
        </Provider>
      </BrowserRouter>
    );
    const resText = screen.getByTestId("restaurent-category");
    expect(resText).toBeInTheDocument();
  });

  it("should check the accordain closing scenario when clicked on it", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <RestaurantCategory
            categoryList={CATEGORY_LIST_ITEMS}
            showItems={"false"}
            setShowIndex={mockSetShowIndex}
          />
        </Provider>
      </BrowserRouter>
    );
    const downArrowIcon = screen.getByText("⬆️");
    expect(downArrowIcon).toBeInTheDocument();
  });

  it("should check the accordain closing scenario when clicked on it", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <RestaurantCategory
            categoryList={CATEGORY_LIST_ITEMS}
            showItems={"false"}
            setShowIndex={mockSetShowIndex}
          />
        </Provider>
      </BrowserRouter>
    );
    const clickedItem = screen.getByText(/Rice Noodles/i);
    fireEvent.click(clickedItem);
    expect(mockSetShowIndex).toHaveBeenCalled();
  });

  it("renders CategoryListItems when items are visible", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <RestaurantCategory
            categoryList={CATEGORY_LIST_ITEMS}
            showItems={true}
            setShowIndex={mockSetShowIndex}
          />
        </Provider>
      </BrowserRouter>
    );
    const categoryListItems = screen.getByText(/Veg Fried Rice/i);
    expect(categoryListItems).toBeInTheDocument();
  });
});
