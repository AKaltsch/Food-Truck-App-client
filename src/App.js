import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState();

  const [places, setPlaces] = useState([]);

  useEffect(() => {
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

  // const postLogin = async () => {
  //   const response = await axios
  //     .post("http://localhost:4000/login", {
  //       email: email,
  //       password: password,
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       if (!response.data.auth) {
  //         console.log("failed to login!");
  //         setLoggedIn(false);
  //       } else {
  //         console.log("login successful!!");
  //         localStorage.setItem("token", response.data.token);
  //         setLoggedIn(true);
  //       }
  //     });
  //   console.log(response);
  // };

  const postLogin = (email, password) => {
    axios
      .post("http://localhost:4000/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data.auth) {
          setUser(response.data.user);
          setLoggedIn(true);
          localStorage.setItem("token", response.data.token);
          console.log("logged in!!!");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <Navbar places={places} setPlaces={setPlaces} postLogin={postLogin} />
    </div>
  );
}

export default App;
