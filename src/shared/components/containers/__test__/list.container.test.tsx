import { fireEvent, render, screen } from "@testing-library/react";
import { store } from "config/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {
  MockTableColumns,
  MockTableRowsFive,
  MockTableRowsTen,
} from "__mocks__/data.mock";
import { ListContainer } from "../list.container";

const setAppReducer = () => {
  store.getState().appReducer.page = 1;
  store.getState().appReducer.totalPages = 10;
  store.getState().appReducer.selectedYear = 200;
  store.getState().appReducer.pageSize = 5;
};

const MockListContainer = ({ ...props }) => {
  setAppReducer();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ListContainer
          title={"List container title"}
          loading={props.loading}
          count={props.count}
          columns={MockTableColumns}
          rows={props.rows}
          showBack={props.showBack}
        />
      </BrowserRouter>
    </Provider>
  );
};

describe("ListContainer", () => {
  it("should be render list container", () => {
    render(
      <MockListContainer
        loading={false}
        showBack={false}
        rows={MockTableRowsFive}
      />
    );
    const element = screen.getByText(/List container title/i);
    expect(element).toBeInTheDocument();
  });
});

describe("List Container Integration", () => {
  it("should render loading text if loading", () => {
    render(
      <MockListContainer
        loading={true}
        showBack={false}
        rows={MockTableRowsFive}
      />
    );
    const element = screen.getByText(/Loading .../i);
    expect(element).toBeInTheDocument();
  });

  it("should render correct count if not loading", () => {
    render(
      <MockListContainer
        loading={false}
        showBack={false}
        count={10}
        rows={MockTableRowsFive}
      />
    );
    const element = screen.getByText(/Total records 10/i);
    expect(element).toBeInTheDocument();
  });
  it("should not be render pages in list container if loading", () => {
    render(
      <MockListContainer
        loading={true}
        showBack={false}
        rows={MockTableRowsFive}
      />
    );
    const element = screen.queryByText("Page 1 of 100");
    expect(element).not.toBeInTheDocument();
  });
  it("should not be render go back link", () => {
    render(
      <MockListContainer
        loading={false}
        showBack={false}
        rows={MockTableRowsFive}
      />
    );
    const element = screen.queryByText("Go Back");
    expect(element).not.toBeInTheDocument();
  });

  it("should be render go back link", () => {
    render(
      <MockListContainer
        loading={false}
        showBack={true}
        rows={MockTableRowsFive}
      />
    );
    const element = screen.queryByText("Go Back");
    expect(element).toBeInTheDocument();
  });

  it("should be render year dropdown", () => {
    render(
      <MockListContainer
        loading={false}
        showBack={true}
        rows={MockTableRowsFive}
      />
    );
    expect(
      // tslint:disable-next-line: no-unnecessary-type-assertion
      (screen.getByText("2005") as HTMLOptionElement).selected
    ).toBeTruthy();
  });
  it("should be render page size dropdown", () => {
    render(
      <MockListContainer
        loading={false}
        showBack={true}
        rows={MockTableRowsFive}
        id="page-size"
      />
    );
    expect(
      // tslint:disable-next-line: no-unnecessary-type-assertion
      (screen.getByText("5") as HTMLOptionElement).selected
    ).toBeTruthy();
  });
  it("should work on change page size", () => {
    const { getByTestId, unmount } = render(
      <MockListContainer
        loading={false}
        showBack={true}
        rows={MockTableRowsFive}
      />
    );
    const element = getByTestId("page-size-select");
    fireEvent.change(element, {
      target: { value: 30 },
    });
    unmount();
    render(
      <MockListContainer
        loading={false}
        showBack={true}
        rows={MockTableRowsTen}
      />
    );
    const row = screen.queryAllByRole("row");
    expect(row.length - 1).toBe(10);
  });
});
