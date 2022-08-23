import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // const getLogin = axios.get("http://localhost:4000/login").then((res) => {
  //   console.log(res);
  // });
  //

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    fetch("http://localhost:4000/login").then((res) => {
      if (res.ok) {
        console.log("SUCCESS!!!");
        console.log(res);
      } else {
        console.log("unsuccessful");
      }
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
