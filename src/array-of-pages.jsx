import { Card } from "./components/item-card/item-card";
import testImg from './mockimg.jpg'


export default function Pages({
  sortedDatabase,
  activeView,
  currentPage,
  setCartSize,
  setTotalCost
}) {
  let segmentedArr = [];
  let pageArr = [];

  for (let i = 0; i < sortedDatabase.length; i++) {
    pageArr.push(sortedDatabase[i]);
    if (pageArr.length === activeView) {
      segmentedArr.push([...pageArr]);
      pageArr = [];
    }
  }

  return segmentedArr[currentPage - 1].map((card) => (
    <div key={card.id}>
      <Card
        img_src={testImg}
        item_name={card.item_name}
        item_price={card.item_price}
        self_ref={card}
        setCartSize={setCartSize}
        setTotalCost={setTotalCost}
      />
    </div>
  ));
}
