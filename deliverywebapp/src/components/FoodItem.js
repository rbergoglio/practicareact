import React from "react";
import { Button } from "react-bootstrap";

/*
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
           
              </div>
              </div>
            </div>
          </div>
*/
class FoodItem extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.imgUrl} className="img" />
        <p style={{ paddingTop: "40px" }}>
          {this.props.foodName} ${this.props.price}
        </p>
      </div>
    );
  }
}

export default FoodItem;
