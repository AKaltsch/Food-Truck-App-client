import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import axios from "axios";

import "../../form-styles.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const postLogin = () => {
    axios
      .post("http://localhost:4000/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (!response.data.auth) {
          console.log("failed to login!");
          setLoggedIn(false);
        } else {
          console.log("login successful!!");
          localStorage.setItem("token", response.data.token);
          setLoggedIn(true);
        }
      });
  };

  const isAuthenticated = () => {
    axios
      .get("http://localhost:4000/isUserAuth", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div className="form-control">
          <label>E-Mail</label>
          <input
            type="user-email"
            name="user-email"
            id="user-email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div className="form-control">
          <label>Password</label>
          <input
            type="user-password"
            name="user-password"
            id="user-password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>
      <button onClick={postLogin}>Submit</button>
      <br />
      <br />
      <NavLink to="/signup">Create an Account</NavLink>

      {loggedIn && (
        <button onClick={isAuthenticated}>Check Authentication</button>
      )}
    </div>
  );
}

export default Login;
