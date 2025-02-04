import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Label from "./label";

describe("Label Component", () => {
  it("should render the label text correctly", () => {
    render(<Label>Test Label</Label>);
    const labelElement = screen.getByText("Test Label");
    expect(labelElement).toBeInTheDocument();
  });

  it("should apply default styles", () => {
    render(<Label>Test Label</Label>);
    const labelElement = screen.getByText("Test Label");
    expect(labelElement).toHaveClass("mb-2");
    expect(labelElement).toHaveClass("text-sm");
    expect(labelElement).toHaveClass("font-medium");
    expect(labelElement).toHaveClass("text-gray-900");
  });

  it("should apply additional className", () => {
    render(<Label className="text-red-500">Test Label</Label>);
    const labelElement = screen.getByText("Test Label");
    expect(labelElement).toHaveClass("text-red-500");
    expect(labelElement).toHaveClass("mb-2");
  });
});
