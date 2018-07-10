import React from "react";
import { Link } from "react-router-dom";

const SignUp = props => {
  return (
    <div>
      <form class="sign-up">
        <h1 class="sign-up-title">Sign up in seconds</h1>
        <input
          type="text"
          class="sign-up-input"
          placeholder="Please enter your email"
          autofocus
        />
        <input
          type="password"
          class="sign-up-input"
          placeholder="Set a password"
        />
        <Link to="/" className="back-button btn btn-danger">
          Cancel
        </Link>
        &nbsp;
        <input type="submit" value="Sign up" class="sign-up-button" />
      </form>
    </div>
  );
};

export default SignUp;
