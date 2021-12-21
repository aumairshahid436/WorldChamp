import { render, screen } from "@testing-library/react";
import { store } from "config/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Winners from "../winners";

const MockWinners = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Winners />
      </BrowserRouter>
    </Provider>
  );
};
const setAppReducer = () => {
  store.getState().appReducer.selectedYear = 2005;
};

describe("Winners", () => {
  it("should be render winners", () => {
    setAppReducer();
    render(<MockWinners />);
    const element = screen.getByText(/Winners of Year 2005/i);
    expect(element).toBeInTheDocument();
  });
});
