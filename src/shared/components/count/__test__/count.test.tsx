import { render, screen } from "@testing-library/react";
import { Count } from "../count";

describe("Count", () => {
  it("should render correct value of count if loading is false", () => {
    render(<Count loading={false} count={10} />);
    const element = screen.getByText(/Total records 10/i);
    expect(element).toBeInTheDocument();
  });

  it("should render loading text if loading is true", () => {
    render(<Count loading={true} count={10} />);
    const element = screen.getByText(/Loading .../i);
    expect(element).toBeInTheDocument();
  });
});
