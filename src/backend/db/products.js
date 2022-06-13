import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    data_id: 101,
    title: "Farcry 6",
    price: 2999,
    categoryName: "action",
    stars: 3,
    inStock: true,
    badge: "New",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Far_cry_6_cover.jpg/220px-Far_cry_6_cover.jpg",
    releaseOn: new Date("2019-06-28"),
  },
  {
    _id: uuid(),
    data_id: 102,
    title: "Grand Theft Auto V",
    price: 976,
    categoryName: "action",
    stars: 5,
    inStock: true,

    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Grand_Theft_Auto_V.png/220px-Grand_Theft_Auto_V.png",
    releaseOn: new Date("2013-08-17"),
  },
  {
    _id: uuid(),
    data_id: 103,

    title: "Batman: Arkham City",
    price: 565,
    categoryName: "action",
    stars: 3,
    inStock: true,

    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Batman_Arkham_City_Game_Cover.jpg/220px-Batman_Arkham_City_Game_Cover.jpg",
    releaseOn: new Date("2011-09-18"),
  },
  {
    _id: uuid(),
    data_id: 104,

    title: "FIFA 22",
    price: 2999,
    categoryName: "sports",
    stars: 4,
    inStock: true,
    badge: "top-seller",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/FIFA_22_Cover.jpg/220px-FIFA_22_Cover.jpg",

    releaseOn: new Date("2021-08-26"),
  },
  {
    _id: uuid(),
    data_id: 105,

    title: "WWE 2K22",
    price: 3299,
    categoryName: "sports",
    stars: 4,
    inStock: true,
    badge: "New",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/WWE_2K22_cover.jpg/220px-WWE_2K22_cover.jpg",
    releaseOn: new Date("2022-03-08"),
  },
  {
    _id: uuid(),
    data_id: 106,

    title: "GRID Legends",
    price: 2999,
    categoryName: "sports",
    stars: 4,
    inStock: true,
    badge: "New",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/GRID_Legends_cover_art.jpeg/220px-GRID_Legends_cover_art.jpeg",
    releaseOn: new Date("2022-02-25"),
  },
  {
    _id: uuid(),
    data_id: 107,

    title: "ELDEN RING",
    price: 2499,
    categoryName: "RPG",
    stars: 4,
    inStock: true,
    badge: "top-seller",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Elden_Ring_Box_art.jpg/220px-Elden_Ring_Box_art.jpg",
    releaseOn: new Date("2022-02-25"),
  },
  {
    _id: uuid(),
    data_id: 108,

    title: "Dying Light 2 Stay Human",
    price: 2499,
    categoryName: "RPG",
    stars: 4,
    inStock: true,
    badge: "New",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Dying_Light_2_cover_art.jpg/220px-Dying_Light_2_cover_art.jpg",
    releaseOn: new Date("2021-12-07"),
  },
  {
    _id: uuid(),
    data_id: 109,

    title: "God of War",
    price: 3299,
    categoryName: "RPG",
    stars: 3,
    inStock: true,

    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/God_of_War_4_cover.jpg/220px-God_of_War_4_cover.jpg",
    releaseOn: new Date("2018-04-20"),
  },
  {
    _id: uuid(),
    data_id: 110,

    title: "Cyberpunk 2077",
    price: 2999,
    categoryName: "RPG",
    stars: 2,
    inStock: true,

    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Cyberpunk_2077_box_art.jpg/220px-Cyberpunk_2077_box_art.jpg",
    releaseOn: new Date("2020-12-10"),
  },
  {
    _id: uuid(),
    data_id: 111,

    title: "Watch Dogs Legion",
    price: 1299,
    categoryName: "RPG",
    stars: 1,
    inStock: true,

    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Watch_Dogs_Legion_cover_art.webp/220px-Watch_Dogs_Legion_cover_art.webp.png",
    releaseOn: new Date("2020-10-29"),
  },
  {
    _id: uuid(),
    data_id: 112,

    title: "Deathloop",
    price: 2499,
    categoryName: "RPG",
    stars: 4,
    inStock: true,

    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Deathloop_cover_art.jpg/220px-Deathloop_cover_art.jpg",
    releaseOn: new Date("2020-10-29"),
  },
  {
    _id: uuid(),
    data_id: 113,

    title: "No Man's Sky",
    price: 899,
    categoryName: "RPG",
    stars: 3,
    inStock: true,

    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/No_Man%27s_Sky.jpg/220px-No_Man%27s_Sky.jpg",
    releaseOn: new Date("2020-10-29"),
  },
  {
    _id: uuid(),
    data_id: 114,

    title: "Forza Horizon 5",
    price: 3499,
    categoryName: "sports",
    stars: 3,
    inStock: true,

    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Forza_Horizon_5_cover_art.jpg/220px-Forza_Horizon_5_cover_art.jpg",
    releaseOn: new Date("2020-10-29"),
  },
  {
    _id: uuid(),
    data_id: 115,

    title: "Call of Duty Black ops II",
    price: 1319,
    categoryName: "action",
    stars: 5,
    inStock: true,

    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Call_of_Duty_Black_Ops_II_box_artwork.png/220px-Call_of_Duty_Black_Ops_II_box_artwork.png",
    releaseOn: new Date("2020-10-29"),
  },
  {
    _id: uuid(),
    data_id: 116,

    title: "Witcher 3",
    price: 160,
    categoryName: "RPG",
    stars: 5,
    inStock: true,

    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Witcher_3_cover_art.jpg/220px-Witcher_3_cover_art.jpg",
    releaseOn: new Date("2020-10-29"),
  },
  {
    _id: uuid(),
    data_id: 117,

    title: "Tekken 7",
    price: 989,
    categoryName: "action",
    stars: 3,
    inStock: true,

    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Official_Tekken_7_Logo.jpg/220px-Official_Tekken_7_Logo.jpg",
    releaseOn: new Date("2020-10-29"),
  },
  {
    _id: uuid(),
    data_id: 118,

    title: "NFL 22",
    price: 2999,
    categoryName: "sports",
    stars: 2,
    inStock: true,

    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Madden_22_cover.jpg/220px-Madden_22_cover.jpg",
    releaseOn: new Date("2020-10-29"),
  },
];
