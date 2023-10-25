import { describe, it, expect } from "vitest";
import { ShopPage } from "./shop-page";
import { render, screen } from "@testing-library/react";

describe("Shop Page Component", () => {
  it("Renders Shop Page", () => {
    expect(render(<ShopPage />).getByText("ShopPage").textContent).toMatch(
      /shoppage/i
    );
  });
});
