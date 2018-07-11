import React from "react";
import { Link } from "react-router-dom";

const SignUp = props => {
  return (
    <div>
      <form className="sign-up">
        <h1 className="sign-up-title">Sign up in seconds</h1>
        <input
          type="text"
          className="sign-up-input"
          placeholder="Please enter your email"
          autoFocus
        />
        <input
          type="password"
          className="sign-up-input"
          placeholder="Set a password"
        />
        <Link to="/" className="back-button btn btn-danger">
          Cancel
        </Link>
        &nbsp;
        <input type="submit" value="Sign up" className="sign-up-button" />
      </form>
    </div>
  );
};

export default SignUp;
