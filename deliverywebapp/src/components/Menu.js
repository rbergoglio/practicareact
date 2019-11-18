import React from "react";
import "./Menu.css";
import FoodItem from "./FoodItem";
import { Button } from "react-bootstrap";


class Menu extends React.Component {
  render() {
    return (
      <div>
        <FoodItem foodName="Empanada" price="60"></FoodItem>
        <FoodItem foodName="Empanada" price="60"></FoodItem>
        <FoodItem foodName="Empanada" price="60"></FoodItem>
        <FoodItem foodName="Empanada" price="60"></FoodItem>
        <FoodItem foodName="Empanada" price="60"></FoodItem>
        <FoodItem foodName="Empanada" price="60"></FoodItem>

        <Button>Continuar $TOTAL</Button>
      </div>
    );
  }
}

export default Menu;
