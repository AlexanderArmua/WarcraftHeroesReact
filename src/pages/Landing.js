import React from "react";

import AllianceHorde from "../images/AllianceHorde.png";

import "./styles/Landing.css";
import { Link } from "react-router-dom";

class Landing extends React.Component {
  render() {
    return (
      <div className="Lading__Container container-fluid">
        <div className="row h-100">
          <div className="col-6 my-auto Lading__Text">
            <h2>
              For the <b>Alliance</b> / <b>Horde</b>
            </h2>
            <br />
            <h3>PRINT YOUR BADGES</h3>
            <br />
            <p>The easiest way to manage your heroes</p>
            <br />
            <Link to="/badges" className="btn btn-info">
              Start now
            </Link>
          </div>
          <div className="col-6 my-auto">
            <img
              className="Lading__Img"
              src={AllianceHorde}
              alt="Alliance Horde Logo"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
