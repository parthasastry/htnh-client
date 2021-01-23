import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <div className="row">
            <div className="col s12 m10 offset-m1 center">
              <h4 className="white-text">
                Welcome To Hindu Temple of New Hamshire
              </h4>
              <h6 className="white-text">
                It is the vision of the Hindu Temple of New Hampshire to offer
                services and opportunities to satisfy the religious, spiritual
                and cultural needs of the Hindu Community in the New England
                Area. ​
              </h6>
              <h6 className="white-text">
                Our mission is to build and maintain a permanent Hindu Temple in
                New Hampshire. The temple will have Hindu deities and will be
                built as per Aagama Shastras.
              </h6>
              <br />
              <Link
                to="/contact"
                className="waves-effect waves-light btn-large btn-round"
              >
                To learn more...
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
