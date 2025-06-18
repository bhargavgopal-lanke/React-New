import "@testing-library/jest-dom";
import RestaurentMenu from "../RestaurentMenu";
import { BrowserRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import MENUDATA from "../mocks/MenuData.json";
import MENUCATEGORIES from "../mocks/MenuCategories.json";

describe("Restaurent Menu test cases", () => {
  it("should render the restaurent menu component", () => {
    render(
      <BrowserRouter>
        <RestaurentMenu
          name={MENUDATA?.name}
          cuisines={MENUDATA?.cuisines}
          categories={MENUCATEGORIES}
        />
      </BrowserRouter>
    );
    const menuComponentId = screen.getByTestId("restuarentMenu-id");
    expect(menuComponentId).toBeInTheDocument();
  });
});
