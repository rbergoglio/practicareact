import React from "react";
import { Row, Col } from "react-flexbox-grid";

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
            style={{ backgroundColor: "white" }}
          >
            aaa
          </Col>
          <Col xs={12} sm={3} md={2} lg={1} />
        </Row>
      </div>
    );
  }
}

export default About;
