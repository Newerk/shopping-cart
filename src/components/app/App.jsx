import { Link, useParams } from "react-router-dom";
import { HomePage } from "../home-page/home-page.jsx";
import { ShopPage } from "../shop-page/shop-page.jsx";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="shop">Shop</Link>
        </li>
        <li>
          <a href="cart">Cart</a>
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
      {page === "shop" ? <ShopPage /> : <HomePage />}
    </>
  );
};
