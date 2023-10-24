import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HomePage } from "./home-page";

describe("HomePage Component", () => {
  it("renders HomePage", () => {
    render(<HomePage />);
    const component = screen.getByText("HomePage");
    expect(component.textContent).toMatch(/homepage/i);
  });
});
