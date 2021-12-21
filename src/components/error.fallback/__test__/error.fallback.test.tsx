import { render, screen } from "@testing-library/react";
import ErrorFallBack from "../error.fallback";

const error = {
  error: {
    name: "error name",
    message: "error message",
  },
};

describe("ErrorFallBack", () => {
  it("should render error fall back", () => {
    render(<ErrorFallBack error={error} />);
    const element = screen.getByTestId("fallback-cmp");
    expect(element).toBeInTheDocument();
  });
});
