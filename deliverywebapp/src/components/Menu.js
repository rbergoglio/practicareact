import React from "react";
import "./Menu.css";
import FoodItem from "./FoodItem";
import { Button } from "react-bootstrap";

/*
  <div class="test">
                <img
                  src="https://sifu.unileversolutions.com/image/es-MX/recipe-topvisual/2/1260-709/hamburguesa-clasica-50425188.jpg"
                  class="img"
                />
              </div>
*/
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
