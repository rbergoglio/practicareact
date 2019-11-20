import React from "react";
import "./Menu.css";
import FoodItem from "./FoodItem";
import { Button } from "react-bootstrap";
import FoodList from "./FoodList";
import LocationInput from "./LocationInput";

class Menu extends React.Component {
  render() {
    return (
      <div>
        <FoodList></FoodList>
      </div>
    );
  }
}

export default Menu;
