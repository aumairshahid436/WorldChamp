import { fireEvent, render, screen } from "@testing-library/react";
import { Years } from "utils";
import { DropDown } from "../drop.down";

const mockFn = jest.fn();
describe("DropDown", () => {
  it("should render years dropdown", () => {
    render(
      <DropDown
        label="Year"
        options={Years}
        selectedValue={Years[0].value}
        onChange={mockFn}
        id="year"
      />
    );
    const element = screen.getByTestId("year-select");
    expect(element).toBeInTheDocument();
  });

  it("should be selected default value in dropdown", () => {
    const value = Years[0].value;
    render(
      <DropDown
        label="Year"
        options={Years}
        selectedValue={value}
        onChange={mockFn}
        id="year"
      />
    );
    expect(
      // tslint:disable-next-line: no-unnecessary-type-assertion
      (screen.getByText(value) as HTMLOptionElement).selected
    ).toBeTruthy();
  });

  it("should be able to select value in dropdown", () => {
    const value = Years[1].value;
    render(
      <DropDown
        label="Year"
        options={Years}
        selectedValue={"2005"}
        onChange={mockFn}
        id="year"
      />
    );
    fireEvent.change(screen.getByTestId("year-select"), { target: { value } });
    const options = screen.getAllByTestId("year-select-option");
    expect((options[1] as HTMLOptionElement).selected).toBeTruthy();
  });
});
