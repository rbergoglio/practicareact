import React from "react";
import "./Menu.css";
import FoodItem from "./FoodItem";
import { Button } from "react-bootstrap";
import FoodList from "./FoodList";

class Menu extends React.Component {
  render() {
    return (
      <div>
        <FoodList></FoodList>

        <Button>Continuar $TOTAL</Button>
      </div>
    );
  }
}

export default Menu;
