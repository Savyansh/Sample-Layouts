import React from "react";
import "./styles.css";

function Login() {
  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form>
        <div className="input-container">
          <input
            type="text"
            name="uname"
            placeholder="Enter Username"
            required
          />
        </div>
        <div className="input-container">
          <input type="password" name="pass" placeholder="Password" required />
        </div>
        <div className="button-container">
          <input type="submit" value="Sign In" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="title">Sign up now</div>
      <div className="login-form">{renderForm}</div>
    </div>
  );
}

export default Login;
