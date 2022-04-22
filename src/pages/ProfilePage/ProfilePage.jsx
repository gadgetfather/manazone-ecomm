import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import "./ProfilePage.css";
export function ProfilePage() {
  const { authInfo } = useAuth();
  return (
    <main className="main-content_error">
      <div className="form-container">
        <h1>Profile</h1>
        <div className="information-field">
          <span>First name:</span>
          <span>{authInfo.user.firstName}</span>
        </div>
        <div className="information-field">
          <span>Last name:</span>
          <span>{authInfo.user.lastName}</span>
        </div>
        <div className="information-field">
          <span>Email:</span>
          <span>{authInfo.user.email}</span>
        </div>
      </div>
      <Link className="btn btn-primary" to={"/"}>
        Go back
      </Link>
    </main>
  );
}
