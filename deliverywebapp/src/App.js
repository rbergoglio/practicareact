import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="blank-space-top"></div>
      <div>
        <img src={"https://picsum.photos/200"} alt="" />

        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    </div>
  );
}

export default App;
