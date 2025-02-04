import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import Input from "./input";

describe("Input Component", () => {
  it("should render the input element", () => {
    render(<Input />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  it("should accept and display user input", () => {
    render(<Input />);
    const inputElement = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "test input" } });
    expect(inputElement.value).toBe("test input");
  });

  it("should apply custom className", () => {
    render(<Input className="custom-class" />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveClass("custom-class");
  });

  it("should handle other HTML attributes", () => {
    render(<Input placeholder="Enter text here" type="email" />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveAttribute("placeholder", "Enter text here");
    expect(inputElement).toHaveAttribute("type", "email");
  });

  it("should handle onchange event and reflect the final value", async () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} />);
    const inputElement = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "John Doe" } });

    expect(inputElement.value).toBe("John Doe");
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
