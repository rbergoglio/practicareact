import React from "react";

import Carousel2 from "./Carousel2";
import FoodPictures from "./FoodPictures";
import { Row, Col } from "react-flexbox-grid";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

class WelcomePage extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="blank-space-top"></div>

        <Row>
          <Col xs={12} sm={3} md={2} lg={1} />
          <Col
            xs={12}
            sm={6}
            md={8}
            lg={10}
            style={{ backgroundColor: "white" }}
          >
            <FoodPictures />
            <Carousel2></Carousel2>
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
          </Col>
          <Col xs={6} sm={3} md={2} lg={1} />
        </Row>
      </div>
    );
  }
}

export default WelcomePage;
