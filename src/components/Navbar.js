import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

export class Navbar extends Component {
  componentDidMount() {
    let sidenav = document.querySelector("#mobile-demo");
    M.Sidenav.init(sidenav, {});
  }

  render() {
    return (
      <div>
        <nav className="nav-wrapper brown darken-4">
          <a href="#" className="left brand-logo">
            HTNH
          </a>
          <div>
            <a
              href="#"
              data-target="mobile-demo"
              className="right sidenav-trigger"
            >
              <i className="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/deities">Deities</Link>
              </li>
              <li>
                <Link to="/priests">Priests</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/donate">Donate</Link>
              </li>
              <li>
                <Link to="/culturalarm">Cultural Arm</Link>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/hindutempleofnewhampshire/"
                  target="_blank"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <ul className="sidenav sidenav-close" id="mobile-demo">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/deities">Deities</Link>
          </li>
          <li>
            <Link to="/priests">Priests</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/donate">Donate</Link>
          </li>
          <li>
            <Link to="/culturalarm">Cultural Arm</Link>
          </li>
          <li>
            <a
              href="https://www.facebook.com/hindutempleofnewhampshire/"
              target="_blank"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
