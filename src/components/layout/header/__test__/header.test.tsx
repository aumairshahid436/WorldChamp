import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../header";
import { HeaderMenu } from "../header.menu";

const MockHeader = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};
const MockHeaderMenu = () => {
  return (
    <BrowserRouter>
      <HeaderMenu items={[{ title: "title", path: "path" }]} />
    </BrowserRouter>
  );
};

describe("Header", () => {
  it("should display header", () => {
    render(<MockHeader />);
    const hElement = screen.getByTitle("header");
    expect(hElement).toBeInTheDocument();
  });

  it("should display header menu", () => {
    render(<MockHeaderMenu />);
    const hElement = screen.getByTitle("header-menu");
    expect(hElement).toBeInTheDocument();
  });
});
