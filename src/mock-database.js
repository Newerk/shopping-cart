const generateMockDatabase = (size) => {
  let array = [];
  let id_count = 0;
  const img_URL = "../src/mock-img.jpg";
  const categories = ["electronics", "clothes", "furniture", "toy", "jewelry"];
  let feature_values = [];
  let usedFeaturedValues = [];

  for (let j = 1; j <= size; j++) {
    feature_values.push(j);
  }

  for (let i = 0; i < size; i++) {
    let value;
    let randomNum = Math.floor(Math.random() * feature_values.length) + 1;

    if (usedFeaturedValues.includes(randomNum)) {
      let newRandomNum = Math.floor(Math.random() * feature_values.length) + 1;
      usedFeaturedValues.push(newRandomNum);
      value = newRandomNum;
    } else {
      usedFeaturedValues.push(randomNum);
      value = randomNum;
    }

    array.push({
      id: id_count++,
      img_src: img_URL,
      item_name: `Example Item ${id_count}`,
      item_price: Math.floor(Math.random() * (2500 - 50) + 50),
      category: categories[Math.floor(Math.random() * categories.length)],
      featured_value: value,
    });
  }

  return array;
};

export const mockDataBase = generateMockDatabase(100);
console.log(mockDataBase);

// export const mockDataBase = [
//   {
//     id: "00",
//     img_src: "../src/mock-img.jpg",
//     item_name: "Example Item 0",
//     item_price: 100,
//     category: "electronics",
//     featured_value: 3,
//   },
//   {
//     id: "01",
//     img_src: "../src/mock-img.jpg",
//     item_name: "Example Item 1",
//     item_price: 200,
//     category: "clothes",
//     featured_value: 1,
//   },
//   {
//     id: "02",
//     img_src: "../src/mock-img.jpg",
//     item_name: "Example Item 2",
//     item_price: 300,
//     category: "furniture",
//     featured_value: 6,
//   },
//   {
//     id: "03",
//     img_src: "../src/mock-img.jpg",
//     item_name: "Example Item 3",
//     item_price: 400,
//     category: "electronics",
//     featured_value: 2,
//   },
//   {
//     id: "04",
//     img_src: "../src/mock-img.jpg",
//     item_name: "Example Item 4",
//     item_price: 500,
//     category: "toy",
//     featured_value: 5,
//   },
//   {
//     id: "05",
//     img_src: "../src/mock-img.jpg",
//     item_name: "Example Item 5",
//     item_price: 600,
//     category: "clothes",
//     featured_value: 8,
//   },
//   {
//     id: "06",
//     img_src: "../src/mock-img.jpg",
//     item_name: "Example Item 6",
//     item_price: 700,
//     category: "furniture",
//     featured_value: 4,
//   },
//   {
//     id: "07",
//     img_src: "../src/mock-img.jpg",
//     item_name: "Example Item 7",
//     item_price: 800,
//     category: "jewelry",
//     featured_value: 7,
//   },
// ];
