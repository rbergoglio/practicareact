import React from "react";
import "./Menu.css";
import FoodItem from "./FoodItem";
import { Button } from "react-bootstrap";
import FoodList from "./FoodList";
import CartTest from "./CartTest";
import LocationInput from "./LocationInput";

class Menu extends React.Component {
  render() {
    return (
      <div className="foodList">
        <FoodList></FoodList>
        <CartTest></CartTest>
      </div>
    );
  }
}

export default Menu;
