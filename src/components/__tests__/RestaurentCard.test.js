import { render, screen } from "@testing-library/react";
import RestaurentCard from "../RestaurentCard";
import MOCK_DATA from "../mocks/RestoCardMock.json";
import PROMOTED_DATA from "../mocks/RestoCardPromoted.json";
import { withPromotedLabel } from "../RestaurentCard";
import "@testing-library/jest-dom";

const mockComponent = () => <div>Mock Component</div>;
const PromotedComponent = withPromotedLabel(mockComponent);

describe("Resctaurent card component", () => {
  it("should check restuarent card component with props data", () => {
    render(<RestaurentCard resData={MOCK_DATA} />);
    const cardText = screen.getByText("Rayalaseema Spice");
    expect(cardText).toBeInTheDocument();
  });

  it("should check check promoted text when promote id is true", () => {
    render(<PromotedComponent resData={PROMOTED_DATA} />);
    const promotedText = screen.getByText("Promoted");
    expect(promotedText).toBeInTheDocument();
  });
});
