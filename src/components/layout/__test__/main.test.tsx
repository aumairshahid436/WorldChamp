import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Main } from "../main";

const MockMain = () => {
  return (
    <BrowserRouter>
      <Main>
        <p>Main</p>
      </Main>
    </BrowserRouter>
  );
};
describe("Main", () => {
  it("should render main", () => {
    render(<MockMain />);
    const element = screen.getByTestId("main-cmp");
    expect(element).toBeInTheDocument();
  });
});
