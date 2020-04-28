import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Image from "react-bootstrap/Image";
import FoodPictures from "./FoodPictures";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

class About extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs={12} sm={3} md={2} lg={1} />
          <Col
            xs={12}
            sm={6}
            md={8}
            lg={10}
            style={{
              backgroundColor: "white"
            }}
          >
            <div>
            <Image
                  src="https://images.pexels.com/photos/580613/pexels-photo-580613.jpeg?cs=srgb&dl=adults-apron-business-counter-580613.jpg&fm=jpg"
                  fluid
                />
                <span style={{margin: "20px"}}>
                Resto24 se encuentra en Tacuari al 453 y ofrece delivery de comida las 24 horas del día. El restaurante inauguro su primera sucursal el 2 de septiembre del 2019 y planeamos abrir mas sucursales próximamente por todo Capital Federal. Nuestros productos se destacan por su precio bajo y su buen sabor. 

                </span>
             
                <div style={{ margin: "20px" }}>
              <h2>Nuestros platos destacados</h2>
            </div>

            <FoodPictures />
            <Card
              style={{
                width: "18rem",
                margin: "20px",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
      
              <ListGroup variant="flush">
                <ListGroup.Item variant="dark">Horarios</ListGroup.Item>
                <ListGroup.Item>Lunes a jueves de 18:00 a 1:00</ListGroup.Item>
                <ListGroup.Item>
                  Viernes a domingos de 18:00 a 3:00
                </ListGroup.Item>
              </ListGroup>
            </Card>
            </div>
          </Col>
          <Col xs={12} sm={3} md={2} lg={1} />
        </Row>
      </div>
    );
  }
}

export default About;
