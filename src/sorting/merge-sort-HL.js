const merge = (left, right) => {
  let sortedArr = [];

  while (left.length && right.length) {
    if (left[0].item_price > right[0].item_price) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  return [...sortedArr, ...left, ...right];
};

export const mergeSortHighToLow = (array) => {
  if (array.length <= 1) {
    return array;
  }

  let middle = Math.floor(array.length / 2);
  let left = mergeSortHighToLow(array.slice(0, middle));
  let right = mergeSortHighToLow(array.slice(middle));

  return merge(left, right);
};

