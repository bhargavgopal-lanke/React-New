import { render, screen } from "@testing-library/react";
import RestaurentCard from "../RestaurentCard";
import MOCK_DATA from "../mocks/RestoCardMock.json";
import PROMOTED_DATA from "../mocks/RestoCardPromoted.json";
import "@testing-library/jest-dom";
import { withPromotedLabel } from "../RestaurentCard";

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
  
  it("should not check promoted text when promote id is false", () => {
    render(<PromotedComponent resData={MOCK_DATA} />);
    const promotedText = screen.getByText("Promoted");
    expect(promotedText).toBeInTheDocument();
  });
});
