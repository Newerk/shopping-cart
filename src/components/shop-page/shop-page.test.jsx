import { describe, it, expect, vi } from "vitest";
import { ShopPage } from "./shop-page";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


describe("Shop Page Component", () => {
  it("Renders Shop Page", () => {
    expect(render(<ShopPage />).getByText("ShopPage").textContent).toMatch(
      /shoppage/i
    );
  });

  it("Filters wrapper has 3 children", () => {
    render(<ShopPage />);

    const filterComponent = screen.getByText("Filters");
    const wrapper = filterComponent.querySelector(".wrapper");

    expect(wrapper.childNodes.length).toEqual(3);
  });

  it("Sort btn opens a dropdown when clicked", async () => {
    const user = userEvent.setup();
    const { getByText } = render(<ShopPage />);

    await user.click(getByText(/sort/i)).then(() => {
      expect(getByText(/featured/i)).toBeInTheDocument();
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
      expect(getByTestId("items-container").childNodes.length).toBeGreaterThan(
        0
      );

      expect(
        getByTestId("items-container").childNodes.length
      ).toBeLessThanOrEqual(25);
    });
  });

  it("Products container doesnt show more than 50 items", async () => {
    const user = userEvent.setup();
    const getByTestId = render(<ShopPage />);

    await user.click(screen.getByText(/^[(]?50[)]?$/)).then(() => {
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
    const getByTestId = render(<ShopPage />);

    await user.click(screen.getByText(/^[(]?100[)]?$/)).then(() => {
      expect(getByTestId("items-container").childNodes.length).toBeGreaterThan(
        50
      );

      expect(
        getByTestId("items-container").childNodes.length
      ).toBeLessThanOrEqual(100);
    });
  });
});
