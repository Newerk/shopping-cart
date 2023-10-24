import { Link, Outlet } from "react-router-dom";

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
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
