import React from "react";
import "./LocationInput.css";

class LocationInput extends React.Component {
  render() {
    return (
      //col-sm-12 col-md-4
      <div>
        <div className="row content-search">
          <select className="form-control col-sm-12 col-md-4">
            <option>Localidad</option>
            <option>CABA</option>
            <option>Lanus</option>
            <option>Moron</option>
          </select>
          <input
            type="text"
            className="form-control col-sm-12 col-md-4"
            placeholder="Direccion"
          />
          <button
            className="btn btn-outline-success button col-sm-12 col-md-4"
            type="submit"
          >
            Buscar
          </button>
        </div>
      </div>
    );
  }
}

export default LocationInput;
