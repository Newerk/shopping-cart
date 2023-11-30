import { useState } from "react";
import styles from "../shop-page/shop-page.module.css";
import PropTypes from "prop-types";
import { mergeSortLowToHigh } from "../../sorting/merge-sort-LH";
import { mergeSortHighToLow } from "../../sorting/merge-sort-HL";
import { mergeSortFeatured } from "../../sorting/merge-sort-featured";
import { Link } from "react-router-dom";
import Pages from "../../array-of-pages";

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
  setSortedDatabase,
  database,
}) => {
  const handleBtnClick = (e) => {
    switch (e.target.textContent) {
      case "Featured":
        setActiveSort(e.target.textContent);
        setSortedDatabase(mergeSortFeatured(database));

        break;

      case "High to Low":
        setActiveSort(e.target.textContent);
        setSortedDatabase(mergeSortHighToLow(database));

        break;

      case "Low to High":
        setActiveSort(e.target.textContent);
        setSortedDatabase(mergeSortLowToHigh(database));

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
  setSortedDatabase: PropTypes.func,
  database: PropTypes.array,
};

const ViewDropDown = ({ activeView, setActiveView }) => {
  const handleBtnClick = (e) => {
    switch (e.target.textContent) {
      case "25":
        setActiveView(parseInt(e.target.textContent));

        break;

      case "50":
        setActiveView(parseInt(e.target.textContent));

        break;

      case "100":
        setActiveView(parseInt(e.target.textContent));

        break;
    }
  };

  return (
    <div className={styles["dropdown"]}>
      {activeView === 25 ? (
        <>
          <button onClick={handleBtnClick}>50</button>
          <button onClick={handleBtnClick}>100</button>
        </>
      ) : activeView === 50 ? (
        <>
          <button onClick={handleBtnClick}>25</button>
          <button onClick={handleBtnClick}>100</button>
        </>
      ) : (
        <>
          <button onClick={handleBtnClick}>25</button>
          <button onClick={handleBtnClick}>50</button>
        </>
      )}
    </div>
  );
};

ViewDropDown.propTypes = {
  activeView: PropTypes.number,
  setActiveView: PropTypes.func,
  database: PropTypes.arrayOf(PropTypes.object),
};

const PageNav = ({ database, activeView, setCurrentPage }) => {
  const pagesArr = [];
  const pages = Math.ceil(database.length / activeView);

  for (let i = 1; i <= pages; i++) {
    pagesArr.push(i);
  }

  return (
    <nav>
      {pagesArr.map((page) => (
        <Link
          to={`/shop/${page}`}
          key={page}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </Link>
      ))}
    </nav>
  );
};

PageNav.propTypes = {
  activeView: PropTypes.number,
  database: PropTypes.arrayOf(PropTypes.object),
  setCurrentPage: PropTypes.func,
};

export const ShopPage = ({ database }) => {
  const [dropDown, setDropDown] = useState(null);
  const [activeSort, setActiveSort] = useState("Featured");
  const [activeView, setActiveView] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedDatabase, setSortedDatabase] = useState(
    mergeSortFeatured(database)
  );

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
                      setSortedDatabase={setSortedDatabase}
                      database={database}
                    />
                  )
                : setDropDown(null);
            }}
          >
            Sort {`(${activeSort})`}
            {dropDown}
          </div>

          <div
            className={styles["view-btn" ]}
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
          <div className={styles["items-container"]}>
            {
              <Pages
                sortedDatabase={sortedDatabase}
                activeView={activeView}
                currentPage={currentPage}
              />
            }
          </div>
          <div className={styles["shop-page-nav"]}>
            <PageNav
              database={database}
              activeView={activeView}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

ShopPage.propTypes = {
  database: PropTypes.arrayOf(PropTypes.object),
};
