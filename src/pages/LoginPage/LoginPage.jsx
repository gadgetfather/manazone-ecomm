import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import "./LoginPage.css";

export function LoginPage() {
  const {
    login,
    authInfo: { status },
  } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLoginTest = (email, password) => {
    login(email, password);
    const path = "/";
    navigate(path);
  };

  const handleLogin = (email, password) => {
    login(email, password);
    if (status == 200) {
      const path = "/";
      navigate(path);
    } else {
      const path = "/login";
      navigate(path);
    }
  };

  return (
    <main className="main-content_login">
      <div className="form-container">
        <h1>Login</h1>
        <label htmlFor="username">Email address:</label>
        <input
          className="block-inputs"
          placeholder="jack@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
        />
        <label htmlFor="password">password:</label>
        <input
          className="block-inputs"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="*****"
          type="password"
        />
        <p>
          <input type="checkbox" /> Remember me
        </p>
        <a className="btn-forgot">Forgot your password?</a>
        <button
          onClick={() => handleLoginTest("123", "123")}
          className="btn-login btn btn-primary"
        >
          Login with test credentials
        </button>
        <button
          onClick={() => handleLogin(email, password)}
          className="btn-login btn btn-primary"
        >
          Login
        </button>
        <Link to="/signup" className="btn-submit-secondary">
          Create New Account <i className="fas fa-chevron-right"></i>
        </Link>
      </div>
    </main>
  );
}
