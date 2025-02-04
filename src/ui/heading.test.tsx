import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Heading from "./heading";

describe("Heading Component", () => {
  it("renders the heading with the correct text", () => {
    render(<Heading>Test Heading</Heading>);
    const headingElement = screen.getByRole("heading", {
      name: "Test Heading",
    });

    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent("Test Heading");
    expect(headingElement).toHaveClass("text-2xl");
  });

  it("applies additional className", () => {
    render(<Heading className="text-red-500">Test Heading</Heading>);
    const headingElement = screen.getByRole("heading", {
      name: "Test Heading",
    });
    expect(headingElement).toHaveClass("text-red-500");
  });

  it("renders children correctly even if they are complex elements", () => {
    render(
      <Heading>
        Test <strong>Bold</strong> Heading <em>Italic</em>
      </Heading>
    );
    const headingElement = screen.getByRole("heading", {
      name: /Test Bold Heading Italic/,
    });
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toContainElement(screen.getByText("Bold"));
    expect(headingElement).toContainElement(screen.getByText("Italic"));
  });
});
