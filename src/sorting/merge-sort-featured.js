const merge = (left, right) => {
  let sortedArr = [];

  while (left.length && right.length) {
    if (left[0].featured_value < right[0].featured_value) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  return [...sortedArr, ...left, ...right];
};

export const mergeSortFeatured = (array) => {
  if (array.length <= 1) {
    return array;
  }

  let middle = Math.floor(array.length / 2);
  let left = mergeSortFeatured(array.slice(0, middle));
  let right = mergeSortFeatured(array.slice(middle));

  return merge(left, right);
};
