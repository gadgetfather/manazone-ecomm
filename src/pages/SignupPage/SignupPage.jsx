import React, { useState, useEffect } from "react";
import "./SignupPage.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

export const validate = (values) => {
  const errors = {};
  const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (!values.firstName) {
    errors.firstName = "Name is required";
  }
  if (!values.email) {
    errors.email = "email is required";
  } else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email format";
  }
  if (!values.password) {
    errors.password = "password is required";
  }
  if (!values.termsBox) {
    errors.termsBox = "Accept terms & conditions";
  }
  return errors;
};
export function SignupPage() {
  const { signup, toastText } = useAuth();
  const [isSubmit, setIsSubmit] = useState(false);

  const [formValues, setFormValues] = useState({
    firstName: "",
    email: "",
    password: "",
    termsBox: false,
    errors: {},
  });
  useEffect(() => {
    if (
      Object.keys(formValues.errors).length === 0 &&
      isSubmit &&
      formValues.termsBox
    ) {
      signup(formValues.email, formValues.password, formValues.firstName);
    }
  }, [formValues.errors]);
  const handleSubmit = (e, data) => {
    e.preventDefault();
    setIsSubmit(true);
    setFormValues({ ...formValues, errors: validate(data) });
  };

  return (
    <main className="main-content_signup">
      {toastText.signup ? (
        <div class="toast sucess">
          <p>{toastText.signup}</p>
        </div>
      ) : (
        ""
      )}
      <form className="form-container">
        <h1>Signup</h1>
        <label htmlFor="username">Name:</label>
        <input
          className="block-inputs"
          onChange={(e) =>
            setFormValues({ ...formValues, firstName: e.target.value })
          }
          placeholder="jack"
          type="text"
          value={formValues.firstName}
        />

        <p className="error-text">{formValues.errors.firstName}</p>

        <label htmlFor="email">Email address:</label>
        <input
          className="block-inputs"
          onChange={(e) =>
            setFormValues({ ...formValues, email: e.target.value })
          }
          placeholder="jack@gmail.com"
          type="email"
          value={formValues.email}
        />
        <p className="error-text">{formValues.errors.email}</p>
        <label htmlFor="password">password:</label>
        <input
          className="block-inputs"
          onChange={(e) =>
            setFormValues({ ...formValues, password: e.target.value })
          }
          placeholder="*****"
          type="password"
          value={formValues.password}
        />

        <p className="error-text">{formValues.errors.password}</p>

        <p>
          <input
            checked={formValues.termsBox}
            onChange={() =>
              setFormValues({ ...formValues, termsBox: !formValues.termsBox })
            }
            type="checkbox"
          />{" "}
          I accept all Terms & Conditions
        </p>
        <p className="error-text">{formValues.errors.termsBox}</p>
        <button
          type="submit"
          onClick={(e) => handleSubmit(e, formValues)}
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
