import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MyPlaces from "./components/MyPlaces";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Places from "./components/Places";
import Place from "./components/Place";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<Places />} />
        <Route path="/places/:id" element={<Place />} />
        <Route path="/myplaces" element={<MyPlaces />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
