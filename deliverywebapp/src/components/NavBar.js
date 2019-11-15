import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
          <a className="navbar-brand" href="">
            <img
              src="https://www.pinclipart.com/picdir/big/113-1137880_hamburger-drawing-at-getdrawings-com-free-for-drawing.png"
              width={30}
              height={30}
              className="d-inline-block align-top brand"
              alt=""
            />
            Pedidos
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Inicio <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/menu" className="nav-link">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="nosotros">
                  Pedidos online
                </a>
              </li>
              <li className="nav-item">
                <Link to="/Registrarse" className="nav-link">
                  Registrarse
                </Link>
              </li>
            </ul>
            {/*
            <form className="form-inline mt-2 mt-md-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Buscar"
                aria-label="Buscar"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0 button"
                type="submit"
              >
                Buscar
              </button>
            </form>
            */}
          </div>
        </nav>
      </header>
    );
  }
}

export default NavBar;
