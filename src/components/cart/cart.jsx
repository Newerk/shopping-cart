import PropTypes from "prop-types";
import styles from "../cart/cart.module.css";
import { v4 as uuidv4 } from "uuid";
import { cartDatabase } from "./cart-database";
import { updateQuantities } from "../../modules/change-of-quantity";

export const ShoppingCart = ({
  items,
  totalCost,
  setCartSize,
  setTotalCost,
}) => {
  const handlePlusButton = (item) => {
    item.quantity += 1;
    updateQuantities(setCartSize, setTotalCost, items);
  };

  const handleMinusButton = (item) => {
    item.quantity -= 1;
    items.filter((obj) => obj.quantity < 0);

    updateQuantities(setCartSize, setTotalCost, items);
  };

  return (
    <section className={styles.section}>
      <div className={styles.leftHalf}>
        {cartDatabase
          .filter((obj) => obj.quantity > 0)
          .map((item) => (
            <div key={uuidv4()} className={styles.card}>
              <img src={item.img_src} className={styles.thumbnail} />
              <div className={styles.wrapper}>
                <h3 className={styles.itemName}>{item.item_name}</h3>
                <h4 className={styles.itemPrice}>${item.item_price}</h4>
                <div className={styles.quantity}>
                  Quantity
                  <button onClick={() => handleMinusButton(item)}>-</button>
                  {item.quantity}
                  <button onClick={() => handlePlusButton(item)}>+</button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className={styles.rightHalf}>
        <h2 className={styles.rhSummary}>Summary</h2>
        <>
          <h2 className={styles.rhTotal}>
            Total: $<span>{totalCost}</span>
          </h2>
        </>
        <button>Checkout</button>
      </div>
    </section>
  );
};

ShoppingCart.propTypes = {
  items: PropTypes.array,
  totalCost: PropTypes.number,
  setCartSize: PropTypes.func,
  setTotalCost: PropTypes.func,
};
