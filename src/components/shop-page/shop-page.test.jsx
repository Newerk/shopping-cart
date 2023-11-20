import { describe, it, expect, vi } from "vitest";
import { ShopPage } from "./shop-page";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Shop Page Component", () => {
  it("Page shows the 3 filtering options", () => {
    render(<ShopPage />);

    expect(screen.getByText(/category/i)).toBeInTheDocument();
    expect(screen.getByText(/price range/i)).toBeInTheDocument();
    expect(screen.getByText(/rating/i)).toBeInTheDocument();
  });

  it("Sort btn opens a dropdown when clicked", async () => {
    const user = userEvent.setup();
    const { getByText } = render(<ShopPage />);

    await user.click(getByText(/sort [(]featured[)]/i)).then(() => {
      expect(getByText(/high to low/i)).toBeInTheDocument();
      expect(getByText(/low to high/i)).toBeInTheDocument();
    });
  });

  it("View button opens a dropdown to select how many items to show on page", async () => {
    const user = userEvent.setup();
    const { getByText } = render(<ShopPage />);

    await user.click(getByText(/sort/i)).then(() => {
      expect(getByText(/25/i)).toBeInTheDocument(); //number subject to change, depends on how many items my store will have
      expect(getByText(/50/i)).toBeInTheDocument(); //number subject to change, depends on how many items my store will have
      expect(getByText(/100/i)).toBeInTheDocument(); //number subject to change, depends on how many items my store will have
    });
  });

  it("Renders products container", () => {
    render(<ShopPage />);
    expect(screen.getByText("Products")).toBeInTheDocument(); //value in getByText() subject to change
  });

  it("Products container doesnt show more than 25 items", async () => {
    const user = userEvent.setup();
    const getByTestId = render(<ShopPage />);

    await user.click(screen.getByText(/^[(]?25[)]?$/)).then(() => {
      expect(getByTestId("items-wrapper").childNodes.length).toBeGreaterThan(0);

      expect(
        getByTestId("items-wrapper").childNodes.length
      ).toBeLessThanOrEqual(25);
    });
  });

  it("Products container doesnt show more than 50 items", async () => {
    const user = userEvent.setup();
    const getByTestId = render(<ShopPage />);

    await user.click(screen.getByText(/^[(]?50[)]?$/)).then(() => {
      expect(getByTestId("items-wrapper").childNodes.length).toBeGreaterThan(
        25
      );

      expect(
        getByTestId("items-wrapper").childNodes.length
      ).toBeLessThanOrEqual(50);
    });
  });

  it("Products container doesnt show more than 100 items", async () => {
    const user = userEvent.setup();
    const getByTestId = render(<ShopPage />);

    await user.click(screen.getByText(/^[(]?100[)]?$/)).then(() => {
      expect(getByTestId("items-wrapper").childNodes.length).toBeGreaterThan(
        50
      );

      expect(
        getByTestId("items-wrapper").childNodes.length
      ).toBeLessThanOrEqual(100);
    });
  });
});
