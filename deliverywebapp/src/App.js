import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import BottomNavBar from "./components/BottomNavBar";
import LocationInput from "./components/LocationInput";
import FoodPictures from "./components/FoodPictures";

function App() {
  return (
    <div className="App">
      <NavBar />

      <div className="blank-space-top"></div>
      <div>
        <LocationInput />
        <Carousel />
        <FoodPictures />
      </div>
      <BottomNavBar />
    </div>
  );
}

export default App;
