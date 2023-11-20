import { Link, useParams } from "react-router-dom";
import { HomePage } from "../home-page/home-page.jsx";
import { ShopPage } from "../shop-page/shop-page.jsx";
import styles from "../app/App.module.css";
import { mockDataBase } from "../../mock-database.js";

const Header = () => {
  return (
    <nav className={styles["header-nav"]}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop/1">Shop</Link>
        </li>
        <li>
          <a href="/cart">Cart</a>
        </li>
      </ul>
    </nav>
  );
};

export const App = () => {
  const { page } = useParams();

  return (
    <>
      <Header />
      {page === "shop" ? <ShopPage database={mockDataBase} /> : <HomePage />}
    </>
  );
};
