import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HomePage } from "./home-page";
import { BrowserRouter } from "react-router-dom";

describe("HomePage Component", () => {
  it("renders HomePage", () => {
    const homepage = render(<HomePage />, { wrapper: BrowserRouter });

    expect(homepage.getByTestId("hp")).toBeInTheDocument();
  });

  it("renders 'Shop Now' Btn", () => {
    render(<HomePage />, { wrapper: BrowserRouter });
    const button = screen.getByText("Shop Now");
    expect(button).toBeDefined();
  });
});
