import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import sanityClient from "../sanityClient";

const mapStyles = {
  width: "500px",
  height: "500px",
};

const apiKEY = "";

export class TempleMap extends Component {
  componentDidMount() {
    sanityClient
      .fetch(
        `*[_type == 'mapapi']{
                  mapAPI,
              }`
      )
      .then((data) => {
        apiKEY = data[0].mapAPI;
      })
      .catch((err) => console.log(err));
  }

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
  apiKey: apiKEY,
})(TempleMap);
