import React, { useReducer, useContext, createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
const authReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };

    default:
      break;
  }
};

const initalObj = {
  user: {},
  status: "",
  newUser: {},
};

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [authInfo, authDispatch] = useReducer(authReducer, initalObj);
  const [toastText, setToastText] = useState({ login: "", signup: "" });
  const login = async (email, password) => {
    try {
      const response = await axios.post("/api/auth/login", { email, password });

      if (response.status == 200) {
        localStorage.setItem("Manazone.Token", response.data.encodedToken);
        localStorage.setItem(
          "Manazone.user",
          JSON.stringify(response.data.foundUser)
        );
        authDispatch({ type: "SET_USER", payload: response.data.foundUser });
        setToastText({
          ...toastText,
          login: "Login sucessful... Welcome Back!",
        });
        setTimeout(() => {
          navigate("/");
          setToastText({ ...toastText, signup: "" });
        }, 1000);
      } else {
        const path = "/login";
        navigate(path);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const signup = async (email, password, firstName) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        email,
        password,
        firstName,
      });

      if (response.status === 201) {
        setToastText({ ...toastText, signup: "Signup Complete" });
        localStorage.setItem("Manazone.Token", response.data.encodedToken);
        localStorage.setItem(
          "Manazone.user",
          JSON.stringify(response.data.createdUser)
        );
        authDispatch({ type: "SET_USER", payload: response.data.createdUser });

        setTimeout(() => {
          navigate("/");
          setToastText({ ...toastText, signup: "" });
        }, 1000);
      }
    } catch (error) {
      if (error) {
        setToastText({ ...toastText, signup: "User already exists" });
        setTimeout(() => {
          setToastText({ ...toastText, signup: "" });
        }, 1000);
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{ authInfo, authDispatch, login, signup, toastText }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
