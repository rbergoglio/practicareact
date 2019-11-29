import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Image from "react-bootstrap/Image";

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
                src="https://images.pexels.com/photos/2438323/pexels-photo-2438323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                fluid
                style={{
                  maxWidth: "800px"
                }}
              />
            </div>
          </Col>
          <Col xs={12} sm={3} md={2} lg={1} />
        </Row>
      </div>
    );
  }
}

export default About;
