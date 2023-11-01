import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";

// const mockIncrement = vi
//   .fn()
//   .mockImplementation((quantity) => parseInt(quantity) + 1);

// const mockDecrement = vi
//   .fn()
//   .mockImplementation((quantity) => parseInt(quantity) - 1);

// const mockUpdateQuantity = vi
//   .fn()
//   .mockImplementation((quantity, valueChanger) => {
//     valueChanger === "+"
//       ? (quantity = parseInt(quantity) + 1)
//       : (quantity = parseInt(quantity) - 1);
//   });

describe("Shopping Cart Component", () => {
  it("Cart Component Renders", () => {
    expect(render(<ShoppingCart />)).toBeInTheDocument();
    expect(render(screen.getByText(/total price/i))).toBeInTheDocument();
    expect(render(screen.getByText(/summary/i))).toBeInTheDocument();
    expect(render(screen.getByText(/checkout/i))).toBeInTheDocument();
  });

  it("When Cart is not empty, selected item is rendered", () => {
    render(<ShoppingCart items={notEmpty} />); //placeholder prop
    expect(screen.getAllByTestId("items-wrapper")).toBeInTheDocument();
  });

  it("When Cart is empty shopping cart is blank", () => {
    render(<ShoppingCart items={empty} />); //placeholder prop
    expect(screen.getAllByTestId("items-wrapper")).not.toBeInTheDocument();
  });

  it("Pressing '+' or '-' button changes quantity of item", async () => {
    const user = userEvent.setup();
    render(<ShoppingCart items={notEmpty} />); //placeholder prop
    const itemsWrapper = screen.getByTestId("items-wrapper");

    let currentQuantity =
      itemsWrapper.childNodes[0].querySelector(".quantity").textContent;

    await user.click(screen.queryAllByText("+")[0]).then(() => {
      expect(
        itemsWrapper.childNodes[0].querySelector(".quantity").textContent
      ).toEqual(currentQuantity + 1);
    });

    await user.click(screen.queryAllByText("-")[0]).then(() => {
      expect(
        itemsWrapper.childNodes[0].querySelector(".quantity").textContent
      ).toEqual(currentQuantity - 1);
    });
  });

  it("Pressing '-' button to reach quantity 0 remmoves item from cart", async () => {
    const user = userEvent.setup();
    render(<ShoppingCart items={onlyOneItemInCart} />); //placeholder prop
    const itemsWrapper = screen.getByTestId("items-wrapper");

    await user.click(screen.queryAllByText("-")[0]).then(() => {
      expect(itemsWrapper).not.toBeInTheDocument();
    });
  });

  it("Trash can button removes item from cart", async () => {
    const user = userEvent.setup();
    render(<ShoppingCart items={onlyOneItemInCart} />); //placeholder prop
    const itemsWrapper = screen.getByTestId("items-wrapper");

    await user.click(screen.queryAllByTestId("delete-btn")).then(() => {
      expect(itemsWrapper).not.toBeInTheDocument();
    });
  });
});
