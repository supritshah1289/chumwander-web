import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => (
  <nav>
    <NavLink path="/">Home</NavLink>
    {" | "}
    <NavLink to="/about">About</NavLink>
  </nav>
);

export default Footer;
