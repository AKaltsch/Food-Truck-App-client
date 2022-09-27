import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import axios from "axios";

import "../../form-styles.css";

function Login({ postLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

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

  const handleLogin = (e) => {
    e.preventDefault();
    postLogin(email, password);
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
      <button onClick={handleLogin}>Submit</button>
      <br />
      <br />
      <NavLink to="/signup">Create an Account</NavLink>
    </div>
  );
}

export default Login;
