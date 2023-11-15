import { useState } from "react";
import styles from "../shop-page/shop-page.module.css";
import PropTypes from "prop-types";
import { Card } from "../item-card/item-card";
import { mergeSortLowToHigh } from "../../sorting/merge-sort-LH";
import { mergeSortHighToLow } from "../../sorting/merge-sort-HL";
import { mergeSortFeatured } from "../../sorting/merge-sort-featured";

const SearchBar = () => {
  return (
    <div className={styles["searchbar"]}>
      <div className={styles["bar"]}></div>
      <button>Search</button>
    </div>
  );
};

const SortDropDown = ({
  activeSort,
  setActiveSort,
  setSortedItems,
  sortArray,
}) => {
  const handleBtnClick = (e) => {
    switch (e.target.textContent) {
      case "Featured":
        setActiveSort(e.target.textContent);
        setSortedItems(sortArray[0]);
        break;

      case "High to Low":
        setActiveSort(e.target.textContent);
        setSortedItems(sortArray[1]);

        break;

      case "Low to High":
        setActiveSort(e.target.textContent);
        setSortedItems(sortArray[2]);

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
  setSortedItems: PropTypes.func,
  sortArray: PropTypes.array,
};

export const ShopPage = ({ database }) => {
  const [dropDown, setDropDown] = useState(null);
  const [activeSort, setActiveSort] = useState("Featured");
  const [activeView, setActiveView] = useState(25);
  const [sortedItems, setSortedItems] = useState(sortByFeatured);

  function sortByFeatured() {
    return mergeSortFeatured(database).map((card) => (
      <div key={card.id}>
        <Card
          img_src={card.img_src}
          item_name={card.item_name}
          item_price={card.item_price}
        />
      </div>
    ));
  }
  function sortByHighToLow() {
    return mergeSortHighToLow(database).map((card) => (
      <div key={card.id}>
        <Card
          img_src={card.img_src}
          item_name={card.item_name}
          item_price={card.item_price}
        />
      </div>
    ));
  }
  function sortByLowToHigh() {
    return mergeSortLowToHigh(database).map((card) => (
      <div key={card.id}>
        <Card
          img_src={card.img_src}
          item_name={card.item_name}
          item_price={card.item_price}
        />
      </div>
    ));
  }

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
                      setSortedItems={setSortedItems}
                      sortArray={[
                        sortByFeatured,
                        sortByHighToLow,
                        sortByLowToHigh,
                      ]}
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
          {sortedItems}
        </div>
      </section>
    </div>
  );
};

ShopPage.propTypes = {
  database: PropTypes.arrayOf(PropTypes.object),
};
