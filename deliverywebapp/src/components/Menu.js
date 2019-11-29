import React from "react";
import "./Menu.css";

import FoodList from "./FoodList";

class Menu extends React.Component {
  render() {
    return (
      <div className="foodList">
        <FoodList></FoodList>
      </div>
    );
  }
}

export default Menu;
