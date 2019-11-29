import React, { Component } from "react";
import axios from "axios";
import FoodItem from "./FoodItem";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { Row, Col } from "react-flexbox-grid";
import Modal from "react-bootstrap/Modal";
import LeafletMap from "./LeafletMap";
import Form from "react-bootstrap/Form";
import "./FoodList.css";

const Food = props => (
  <div
    style={{
      backgroundColor: "white"
    }}
  >
    <div className="row" style={{ margin: "0px" }}>
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
          onClick={() => {
            props.addFood(props.food.price, props.food.foodName);
          }}
        >
          +
        </Button>
        <Button
          onClick={() => {
            props.removeFood(props.food.foodName, props.food.price);
          }}
        >
          -
        </Button>
      </div>
    </div>
  </div>
);

var cart = {};

function Example() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal {setShow}
      </Button>

      <Modal size="lg" show={show} onHide={handleClose} className="modal">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary">Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default class FoodList extends Component {
  constructor(props) {
    super(props);

    this.addFood = this.addFood.bind(this);
    this.clearFood = this.clearFood.bind(this);
    this.removeFood = this.removeFood.bind(this);
    //this.createOrder = this.createOrder.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);

    this.state = {
      food: [],
      //plates: [],
      deliveryman: "ddss",
      total: 0,
      address: "",
      cart: [],
      phone: "",
      longitude: null,
      latitude: null
    };
  }

  //
  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    });
  }

  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    });
  }
  //
  addFood(price, plate) {
    this.setState(
      {
        total: this.state.total + price,
        //plates: this.state.plates.concat(plate),
        cart: this.state.cart.concat(plate)
      } //,
      //() => alert(this.state.cart)
    );
  }

  clearFood() {
    this.setState(
      {
        total: 0,
        cart: []
        //plates: []
      } //,
      //() => alert("Carrito borrado")
    );
  }

  removeFood(plate, price) {
    let index = this.state.cart.indexOf(plate);

    //alert(typeof this.state.cart + "spliced: " + arr);

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
      address: this.state.address,
      phone: this.state.phone
    };
    console.log("AAAAA");

    axios
      .post("https://rbergoglio-deliveryapp.herokuapp.com/order/add", order)
      .then(res => console.log(res.data))
      .then(response => {
        this.setState({
          cart: [],
          deliveryman: "aaa",
          total: 0,
          address: "",
          phone: ""
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

  position = async () => {
    await navigator.geolocation.getCurrentPosition(
      position =>
        this.setState(
          {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          },
          () => alert(position.coords.longitude)
        ),
      err => console.log(err)
    );
  };

  render() {
    return (
      <div>
        <Row style={{ margin: "0px" }}>
          <Col xs={12} sm={2} md={2} lg={1} />
          <Col xs={12} sm={8} md={8} lg={10}>
            <ListGroup>
              {this.foodList()}

              <ListGroup.Item>Carrito ${this.state.total}</ListGroup.Item>
              {this.cartList()}
              <ListGroup.Item>
                {" "}
                <Example></Example>
                <Button
                  onClick={() => {
                    this.clearFood();
                  }}
                >
                  Limpiar Carrito
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col xs={12} sm={12} md={6} lg={6}>
                    <LeafletMap />
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6}>
                    <Form>
                      <Form.Group as={Row} controlId="formHorizontalAddress">
                        <Form.Label column sm={12} md={12}>
                          Dirección
                        </Form.Label>
                        <Col sm={12} md={12}>
                          <Form.Control
                            type="text"
                            placeholder="Dirección"
                            value={this.state.address}
                            onChange={this.onChangeAddress}
                            required
                          />
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} controlId="formHorizontalPhone">
                        <Form.Label column sm={12} md={12}>
                          Telefono
                        </Form.Label>
                        <Col sm={12} md={12}>
                          <Form.Control
                            type="text"
                            placeholder="Telefono"
                            value={this.state.phone}
                            onChange={this.onChangePhone}
                            required
                          />
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row}>
                        <Col>
                          <Button
                            onClick={() => {
                              this.createOrder();
                            }}
                          >
                            Continuar ${this.state.total}
                          </Button>
                          <Button onClick={this.position}>aaa</Button>
                        </Col>
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={12} sm={2} md={2} lg={1} />
        </Row>
      </div>
    );
  }
}
