import Carousel from "react-bootstrap/Carousel";
import React from "react";
import "./Carousel2.css";

class Carousel2 extends React.Component {
  render() {
    return (
      <Carousel className="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100 picture"
            src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Hace tu pedido</h3>
            <p>Pedi YA las 24hs</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 picture"
            src="https://images.pexels.com/photos/580613/pexels-photo-580613.jpeg?cs=srgb&dl=adults-apron-business-counter-580613.jpg&fm=jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Trabaja con nosotros</h3>
            <p>Envianos tu información de contacto</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 picture"
            src="https://images.pexels.com/photos/2438323/pexels-photo-2438323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Sobre nosotros</h3>
            <p>Averigua mas sobre nuestro restaurante.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Carousel2;
