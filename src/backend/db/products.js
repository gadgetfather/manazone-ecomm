import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Farcry 6",
    price: 2999,
    categoryName: "action",
    stars: 4,
    inStock: true,
    badge: "New",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Far_cry_6_cover.jpg/220px-Far_cry_6_cover.jpg",
    date: new Date("2019-06-28"),
  },
  {
    _id: uuid(),
    title: "Grand Theft Auto V",
    price: 976,
    categoryName: "action",
    stars: 5,
    inStock: true,
    badge: "Old",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Grand_Theft_Auto_V.png/220px-Grand_Theft_Auto_V.png",
    date: new Date("2013-08-17"),
  },
  {
    _id: uuid(),
    title: "Batman: Arkham City",
    price: 565,
    categoryName: "action",
    stars: 4,
    inStock: true,
    badge: "Old",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Batman_Arkham_City_Game_Cover.jpg/220px-Batman_Arkham_City_Game_Cover.jpg",
    date: new Date("2011-09-18"),
  },
  {
    _id: uuid(),
    title: "FIFA 22",
    price: 2999,
    categoryName: "sports",
    stars: 4,
    inStock: true,
    badge: "top-seller",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/FIFA_22_Cover.jpg/220px-FIFA_22_Cover.jpg",

    date: new Date("2021-08-26"),
  },
  {
    _id: uuid(),
    title: "WWE 2K22",
    price: 3299,
    categoryName: "sports",
    stars: 4,
    inStock: true,
    badge: "New",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/WWE_2K22_cover.jpg/220px-WWE_2K22_cover.jpg",
    date: new Date("2022-03-08"),
  },
  {
    _id: uuid(),
    title: "GRID Legends",
    price: 2999,
    categoryName: "sports",
    stars: 4,
    inStock: true,
    badge: "New",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/GRID_Legends_cover_art.jpeg/220px-GRID_Legends_cover_art.jpeg",
    date: new Date("2022-02-25"),
  },
  {
    _id: uuid(),
    title: "ELDEN RING",
    price: 2499,
    categoryName: "RPG",
    stars: 4,
    inStock: true,
    badge: "top-seller",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Elden_Ring_Box_art.jpg/220px-Elden_Ring_Box_art.jpg",
    date: new Date("2022-02-25"),
  },
  {
    _id: uuid(),
    title: "Dying Light 2 Stay Human",
    price: 2499,
    categoryName: "RPG",
    stars: 4,
    inStock: true,
    badge: "New",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Dying_Light_2_cover_art.jpg/220px-Dying_Light_2_cover_art.jpg",
    date: new Date("2021-12-07"),
  },
  {
    _id: uuid(),
    title: "God of War",
    price: 3299,
    categoryName: "RPG",
    stars: 4,
    inStock: true,
    badge: "Old",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/God_of_War_4_cover.jpg/220px-God_of_War_4_cover.jpg",
    date: new Date("2018-04-20"),
  },
  {
    _id: uuid(),
    title: "Cyberpunk 2077",
    price: 2999,
    categoryName: "RPG",
    stars: 2,
    inStock: true,
    badge: "Old",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Cyberpunk_2077_box_art.jpg/220px-Cyberpunk_2077_box_art.jpg",
    date: new Date("2020-12-10"),
  },
  {
    _id: uuid(),
    title: "Watch Dogs Legion",
    price: 1299,
    categoryName: "RPG",
    stars: 1,
    inStock: true,
    badge: "Old",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Watch_Dogs_Legion_cover_art.webp/220px-Watch_Dogs_Legion_cover_art.webp.png",
    date: new Date("2020-10-29"),
  },
];
