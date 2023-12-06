import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ShopPage } from "../shop-page/shop-page";
import { mockDataBase } from "../../mock-database";
import { BrowserRouter } from "react-router-dom";

describe("Card Component", () => {
  it("render card", () => {
    const component = render(
      <ShopPage database={mockDataBase} setCartSize={vi.fn()} />,
      { wrapper: BrowserRouter }
    );

    expect(component.getAllByAltText("item_thumbnail").length).toBeGreaterThan(
      0
    );
    expect(component.getAllByTestId("item_name").length).toBeGreaterThan(0);
    expect(component.getAllByTestId("item_price").length).toBeGreaterThan(0);
    expect(
      component.getAllByRole("button", { name: /add to cart/i }).length
    ).toBeGreaterThan(0);
  });
});
