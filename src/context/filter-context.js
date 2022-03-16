import { createContext, React, useReducer, useContext } from "react";

const FilterContext = createContext();

const initialObj = {
  sortBy: null,
  category: null,
  rating: null,
  sliderValue: 3500,
};

const FilterProvider = ({ children }) => {
  const [filter, filterDispatch] = useReducer(filterReducer, initialObj);

  function filterReducer(state, action) {
    switch (action.type) {
      case "SORT":
        return { ...state, sortBy: action.payload };
      case "RESET":
        return initialObj;
      case "RATING":
        return { ...state, rating: action.payload };
      case "SLIDER":
        return { ...state, sliderValue: action.payload };
      default:
        return state;
    }
  }

  return (
    <FilterContext.Provider value={{ filterDispatch, filter }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
