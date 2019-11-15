import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import FoodList from "./components/FoodList";
import Carousel from "./components/Carousel";
import Carousel2 from "./components/Carousel2";
import BottomNavBar from "./components/BottomNavBar";
import LocationInput from "./components/LocationInput";
import FoodPictures from "./components/FoodPictures";
import { Grid, Row, Col } from "react-flexbox-grid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";

//https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/

function App() {
  return (
    <Router>
      <NavBar />

      <Route path="/" exact component={WelcomePage} />

      <div className="blank-space-top"></div>

      <BottomNavBar />
    </Router>
  );
}

export default App;
