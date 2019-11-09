import React from "react";

class FoodPicture extends React.Component {
  render() {
    return (
      <div className="col-12 col-sm-12 col-md-6 col-lg-3">
        <img src={this.props.src} width="200" height="128" />
        <p>{this.props.foodName}</p>
      </div>
    );
  }
}

export default FoodPicture;
