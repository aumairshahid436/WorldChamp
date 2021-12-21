import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { BreadCrums } from "../bread.crums";

const MockBreadCrumb = () => {
  return (
    <BrowserRouter>
      <BreadCrums />
    </BrowserRouter>
  );
};
describe("BreadCrums", () => {
  it("should render breadCrums", () => {
    render(<MockBreadCrumb />);
    const element = screen.getByTestId("bread-cumb-cmp");
    expect(element).toBeInTheDocument();
  });
});
