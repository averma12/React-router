import React from "react";
import { NavLink } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <NavLink className="item" to="/">
        Main page
      </NavLink>
      <div className="right menu">
        <NavLink className="item" to="/">
          All Streams
        </NavLink>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
