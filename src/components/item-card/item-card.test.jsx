const { render, screen } = require("@testing-library/react");
const { describe, it, expect } = require("vitest");

describe("Card Component", () => {
  it("render card", () => {
    const component = render(<Card />);
    expect(component).toBeInTheDocument();
    expect(component.getByText("$")).toBeInTheDocument();
    expect(component.getByTestId("item_name")).toBeInTheDocument();
    expect(component.getByTestId("item_price")).toBeInTheDocument();
    expect(
      component.getByRole("button", { name: /add to cart/i })
    ).toBeInTheDocument();
  });
});
