import React from "react";

import ImagenFaccion from "./ImagenFaccion";
import { Gravatar } from "./Gravatar";

import "./styles/Badge.css";

// Componente en React
class Badge extends React.Component {
  // OBLIGATORIO
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <ImagenFaccion faction={this.props.faction} />
        </div>

        <div className="Badge__section-name">
          {!!this.props.avatar ? (
            <img
              className="Badge__avatar"
              src={this.props.avatar}
              alt="Mi carita va aca"
            />
          ) : (
            <Gravatar
              firstName={this.props.firstName}
              lastName={this.props.lastName}
              className="Badge__avatar"
              alt="Mi carita va aca"
            />
          )}

          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.heroClass}</h3>
          <div>
            <b>{this.props.faction}</b>
          </div>
        </div>

        <div className="Badge__footer">{this.props.whyIsHere}</div>
      </div>
    );
  }
}

export default Badge;
