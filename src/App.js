import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getLogin = axios.get("http://localhost:4000/login").then((res) => {
    console.log(res);
  });

  useEffect(() => {
    axios.get("http://localhost:4000/login").then((res) => {
      if (!res) {
        console.log("unsuccessful");
      } else {
        console.log("SUCCESS!!!");
        console.log(res);
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
