import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import Carousel2 from "./components/Carousel2";
import BottomNavBar from "./components/BottomNavBar";
import LocationInput from "./components/LocationInput";
import FoodPictures from "./components/FoodPictures";
//import Grid from '@material-ui/core/Grid';

//https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="blank-space-top"></div>
      <div>
        <LocationInput />
       
        <FoodPictures />
        <Carousel2 />
      </div>
      <BottomNavBar />
    </div>
  );
}

export default App;
