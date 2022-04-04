import React, { useReducer, useContext, createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
const authReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_STATUS":
      return { ...state, status: action.payload };
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
        const path = "/";
        navigate(path);
      } else {
        const path = "/login";
        navigate(path);
      }

      authDispatch({ type: "SET_STATUS", payload: response.status });
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
      localStorage.setItem("Manazone.Token", response.data.encodedToken);
      localStorage.setItem(
        "Manazone.user",
        JSON.stringify(response.data.createdUser)
      );
      console.log(response);
      return response.status;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ authInfo, authDispatch, login, signup, status }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
