import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <div data-testid="hp">HomePage</div>
      <Link to="shop">
        <button>Shop Now</button>
      </Link>
    </>
  );
};
