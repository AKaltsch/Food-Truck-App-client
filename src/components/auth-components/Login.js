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
        if (!response.data.message) {
          console.log("failed to login!");
          setLoggedIn(false);
        } else {
          console.log("login successful!!");
          console.log(response.data);
          setLoggedIn(true);
        }
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
    </div>
  );
}

export default Login;
