import React from "react";
import "./bottomNavBar.css";

class BottomNavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-bottom bg-dark">
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="nosotros">
                Sobre nosotros
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default BottomNavBar;
