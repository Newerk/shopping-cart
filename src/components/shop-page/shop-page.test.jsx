import { describe, it, expect, vi } from "vitest";
import { ShopPage } from "./shop-page";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockDataBase } from "../../mock-database";
import { BrowserRouter } from "react-router-dom";

describe("Shop Page Component", () => {
  it("Page shows the 3 filtering options", () => {
    render(<ShopPage database={mockDataBase} setCartSize={vi.fn()} />, {
      wrapper: BrowserRouter,
    });

    expect(screen.getByText(/category/i)).toBeInTheDocument();
    expect(screen.getByText(/price range/i)).toBeInTheDocument();
    expect(screen.getByText(/rating/i)).toBeInTheDocument();
  });

  it("Sort btn opens a dropdown when clicked", async () => {
    const user = userEvent.setup();
    const { getByText } = render(
      <ShopPage database={mockDataBase} setCartSize={vi.fn()} />,
      { wrapper: BrowserRouter }
    );

    await user.click(getByText(/sort [(]featured[)]/i)).then(() => {
      expect(getByText(/high to low/i)).toBeInTheDocument();
      expect(getByText(/low to high/i)).toBeInTheDocument();
    });
  });

  it("View button opens a dropdown to select how many items to show on page", async () => {
    const user = userEvent.setup();
    const { getByText, getByRole } = render(
      <ShopPage database={mockDataBase} setCartSize={vi.fn()} />,
      { wrapper: BrowserRouter }
    );

    await user.click(getByText(/view/i)).then(() => {
      expect(getByRole("button", { name: "50" })).toBeInTheDocument();
      expect(getByRole("button", { name: "100" })).toBeInTheDocument();
    });
  });

  it("Renders products container", () => {
    render(<ShopPage database={mockDataBase} setCartSize={vi.fn()} />, {
      wrapper: BrowserRouter,
    });
    expect(screen.getByText("Products")).toBeInTheDocument(); //value in getByText() subject to change
  });

  it("Products container doesnt show more than 25 items", async () => {
    const { getByTestId } = render(
      <ShopPage database={mockDataBase} setCartSize={vi.fn()} />,
      { wrapper: BrowserRouter }
    );

    expect(getByTestId("items-container").childNodes.length).toBeGreaterThan(0);
    expect(
      getByTestId("items-container").childNodes.length
    ).toBeLessThanOrEqual(25);
  });

  it("Products container doesnt show more than 50 items", async () => {
    const user = userEvent.setup();
    const { getByTestId, getByText, getByRole } = render(
      <ShopPage database={mockDataBase} setCartSize={vi.fn()} />,
      { wrapper: BrowserRouter }
    );

    await user.click(getByText(/view/i));
    await user.click(getByRole("button", { name: "50" })).then(() => {
      expect(getByTestId("items-container").childNodes.length).toBeGreaterThan(
        25
      );

      expect(
        getByTestId("items-container").childNodes.length
      ).toBeLessThanOrEqual(50);
    });
  });

  it("Products container doesnt show more than 100 items", async () => {
    const user = userEvent.setup();
    const { getByTestId, getByText, getByRole } = render(
      <ShopPage database={mockDataBase} setCartSize={vi.fn()} />,
      { wrapper: BrowserRouter }
    );

    await user.click(getByText(/view/i));
    await user.click(getByRole("button", { name: "100" })).then(() => {
      expect(getByTestId("items-container").childNodes.length).toBeGreaterThan(
        50
      );

      expect(
        getByTestId("items-container").childNodes.length
      ).toBeLessThanOrEqual(100);
    });
  });
});
