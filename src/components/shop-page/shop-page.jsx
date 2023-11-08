import { useState } from "react";
import styles from "../shop-page/shop-page.module.css";

const SearchBar = () => {
  return (
    <div className={styles["searchbar"]}>
      <div className={styles["bar"]}></div>
      <button>Search</button>
    </div>
  );
};

const SortDropDown = () => {
  return;
  // (
  //filler code
  // <>
  //   <div>Featured</div>
  //   <div>Low to High</div>
  //   <div>High to Low</div>
  // </>
  // );
};

export const ShopPage = () => {
  const [dropDown, setDropDown] = useState(null);
  return (
    <div className={styles["shop"]}>
      <aside className={styles["filter-container"]}>
        <h2>Filters</h2>
        <ul>
          <li>Category</li>
          <li>Price Range</li>
          <li>Rating</li>
        </ul>
      </aside>
      <header className={styles["shop-header"]}>
        <SearchBar />
        <button
          className={styles["sort-btn"]}
          onClick={() => {
            setDropDown(<SortDropDown />);
          }}
        >
          Sort
        </button>
      </header>
      <section className={styles["items-wrapper"]}> testing
      </section>
      {dropDown}
    </div>
  );
};
