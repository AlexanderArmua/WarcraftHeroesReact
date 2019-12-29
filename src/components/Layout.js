import React from "react";

import Navbar from "./Navbar";

function Layout(props) {
  const children = props.children;

  return (
    <React.Fragment>
      <Navbar faction="Alliance" />
      {children}
    </React.Fragment>
  );
}
export default Layout;
