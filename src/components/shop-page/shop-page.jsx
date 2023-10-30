import { useState } from "react";

const SortDropDown = () => {
  return;
  // (
  //filler code
  // <>
  //   <div>Featured</div>
  //   <div>Low to High</div>
  //   <div>High to Low</div>
  // </>
  // );
};

export const ShopPage = () => {
  const [dropDown, setDropDown] = useState(null);
  return (
    <>
      <>ShopPage</>
      <button
        onClick={() => {
          setDropDown(<SortDropDown />);
        }}
      >
        Sort
      </button>
      {dropDown}
    </>
  );
};
