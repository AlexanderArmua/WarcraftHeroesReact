import React from "react";

import ImagenFaccion from "../components/ImagenFaccion";

import { Link } from "react-router-dom";

import "./styles/Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <div className="Navbar__brand-logo">
              <ImagenFaccion faction={this.props.faction} alt="Logo" />
            </div>
            <span className="font-weight-light">For the&nbsp;</span>
            <span className="font-weight-bold">{this.props.faction}</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
