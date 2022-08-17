import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "../../form-styles.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitUser = () => {
    console.log(`email: ${email}`);
    console.log(`password: ${password}`);
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div className="form-control">
          <label>E-Mail</label>
          <input
            className=""
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div className="form-control">
          <label>Password</label>
          <input
            className=""
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>
      <button onClick={submitUser}>Submit</button>
      <br />
      <NavLink to="/signup">Create an Account</NavLink>
    </div>
  );
}

export default Login;
