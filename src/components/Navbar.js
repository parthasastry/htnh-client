import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper brown darken-4">
          <a href="#" className="left brand-logo">
            HTNH
          </a>
          <ul className="right">
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
    );
  }
}

export default Navbar;
