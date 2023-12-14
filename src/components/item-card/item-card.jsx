import { cartItems } from "../cart/cart-database";
import styles from "../item-card/item-card.module.css";
import PropTypes from "prop-types";

export const Card = ({
  img_src,
  item_name,
  item_price,
  self_ref,
  setCartSize,
  setTotalCost,
}) => {
  return (
    <div className={styles["card"]}>
      <img
        alt="item_thumbnail"
        src={img_src}
        className={styles["item-thumbnail"]}
      />
      <div data-testid="item_name" className={styles["item-name"]}>
        {item_name}
      </div>
      <div data-testid="item_price" className={styles["item-price"]}>
        ${item_price}
      </div>
      <button
        onClick={() => {
          if (
            !!cartItems.find(
              (item) => item.item_name === self_ref.item_name
            ) === false
          ) {
            self_ref.quantity += 1;
            cartItems.push(self_ref);
          } else {
            self_ref.quantity += 1;
          }

          setCartSize(
            cartItems.reduce((total, obj) => total + obj.quantity, 0)
          );

          let moreThanOne = cartItems
            .filter((obj) => obj.quantity > 1)
            .reduce((sum, obj) => sum + obj.item_price * obj.quantity, 0);

          let onlyOne = cartItems
            .filter((obj) => obj.quantity === 1)
            .reduce((total, obj) => total + obj.item_price, 0);

          setTotalCost(onlyOne + moreThanOne);
        }}
        className={styles["add-cart-btn"]}
      >
        Add to Cart
      </button>
    </div>
  );
};

Card.propTypes = {
  img_src: PropTypes.string,
  item_name: PropTypes.string,
  item_price: PropTypes.number,
  self_ref: PropTypes.object,
  setCartSize: PropTypes.func,
  setTotalCost: PropTypes.func,
};
