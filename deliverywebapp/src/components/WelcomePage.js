import React from "react";

import Carousel2 from "./Carousel2";
import FoodPictures from "./FoodPictures";
import { Grid, Row, Col } from "react-flexbox-grid";

class WelcomePage extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="blank-space-top"></div>
        <Row>
          <Col xs={12} sm={3} md={2} lg={1} />
          <Col
            xs={6}
            sm={6}
            md={8}
            lg={10}
            style={{ backgroundColor: "green" }}
          >
            <FoodPictures />
            <Carousel2 />
          </Col>
          <Col xs={6} sm={3} md={2} lg={1} />
        </Row>
      </div>
    );
  }
}

export default WelcomePage;
