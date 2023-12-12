import PropTypes from "prop-types";
import styles from "../cart/cart.module.css";
import { useState } from "react";

export const ShoppingCart = ({ items }) => {
  const [totalCost, setTotalCost] = useState(0);
  return (
    <section className={styles.section}>
      <div className={styles.leftHalf}></div>
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
