import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import Register from "./components/Register";
import Menu from "./components/Menu";
import About from "./components/About";

//https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/

function App() {
  return (
    <Router>
      <NavBar />
      <div className="blank-space-top"></div>
      <Route path="/" exact component={WelcomePage} />
      <Route path="/Registrarse" component={Register} />
      <Route path="/Menu" component={Menu} />
      <Route path="/Nosotros" component={About} />
    </Router>
  );
}

/*
 Warning: Can't perform a React state update on an unmounted component. 
 This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.
    in FoodList (at Menu.js:12)
    in div (at Menu.js:11)
    in Menu (created by Context.Consumer)
*/
export default App;
