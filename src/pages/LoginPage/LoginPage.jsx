import React from "react";
import "./LoginPage.css";
export function LoginPage() {
  return (
    <main className="main-content_login">
      <div className="form-container">
        <h1>Login</h1>
        <label htmlFor="username">Email address:</label>
        <input
          className="block-inputs"
          placeholder="jack@gmail.com"
          type="text"
        />
        <label htmlFor="password">password:</label>
        <input className="block-inputs" placeholder="*****" type="password" />
        <p>
          <input type="checkbox" /> Remember me
        </p>
        <a className="btn-forgot">Forgot your password?</a>
        <a className="btn-login btn btn-primary">Login</a>
        <a className="btn-submit-secondary">
          Create New Account <i className="fas fa-chevron-right"></i>
        </a>
      </div>
    </main>
  );
}
