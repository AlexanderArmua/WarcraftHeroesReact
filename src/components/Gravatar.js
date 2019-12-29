import React from "react";
import md5 from "md5";

function Url(firstName, lastName) {
  return `https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${firstName}+${lastName}`;
}

function Gravatar(props) {
  const firstName = props.firstName;
  const lastName = props.lastName;
  //const hash = md5(nombre);

  return (
    <img
      className={props.className}
      src={Url(firstName, lastName)}
      alt={props.alt}
    />
  );
}

export { Gravatar, Url };
