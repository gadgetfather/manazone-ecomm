import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "action",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Devil_May_Cry_5.jpg/220px-Devil_May_Cry_5.jpg",
  },
  {
    _id: uuid(),
    categoryName: "RPG",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Elden_Ring_Box_art.jpg/220px-Elden_Ring_Box_art.jpg",
  },
  {
    _id: uuid(),
    categoryName: "sports",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/F1_2021_cover_art.jpg/220px-F1_2021_cover_art.jpg",
  },
];
