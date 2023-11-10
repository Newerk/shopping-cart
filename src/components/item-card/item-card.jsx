import styles from "../item-card/item-card.module.css";
import PropTypes from "prop-types";

export const Card = ({ img_src, item_name, item_price }) => {
//   //placeholder values
//   img_src = "";
//   item_name = "NAME OF ITEM";
//   item_price = 5000;

  return (
    <div className={styles["card"]}>
      <img alt="item_thumbnail" src={img_src} />
      <div data-testid="item_name">{item_name}</div>
      <div data-testid="item_price">${item_price}</div>
      <button>Add to Cart</button>
    </div>
  );
};

Card.propTypes = {
  img_src: PropTypes.string,
  item_name: PropTypes.string,
  item_price: PropTypes.number,
};
