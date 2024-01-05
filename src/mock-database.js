// const generateMockDatabase = (size) => {
//   let array = [];
//   let id_count = 0;
//   const img_URL = "../../src/mockimg.jpg";
//   const categories = ["electronics", "clothes", "furniture", "toy", "jewelry"];
//   let feature_values = [];
//   let usedFeaturedValues = [];

//   for (let j = 1; j <= size; j++) {
//     feature_values.push(j);
//   }

//   for (let i = 0; i < size; i++) {
//     let value;
//     let randomNum = Math.floor(Math.random() * feature_values.length) + 1;

//     if (usedFeaturedValues.includes(randomNum)) {
//       let newRandomNum = Math.floor(Math.random() * feature_values.length) + 1;
//       usedFeaturedValues.push(newRandomNum);
//       value = newRandomNum;
//     } else {
//       usedFeaturedValues.push(randomNum);
//       value = randomNum;
//     }

//     array.push({
//       id: id_count++,
//       img_src: img_URL,
//       item_name: `Example Item ${id_count}`,
//       item_price: Math.floor(Math.random() * (2500 - 50) + 50),
//       category: categories[Math.floor(Math.random() * categories.length)],
//       featured_value: value,
//       quantity: 0,
//     });
//   }

//   return array;
// };

// export const mockDataBase = generateMockDatabase(100);

// export const mockDataBase = [
//   {
//     id: 0,
//     img_src: "../../src/mockimg.jpg",
//     item_name: "Example Item 0",
//     item_price: 100,
//     category: "electronics",
//     featured_value: 3,
//   },
//   {
//     id: 1,
//     img_src: "../../src/mockimg.jpg",
//     item_name: "Example Item 1",
//     item_price: 200,
//     category: "clothes",
//     featured_value: 1,
//   },
//   {
//     id: 3,
//     img_src: "../../src/mockimg.jpg",
//     item_name: "Example Item 2",
//     item_price: 300,
//     category: "furniture",
//     featured_value: 6,
//   },
//   {
//     id: 4,
//     img_src: "../../src/mockimg.jpg",
//     item_name: "Example Item 3",
//     item_price: 400,
//     category: "electronics",
//     featured_value: 2,
//   },
//   {
//     id: 5,
//     img_src: "../../src/mockimg.jpg",
//     item_name: "Example Item 4",
//     item_price: 500,
//     category: "toy",
//     featured_value: 5,
//   },
//   {
//     id: 6,
//     img_src: "../../src/mockimg.jpg",
//     item_name: "Example Item 5",
//     item_price: 600,
//     category: "clothes",
//     featured_value: 8,
//   },
//   {
//     id: 7,
//     img_src: "../../src/mockimg.jpg",
//     item_name: "Example Item 6",
//     item_price: 700,
//     category: "furniture",
//     featured_value: 4,
//   },
//   {
//     id: 8,
//     img_src: "../../src/mockimg.jpg",
//     item_name: "Example Item 7",
//     item_price: 800,
//     category: "jewelry",
//     featured_value: 7,
//   },
// ];

//---------------------------------------------------------------------------------------
/* A Constant Set of Mock Data */
export const mockDataBase = [
  {
    id: 0,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 1",
    item_price: 479,
    category: "electronics",
    featured_value: 38,
    quantity: 0,
  },
  {
    id: 1,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 2",
    item_price: 1767,
    category: "electronics",
    featured_value: 76,
    quantity: 0,
  },
  {
    id: 2,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 3",
    item_price: 1402,
    category: "electronics",
    featured_value: 19,
    quantity: 0,
  },
  {
    id: 3,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 4",
    item_price: 1326,
    category: "electronics",
    featured_value: 23,
    quantity: 0,
  },
  {
    id: 4,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 5",
    item_price: 1632,
    category: "clothes",
    featured_value: 68,
    quantity: 0,
  },
  {
    id: 5,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 6",
    item_price: 2470,
    category: "clothes",
    featured_value: 33,
    quantity: 0,
  },
  {
    id: 6,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 7",
    item_price: 1637,
    category: "furniture",
    featured_value: 97,
    quantity: 0,
  },
  {
    id: 7,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 8",
    item_price: 1674,
    category: "jewelry",
    featured_value: 39,
    quantity: 0,
  },
  {
    id: 8,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 9",
    item_price: 2466,
    category: "jewelry",
    featured_value: 71,
    quantity: 0,
  },
  {
    id: 9,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 10",
    item_price: 59,
    category: "jewelry",
    featured_value: 12,
    quantity: 0,
  },
  {
    id: 10,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 11",
    item_price: 1341,
    category: "electronics",
    featured_value: 32,
    quantity: 0,
  },
  {
    id: 11,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 12",
    item_price: 1776,
    category: "furniture",
    featured_value: 21,
    quantity: 0,
  },
  {
    id: 12,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 13",
    item_price: 871,
    category: "electronics",
    featured_value: 43,
    quantity: 0,
  },
  {
    id: 13,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 14",
    item_price: 2313,
    category: "furniture",
    featured_value: 99,
    quantity: 0,
  },
  {
    id: 14,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 15",
    item_price: 218,
    category: "furniture",
    featured_value: 47,
    quantity: 0,
  },
  {
    id: 15,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 16",
    item_price: 1217,
    category: "electronics",
    featured_value: 27,
    quantity: 0,
  },
  {
    id: 16,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 17",
    item_price: 1542,
    category: "toy",
    featured_value: 22,
    quantity: 0,
  },
  {
    id: 17,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 18",
    item_price: 2290,
    category: "toy",
    featured_value: 3,
    quantity: 0,
  },
  {
    id: 18,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 19",
    item_price: 1342,
    category: "furniture",
    featured_value: 83,
    quantity: 0,
  },
  {
    id: 19,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 20",
    item_price: 1834,
    category: "furniture",
    featured_value: 56,
    quantity: 0,
  },
  {
    id: 20,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 21",
    item_price: 688,
    category: "jewelry",
    featured_value: 61,
    quantity: 0,
  },
  {
    id: 21,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 22",
    item_price: 756,
    category: "electronics",
    featured_value: 44,
    quantity: 0,
  },
  {
    id: 22,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 23",
    item_price: 1807,
    category: "toy",
    featured_value: 65,
    quantity: 0,
  },
  {
    id: 23,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 24",
    item_price: 2466,
    category: "electronics",
    featured_value: 13,
    quantity: 0,
  },
  {
    id: 24,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 25",
    item_price: 1468,
    category: "toy",
    featured_value: 51,
    quantity: 0,
  },
  {
    id: 25,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 26",
    item_price: 1383,
    category: "clothes",
    featured_value: 10,
    quantity: 0,
  },
  {
    id: 26,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 27",
    item_price: 900,
    category: "electronics",
    featured_value: 5,
    quantity: 0,
  },
  {
    id: 27,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 28",
    item_price: 1235,
    category: "jewelry",
    featured_value: 69,
    quantity: 0,
  },
  {
    id: 28,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 29",
    item_price: 2299,
    category: "electronics",
    featured_value: 40,
    quantity: 0,
  },
  {
    id: 29,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 30",
    item_price: 366,
    category: "furniture",
    featured_value: 74,
    quantity: 0,
  },
  {
    id: 30,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 31",
    item_price: 271,
    category: "jewelry",
    featured_value: 24,
    quantity: 0,
  },
  {
    id: 31,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 32",
    item_price: 2334,
    category: "electronics",
    featured_value: 64,
    quantity: 0,
  },
  {
    id: 32,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 33",
    item_price: 200,
    category: "electronics",
    featured_value: 62,
    quantity: 0,
  },
  {
    id: 33,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 34",
    item_price: 1810,
    category: "furniture",
    featured_value: 79,
    quantity: 0,
  },
  {
    id: 34,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 35",
    item_price: 2424,
    category: "electronics",
    featured_value: 55,
    quantity: 0,
  },
  {
    id: 35,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 36",
    item_price: 1009,
    category: "furniture",
    featured_value: 72,
    quantity: 0,
  },
  {
    id: 36,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 37",
    item_price: 1504,
    category: "jewelry",
    featured_value: 53,
    quantity: 0,
  },
  {
    id: 37,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 38",
    item_price: 1094,
    category: "jewelry",
    featured_value: 93,
    quantity: 0,
  },
  {
    id: 38,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 39",
    item_price: 818,
    category: "clothes",
    featured_value: 22,
    quantity: 0,
  },
  {
    id: 39,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 40",
    item_price: 1897,
    category: "toy",
    featured_value: 42,
    quantity: 0,
  },
  {
    id: 40,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 41",
    item_price: 605,
    category: "jewelry",
    featured_value: 20,
    quantity: 0,
  },
  {
    id: 41,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 42",
    item_price: 357,
    category: "toy",
    featured_value: 33,
    quantity: 0,
  },
  {
    id: 42,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 43",
    item_price: 1831,
    category: "jewelry",
    featured_value: 90,
    quantity: 0,
  },
  {
    id: 43,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 44",
    item_price: 888,
    category: "electronics",
    featured_value: 17,
    quantity: 0,
  },
  {
    id: 44,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 45",
    item_price: 1343,
    category: "electronics",
    featured_value: 63,
    quantity: 0,
  },
  {
    id: 45,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 46",
    item_price: 2088,
    category: "electronics",
    featured_value: 61,
    quantity: 0,
  },
  {
    id: 46,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 47",
    item_price: 1027,
    category: "furniture",
    featured_value: 51,
    quantity: 0,
  },
  {
    id: 47,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 48",
    item_price: 1081,
    category: "electronics",
    featured_value: 48,
    quantity: 0,
  },
  {
    id: 48,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 49",
    item_price: 1804,
    category: "electronics",
    featured_value: 30,
    quantity: 0,
  },
  {
    id: 49,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 50",
    item_price: 2254,
    category: "furniture",
    featured_value: 97,
    quantity: 0,
  },
  {
    id: 50,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 51",
    item_price: 671,
    category: "furniture",
    featured_value: 73,
    quantity: 0,
  },
  {
    id: 51,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 52",
    item_price: 1360,
    category: "furniture",
    featured_value: 78,
    quantity: 0,
  },
  {
    id: 52,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 53",
    item_price: 2102,
    category: "furniture",
    featured_value: 77,
    quantity: 0,
  },
  {
    id: 53,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 54",
    item_price: 2009,
    category: "toy",
    featured_value: 36,
    quantity: 0,
  },
  {
    id: 54,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 55",
    item_price: 1871,
    category: "clothes",
    featured_value: 31,
    quantity: 0,
  },
  {
    id: 55,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 56",
    item_price: 1562,
    category: "clothes",
    featured_value: 6,
    quantity: 0,
  },
  {
    id: 56,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 57",
    item_price: 2032,
    category: "jewelry",
    featured_value: 94,
    quantity: 0,
  },
  {
    id: 57,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 58",
    item_price: 1030,
    category: "electronics",
    featured_value: 17,
    quantity: 0,
  },
  {
    id: 58,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 59",
    item_price: 1822,
    category: "jewelry",
    featured_value: 54,
    quantity: 0,
  },
  {
    id: 59,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 60",
    item_price: 828,
    category: "toy",
    featured_value: 96,
    quantity: 0,
  },
  {
    id: 60,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 61",
    item_price: 1759,
    category: "jewelry",
    featured_value: 67,
    quantity: 0,
  },
  {
    id: 61,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 62",
    item_price: 167,
    category: "clothes",
    featured_value: 92,
    quantity: 0,
  },
  {
    id: 62,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 63",
    item_price: 1533,
    category: "furniture",
    featured_value: 37,
    quantity: 0,
  },
  {
    id: 63,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 64",
    item_price: 1083,
    category: "jewelry",
    featured_value: 82,
    quantity: 0,
  },
  {
    id: 64,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 65",
    item_price: 2374,
    category: "jewelry",
    featured_value: 70,
    quantity: 0,
  },
  {
    id: 65,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 66",
    item_price: 1300,
    category: "jewelry",
    featured_value: 100,
    quantity: 0,
  },
  {
    id: 66,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 67",
    item_price: 810,
    category: "clothes",
    featured_value: 47,
    quantity: 0,
  },
  {
    id: 67,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 68",
    item_price: 954,
    category: "jewelry",
    featured_value: 77,
    quantity: 0,
  },
  {
    id: 68,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 69",
    item_price: 2304,
    category: "toy",
    featured_value: 69,
    quantity: 0,
  },
  {
    id: 69,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 70",
    item_price: 1912,
    category: "clothes",
    featured_value: 95,
    quantity: 0,
  },
  {
    id: 70,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 71",
    item_price: 1146,
    category: "jewelry",
    featured_value: 58,
    quantity: 0,
  },
  {
    id: 71,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 72",
    item_price: 1171,
    category: "electronics",
    featured_value: 34,
    quantity: 0,
  },
  {
    id: 72,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 73",
    item_price: 889,
    category: "electronics",
    featured_value: 73,
    quantity: 0,
  },
  {
    id: 73,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 74",
    item_price: 2112,
    category: "clothes",
    featured_value: 70,
    quantity: 0,
  },
  {
    id: 74,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 75",
    item_price: 1110,
    category: "furniture",
    featured_value: 99,
    quantity: 0,
  },
  {
    id: 75,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 76",
    item_price: 1675,
    category: "toy",
    featured_value: 26,
    quantity: 0,
  },
  {
    id: 76,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 77",
    item_price: 223,
    category: "clothes",
    featured_value: 57,
    quantity: 0,
  },
  {
    id: 77,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 78",
    item_price: 754,
    category: "toy",
    featured_value: 6,
    quantity: 0,
  },
  {
    id: 78,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 79",
    item_price: 1320,
    category: "clothes",
    featured_value: 59,
    quantity: 0,
  },
  {
    id: 79,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 80",
    item_price: 2323,
    category: "electronics",
    featured_value: 85,
    quantity: 0,
  },
  {
    id: 80,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 81",
    item_price: 1744,
    category: "clothes",
    featured_value: 19,
    quantity: 0,
  },
  {
    id: 81,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 82",
    item_price: 298,
    category: "furniture",
    featured_value: 1,
    quantity: 0,
  },
  {
    id: 82,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 83",
    item_price: 2408,
    category: "jewelry",
    featured_value: 12,
    quantity: 0,
  },
  {
    id: 83,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 84",
    item_price: 472,
    category: "jewelry",
    featured_value: 81,
    quantity: 0,
  },
  {
    id: 84,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 85",
    item_price: 1166,
    category: "furniture",
    featured_value: 85,
    quantity: 0,
  },
  {
    id: 85,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 86",
    item_price: 1017,
    category: "clothes",
    featured_value: 33,
    quantity: 0,
  },
  {
    id: 86,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 87",
    item_price: 268,
    category: "clothes",
    featured_value: 7,
    quantity: 0,
  },
  {
    id: 87,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 88",
    item_price: 2391,
    category: "furniture",
    featured_value: 45,
    quantity: 0,
  },
  {
    id: 88,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 89",
    item_price: 65,
    category: "toy",
    featured_value: 82,
    quantity: 0,
  },
  {
    id: 89,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 90",
    item_price: 2448,
    category: "electronics",
    featured_value: 88,
    quantity: 0,
  },
  {
    id: 90,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 91",
    item_price: 1163,
    category: "furniture",
    featured_value: 70,
    quantity: 0,
  },
  {
    id: 91,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 92",
    item_price: 519,
    category: "jewelry",
    featured_value: 11,
    quantity: 0,
  },
  {
    id: 92,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 93",
    item_price: 220,
    category: "electronics",
    featured_value: 91,
    quantity: 0,
  },
  {
    id: 93,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 94",
    item_price: 1567,
    category: "toy",
    featured_value: 33,
    quantity: 0,
  },
  {
    id: 94,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 95",
    item_price: 114,
    category: "furniture",
    featured_value: 5,
    quantity: 0,
  },
  {
    id: 95,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 96",
    item_price: 128,
    category: "jewelry",
    featured_value: 11,
    quantity: 0,
  },
  {
    id: 96,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 97",
    item_price: 2123,
    category: "electronics",
    featured_value: 69,
    quantity: 0,
  },
  {
    id: 97,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 98",
    item_price: 335,
    category: "electronics",
    featured_value: 13,
    quantity: 0,
  },
  {
    id: 98,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 99",
    item_price: 1667,
    category: "clothes",
    featured_value: 35,
    quantity: 0,
  },
  {
    id: 99,
    img_src: "../../src/mockimg.jpg",
    item_name: "Example Item 100",
    item_price: 2002,
    category: "toy",
    featured_value: 77,
    quantity: 0,
  },
];
