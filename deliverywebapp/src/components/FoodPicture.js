import React from "react";

class FoodPicture extends React.Component {
  render() {
    return (
      <div
        className="col-12 col-sm-12 col-md-6 col-lg-3"
        style={{ "margin-top": "10px" }}
      >
        <img
          src={this.props.src}
          width="200"
          height="128"
          style={{ borderRadius: "10px" }}
        />
        <p>{this.props.foodName}</p>
      </div>
    );
  }
}

export default FoodPicture;
