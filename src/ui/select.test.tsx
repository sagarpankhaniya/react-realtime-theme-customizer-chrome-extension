import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Select from "./select";

describe("Select Component", () => {
  const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
  ];

  it("renders the select with provided options", () => {
    render(<Select options={options} />);
    const selectElement = screen.getByRole("combobox");

    expect(selectElement).toBeInTheDocument();
    options.forEach((option) => {
      expect(
        screen.getByRole("option", { name: option.label })
      ).toBeInTheDocument();
    });
  });

  it("Simulates selection", () => {
    const handleChange = vi.fn();
    const { getByText, getByTestId } = render(
      <Select options={options} onChange={handleChange} />
    );

    userEvent.selectOptions(getByTestId("select"), "banana");
    expect((getByText("Apple") as HTMLOptionElement).selected).toBeTruthy();
    expect((getByText("Orange") as HTMLOptionElement).selected).toBeFalsy();
  });

  it("calls the onChange handler when the selection changes", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Select options={options} onChange={handleChange} />);

    const selectElement = screen.getByRole("combobox");
    await user.selectOptions(selectElement, "apple");

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("applies additional className", () => {
    render(<Select options={options} className="test-class" />);
    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toHaveClass("test-class");
  });

  it("handles no options gracefully", () => {
    render(<Select options={[]} />);
    const selectElement = screen.getByRole("combobox");
    expect(selectElement.children.length).toBe(0);
  });

  it("forwards other props to the select element", () => {
    render(
      <Select options={options} id="my-select" aria-label="fruit-select" />
    );
    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toHaveAttribute("id", "my-select");
    expect(selectElement).toHaveAttribute("aria-label", "fruit-select");
  });
});
