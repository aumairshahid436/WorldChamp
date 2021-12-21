import { render, screen } from "@testing-library/react";
import { Title } from "../title";

describe("Title", () => {
  it("should render same text passed into title prop", () => {
    render(<Title title="Tile Prop" />);
    const element = screen.getByText(/Tile Prop/i);
    expect(element).toBeInTheDocument();
  });
});
