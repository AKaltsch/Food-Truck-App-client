import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
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
