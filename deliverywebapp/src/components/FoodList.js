import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import axios from "axios";
import FoodItem from "./FoodItem";
import Button from "react-bootstrap/Button";
/*
<tr>
  <td>{props.food.foodName}</td>
  <td>{props.food.description}</td>
  <td>{props.food.price}</td>
  <td>{props.food.stock}</td>
</tr>;
*/
const Food = props => (
  <div>
    <FoodItem
      foodName={props.food.foodName}
      description={props.food.description}
      price={props.food.price}
      stock={props.food.stock}
      imgUrl={props.food.imgUrl}
    />
    <Button onClick={() => alert(props.food.price)}>as</Button>
  </div>
);

export default class FoodList extends Component {
  constructor(props) {
    super(props);
    this.state = { food: [] };
  }

  componentDidMount() {
    axios
      .get("https://rbergoglio-deliveryapp.herokuapp.com/food")
      .then(response => {
        this.setState({ food: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  addFood(id) {
    axios
      .get("https://rbergoglio-deliveryapp.herokuapp.com/food/" + id)
      .then(response => {
        console.log(response.data);
      });
  }

  foodList() {
    return this.state.food.map(currentfood => {
      return <Food food={currentfood} key={currentfood._id} />;
    });
  }

  render() {
    return (
      <div>
        {this.foodList()}
        {/*  <Table responsive striped bordered size="sm">
          <thead className="thead-light">
            <tr>
              <th>Comida</th>
              <th>Descripcion</th>
              <th>Precio</th>
              <th>Agregar/Quitar</th>
            </tr>
          </thead>
          <tbody></tbody>
        </Table>*/}
      </div>
    );
  }
}
