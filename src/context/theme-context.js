import { react, createContext, useContext, useState } from "react";
import { useEffect } from "react";

const themeContext = createContext();

const ThemeProvider = ({ children }) => {
  function getValue() {
    const value = JSON.parse(localStorage.getItem("theme"));
    if (value !== null) {
      return value;
    } else {
      return value;
    }
  }
  function bodyColor(theme) {
    if (theme) {
      document.body.style.backgroundColor = "#fff";
    } else document.body.style.backgroundColor = "rgb(28, 27, 27)";
    document.body.style.transition = "0.1s ease-in-out";
  }
  useEffect(getValue, []);
  const [theme, setTheme] = useState(getValue);
  bodyColor(theme);
  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};

const useTheme = () => useContext(themeContext);
export { useTheme, ThemeProvider };
