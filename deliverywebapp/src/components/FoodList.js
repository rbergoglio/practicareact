import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import axios from "axios";
import FoodItem from "./FoodItem";
import Button from "react-bootstrap/Button";

const Food = props => (
  <div className="container">
    <div className="row" style={{ backgroundColor: "white" }}>
      <div className="col-6 col-sm-6 col-md-10">
        <FoodItem
          foodName={props.food.foodName}
          description={props.food.description}
          price={props.food.price}
          stock={props.food.stock}
          imgUrl={props.food.imgUrl}
        />
      </div>
      <div className="col-6 col-sm-6 col-md-2" style={{ margin: "auto" }}>
        <Button
          style={{
            margin: "10px",
            color: "orange",
            color: "white",
            borderColor: "darkgoldenrod",
            backgroundColor: "darkorange"
          }}
          onClick={() => {
            props.addFood(props.food.price, props.food.foodName);
          }}
          className="button"
        >
          +
        </Button>
        <Button
          style={{
            margin: "10px",
            color: "orange",
            color: "white",
            borderColor: "darkgoldenrod",
            backgroundColor: "darkorange"
          }}
          onClick={() => {
            props.addFood(props.food.price, props.food.foodName);
          }}
        >
          Borrar
        </Button>
      </div>
    </div>
  </div>
);




export default class FoodList extends Component {
  constructor(props) {
    super(props);
    this.addFood = this.addFood.bind(this);
    this.state = {
      food: [],
      plates: [],
      deliveryman: "ddss",
      total: 0,
      address: "aaa"
    };
  }

  
  addFood(price, plate) {
    this.setState({
      total: this.state.total + price,
      plates: this.state.plates.concat(plate)
    });
    alert(
      "Pedido: Total:" +
        this.state.total +
        " Comidas: " +
        this.state.plates +
        "."
    );
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
  /*
  addFood(id) {
    axios
      .get("https://rbergoglio-deliveryapp.herokuapp.com/food/" + id)
      .then(response => {

        console.log(response.data);
      });
  }
*/
  createOrder() {
    const order = {
      plates: this.state.plates,
      deliveryman: this.state.deliveryman,
      total: this.state.total,
      address: this.state.address
    };
    console.log(order);

    axios
      .post("https://rbergoglio-deliveryapp.herokuapp.com/order/add", order)
      .then(res => console.log(res.data))
      .catch(error => {
        console.log(error);
      });
    this.state = {
      food: [],
      plates: [],
      deliveryman: "ddss",
      total: 0,
      address: "aaa"
    };
  }

  foodList() {
    return this.state.food.map(currentfood => {
      return (
        <Food food={currentfood} key={currentfood._id} addFood={this.addFood} />
      );
    });
  }

  render() {
    return (
      <div>
        {this.foodList()}
        <Button style={{
            margin: "10px",
            color: "orange",
            color: "white",
            borderColor: "darkgoldenrod",
            backgroundColor: "darkorange"
          }}
          onClick={() => {
            this.createOrder();
          }}
        >
          Continuar ${this.state.total}
        </Button>

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
