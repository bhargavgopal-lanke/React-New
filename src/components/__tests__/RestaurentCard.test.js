import { render, screen } from "@testing-library/react";
import RestaurentCard from "../RestaurentCard";
import MOCK_DATA from "../mocks/RestoCardMock.json";

describe("Resctaurent card component", () => {
  it("should check restuarent card component", () => {
    render(<RestaurentCard resData={MOCK_DATA} />);
    const cardText = screen.getByText("Rayalaseema Spice");
    expect(cardText).toBeInTheDocument();
  });
});
