import { updateQuantities } from "../../modules/change-of-quantity";
import { cartDatabase } from "../cart/cart-database";
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
            !!cartDatabase.find(
              (item) => item.item_name === self_ref.item_name
            ) === false
          ) {
            self_ref.quantity += 1;
            cartDatabase.push(self_ref);
          } else {
            self_ref.quantity += 1;
          }

          setCartSize(
            cartDatabase.reduce((total, obj) => total + obj.quantity, 0)
          );

          updateQuantities(setCartSize, setTotalCost, cartDatabase);
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
