import React from "react";
import FoodPicture from "./FoodPicture";

//todo: mejorar lo de foodpicture, a
class FoodPictures extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <FoodPicture
            src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            foodName="Pancake con frutas"
          />
          <FoodPicture
            src="https://images.pexels.com/photos/1352270/pexels-photo-1352270.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            foodName="Milanesa con fritas"
          />
          <FoodPicture
            src="https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            foodName="Sopa de calabaza"
          />
          <FoodPicture
            src="https://images.pexels.com/photos/1059943/pexels-photo-1059943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            foodName="Nuggets con crema de albahaca"
          />
        </div>
      </div>
    );
  }
}

export default FoodPictures;
