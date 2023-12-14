import { Link, useParams } from "react-router-dom";
import { HomePage } from "../home-page/home-page.jsx";
import { ShopPage } from "../shop-page/shop-page.jsx";
import styles from "../app/App.module.css";
import { mockDataBase } from "../../mock-database.js";
import { cartItems } from "../cart/cart-database.js";
import { useState } from "react";
import { ShoppingCart } from "../cart/cart.jsx";
import PropType from "prop-types";

const Header = ({ cartSize }) => {
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
          <Link to="/cart">Cart{cartSize === 0 ? "" : `(${cartSize})`}</Link>
        </li>
      </ul>
    </nav>
  );
};

export const App = () => {
  const { page } = useParams();
  const [cartSize, setCartSize] = useState(cartItems.length);

  return (
    <>
      <Header cartSize={cartSize} />
      {page === "shop" ? (
        <ShopPage database={mockDataBase} setCartSize={setCartSize} />
      ) : page === "cart" ? (
        <ShoppingCart items={cartItems} />
      ) : (
        <HomePage />
      )}
    </>
  );
};

Header.propTypes = {
  cartSize: PropType.number,
};
