import React from "react";
import { Button } from "react-bootstrap";

/*
  <div class="test">
                <img
                  src="https://sifu.unileversolutions.com/image/es-MX/recipe-topvisual/2/1260-709/hamburguesa-clasica-50425188.jpg"
                  class="img"
                />
              </div>
*/
class FoodItem extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2 d-none d-sm-block">
            <div className="test">
              <img src={this.props.imgUrl} className="img" />
            </div>
          </div>
          <div className="col-md-10">
            <div className="row">
              <div className="col-6 col-sm-6 col-md-8">
                <p>
                  {this.props.foodName} ${this.props.price}
                </p>
              </div>
              {/*<div className="col-6 col-sm-6 col-md-4">
                1<Button>+</Button>
                <Button>-</Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FoodItem;
