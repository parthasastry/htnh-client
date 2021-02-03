import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "500px",
  height: "500px",
};

export class TempleMap extends Component {
  render() {
    const lat = 42.7488;
    const lon = -71.522;
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: lat, lng: lon }}
      >
        <Marker position={{ lat: lat, lng: lon }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD2xZvCNlR6CwLaGyeebSBQqJkwY2Te0qg&callback=initMap",
})(TempleMap);
