import React, { useContext, createContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [status, setStatus] = useState("");
  const [newUser, setNewUser] = useState({});

  const login = async (email, password) => {
    try {
      const response = await axios.post("/api/auth/login", { email, password });
      localStorage.setItem("Manazone.Token", response.data.encodedToken);
      localStorage.setItem(
        "Manazone.user",
        JSON.stringify(response.data.foundUser)
      );
      setUser(response.data.foundUser);
      setStatus(response.status);
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
    <AuthContext.Provider value={{ login, signup, user, setUser, status }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
