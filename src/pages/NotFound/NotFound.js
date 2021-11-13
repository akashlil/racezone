import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="row">
      <div className="position-relative m-0 p-0">
        <div>
          <img
            src="https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400006/100130939-error-404-page-not-found-error-with-glitch-effect-on-screen-vector-illustration-for-your-design-.jpg"
            alt=""
            style={{ height: "100vh", width: "100%" }}
            className="position-absolute"
          />
          <NavLink to="/">
            <button
              className="position-absolute  start-50  btn btn-info"
              style={{ margin: "42px 0px 60px", padding: "10px 20px" }}
            >
              GO BACK HOME
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
