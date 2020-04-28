import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import Register from "./components/Register";
import Menu from "./components/Menu";
import About from "./components/About";
import Sent from "./components/Sent";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="blank-space-top"></div>
      <Route path="/" exact component={WelcomePage} />
      <Route path="/Registrarse" component={Register} />
      <Route path="/Menu" component={Menu} />
      <Route path="/Nosotros" component={About} />
      <Route path="/Sent" component={Sent} />
    </Router>
  );
}

export default App;
