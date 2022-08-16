import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <br />
      <NavLink to="/signup">Create an Account</NavLink>
    </div>
  );
}

export default Login;
