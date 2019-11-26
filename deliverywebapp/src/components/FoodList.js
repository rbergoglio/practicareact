import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import axios from "axios";
import FoodItem from "./FoodItem";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
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
            props.removeFood(props.food.foodName, props.food.price);
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
      //plates: [],
      deliveryman: "ddss",
      total: 0,
      address: "aaa",
      cart: []
    };
  }

  addFood(price, plate) {
    this.setState(
      {
        total: this.state.total + price,
        //plates: this.state.plates.concat(plate),
        cart: this.state.cart.concat(plate)
      },
      () => alert(this.state.cart)
    );
  }

  clearFood() {
    this.setState(
      {
        total: 0,
        cart: []
        //plates: []
      },
      () => alert("Carrito borrado")
    );
  }

  removeFood(plate, price) {
    let index = this.state.cart.indexOf(plate);

    //alert(typeof this.state.cart + "spliced: " + arr);
    alert(index);
    if (index > -1) {
      this.setState(prevState => ({
        cart: prevState.cart
          .slice(0, index)
          .concat(prevState.cart.slice(index + 1)),
        total: prevState.total - price
      }));
    }
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
      plates: this.state.cart,
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
          cart: [],
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

  cartList() {
    return this.state.cart.map(currentitem => {
      return <ListGroup.Item>{currentitem}</ListGroup.Item>;
    });
  }

  render() {
    return (
      <div>
        {this.foodList()}

        <ListGroup>
          <ListGroup.Item>Carrito</ListGroup.Item>
          {this.cartList()}
          <ListGroup.Item>
            {" "}
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
            <Button
              style={{
                margin: "10px",
                color: "orange",
                color: "white",
                borderColor: "darkgoldenrod",
                backgroundColor: "darkorange"
              }}
              onClick={() => {
                this.clearFood();
              }}
            >
              Limpiar Carrito
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}
