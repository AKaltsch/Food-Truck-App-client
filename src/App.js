import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  //bottom comments go here
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    console.log(localStorage);
    axios
      .get("http://localhost:4000/places")
      .then((result) => {
        setPlaces(result.data.places);
      })
      .then(console.log(places));
  }, []);

  return (
    <div className="App">
      <Navbar places={places} setPlaces={setPlaces} />
    </div>
  );
}

export default App;

// const [isLoggedIn, setIsLoggedIn] = useState(false);

// const getLogin = axios.get("http://localhost:4000/login").then((res) => {
//   console.log(res);
// });

// useEffect(() => {
//   axios.get("http://localhost:4000/login").then((res) => {
//     if (!res) {
//       console.log("unsuccessful");
//     } else {
//       console.log("SUCCESS!!!");
//       console.log(res);
//     }
//   });
// }, []);
