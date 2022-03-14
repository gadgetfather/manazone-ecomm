import React from "react";
import "./SignupPage.css";
export function SignupPage() {
  return (
    <main className="main-content_signup">
      <div className="form-container">
        <h1>Signup</h1>
        <label htmlFor="username">Email address:</label>
        <input
          className="block-inputs"
          placeholder="jack@gmail.com"
          type="text"
        />
        <label htmlFor="password">password:</label>
        <input className="block-inputs" placeholder="*****" type="text" />
        <p>
          <input type="checkbox" /> I accept all Terms & Conditions
        </p>
        <a className="btn-submit btn btn-primary">Create New Account</a>
        <a className="btn-submit-secondary">
          Already have an account <i className="fas fa-chevron-right"></i>
        </a>
      </div>
    </main>
  );
}
