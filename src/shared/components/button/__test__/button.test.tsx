import { fireEvent, render, screen } from "@testing-library/react";
import { ButtonWithIcon } from "../button.icon";

const mockedClickFunction = jest.fn();

describe("ButtonWithIcon", () => {
  it("should render button with icon", () => {
    render(<ButtonWithIcon onClick={mockedClickFunction} name="button" />);
    const element = screen.getByRole("button");
    expect(element).toBeInTheDocument();
  });

  it("should clickable button with icon", () => {
    render(<ButtonWithIcon onClick={mockedClickFunction} name="button" />);
    const element = screen.getByRole("button");
    const res = fireEvent.click(element);
    expect(res).toBe(true);
  });
});
