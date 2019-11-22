import React from "react";

import Carousel2 from "./Carousel2";
import FoodPictures from "./FoodPictures";
import { Grid, Row, Col } from "react-flexbox-grid";
import GetTest from "./GetTest";
import "./CartTest.css";

class CartTest extends React.Component {
  render() {
    return (
      <div >
     <div className="shopping-cart">
  {/* Title */}
  <div className="title">
    Carrito
  </div>
  {/* Product #1 */}
  <div className="item">
    <div className="buttons">
      <span className="delete-btn" />
      <span className="like-btn" />
    </div>
    <div className="image">
      <img alt="" src="item-1.png" />
    </div>
    <div className="description">
      <span>Common Projects</span>
      <span>Bball High</span>
      <span>White</span>
    </div>
    <div className="quantity">
      <button name="button" className="plus-btn" type="button">
        <img alt="" src="plus.svg" />
      </button>
      <input name="name" type="text" defaultValue={1} />
      <button name="button" className="minus-btn" type="button">
        <img alt="" src="minus.svg" />
      </button>
    </div>
    <div className="total-price">$549</div>
  </div>
  {/* Product #2 */}
  <div className="item">
    <div className="buttons">
      <span className="delete-btn" />
      <span className="like-btn" />
    </div>
    <div className="image">
      <img alt="" src="item-2.png" />
    </div>
    <div className="description">
      <span>Maison Margiela</span>
      <span>Future Sneakers</span>
      <span>White</span>
    </div>
    <div className="quantity">
      <button name="button" className="plus-btn" type="button">
        <img alt="" src="plus.svg" />
      </button>
      <input name="name" type="text" defaultValue={1} />
      <button name="button" className="minus-btn" type="button">
        <img alt="" src="minus.svg" />
      </button>
    </div>
    <div className="total-price">$870</div>
  </div>
  {/* Product #3 */}
  <div className="item">
    <div className="buttons">
      <span className="delete-btn" />
      <span className="like-btn" />
    </div>
    <div className="image">
      <img alt="" src="item-3.png" />
    </div>
    <div className="description">
      <span>Our Legacy</span>
      <span>Brushed Scarf</span>
      <span>Brown</span>
    </div>
    <div className="quantity">
      <button name="button" className="plus-btn" type="button">
        <img alt="" src="plus.svg" />
      </button>
      <input name="name" type="text" defaultValue={1} />
      <button name="button" className="minus-btn" type="button">
        <img alt="" src="minus.svg" />
      </button>
    </div>
    <div className="total-price">$349</div>
  </div>
  
</div>

      </div>
    );
  }
}

export default CartTest;
