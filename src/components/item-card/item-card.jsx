import styles from "../item-card/item-card.module.css";

export const Card = () => {
  return (
    <div className={styles["card"]}>
      <img alt="item_thumbnail" />
      <div data-testid="item_name"></div>
      <div data-testid="item_price"></div>
      <button>Add to Card</button>
    </div>
  );
};
