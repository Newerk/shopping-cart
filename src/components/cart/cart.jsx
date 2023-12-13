import PropTypes from "prop-types";
import styles from "../cart/cart.module.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const ShoppingCart = ({ items }) => {
  const [totalCost, setTotalCost] = useState(0);
  return (
    <section className={styles.section}>
      <div className={styles.leftHalf}>
        {items.map((item) => (
          <div key={uuidv4()}>
            <h3>{item.item_name}</h3>
            <h4>Price: ${item.item_price}</h4>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
      <div className={styles.rightHalf}>
        <h2>Summary</h2>
        <>
          <h2>
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
};
