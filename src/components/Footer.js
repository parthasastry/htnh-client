import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <footer className="page-footer brown darken-4">
        <div className="row">
            <div className="col">
                <h6>Temple Address</h6>
            525 Broad St, Nashua, NH 03063, Phone: 1-603-598-4864
            </div>
            <div className="col right">
                <div>© Copyright Partha Sastry</div>
            </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
