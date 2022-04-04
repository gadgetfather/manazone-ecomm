import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import "./LoginPage.css";

export const validate = (values) => {
  const errors = {};
  const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if (!values.email) {
    errors.email = "email is required";
  } else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email format";
  }
  if (!values.password) {
    errors.password = "password is required";
  }
  return errors;
};
const dummyData = {
  email: "adarshbalak@gmail.com",
  password: "adarshBalika123",
};

export function LoginPage() {
  const { login, toastText } = useAuth();
  const navigate = useNavigate();
  const [isSubmit, setIsSubmit] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
    errors: {},
  });
  useEffect(() => {
    if (Object.keys(loginInfo.errors).length === 0 && isSubmit) {
      login(loginInfo.email, loginInfo.password);
    }
  }, [loginInfo.errors]);

  const handleSubmit = (e, values) => {
    e.preventDefault();
    setLoginInfo({ ...loginInfo, errors: validate(values) });
    setIsSubmit(true);
  };

  return (
    <main className="main-content_login">
      {toastText.login ? (
        <div class="toast sucess">
          <p>{toastText.login}</p>
        </div>
      ) : (
        ""
      )}
      <form className="form-container">
        <h1>Login</h1>
        <label htmlFor="username">Email address:</label>
        <input
          className="block-inputs"
          placeholder="jack@gmail.com"
          value={loginInfo.email}
          onChange={(e) =>
            setLoginInfo({ ...loginInfo, email: e.target.value })
          }
          type="text"
        />
        <p className="error-text">{loginInfo.errors.email}</p>
        <label htmlFor="password">password:</label>
        <input
          className="block-inputs"
          value={loginInfo.password}
          onChange={(e) =>
            setLoginInfo({ ...loginInfo, password: e.target.value })
          }
          placeholder="*****"
          type="password"
        />
        <p className="error-text">{loginInfo.errors.password}</p>
        <p>
          <input type="checkbox" /> Remember me
        </p>
        <a className="btn-forgot">Forgot your password?</a>
        <button
          onClick={(e) => {
            e.preventDefault();
            setLoginInfo({
              email: "adarshbalak@gmail.com",
              password: "adarshBalaki123",
              errors: {},
            });
          }}
          className="btn-login btn btn-primary"
        >
          Login with test credentials
        </button>
        <button
          type="submit"
          onClick={(e) => handleSubmit(e, loginInfo)}
          className="btn-login btn btn-primary"
        >
          Login
        </button>
        <Link to="/signup" className="btn-submit-secondary">
          Create New Account <i className="fas fa-chevron-right"></i>
        </Link>
      </form>
    </main>
  );
}
