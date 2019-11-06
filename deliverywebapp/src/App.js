import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import BottomNavBar from "./components/BottomNavBar";
import LocationInput from "./components/LocationInput";

function App() {
  return (
    <div className="App">
      <NavBar />

      <div className="blank-space-top"></div>
      <div>
        <img src={"https://picsum.photos/200"} alt="" />
        <LocationInput />
        <Carousel />
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
      <BottomNavBar />
    </div>
  );
}

export default App;
