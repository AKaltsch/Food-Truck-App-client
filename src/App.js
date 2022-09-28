import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState();

  const [places, setPlaces] = useState([]);

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:4000/places", {
        withCredentials: true,
      })
      .then((result) => {
        setPlaces(result.data.places);
      })
      .then(console.log(places));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:4000/login", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
      });
  }, []);

  // const isAuthenticated = () => {
  //   axios
  //     .get("http://localhost:4000/isUserAuth", {
  //       headers: {
  //         "x-access-token": localStorage.getItem("token"),
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     });
  // };

  const getUser = async () => {
    const res = await axios
      .get("http://localhost:4000/login", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((res) => console.log(res));
    console.log(res);
  };

  const postLogin = (email, password) => {
    axios
      .post(
        "http://localhost:4000/login",
        // {
        //   headers: {
        //     "Content-Type": "application/json",
        //     Accept: "application/json",
        //   },
        // },
        {
          email: email,
          password: password,
        }
      )
      .then((response) => {
        console.log(response);
        if (response.data.auth) {
          setUser(response.data.user);
          setLoggedIn(true);
          localStorage.setItem("token", response.data.token);
          console.log("logged in!!!");
        }
      })
      .catch((err) => console.log(err));
  };

  const postLogout = () => {
    axios.post("http://localhost:4000/logout");
  };

  const postSignup = (email, password) => {
    axios.post("http://localhost:4000/signup", {
      email: email,
      password: password,
    });
  };

  const handleLogout = () => {
    console.log("handling logout");
    localStorage.clear();
    setUser(null);
    setLoggedIn(false);
    postLogout();
  };

  return (
    <div className="App">
      <button onClick={getUser}>USER</button>
      <Navbar
        places={places}
        setPlaces={setPlaces}
        postLogin={postLogin}
        handleLogout={handleLogout}
        postSignup={postSignup}
      />
    </div>
  );
}

export default App;
