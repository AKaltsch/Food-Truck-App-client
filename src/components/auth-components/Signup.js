import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../../form-styles.css";

function Signup({ postSignup }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const submitUser = () => {
  //   axios
  //     .post("http://localhost:4000/signup", {
  //       email: email,
  //       password: password,
  //     })
  //     .then((result) => {
  //       navigate("/login");
  //     });
  // };

  const handleSignup = (e) => {
    e.preventDefault();
    postSignup(email, password);
  };

  return (
    <div>
      <h1>Signup</h1>
      <form>
        <div className="form-control">
          <label>E-Mail</label>
          <input
            type="new-email"
            name="new-email"
            id="new-email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="new-password"
            name="new-password"
            id="new-password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Confirm Passowrd</label>
          <input
            className=""
            type="text"
            name="passwordConfirmation"
            id="passwordConfirmation"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
      </form>
      <button onClick={handleSignup}>Submit</button>
      <br />
    </div>
  );
}

export default Signup;
