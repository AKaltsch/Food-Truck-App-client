import React, { useState } from "react";

import "../../form-styles.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitUser = () => {
    console.log(`email: ${email}`);
    console.log(`password: ${password}`);
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
      <button onClick={submitUser}>Submit</button>
      <br />
    </div>
  );
}

export default Signup;
