import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import axios from "axios";
import FoodItem from "./FoodItem";
import Button from "react-bootstrap/Button";
/*
<div className="item">
  <div className="buttons">
    <span className="delete-btn" />
    <span className="like-btn" />
  </div>
  <div className="image">
    <img alt="" src="item-1.png" />
  </div>
  <div className="description">
    <span>Common Projects</span>
    <span>Bball High</span>
    <span>White</span>
  </div>
  <div className="quantity">
    <button name="button" className="plus-btn" type="button">
      <img alt="" src="plus.svg" />
    </button>
    <input name="name" type="text" defaultValue={1} />
    <button name="button" className="minus-btn" type="button">
      <img alt="" src="minus.svg" />
    </button>
  </div>
  <div className="total-price">$549</div>
</div>;
*/
const Food = props => (
  <div
    className="container"
    style={{
      backgroundColor: "white"
    }}
  >
    <div className="row">
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
            props.removeFood(props.food.foodName);
          }}
        >
          -
        </Button>
        TOT
      </div>
    </div>
  </div>
);

var cart = {};

export default class FoodList extends Component {
  constructor(props) {
    super(props);

    this.addFood = this.addFood.bind(this);
    this.clearFood = this.clearFood.bind(this);
    this.removeFood = this.removeFood.bind(this);

    this.state = {
      food: [],
      plates: [],
      deliveryman: "ddss",
      total: 0,
      address: "aaa",
      cart: []
    };
  }

  addFood(price, plate) {
    var joined = this.state.cart.concat(plate);
    this.setState({
      total: this.state.total + price,
      plates: this.state.plates.concat(plate),
      cart: joined
    });

    alert(
      "Pedido: Total:" +
        this.state.total +
        " Comidas: " +
        this.state.plates +
        "." +
        JSON.stringify(this.state.cart)
    );
  }

  clearFood() {
    this.setState({
      total: 0,
      plates: []
    });
    alert("Carrito borrado");
  }

  removeFood(plate) {
    for (var i = this.state.cart.length - 1; i >= 0; i--) {
      if (JSON.stringify(this.state.cart[i].plate).slice(1, -1) == plate) {
        this.setState({
          cart: this.state.cart.splice(i, 1)
        });
      }
    }
    alert(JSON.stringify(this.state.cart));
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
      .then(response => {
        this.setState({
          plates: [],
          deliveryman: "ddss",
          total: 0,
          address: "aaa"
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  foodList() {
    return this.state.food.map(currentfood => {
      if (currentfood.stock > 0) {
        return (
          <Food
            food={currentfood}
            key={currentfood._id}
            addFood={this.addFood}
            clearFood={this.clearFood}
            removeFood={this.removeFood}
          />
        );
      }
    });
  }

  render() {
    return (
      <div>
        {this.foodList()}
        <Button
          style={{
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
