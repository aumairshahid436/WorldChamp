import { render, screen } from "@testing-library/react";
import { Footer } from "../footer";

describe("Footer", () => {
  it("should display footer", () => {
    render(<Footer />);
    const fElement = screen.getByTitle("footer");
    expect(fElement).toBeInTheDocument();
  });
});
