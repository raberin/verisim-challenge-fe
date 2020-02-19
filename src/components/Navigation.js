import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.css";

const Navigation = props => {
  return (
    <nav className="navigation">
      <NavLink className="navLinks" to="/">
        Home
      </NavLink>
      <NavLink className="navLinks" to="/drugs-form">
        Add Drug
      </NavLink>
    </nav>
  );
};

export default Navigation;
