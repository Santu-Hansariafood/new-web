import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ to, children, isActive }) => (
  <Link to={to} className={`px-3 py-2 block ${isActive ? "underline" : ""}`}>
    {children}
  </Link>
);

export default NavItem;
