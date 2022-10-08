import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const [data, setData] = useState([]);

  const [places, setPlaces] = useState([]);

  const navigate = useNavigate();

  /////NEED THIS HERE TO DELETE SESSIONS FROM THE DB!!!!!!!//
  axios.defaults.withCredentials = true;
  // axios.defaults.headers.common = true;

  useEffect(() => {
    axios
      .get("http://localhost:4000/places", {
        withCredentials: true,
      })
      .then((result) => {
        setPlaces(result.data.places);
      });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:4000/login", {
        withCredentials: true,
        //Token being received as null on the backend
        headers: {
          Authorization: `Bearer ${token}`,
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

  // const getUser = async () => {
  //   await axios
  //     .get(
  //       "http://localhost:4000/login",
  //       {
  //         withCredentials: true,
  //       }
  //       // {
  //       //   headers: {
  //       //     "x-access-token": localStorage.getItem("token"),
  //       //   },
  //       // }
  //     )
  //     .then((res) => console.log(res));
  // };

  const postLogin = async (email, password) => {
    await axios
      .post("http://localhost:4000/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data.auth) {
          console.log(response.data);
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
    console.log("Logged out!!!");
    navigate("/login");
  };

  const deletePlace = (productId) => {
    axios
      .post("http://localhost:4000/delete-place", {
        productId: productId,
      })
      .then((res) => {
        console.log(res);
      });
  };

  const postSignup = (email, password) => {
    axios.post("http://localhost:4000/signup", {
      email: email,
      password: password,
    });
  };

  const handleLogout = () => {
    localStorage.clear();
    setUser({});
    setLoggedIn(false);
    postLogout();
  };

  return (
    <div className="App">
      {/* <button onClick={getUser}>User</button> */}
      <Navbar
        places={places}
        setPlaces={setPlaces}
        postLogin={postLogin}
        handleLogout={handleLogout}
        postSignup={postSignup}
        user={user}
        deletePlace={deletePlace}
      />
    </div>
  );
}

export default App;
