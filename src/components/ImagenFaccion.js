import React from "react";

import allianceLogo from "../images/AllianceLogo.png";
import hordeLogo from "../images/HordeLogo.png";

class ImagenFaccion extends React.Component {
  imageFaction = faction => {
    if (faction === "Alliance") {
      return allianceLogo;
    } else if (faction === "Horde") {
      return hordeLogo;
    } else {
      return "";
    }
  };

  render() {
    if (this.imageFaction(this.props.faction)) {
      return (
        <img
          src={this.imageFaction(this.props.faction)}
          alt={this.props.alt ? this.props.alt : "Logo de Facción"}
          title={this.props.title ? this.props.title : "Logo de Facción"}
        />
      );
    }
    return "";
  }
}

export default ImagenFaccion;
