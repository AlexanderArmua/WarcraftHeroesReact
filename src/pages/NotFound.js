import React from "react";
import { Link } from "react-router-dom";
import "./styles/NotFound.css";

function NotFound() {
  return (
    <div className="container-fluid NotFound__Container">
      <div className="row-fluid">
        <div className="col text-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHtjhV_G9q9M270ZkrwPMaNi-DW8O63ejkOVTJ36CD1MJ_HPrx&s"
            alt=""
          />
          <div className="NotFound__Text">
            <h1>Oops!</h1>
            <br />
            <h2>404 Not Found</h2>
            <br />
            <Link to="/" className="btn btn-link">
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
