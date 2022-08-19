import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage;
    // console.log(token);
    axios.get("http://localhost:4000/login").then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
