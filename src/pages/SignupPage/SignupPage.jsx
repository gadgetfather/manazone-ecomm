import React, { useState } from "react";
import "./SignupPage.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

export function SignupPage() {
  const { signup } = useAuth();
  const [firstName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (email, password, firstName) => {
    signup(email, password, firstName);
  };
  return (
    <main className="main-content_signup">
      <form className="form-container">
        <h1>Signup</h1>
        <label htmlFor="username">Name:</label>
        <input
          className="block-inputs"
          onChange={(e) => setName(e.target.value)}
          placeholder="jack"
          type="text"
        />
        <label htmlFor="username">Email address:</label>
        <input
          className="block-inputs"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jack@gmail.com"
          type="text"
        />
        <label htmlFor="password">password:</label>
        <input
          className="block-inputs"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="*****"
          type="password"
        />
        <p>
          <input type="checkbox" /> I accept all Terms & Conditions
        </p>
        <button
          type="button"
          onClick={() => handleSignup(email, password, firstName)}
          className="btn-submit btn btn-primary"
        >
          Create New Account
        </button>
        <Link to="/login" className="btn-submit-secondary">
          Already have an account <i className="fas fa-chevron-right"></i>
        </Link>
      </form>
    </main>
  );
}
