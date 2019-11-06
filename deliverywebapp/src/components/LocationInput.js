import React from "react";
import "./LocationInput.css";

class LocationInput extends React.Component {
  render() {
    return (
      <div className="content-search">
        <select className="form-control">
          <option>Localidad</option>
          <option>CABA</option>
          <option>Lanus</option>
          <option>Moron</option>
        </select>
        <input type="text" className="form-control" placeholder="Direccion" />
        <button
          className="btn btn-outline-success my-2 my-sm-0 button"
          type="submit"
        >
          Buscar
        </button>
      </div>
    );
  }
}

export default LocationInput;
