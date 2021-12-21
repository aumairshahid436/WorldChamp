import { fireEvent, render, screen } from "@testing-library/react";
import { Table } from "../table";
import {
  MockTableColumns,
  MockTableRows,
  MockTableRowsWithHighlight,
  MockTableColumnsShowFalse,
} from "../../../../__mocks__/data.mock";

const mockedFunction = jest.fn();

describe("Table", () => {
  it("should be render table", () => {
    render(<Table columns={MockTableColumns} rows={MockTableRows} />);
    const element = screen.getByTestId("table-cmp");
    expect(element).toBeInTheDocument();
  });

  it("should be able to click on row of table", () => {
    render(
      <Table
        columns={MockTableColumns}
        rows={MockTableRows}
        onRowClick={mockedFunction}
      />
    );
    const row = screen.queryAllByRole("row");
    const res = fireEvent.click(row[0]);
    expect(res).toBe(true);
  });

  it("should be single row if loading true table", () => {
    render(
      <Table
        columns={MockTableColumns}
        rows={MockTableRows}
        onRowClick={mockedFunction}
        isLoading
      />
    );
    const row = screen.queryAllByRole("row");
    expect(row.length - 1).toEqual(1);
  });

  it("should be highlight row in table", () => {
    render(
      <Table
        columns={MockTableColumns}
        rows={MockTableRowsWithHighlight}
        onRowClick={mockedFunction}
      />
    );
    const row = screen.queryAllByRole("row");
    expect(row[1]).toHaveClass("cursor highlight-winner");
  });
});
