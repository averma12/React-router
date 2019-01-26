import React from "react";
import { NavLink } from "react-router-dom";

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
      </div>
    </div>
  );
};

export default Header;
