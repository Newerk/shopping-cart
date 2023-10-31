import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";

describe("Shopping Cart Component", () => {
  it("Cart Component Renders", () => {
    expect(render(<ShoppingCart />)).toBeInTheDocument();
  });

  it("Total price component renders", () => {
    expect(true).toBeFalsy(); //placeholder
  });

  it("When Cart is not empty, selected item is rendered", () => {
    expect(true).toBeFalsy(); //placeholder
  });

  it("When Cart is empty shopping cart is blank", () => {
    expect(true).toBeFalsy(); //placeholder
  });

  it("Increasing item quantity increases total price", () => {
    expect(true).toBeFalsy(); //placeholder
  });

  it("Decreasing item quantity decreases total price", () => {
    expect(true).toBeFalsy(); //placeholder
  });

  it("Pressing '+' or '-' button changes quantity of item", () => {
    expect(true).toBeFalsy(); //placeholder
  });

  it("Pressing '-' button to reach quantity 0 remmoves item from cart", () => {
    expect(true).toBeFalsy(); //placeholder
  });

  it("Trash can button removes item from cart", () => {
    expect(true).toBeFalsy(); //placeholder
  });
});
