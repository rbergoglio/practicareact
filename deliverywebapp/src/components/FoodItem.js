import React from "react";
import { Button } from "react-bootstrap";

class Welcome extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-2 "></div>
          <div class="col-md-10">
            <div class="row">
              <div class="col-6 col-sm-6 col-md-8">
                <p>
                  {this.props.foodName} ${this.props.price}
                </p>
              </div>
              <div class="col-6 col-sm-6 col-md-4">
                1<Button>+</Button>
                <Button>-</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
