import React from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-flexbox-grid";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeMail = this.onChangeMail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      mail: "",
      phone: "",
      firstName: "",
      lastName: ""
    };
  }

  onChangeMail(e) {
    this.setState({
      mail: e.target.value
    });
  }
  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    });
  }
  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value
    });
  }
  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      mail: this.state.mail,
      phone: this.state.phone,
      firstName: this.state.firstName,
      lastName: this.state.lastName
    };
    console.log(user);

    axios
      // .post("http://localhost:5000/users/add", user)
      .post("https://rbergoglio-deliveryapp.herokuapp.com/users/add", user)

      .then(res => console.log(res.data));

    this.setState({
      mail: "",
      phone: "",
      firstName: "",
      lastName: ""
    });

    //window.location = "/";
  }

  /*
  https://mappinggis.com/2012/05/como-insertar-un-mapa-de-google-maps-en-tu-web/
  agregar: email, direccion
  */
  render() {
    return (
      <div>
        <Row style={{ margin: "0px" }}>
          <Col xs={12} sm={2} md={2} lg={1} />
          <Col xs={12} sm={8} md={8} lg={10}>
            <ListGroup>
              <ListGroup.Item>
                <Image
                  src="https://images.pexels.com/photos/2438323/pexels-photo-2438323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  fluid
                />
                <span style={{margin: "20px"}}>
                Envía tus datos a nuestra base de datos para recibir nuestras ofertas laborales y promociones.

                </span>
                <Form onSubmit={this.onSubmit}>
                  <Form.Group as={Row} controlId="formHorizontalUser">
                    <Form.Label column sm={12} md={12}>
                      <h3>Mail</h3>
                    </Form.Label>
                    <Col sm={12} md={12}>
                      <Form.Control
                        type="text"
                        placeholder="Mail"
                        value={this.state.mail}
                        onChange={this.onChangeMail}
                        required
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={12} md={12}>
                      <h3>Telefono</h3>
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

                  <Form.Group as={Row} controlId="formHorizontalFirstName">
                    <Form.Label column sm={12} md={12}>
                      <h3>Nombre</h3>
                    </Form.Label>
                    <Col sm={12} md={12}>
                      <Form.Control
                        type="text"
                        placeholder="Nombre"
                        value={this.state.firstName}
                        onChange={this.onChangeFirstName}
                        required
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalLastName">
                    <Form.Label column sm={12} md={12}>
                      <h3>Apellido</h3>
                    </Form.Label>
                    <Col sm={12} md={12}>
                      <Form.Control
                        type="text"
                        placeholder="Apellido"
                        value={this.state.lastName}
                        onChange={this.onChangeLastName}
                        required
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row}>
                    <Col>
                      <Button type="submit">Continuar</Button>
                      {/* esto me tira un warning */}
                    </Col>
                  </Form.Group>
                </Form>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={12} sm={2} md={2} lg={1} />
        </Row>
      </div>
    );
  }
}

export default Register;
