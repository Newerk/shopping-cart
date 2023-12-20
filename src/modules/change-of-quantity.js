export const updateQuantities = (
  setCartCallback,
  setTotalCallback,
  cartItems
) => {
  setCartCallback(cartItems.reduce((total, obj) => total + obj.quantity, 0));
  let moreThanOne = cartItems
    .filter((obj) => obj.quantity > 1)
    .reduce((sum, obj) => sum + obj.item_price * obj.quantity, 0);

  let onlyOne = cartItems
    .filter((obj) => obj.quantity === 1)
    .reduce((total, obj) => total + obj.item_price, 0);

  setTotalCallback(onlyOne + moreThanOne);
};
