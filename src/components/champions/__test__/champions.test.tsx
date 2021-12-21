import { render, screen } from "@testing-library/react";
import { store } from "config/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Champions from "../champions";

const MockChampions = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Champions />
      </BrowserRouter>
    </Provider>
  );
};

describe("Champions", () => {
  it("should be render champions", () => {
    render(<MockChampions />);
    const element = screen.getByText(/F1 World Champions/i);
    expect(element).toBeInTheDocument();
  });
});
