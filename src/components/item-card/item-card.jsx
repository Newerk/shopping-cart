import { cartItems } from "../cart/cart-database";
import styles from "../item-card/item-card.module.css";
import PropTypes from "prop-types";

export const Card = ({
  img_src,
  item_name,
  item_price,
  self_ref,
  setCartSize,
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
          cartItems.push(self_ref);
          setCartSize(cartItems.length);
          console.log(cartItems);
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
  setCartSize: PropTypes.func
};
