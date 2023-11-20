import { Link } from "react-router-dom";
import styles from "../home-page/home-page.module.css";

export const HomePage = ({ type = "primary" }) => {
  return (
    <section>
      <Link to="shop/1">
        <button className={styles[type]}>Shop Now</button>
      </Link>
    </section>
  );
};
