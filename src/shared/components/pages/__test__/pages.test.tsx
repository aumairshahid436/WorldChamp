import { render, screen } from "@testing-library/react";
import { store } from "config/store";
import { Provider } from "react-redux";
import { Pages } from "../pages";

const MockPages = () => {
  return (
    <Provider store={store}>
      <Pages />
    </Provider>
  );
};
const setAppReducer = () => {
  store.getState().appReducer.page = 1;
  store.getState().appReducer.totalPages = 100;
};

describe("Pages", () => {
  it("should render pages information", () => {
    setAppReducer();
    render(<MockPages />);
    const element = screen.getByText("Page 1 of 100");
    expect(element).toBeInTheDocument();
  });
});
