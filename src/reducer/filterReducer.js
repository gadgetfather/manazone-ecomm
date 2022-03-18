import { initialObj } from "../context/filter-context";

export function filterReducer(state, action) {
  switch (action.type) {
    case "SORT":
      return { ...state, sortBy: action.payload };
    case "RESET":
      return initialObj;
    case "RATING":
      return { ...state, rating: action.payload };
    case "SLIDER":
      return { ...state, sliderValue: action.payload };
    case "ACTION":
      return { ...state, categoryAction: !state.categoryAction };
    case "SPORTS":
      return { ...state, categorySports: !state.categorySports };
    case "RPG":
      return { ...state, categoryRPG: !state.categoryRPG };
    default:
      return state;
  }
}
