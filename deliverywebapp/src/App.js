import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import Carousel2 from "./components/Carousel2";
import BottomNavBar from "./components/BottomNavBar";
import LocationInput from "./components/LocationInput";
import FoodPictures from "./components/FoodPictures";
import { Grid, Row, Col } from "react-flexbox-grid";

//https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="blank-space-top"></div>
      <Row>
        <Col xs={12} sm={3} md={2} lg={1} />
        <Col
          xs={6}
          sm={6}
          md={8}
          lg={10}
          style={{ "background-color": "green" }}
        >
          <FoodPictures />
          <Carousel2 />
        </Col>
        <Col xs={6} sm={3} md={2} lg={1} />
      </Row>

      <BottomNavBar />
    </div>
  );
}

export default App;
