import React from "react";
import "./bottomNavBar.css";
import { Link } from "react-router-dom";

class BottomNavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-bottom bg-dark">
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/Nosotros" className="nav-link">
                Sobre nosotros
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default BottomNavBar;
