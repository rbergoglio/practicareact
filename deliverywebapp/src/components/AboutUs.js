import React, { createRef, Component } from "react";
import {
  Map,
  Marker,
  Popup,
  TileLayer,
  Polyline,
  Polygon
} from "react-leaflet";

//todo: buscar geocoding gratis o usar google maps y listo

export class AboutUs extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: -34.613,
      lng: -58.379,
      zoom: 16,
      lat2: -34.613,
      lng2: -58.379,
      dist: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  /*   getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
    var dLon = this.deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) *
        Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }

  deg2rad(deg) {
    return deg * (Math.PI / 180);
  } */

  /* */

  distance(lat1, lon1, lat2, lon2, unit) {
    var radlat1 = (Math.PI * lat1) / 180;
    var radlat2 = (Math.PI * lat2) / 180;
    var theta = lon1 - lon2;
    var radtheta = (Math.PI * theta) / 180;
    var dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == "K") {
      dist = dist * 1.609344;
    }
    if (unit == "M") {
      dist = dist * 0.8684;
    }
    return dist * 1000;
  }
  handleClick = e => {
    const { lat, lng } = e.latlng;
    this.setState({ lat2: lat, lng2: lng });
    alert(this.state.lat2);
    alert(this.state.lng2);
    {
      /*
    alert(
      this.distance(
        this.state.lat,
        this.state.lng,
        this.state.lat2,
        this.state.lng2,
        "K"
      )
    );
    */
    }
  };

  render() {
    const position = [this.state.lat, this.state.lng];
    const position2 = [this.state.lat2, this.state.lng2];
    return (
      <Map
        center={position}
        zoom={this.state.zoom}
        scrollWheelZoom={true}
        style={{ height: "500px", width: "500px" }}
        onclick={this.handleClick}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />

        <Polygon
          positions={[
            [-34.53491442663913, -58.464345932006836],
            [-34.54954921593403, -58.49807739257813],
            [-34.61710450965531, -58.53137969970704],
            [-34.65185005068872, -58.528976440429695],
            [-34.68912175379693, -58.48365783691407],
            [-34.64026982086422, -58.45893859863281],
            [-34.625862887711804, -58.36555480957032],
            [-34.58884537801345, -58.371391296386726]
          ]}
          opacity="0.8"
          fillOpacity="0.1"
        ></Polygon>

        <Marker position={position}>
          <Popup>
            <span>
              A pretty CSS3 popup. <br /> Easily customizable.
            </span>
          </Popup>
        </Marker>
        <Marker position={position2} color="red"></Marker>

        <Polyline positions={[position, position2]} />
      </Map>
    );
  }
}

export default AboutUs;
