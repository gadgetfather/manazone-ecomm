import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";
export function ErrorPage() {
  return (
    <main className="main-content_error">
      <h2>Oops... Nothing is here!</h2>
      <Link className="btn btn-primary" to={"/"}>
        Go back
      </Link>
    </main>
  );
}
