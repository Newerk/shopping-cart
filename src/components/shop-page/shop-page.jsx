import { useState } from "react";
import styles from "../shop-page/shop-page.module.css";
import PropTypes from "prop-types";
import { Card } from "../item-card/item-card";

const SearchBar = () => {
  return (
    <div className={styles["searchbar"]}>
      <div className={styles["bar"]}></div>
      <button>Search</button>
    </div>
  );
};

const SortDropDown = ({ activeSort, setActiveSort }) => {
  const handleBtnClick = (e) => {
    switch (e.target.textContent) {
      case "Featured":
        setActiveSort(e.target.textContent);
        break;

      case "High to Low":
        setActiveSort(e.target.textContent);

        break;

      case "Low to High":
        setActiveSort(e.target.textContent);

        break;
    }
  };
  return (
    <div className={styles["dropdown"]}>
      {activeSort === "Featured" ? (
        <>
          <button onClick={handleBtnClick}>High to Low</button>
          <button onClick={handleBtnClick}>Low to High</button>
        </>
      ) : activeSort === "High to Low" ? (
        <>
          <button onClick={handleBtnClick}>Featured</button>
          <button onClick={handleBtnClick}>Low to High</button>
        </>
      ) : (
        <>
          <button onClick={handleBtnClick}>Featured</button>
          <button onClick={handleBtnClick}>High to Low</button>
        </>
      )}
    </div>
  );
};

SortDropDown.propTypes = {
  activeSort: PropTypes.string,
  setActiveSort: PropTypes.func,
  setDropDown: PropTypes.func,
};

export const ShopPage = ({ database }) => {
  const [dropDown, setDropDown] = useState(null);
  const [activeSort, setActiveSort] = useState("Featured");
  const [activeView, setActiveView] = useState(25);

  const handleSortSelection = () => {};

  const handleViewSelection = () => {};

  return (
    <div className={styles["shop"]}>
      <aside className={styles["filter-container"]}>
        <h2>Filters</h2>
        <ul>
          <li>Category</li>
          <li>Price Range</li>
          <li>Rating</li>
        </ul>
        {/*Needs an 'apply' button*/}
      </aside>
      <header className={styles["shop-header"]}>
        <SearchBar />
        <div className={styles["btns-wrapper"]}>
          <div
            className={styles["sort-btn"]}
            onClick={() => {
              dropDown === null
                ? setDropDown(
                    <SortDropDown
                      activeSort={activeSort}
                      setActiveSort={setActiveSort}
                    />
                  )
                : setDropDown(null);
            }}
          >
            Sort {`(${activeSort})`}
            {dropDown}
          </div>

          <div
            className={styles["view-btn"]}
            onClick={() => {
              setDropDown(<ViewDropDown />);
            }}
          >
            View {"(25)"}
          </div>
        </div>
      </header>
      <section className={styles["items-wrapper"]}>
        <h2>Products</h2>
        <div
          data-testid="items-container"
          className={styles["items-container"]}
        >
          {database &&
            database.map((card) => (
              <div key={card.id}>
                <Card
                  img_src={card.img_src}
                  item_name={card.item_name}
                  item_price={card.item_price}
                />
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

ShopPage.propTypes = {
  database: PropTypes.arrayOf(PropTypes.object),
};
