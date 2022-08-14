import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MyPlaces from "./components/MyPlaces";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myplaces" element={<MyPlaces />} />
      </Routes>
    </div>
  );
}

export default App;
