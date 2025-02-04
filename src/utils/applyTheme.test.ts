import { afterEach, beforeEach, describe, expect, it } from "vitest";
import applyTheme from "./applyTheme";

describe("applyTheme", () => {
  let originalBackgroundColor: string;
  let originalTextColor: string;
  let originalFontFamily: string;

  beforeEach(() => {
    originalBackgroundColor = document.body.style.backgroundColor;
    originalTextColor = document.body.style.color;
    originalFontFamily = document.body.style.fontFamily;

    document.body.style.backgroundColor = "";
    document.body.style.color = "";
    document.body.style.fontFamily = "";

    document.body.innerHTML = `
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <p>Paragraph</p>
      <a>Link</a>
      <span>Span</span>
      <div>Div</div>
      <label>Label</label>
      <input type="text" id="input">
      <button>Button</button>
    `;
  });

  afterEach(() => {
    document.body.style.backgroundColor = originalBackgroundColor;
    document.body.style.color = originalTextColor;
    document.body.style.fontFamily = originalFontFamily;
    document.body.innerHTML = "";
  });

  it("should apply the theme to the body and specified elements", () => {
    const theme = {
      backgroundColor: "lightgray",
      textColor: "darkblue",
      fontFamily: "Arial",
    };

    applyTheme(theme);

    expect(document.body.style.backgroundColor).toBe(theme.backgroundColor);
    expect(document.body.style.color).toBe(theme.textColor);
    expect(document.body.style.fontFamily).toBe(theme.fontFamily);

    const elements = document.querySelectorAll(
      "h1, h2, h3, p, a, span, div, label"
    );
    elements.forEach((element) => {
      expect(element.style.color).toBe(theme.textColor);
    });

    const input = document.getElementById("input");
    const button = document.querySelector("button");
    expect(input?.style.color).toBe("");
    expect(button?.style.color).toBe("");
  });

  it("should handle an empty body", () => {
    document.body.innerHTML = "";

    const theme = {
      backgroundColor: "lightgray",
      textColor: "darkblue",
      fontFamily: "Arial",
    };

    applyTheme(theme);

    expect(document.body.style.backgroundColor).toBe(theme.backgroundColor);
    expect(document.body.style.color).toBe(theme.textColor);
    expect(document.body.style.fontFamily).toBe(theme.fontFamily);
  });

  it("should handle no matching elements", () => {
    document.body.innerHTML = "";
    const theme = {
      backgroundColor: "lightgray",
      textColor: "darkblue",
      fontFamily: "Arial",
    };
    applyTheme(theme);
    expect(document.body.style.backgroundColor).toBe(theme.backgroundColor);
    expect(document.body.style.color).toBe(theme.textColor);
    expect(document.body.style.fontFamily).toBe(theme.fontFamily);
  });
});
