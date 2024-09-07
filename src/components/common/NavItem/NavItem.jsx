import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ to, children, isActive, onClick }) => (
  <Link
    to={to}
    className={`px-3 py-2 block text-lg ${
      isActive ? "underline text-yellow-400" : "hover:text-yellow-400"
    }`}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default NavItem;
