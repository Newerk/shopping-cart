import { Card } from "./components/item-card/item-card";

export default function Pages({
  activeSort,
  activeView,
  sortArray,
  totalPages,
  currentPage,
}) {
  let segmentedArr = [];
  let pageArr = [];
  let count = 0;

  let array =
    activeSort === "Featured"
      ? sortArray[0]
      : activeSort === "High to Low"
      ? sortArray[1]
      : sortArray[2];

  while (segmentedArr.length < totalPages) {
    pageArr.push(array[count++]);
    if (pageArr.length === activeView) {
      segmentedArr.push([...pageArr]);
      pageArr = [];
    }
  }

  return (
    <>
      {segmentedArr[currentPage].map((card) => (
        <div key={card.id}>
          <Card
            img_src={card.img_src}
            item_name={card.item_name}
            item_price={card.item_price}
          />
        </div>
      ))}
    </>
  );
}
