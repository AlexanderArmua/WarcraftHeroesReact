import React from "react";

import { Url } from "./Gravatar";

function ListImageHero(props) {
  return (
    <div
      className={props.className}
      style={{
        backgroundImage: `url(${
          !!props.hero.avatar
            ? props.hero.avatar
            : Url(props.hero.firstName, props.hero.lastName)
        })`
      }}
    ></div>
  );
}

export default ListImageHero;
