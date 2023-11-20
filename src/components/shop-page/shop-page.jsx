import { useState } from "react";
import styles from "../shop-page/shop-page.module.css";
import PropTypes from "prop-types";
import { Card } from "../item-card/item-card";
import { mergeSortLowToHigh } from "../../sorting/merge-sort-LH";
import { mergeSortHighToLow } from "../../sorting/merge-sort-HL";
import { mergeSortFeatured } from "../../sorting/merge-sort-featured";
import { Link, Outlet } from "react-router-dom";

//create an array of browser routers to handle which shop page loads into the <Outlet /> component *INCOMPLETE*
/* See link: https://www.codeacademy.com/learn/learn-react-router/modules/learn-react-router/cheatsheet */

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

const ViewDropDown = ({ activeView, setActiveView, database }) => {
  return Math.ceil(database.length / activeView);
};

ViewDropDown.propTypes = {
  activeView: PropTypes.number,
  setActiveView: PropTypes.func,
  database: PropTypes.arrayOf(PropTypes.object),
};

const PageNav = ({ database, activeView }) => {
  const pagesArr = [];
  const pages = Math.ceil(database.length / activeView);

  for (let i = 1; i <= pages; i++) {
    pagesArr.push(i);
  }

  return (
    <nav>
      {pagesArr.map((page) => (
        <Link to={`${page}`} key={page}>
          {page}
        </Link>
      ))}
    </nav>
  );
};

PageNav.propTypes = {
  activeView: PropTypes.number,
  database: PropTypes.arrayOf(PropTypes.object),
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
              setDropDown(
                <ViewDropDown
                  activeView={activeView}
                  setActiveView={setActiveView}
                  database={database}
                />
              );
            }}
          >
            View {`(${activeView})`}
          </div>
        </div>
      </header>
      <section className={styles["items-section"]}>
        <h2>Products</h2>
        <div data-testid="items-wrapper" className={styles["items-wrapper"]}>
          <div className={styles["items-container"]}>{sortedItems}</div>
          {/* <Outlet /> */}
          <div className={styles["shop-page-nav"]}>
            {/* {"<- 1 2 3 4 (5) 6 7 8 ... 25 ->"} */}
            <PageNav database={database} activeView={activeView} />
          </div>
        </div>
      </section>
    </div>
  );
};

ShopPage.propTypes = {
  database: PropTypes.arrayOf(PropTypes.object),
};
