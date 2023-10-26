import { describe, it, expect, vi } from "vitest";
import { ShopPage } from "./shop-page";
import { render, screen } from "@testing-library/react";

const maxNumOfViewedItems = vi
  .fn()
  .mockImplementation((maxItems, container) => {
    for (let i = 0; i < maxItems; i++) {
      container.appendChild(<div>child</div>);
    }
    return container.childNodes.length;
  });

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

  it("Sort btn opens a dropdown", () => {
    render(<ShopPage />);

    //mock a callback function
    const openDropdown = vi.fn();

    expect(true).toBeFalsy(); //placeholder
  });

  it("View button opens a dropdown", () => {
    render(<ShopPage />);

    //mock a callback function
    const openDropdown = vi.fn();

    expect(true).toBeFalsy(); //placeholder
  });

  it("Renders products container", () => {
    render(<ShopPage />);
    expect(screen.getByText("Products")).toBeInTheDocument(); //value in getByText() subject to change
  });

  it("Products container doesnt show more than 25 items", () => {
    render(<ShopPage />);
    const container = screen.getByText("Products");
    const { mockContainer } = render(<div>Parent</div>);

    expect(container.childNodes.length).toBeLessThanOrEqual(
      maxNumOfViewedItems(25, mockContainer)
    );
  });

  it("Products container doesnt show more than 50 items", () => {
    render(<ShopPage />);

    const container = screen.getByText("Products");
    const { mockContainer } = render(<div>Parent</div>);

    expect(container.childNodes.length).toBeLessThanOrEqual(
      maxNumOfViewedItems(50, mockContainer)
    );
  });

  it("Products container doesnt show more than 100 items", () => {
    render(<ShopPage />);

    const container = screen.getByText("Products");
    const { mockContainer } = render(<div>Parent</div>);

    expect(container.childNodes.length).toBeLessThanOrEqual(
      maxNumOfViewedItems(100, mockContainer)
    );
  });
});
