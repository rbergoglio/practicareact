import React from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-flexbox-grid";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      password: "",
      firstName: "",
      lastName: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
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
      username: this.state.username,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName
    };
    console.log(user);

    axios
      // .post("http://localhost:5000/users/add", user)
      .post("https://rbergoglio-deliveryapp.herokuapp.com/users/add", user)

      .then(res => console.log(res.data));

    this.setState({
      username: "",
      password: "",
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
                <img
                  className="d-block w-100"
                  src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  style={{
                    maxWidth: "1000px",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                />
                <Form onSubmit={this.onSubmit}>
                  <Form.Group as={Row} controlId="formHorizontalUser">
                    <Form.Label column sm={12} md={12}>
                      <h3>Usuario</h3>
                    </Form.Label>
                    <Col sm={12} md={12}>
                      <Form.Control
                        type="text"
                        placeholder="Usuario"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        required
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={12} md={12}>
                      <h3>Contraseña</h3>
                    </Form.Label>
                    <Col sm={12} md={12}>
                      <Form.Control
                        type="text"
                        placeholder="Contraseña"
                        value={this.state.password}
                        onChange={this.onChangePassword}
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
        {/*
        <h3>Registrarse</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <label>Contraseña: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>

          <div className="form-group">
            <label>Nombre: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.firstName}
              onChange={this.onChangeFirstName}
            />
          </div>

          <div className="form-group">
            <label>Apellido: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.lastName}
              onChange={this.onChangeLastName}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Crear usuario"
              className="btn btn-primary"
            />
          </div>
        </form>
        */}
      </div>
    );
  }
}

export default Register;
