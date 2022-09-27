import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState();

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

  useEffect(() => {
    axios.get("http://localhost:4000/login");
  }, []);

  return (
    <div className="App">
      <Navbar places={places} setPlaces={setPlaces} />
    </div>
  );
}

export default App;
